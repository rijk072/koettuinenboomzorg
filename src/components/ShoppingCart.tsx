import React from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { particulierProducts } from '../data/products';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  volume?: string;
  weight?: string;
}

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  onAddBestSeller?: (product: any) => void;
}

// Best Sellers data - From actual products
const bestSellers = particulierProducts.filter(p => p.popular).slice(0, 3).map(product => ({
  id: parseInt(product.id),
  name: product.name,
  price: product.price,
  image: product.image_url,
  popular: product.popular,
  volume: product.volume,
  weight: product.weight
}));

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onAddBestSeller
}) => {
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddBestSeller = (product: any) => {
    if (onAddBestSeller) {
      const fullProduct = particulierProducts.find(p => parseInt(p.id) === product.id);
      if (fullProduct) {
        onAddBestSeller({
          id: fullProduct.id,
          name: fullProduct.name,
          description: fullProduct.description,
          price: fullProduct.price,
          image_url: fullProduct.image_url,
          category: fullProduct.category,
          in_stock: fullProduct.in_stock,
          popular: fullProduct.popular,
          volume: fullProduct.volume,
          weight: fullProduct.weight,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        });
      }
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Cart Panel */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-premium-xl z-50 transform transition-transform duration-300 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-200 flex-shrink-0">
          <div className="flex items-center">
            <ShoppingBag className="w-6 h-6 text-primary-900 mr-3" />
            <h2 className="text-xl font-semibold text-stone-900">Winkelwagen</h2>
            {totalItems > 0 && (
              <span className="ml-2 bg-primary-900 text-white text-sm px-2 py-1 rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-stone-100 rounded-lg transition-colors duration-200"
          >
            <X className="w-6 h-6 text-stone-600" />
          </button>
        </div>

        {/* Cart Items - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 border-b border-stone-200">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-stone-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-stone-900 mb-2">Winkelwagen is leeg</h3>
              <p className="text-stone-600">Voeg producten toe om te beginnen</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center bg-stone-50 rounded-xl p-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg mr-4"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-stone-900 text-sm">{item.name}</h4>
                    {(item.volume || item.weight) && (
                      <p className="text-xs text-stone-500">{item.volume || item.weight}</p>
                    )}
                    <p className="text-primary-900 font-semibold">€{item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center bg-white rounded-lg hover:bg-stone-100 transition-colors"
                    >
                      <Minus className="w-4 h-4 text-stone-600" />
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center bg-white rounded-lg hover:bg-stone-100 transition-colors"
                    >
                      <Plus className="w-4 h-4 text-stone-600" />
                    </button>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="w-8 h-8 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-lg transition-colors ml-2"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          </div>

          {/* Best Sellers Section */}
          <div className="p-6">
            <div className="flex items-center mb-4">
              <Star className="w-5 h-5 text-accent-500 mr-2" />
              <h3 className="text-lg font-semibold text-stone-900">Onze Best Sellers</h3>
            </div>
            <p className="text-sm text-stone-600 mb-4">Voeg populaire producten toe aan je bestelling</p>
            
            <div className="space-y-3">
              {bestSellers.map((product) => (
                <div key={product.id} className="flex items-center bg-stone-50 rounded-xl p-3 hover:bg-stone-100 transition-colors">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded-lg mr-3"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-stone-900 text-sm truncate">{product.name}</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-primary-900 font-semibold text-sm">€{product.price.toFixed(2)}</span>
                      {product.popular && (
                        <Star className="w-3 h-3 text-accent-500 fill-current" />
                      )}
                    </div>
                    {(product.volume || product.weight) && (
                      <p className="text-xs text-stone-500 mt-1">{product.volume || product.weight}</p>
                    )}
                  </div>
                  <button
                    onClick={() => handleAddBestSeller(product)}
                    className="w-8 h-8 flex items-center justify-center bg-primary-900 text-white rounded-lg hover:bg-primary-800 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer - Fixed at bottom */}
        {items.length > 0 && (
          <div className="border-t border-stone-200 p-6 flex-shrink-0 bg-white">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-stone-900">Totaal:</span>
              <span className="text-2xl font-bold text-primary-900">€{totalPrice.toFixed(2)}</span>
            </div>
            <Link
              to="/checkout"
              onClick={onClose}
              className="w-full bg-gradient-to-r from-primary-900 to-primary-800 text-white py-4 rounded-xl font-semibold text-center hover:from-primary-800 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 block"
            >
              Naar afrekenen
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;