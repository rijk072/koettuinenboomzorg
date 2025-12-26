import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, FileText } from 'lucide-react';
import AnimationObserver from '../components/AnimationObserver';

const AlgemeneVoorwaarden = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img 
            src="/img/4e9f213939261ea0480f2785600a838a.jpg" 
            alt="Algemene Voorwaarden"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>
        </div>

        <div className="relative z-10 container-wide text-left text-white">
          <AnimationObserver>
            <h1 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-white">
              {window.location.pathname === '/privacy' ? 'Privacybeleid' : 'Algemene Voorwaarden'}
            </h1>
          </AnimationObserver>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto">
            <AnimationObserver>
              <div className="bg-white rounded-2xl p-8 shadow-soft">
                <div className="flex items-center mb-8">
                  <FileText className="w-8 h-8 text-primary-900 mr-4" />
                  <h2 className="text-2xl font-semibold text-stone-900">
                    {window.location.pathname === '/privacy' ? 'Privacy & Gegevensbescherming' : 'Webshop Voorwaarden'}
                  </h2>
                </div>

                <div className="prose prose-stone max-w-none space-y-8">
                  {window.location.pathname === '/privacy' ? (
                    <>
                      <div>
                        <h3 className="text-xl font-semibold text-stone-900 mb-4">1. Gegevensverzameling</h3>
                        <p className="text-stone-700 leading-relaxed">
                          Koet Tuin & Boomzorg verzamelt alleen de gegevens die noodzakelijk zijn voor het uitvoeren 
                          van onze diensten en het onderhouden van klantcontact.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-stone-900 mb-4">2. Gebruik van Gegevens</h3>
                        <ul className="space-y-2 text-stone-700">
                          <li>• Contact opnemen voor offertes en projectbesprekingen</li>
                          <li>• Verwerking van bestellingen via onze webshop</li>
                          <li>• Versturen van facturen en administratieve communicatie</li>
                          <li>• Nieuwsbrieven (alleen met toestemming)</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-stone-900 mb-4">3. Gegevensbescherming</h3>
                        <p className="text-stone-700 leading-relaxed">
                          Uw gegevens worden veilig opgeslagen en nooit gedeeld met derden zonder uw toestemming. 
                          Wij nemen passende technische en organisatorische maatregelen om uw privacy te beschermen.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-stone-900 mb-4">4. Uw Rechten</h3>
                        <ul className="space-y-2 text-stone-700">
                          <li>• Recht op inzage van uw gegevens</li>
                          <li>• Recht op correctie van onjuiste gegevens</li>
                          <li>• Recht op verwijdering van uw gegevens</li>
                          <li>• Recht op beperking van verwerking</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-stone-900 mb-4">5. Contact</h3>
                        <p className="text-stone-700 leading-relaxed">
                          Voor vragen over uw privacy of het uitoefenen van uw rechten kunt u contact opnemen:
                        </p>
                        <ul className="space-y-1 text-stone-700 mt-2">
                          <li>• E-mail: frans@koet.net</li>
                          <li>• Telefoon: 0653747696</li>
                          <li>• Adres: Heereweg 38 E, 1901 ME Bakkum</li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                  <div>
                    <h3 className="text-xl font-semibold text-stone-900 mb-4">1. Algemeen</h3>
                    <p className="text-stone-700 leading-relaxed">
                      Deze algemene voorwaarden zijn van toepassing op alle bestellingen via de webshop van 
                      Koet Tuin & Boomzorg, gevestigd te Heereweg 38 E, 1901 ME Bakkum.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-stone-900 mb-4">2. Bestellingen en Levering</h3>
                    <ul className="space-y-2 text-stone-700">
                      <li>• Bestellingen worden binnen 1-2 werkdagen verwerkt</li>
                      <li>• Gratis bezorging vanaf €50 in Bakkum en omgeving Noord-Holland (Alkmaar, Egmond, Heiloo)</li>
                      <li>• Afhalen mogelijk op afspraak in Bakkum</li>
                      <li>• Levertijden zijn indicatief en afhankelijk van voorraad</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-stone-900 mb-4">3. Betaling</h3>
                    <p className="text-stone-700 leading-relaxed">
                      Betaling geschiedt via iDEAL of andere door ons geaccepteerde betaalmethoden. 
                      Bestellingen worden pas verwerkt na ontvangst van de betaling.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-stone-900 mb-4">4. Herroepingsrecht</h3>
                    <p className="text-stone-700 leading-relaxed">
                      U heeft het recht om binnen 14 dagen na ontvangst van uw bestelling deze 
                      zonder opgave van redenen te retourneren. Producten dienen in originele staat te verkeren.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-stone-900 mb-4">5. Garantie</h3>
                    <p className="text-stone-700 leading-relaxed">
                      Wij bieden 30 dagen geld-terug-garantie op al onze producten. 
                      Bij gebreken of ontevredenheid kunt u contact met ons opnemen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-stone-900 mb-4">6. Contact</h3>
                    <p className="text-stone-700 leading-relaxed">
                      Voor vragen over uw bestelling of deze voorwaarden kunt u contact opnemen via:
                    </p>
                    <ul className="space-y-1 text-stone-700 mt-2">
                      <li>• E-mail: frans@koet.net</li>
                      <li>• Telefoon: 0653747696</li>
                      <li>• Adres: Heereweg 38 E, 1901 ME Bakkum</li>
                    </ul>
                  </div>
                    </>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-stone-200">
                  <Link 
                    to="/shop"
                    className="text-primary-900 hover:text-primary-800 transition-colors inline-flex items-center font-medium"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
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

export default AlgemeneVoorwaarden;