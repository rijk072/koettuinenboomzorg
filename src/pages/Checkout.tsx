import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, MapPin, Truck, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import AnimationObserver from '../components/AnimationObserver';
import { db } from '../lib/supabase';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  volume?: string;
  weight?: string;
}

interface CheckoutProps {
  cartItems: CartItem[];
}

const Checkout: React.FC<CheckoutProps> = ({ cartItems }) => {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    telefoon: '',
    adres: '',
    postcode: '',
    plaats: '',
    verzendoptie: 'afhalen'
  });

  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = formData.verzendoptie === 'bezorgen' ? 4.95 : 0;
  const total = subtotal + shippingCost;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('=== ORDER SUBMIT STARTED ===');
    setIsSubmitting(true);
    setError(null);

    try {
      // Generate unique order number
      const generatedOrderNumber = db.generateOrderNumber();
      console.log('Generated order number:', generatedOrderNumber);

      // Create order data
      const orderData = {
        order_number: generatedOrderNumber,
        customer_email: formData.email,
        customer_name: formData.naam,
        customer_phone: formData.telefoon,
        delivery_method: formData.verzendoptie as 'afhalen' | 'bezorgen',
        delivery_address: formData.verzendoptie === 'bezorgen' ? formData.adres : null,
        delivery_postal_code: formData.verzendoptie === 'bezorgen' ? formData.postcode : null,
        delivery_city: formData.verzendoptie === 'bezorgen' ? formData.plaats : null,
        subtotal: subtotal,
        shipping_cost: shippingCost,
        total_amount: total,
        status: 'pending' as const,
        payment_status: 'pending' as const,
        notes: null
      };

      console.log('Creating order:', orderData);

      // Create order
      const order = await db.createOrder(orderData);
      console.log('Order created:', order);

      // Create order items
      const orderItems = cartItems.map(item => ({
        order_id: order.id,
        product_id: null, // We don't have product IDs from cart
        product_name: item.name,
        product_price: item.price,
        quantity: item.quantity,
        subtotal: item.price * item.quantity
      }));

      console.log('Creating order items:', orderItems);
      await db.createOrderItems(orderItems);
      console.log('Order items created successfully');

      // Success!
      setOrderNumber(generatedOrderNumber);
      setOrderComplete(true);
      console.log('=== ORDER SUBMIT SUCCESS ===');

    } catch (err: any) {
      console.error('=== ORDER SUBMIT ERROR ===');
      console.error('Error details:', err);
      setError(err.message || 'Er is een fout opgetreden bij het plaatsen van uw bestelling.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orderComplete) {
    return (
      <section className="py-24 lg:py-32 bg-gradient-to-b from-neutral-50 to-white min-h-screen flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
          <AnimationObserver>
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-900 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-semibold text-stone-900 mb-6">
                Bestelling Ontvangen!
              </h1>
              <div className="bg-primary-50 border-2 border-primary-200 rounded-xl p-6 mb-6">
                <p className="text-sm text-primary-800 font-medium mb-1">Uw bestelnummer:</p>
                <p className="text-2xl font-bold text-primary-900">{orderNumber}</p>
              </div>
              <p className="text-lg text-stone-700 mb-8 leading-relaxed">
                Bedankt voor uw bestelling. Wij nemen binnen 24 uur contact met u op
                om de levering af te stemmen.
              </p>
              <Link 
                to="/shop"
                className="bg-gradient-to-r from-primary-900 to-primary-800 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-800 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Terug naar shop
              </Link>
            </div>
          </AnimationObserver>
        </div>
      </section>
    );
  }

  if (cartItems.length === 0) {
    return (
      <section className="py-24 lg:py-32 bg-gradient-to-b from-neutral-50 to-white min-h-screen flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
          <AnimationObserver>
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl lg:text-4xl font-semibold text-stone-900 mb-6">
                Winkelwagen is leeg
              </h1>
              <p className="text-lg text-stone-700 mb-8 leading-relaxed">
                Voeg eerst producten toe aan uw winkelwagen voordat u kunt afrekenen.
              </p>
              <Link 
                to="/shop"
                className="bg-gradient-to-r from-primary-900 to-primary-800 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-800 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Naar shop
              </Link>
            </div>
          </AnimationObserver>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop" 
            alt="Afrekenen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>
        </div>

        <div className="relative z-10 container-wide text-left text-white">
          <AnimationObserver>
            <h1 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-white">
              Afrekenen
            </h1>
          </AnimationObserver>
        </div>
      </section>

      {/* Checkout Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-20">
            {/* Order Summary */}
            <AnimationObserver animationType="slide-right">
              <div className="bg-white rounded-2xl p-8 shadow-soft">
                <h2 className="text-2xl font-semibold text-stone-900 mb-6">Uw bestelling</h2>
                
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center bg-stone-50 rounded-xl p-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg mr-4"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-stone-900">{item.name}</h4>
                        {(item.volume || item.weight) && (
                          <p className="text-xs text-stone-500">{item.volume || item.weight}</p>
                        )}
                        <p className="text-stone-600 text-sm">Aantal: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-primary-900">€{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Totals */}
                <div className="border-t border-stone-200 pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-stone-700">Subtotaal:</span>
                    <span className="font-semibold">€{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-700">Verzendkosten:</span>
                    <span className="font-semibold">
                      {shippingCost === 0 ? 'Gratis' : `€${shippingCost.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-primary-900 pt-2 border-t border-stone-200">
                    <span>Totaal:</span>
                    <span>€{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </AnimationObserver>

            {/* Checkout Form */}
            <AnimationObserver animationType="slide-left">
              <div className="bg-white rounded-2xl p-8 shadow-soft">
                <h2 className="text-2xl font-semibold text-stone-900 mb-6">Bezorggegevens</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Persoonlijke gegevens */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-stone-900">Persoonlijke gegevens</h3>
                    
                    <div>
                      <label htmlFor="naam" className="block text-sm font-medium text-stone-700 mb-2">
                        Volledige naam *
                      </label>
                      <input
                        type="text"
                        id="naam"
                        name="naam"
                        value={formData.naam}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 outline-none bg-white"
                        placeholder="Uw volledige naam"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                          E-mailadres *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 outline-none bg-white"
                          placeholder="uw.email@voorbeeld.nl"
                        />
                      </div>

                      <div>
                        <label htmlFor="telefoon" className="block text-sm font-medium text-stone-700 mb-2">
                          Telefoon *
                        </label>
                        <input
                          type="tel"
                          id="telefoon"
                          name="telefoon"
                          value={formData.telefoon}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 outline-none bg-white"
                          placeholder="06 12 34 56 78"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Verzendoptie */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-stone-900">Verzendoptie</h3>
                    
                    <div className="space-y-3">
                      <label className="flex items-center p-4 border border-stone-200 rounded-xl cursor-pointer hover:bg-stone-50 transition-colors">
                        <input
                          type="radio"
                          name="verzendoptie"
                          value="afhalen"
                          checked={formData.verzendoptie === 'afhalen'}
                          onChange={handleInputChange}
                          className="mr-3"
                        />
                        <div className="flex items-center flex-1">
                          <MapPin className="w-5 h-5 text-primary-900 mr-3" />
                          <div>
                            <div className="font-medium text-stone-900">Afhalen in Bakkum</div>
                            <div className="text-sm text-stone-600">Heereweg 38 E, 1901 ME Bakkum - Gratis</div>
                          </div>
                        </div>
                      </label>

                      <label className="flex items-center p-4 border border-stone-200 rounded-xl cursor-pointer hover:bg-stone-50 transition-colors">
                        <input
                          type="radio"
                          name="verzendoptie"
                          value="bezorgen"
                          checked={formData.verzendoptie === 'bezorgen'}
                          onChange={handleInputChange}
                          className="mr-3"
                        />
                        <div className="flex items-center flex-1">
                          <Truck className="w-5 h-5 text-primary-900 mr-3" />
                          <div>
                            <div className="font-medium text-stone-900">Thuisbezorgd</div>
                            <div className="text-sm text-stone-600">Bakkum, Noord-Holland - €4,95 extra</div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Adresgegevens (alleen bij bezorgen) */}
                  {formData.verzendoptie === 'bezorgen' && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-stone-900">Bezorgadres</h3>
                      
                      <div>
                        <label htmlFor="adres" className="block text-sm font-medium text-stone-700 mb-2">
                          Straat + huisnummer *
                        </label>
                        <input
                          type="text"
                          id="adres"
                          name="adres"
                          value={formData.adres}
                          onChange={handleInputChange}
                          required={formData.verzendoptie === 'bezorgen'}
                          className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 outline-none bg-white"
                          placeholder="Voorbeeldstraat 123"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="postcode" className="block text-sm font-medium text-stone-700 mb-2">
                            Postcode *
                          </label>
                          <input
                            type="text"
                            id="postcode"
                            name="postcode"
                            value={formData.postcode}
                            onChange={handleInputChange}
                            required={formData.verzendoptie === 'bezorgen'}
                            className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 outline-none bg-white"
                            placeholder="1234 AB"
                          />
                        </div>

                        <div>
                          <label htmlFor="plaats" className="block text-sm font-medium text-stone-700 mb-2">
                            Plaats *
                          </label>
                          <input
                            type="text"
                            id="plaats"
                            name="plaats"
                            value={formData.plaats}
                            onChange={handleInputChange}
                            required={formData.verzendoptie === 'bezorgen'}
                            className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 outline-none bg-white"
                            placeholder="Uw woonplaats"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {error && (
                    <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                      <div className="flex items-start space-x-4">
                        <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-red-900 font-semibold mb-1">Er is een fout opgetreden</h4>
                          <p className="text-red-700 text-sm">{error}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Payment Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-700 shadow-premium-lg hover:shadow-premium-xl transform inline-flex items-center justify-center ${
                      isSubmitting
                        ? 'bg-stone-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-primary-900 to-primary-800 text-white hover:from-primary-800 hover:to-primary-700 hover:scale-[1.02] hover:-translate-y-1'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                        Bestelling plaatsen...
                      </>
                    ) : (
                      <>
                        <CreditCard className="w-6 h-6 mr-3" />
                        Bestelling plaatsen - €{total.toFixed(2)}
                      </>
                    )}
                  </button>
                  
                  <div className="text-center text-sm text-stone-600">
                    <p>Veilig betalen via Stripe. Uw gegevens zijn beschermd.</p>
                  </div>
                </form>

                <div className="mt-6 pt-6 border-t border-stone-200">
                  <Link 
                    to="/shop"
                    className="text-primary-900 hover:text-primary-800 transition-colors inline-flex items-center text-sm font-medium"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Terug naar shop
                  </Link>
                </div>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;