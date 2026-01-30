import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import AnimationObserver from '../components/AnimationObserver';
import { db } from '../lib/supabase';

const Contact = () => {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    telefoon: '',
    onderwerp: '',
    bericht: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('=== CONTACT FORM SUBMIT STARTED ===');
    console.log('Form data:', {
      naam: formData.naam,
      email: formData.email,
      telefoon: formData.telefoon,
      onderwerp: formData.onderwerp,
      bericht: formData.bericht
    });

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const submissionData = {
        name: formData.naam,
        email: formData.email,
        phone: formData.telefoon,
        subject: formData.onderwerp,
        message: formData.bericht
      };

      console.log('Sending to database:', submissionData);

      const result = await db.submitContactForm(submissionData);

      console.log('Database response:', result);
      console.log('=== CONTACT FORM SUBMIT SUCCESS ===');

      setSubmitStatus('success');
      setFormData({
        naam: '',
        email: '',
        telefoon: '',
        onderwerp: '',
        bericht: ''
      });
    } catch (error: any) {
      console.error('=== CONTACT FORM SUBMIT ERROR ===');
      console.error('Error details:', error);
      console.error('Error message:', error.message);
      console.error('Error code:', error.code);

      setSubmitStatus('error');
      setErrorMessage(
        error.message || 'Er is een fout opgetreden bij het versturen van uw bericht. Probeer het opnieuw.'
      );
    } finally {
      setIsSubmitting(false);
      console.log('=== CONTACT FORM SUBMIT FINISHED ===');
    }
  };

  // Check if we came here for an offerte
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('offerte') === 'true') {
      setFormData(prev => ({
        ...prev,
        onderwerp: 'offerte',
        bericht: 'Ik zou graag een vrijblijvende offerte ontvangen voor mijn tuinproject.'
      }));
    }
  }, []);

  return (
    <>
      {/* Contact Section */}
      <section className="pt-32 pb-24 lg:pb-32 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
          <AnimationObserver>
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-stone-900 mb-6">
                {new URLSearchParams(window.location.search).get('offerte') === 'true' 
                  ? 'Vraag uw gratis offerte aan'
                  : 'Laten we samen uw tuindroom realiseren'
                }
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full mb-8"></div>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                {new URLSearchParams(window.location.search).get('offerte') === 'true'
                  ? 'Vul het formulier in en ontvang binnen 24 uur een vrijblijvende offerte'
                  : 'Neem contact op voor een vrijblijvend gesprek over uw tuinproject'
                }
              </p>
            </div>
          </AnimationObserver>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Contact Form */}
            <AnimationObserver animationType="slide-left">
              <div className="bg-white rounded-3xl p-10 shadow-premium hover-lift">
                <div className="mb-8">
                  <h3 className="text-2xl font-heading font-bold text-stone-900 mb-4">
                    Stuur ons een bericht
                  </h3>
                  <p className="text-stone-600">
                    Vul het formulier in en wij nemen binnen 24 uur contact met u op.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Naam */}
                  <div className="group relative">
                    <label htmlFor="naam" className="block text-sm font-heading font-bold text-stone-700 mb-2">
                      Naam *
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

                  {/* Email & Telefoon */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="group relative">
                      <label htmlFor="email" className="block text-sm font-heading font-bold text-stone-700 mb-2">
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

                    <div className="group relative">
                      <label htmlFor="telefoon" className="block text-sm font-heading font-bold text-stone-700 mb-2">
                        Telefoon
                      </label>
                      <input
                        type="tel"
                        id="telefoon"
                        name="telefoon"
                        value={formData.telefoon}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 outline-none bg-white"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>

                  {/* Onderwerp */}
                  <div className="group relative">
                    <label htmlFor="onderwerp" className="block text-sm font-heading font-bold text-stone-700 mb-2">
                      Onderwerp *
                    </label>
                    <select
                      id="onderwerp"
                      name="onderwerp"
                      value={formData.onderwerp}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 outline-none bg-white cursor-pointer"
                    >
                      <option value="" disabled>Selecteer een onderwerp</option>
                      <option value="offerte">Offerte aanvragen</option>
                      <option value="tuinaanleg">Tuinaanleg</option>
                      <option value="onderhoud">Tuinonderhoud</option>
                      <option value="boomverzorging">Boomverzorging</option>
                      <option value="zakelijk">Zakelijke levering (hoveniers)</option>
                      <option value="anders">Anders</option>
                    </select>
                  </div>

                  {/* Bericht */}
                  <div className="group relative">
                    <label htmlFor="bericht" className="block text-sm font-heading font-bold text-stone-700 mb-2">
                      Bericht *
                    </label>
                    <textarea
                      id="bericht"
                      name="bericht"
                      value={formData.bericht}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 outline-none resize-none bg-white"
                      placeholder="Vertel ons meer over uw project of vraag..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 rounded-xl font-heading font-bold text-lg transition-all duration-300 inline-flex items-center justify-center ${
                      isSubmitting
                        ? 'bg-stone-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-primary-900 to-primary-800 text-white hover:from-primary-800 hover:to-primary-700 transform hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                        Verzenden...
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6 mr-3" />
                        Verstuur bericht
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="animate-fade-in bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-green-900 mb-1">
                            Bedankt voor uw bericht!
                          </h4>
                          <p className="text-green-700">
                            Wij nemen binnen 24 uur contact met u op.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="animate-fade-in bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 p-6 rounded-xl">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                            <AlertCircle className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-red-900 mb-1">
                            Er is iets misgegaan
                          </h4>
                          <p className="text-red-700 mb-4">
                            {errorMessage}
                          </p>
                          <button
                            onClick={() => setSubmitStatus('idle')}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 inline-flex items-center"
                          >
                            Probeer opnieuw
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'idle' && (
                    <div className="text-center text-sm text-stone-600 font-heading font-bold">
                      <p>We reageren binnen 24 uur op uw bericht</p>
                    </div>
                  )}
                </form>
              </div>

              <div className="mt-8 p-6 bg-primary-50 rounded-xl border border-primary-100">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">
                  Zakelijke levering (Hoveniers)
                </h3>
                <p className="text-stone-700 mb-4">
                  Bent u hovenier en zoekt u een betrouwbare ECOstyle leverancier?
                  Neem direct contact op voor handelsprijzen en leveringsvoorwaarden.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:0653747696"
                    className="flex items-center justify-center bg-primary-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-all"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Bel Direct: 0653747696
                  </a>
                  <a
                    href="mailto:frans@koet.net?subject=Zakelijke levering ECOstyle"
                    className="flex items-center justify-center border-2 border-primary-900 text-primary-900 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-all"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email: frans@koet.net
                  </a>
                </div>
              </div>
            </AnimationObserver>

            {/* Contact Info */}
            <AnimationObserver animationType="slide-right">
              <div className="space-y-8">
                <h2 className="text-2xl font-heading font-bold text-stone-900 mb-8">
                  Direct contact
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start bg-stone-50 rounded-2xl p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-900 to-primary-700 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-stone-900 mb-2">Telefoon</h3>
                      <a href="tel:0653747696" className="text-primary-900 hover:text-primary-800 font-heading font-bold text-lg">
                        0653747696
                      </a>
                      <p className="text-stone-600 text-sm mt-1">Ma-Vr 08:00-17:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start bg-stone-50 rounded-2xl p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-600 to-accent-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-stone-900 mb-2">E-mail</h3>
                      <a href="mailto:frans@koet.net" className="text-primary-900 hover:text-primary-800 font-heading font-bold text-lg">
                        frans@koet.net
                      </a>
                      <p className="text-stone-600 text-sm mt-1">Reactie binnen 24 uur</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start bg-stone-50 rounded-2xl p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-800 to-primary-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-stone-900 mb-2">Adres</h3>
                      <p className="text-stone-700 font-heading font-bold">Heereweg 38 E</p>
                      <p className="text-stone-700 font-heading font-bold">1901 ME Bakkum</p>
                      <p className="text-stone-600 text-sm mt-1">Bakkum, Noord-Holland</p>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Buttons */}
                <div className="space-y-4">
                  <a 
                    href="tel:0653747696"
                    className="w-full bg-gradient-to-r from-primary-900 to-primary-800 text-white py-4 rounded-xl font-semibold text-center hover:from-primary-800 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 block"
                  >
                    <Phone className="w-5 h-5 inline mr-2" />
                    Bel direct: 0653747696
                  </a>
                  <a 
                    href="mailto:frans@koet.net"
                    className="w-full border-2 border-primary-900 text-primary-900 py-4 rounded-xl font-semibold text-center hover:bg-primary-900 hover:text-white transition-all duration-300 transform hover:scale-105 block"
                  >
                    <Mail className="w-5 h-5 inline mr-2" />
                    E-mail: frans@koet.net
                  </a>
                </div>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* Contact Intro Section */}
      <section className="pt-16 py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
            <AnimationObserver animationType="slide-left">
              <div className="space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 leading-tight tracking-tight">
                  Persoonlijk contact voor
                  <span className="block text-primary-900 mt-2">uw tuinproject</span>
                </h2>
                
                <p className="text-lg text-stone-600 leading-relaxed">
                  Neem contact op voor een vrijblijvend gesprek over uw tuinwensen. 
                  Wij denken graag met u mee over de mogelijkheden.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Gratis Adviesgesprek",
                      description: "Vrijblijvend kennismakingsgesprek over uw tuinwensen en mogelijkheden."
                    },
                    {
                      title: "Snelle Reactie",
                      description: "Wij reageren binnen 24 uur op uw bericht of telefonische vraag."
                    },
                    {
                      title: "Persoonlijke Begeleiding",
                      description: "Van eerste contact tot oplevering - één vaste contactpersoon."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-900 to-primary-700 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-stone-900 mb-2">{item.title}</h3>
                        <p className="text-stone-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimationObserver>

            <AnimationObserver animationType="slide-right">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg">
                  <img
                    src="/images/24-7-bereikbaar.jpeg"
                    alt="Contact opnemen"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-soft-lg border border-white/50">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-900 mb-2">24u</div>
                    <div className="text-sm font-semibold text-stone-600 uppercase tracking-wider">Reactie</div>
                  </div>
                </div>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <AnimationObserver>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-stone-900 mb-6">
                Bezoek ons in <span className="text-primary-900">Bakkum</span>
              </h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Centraal gelegen in Bakkum en omgeving Noord-Holland voor optimale bereikbaarheid
              </p>
            </div>
          </AnimationObserver>

          <div className="bg-stone-50 rounded-3xl p-6 shadow-premium">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2425.241291369912!2d4.650996176537236!3d52.56524757207305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5f808462974c5%3A0x7d945cf5a9d42b36!2sKoet%20Tuin-%20en%20Boomzorg!5e0!3m2!1snl!2sth!4v1767713598261!5m2!1snl!2sth"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Koet Tuin & Boomzorg Locatie"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;