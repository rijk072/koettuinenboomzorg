export interface ProductData {
  id: string;
  name: string;
  description: string;
  detailed_description: string;
  price: number;
  category: string;
  image_url: string;
  in_stock: boolean;
  popular: boolean;
  weight?: string;
  volume?: string;
  composition?: string;
  ph_value?: string;
  nutrients?: string;
  benefits: string[];
  usage_areas: string[];
  minOrder?: string;
}

export const particulierProducts: ProductData[] = [
  {
    id: '21',
    name: 'Zakken Hout',
    description: 'Premium kwaliteit hout verkocht per kuub. Zelf geklooft en gedroogd. Ideaal voor openhaard, kachel of vuurkorf. Prijs op aanvraag.',
    detailed_description: 'Hoogwaardige zakken met hout dat door ons zelf is geklooft en gedroogd. Het hout wordt verkocht per kuub (m³) en is perfect voor gebruik in open haard, houtkachel of vuurkorf. Het hout is goed gedroogd voor optimale verbranding. U ontvangt de actuele prijs na het plaatsen van uw bestelling.',
    price: 0,
    category: 'Tuinproducten',
    image_url: '/images/zakken-hout.jpeg',
    in_stock: true,
    popular: true,
    weight: 'Verkocht per kuub (m³)',
    composition: 'Zelf geklooft en gedroogd hardhout',
    benefits: ['Zelf geklooft en gedroogd', 'Verkocht per kuub', 'Prijs op aanvraag', 'Gratis afhalen', 'Optimale verbranding', 'Nederlandse kwaliteit'],
    usage_areas: ['Open haard', 'Houtkachel', 'Vuurkorf', 'Buitenhaard', 'Kampvuur'],
  },
  {
    id: '22',
    name: 'Handgemaakt Tuinbankje op Maat',
    description: 'Uniek handgemaakt tuinbankje van hoogwaardig hout. Volledig naar uw wensen gemaakt, ook met houten zijkanten mogelijk. Prijs op aanvraag.',
    detailed_description: 'Dit prachtige tuinbankje wordt volledig handgemaakt door ons vakkundige team. Elk bankje is uniek en kan volledig worden aangepast aan uw wensen. U kunt kiezen voor een open design of een versie met stijlvolle houten zijkanten. Het bankje wordt vervaardigd van duurzaam, weerbestendig hout dat jarenlang meegaat. Perfect voor in uw tuin, op uw terras of balkon. Prijs en afmetingen worden in overleg bepaald. We bespreken graag alle mogelijkheden met u.',
    price: 0,
    category: 'Eigen Maatwerk',
    image_url: '/images/bankje-maatwerk.jpeg',
    in_stock: true,
    popular: true,
    weight: 'Afhankelijk van afmetingen',
    composition: 'Hoogwaardig hardhout, behandeld',
    benefits: ['Volledig op maat', 'Handgemaakt vakwerk', 'Met of zonder zijkanten', 'Weerbestendig hout', 'Uniek design', 'Prijs op aanvraag', 'Gratis adviesgesprek'],
    usage_areas: ['Tuin', 'Terras', 'Balkon', 'Entree', 'Park'],
  },
  {
    id: '23',
    name: 'Stihl iMow Robotgrasmaaier - Installatie & Instructie',
    description: 'De geavanceerde iMow robotgrasmaaier van Stihl. Wij verzorgen voor u de volledige installatie én persoonlijke instructie. Ook andere grasmaaiers op aanvraag beschikbaar. Prijs op aanvraag.',
    detailed_description: 'Geniet van een perfect gazon zonder omkijken met de Stihl iMow robotgrasmaaier. Dit intelligente systeem maait uw gazon volledig automatisch en zorgt voor een prachtig, egaal resultaat. Wij verzorgen de complete installatie inclusief het aanleggen van de begrenzingsdraad en het instellen van het maaipatroon. Daarnaast geven we u een uitgebreide persoonlijke instructie zodat u optimaal gebruik kunt maken van alle functies. Heeft u interesse in een ander merk of model grasmaaier? Ook dat is mogelijk - neem contact op voor de mogelijkheden. De exacte prijs is afhankelijk van uw tuinsituatie, het gekozen model en de installatiekosten.',
    price: 0,
    category: 'Tuinmachines',
    image_url: '/images/imow-robotmaaier.jpeg',
    in_stock: true,
    popular: true,
    weight: 'Afhankelijk van model',
    composition: 'Stihl iMow robotgrasmaaier',
    benefits: ['Inclusief volledige installatie', 'Persoonlijke instructie', 'Professionele aansluiting', 'Ook andere merken mogelijk', 'Prijs op aanvraag', 'Service en onderhoud', 'Advies op maat'],
    usage_areas: ['Gazons tot 1500m²', 'Particuliere tuinen', 'Complexe tuinvormen', 'Hellingen tot 40%', 'Meerdere zones'],
  },
  {
    id: '24',
    name: 'Planken van Gerooide Bomen - Diverse Maten',
    description: 'Duurzaam hout van onze eigen gerooide bomen, gezaagd in diverse maten planken. Perfect voor al uw houtprojecten. Prijs op aanvraag.',
    detailed_description: 'Van de bomen die wij professioneel rooien, zagen wij hoogwaardige planken in verschillende afmetingen. Dit duurzame hout is perfect voor diverse toepassingen zoals tuinmeubels, schuttingen, vlonders, wandbekleding en andere houtprojecten. Elk stuk hout heeft zijn eigen unieke karakter en historie. Door het hergebruik van hout dragen we bij aan een duurzame levenscyclus. De planken worden door ons zorgvuldig gezaagd en kunnen eventueel worden geschaafd voor een glad oppervlak. Beschikbaar in verschillende diktes, breedtes en lengtes. Prijs is afhankelijk van de gewenste afmetingen en houtsoort. Neem contact op voor beschikbaarheid en prijzen.',
    price: 0,
    category: 'Tuinproducten',
    image_url: '/images/planken-gerooide-bomen.jpeg',
    in_stock: true,
    popular: false,
    weight: 'Afhankelijk van afmetingen',
    composition: 'Diverse houtsoorten van gerooide bomen',
    benefits: ['100% duurzaam hergebruik', 'Diverse maten beschikbaar', 'Uniek karakter', 'Lokaal geproduceerd', 'Prijs op aanvraag', 'Ook op maat te zagen', 'Geschaafd leverbaar'],
    usage_areas: ['Tuinmeubels', 'Schuttingen', 'Vlonders', 'Wandbekleding', 'DIY projecten', 'Decoratie'],
  }
];

export const zakelijkProducts: ProductData[] = [
  {
    id: '7',
    name: 'ECOstyle OpMaat Kalk',
    description: '100% natuurlijke kalk met micro-organismen. Verhoogt pH en verbetert bodemstructuur. Prijs op aanvraag.',
    detailed_description: 'ECOstyle OpMaat Kalk is een unieke samenstelling van natuurlijke kalk met micro-organismen. Ideaal voor verzuurde bodems en verbetert de bodemstructuur voor optimale plantengroei. U ontvangt de actuele handelsprijzen na het plaatsen van uw bestelling.',
    price: 0,
    volume: '20 kg per zak',
    category: 'ECOstyle Professioneel',
    image_url: '/images/opmaat-kalk.jpeg',
    in_stock: true,
    popular: true,
    weight: '20 kg per zak',
    composition: '100% natuurlijke kalk met micro-organismen',
    ph_value: 'Verhoogt pH naar optimaal niveau',
    nutrients: 'CaCO3 + micro-organismen',
    benefits: ['Handelsprijzen', 'Gratis afhalen', 'Kies afhaaldatum', 'Verhoogt pH-waarde', 'Verbetert bodemstructuur', 'Professionele kwaliteit'],
    usage_areas: ['Verzuurde gazons', 'Moestuinen', 'Sierborders', 'Sportvelden', 'Golfbanen'],
  },
  {
    id: '8',
    name: 'ECOstyle Myco-Gazon 8-3-6',
    description: '100% organische gazonmeststof met mycorrhiza. Voor een sterk en diepgroen gazon. Prijs op aanvraag.',
    detailed_description: 'Speciaal ontwikkelde organische gazonmest met mycorrhiza schimmels die de wortels versterken. Zorgt voor een diepgroen, sterk gazon dat beter bestand is tegen stress. U ontvangt de actuele handelsprijzen na het plaatsen van uw bestelling.',
    price: 0,
    volume: '25 kg per zak',
    category: 'ECOstyle Professioneel',
    image_url: '/images/myco-gazon.jpeg',
    in_stock: true,
    popular: true,
    weight: '25 kg per zak',
    composition: '100% organische mest met mycorrhiza',
    nutrients: 'NPK 8-3-6 + sporenelementen',
    ph_value: '6.5 - 7.0',
    benefits: ['Handelsprijzen', 'Gratis afhalen', 'Kies afhaaldatum', 'Diepgroene kleur', 'Sterke wortels', 'Professionele kwaliteit'],
    usage_areas: ['Gazons', 'Sportvelden', 'Golfbanen', 'Parken', 'Recreatieterreinen'],
  },
  {
    id: '9',
    name: 'ECOstyle Terra-Actif',
    description: 'Hoogwaardige bodemverbeteraar rijk aan kokosvezels. Verbetert bodemstructuur en lucht-/waterhuishouding. Prijs op aanvraag.',
    detailed_description: 'Terra-Actif is een premium bodemverbeteraar op basis van kokosvezel. Verbetert de structuur van zware kleigrond en lichte zandgrond voor optimale groeiomstandigheden. U ontvangt de actuele handelsprijzen na het plaatsen van uw bestelling.',
    price: 0,
    volume: '70L per zak',
    category: 'ECOstyle Professioneel',
    image_url: '/images/terra-actif.jpeg',
    in_stock: true,
    popular: false,
    weight: 'Ca. 8 kg per zak (70L)',
    composition: 'Hoogwaardige kokosvezels en compost',
    ph_value: '6.0 - 6.8',
    nutrients: 'Organische voeding',
    benefits: ['Handelsprijzen', 'Gratis afhalen', 'Kies afhaaldatum', 'Verbetert luchthuishouding', 'Optimaliseert waterhuishouding', 'Geschikt voor alle grondsoorten'],
    usage_areas: ['Zware kleigrond', 'Lichte zandgrond', 'Borders', 'Boomkuilen', 'Gazonverbetering'],
  },
  {
    id: '10',
    name: 'ECOstyle Myco-Siertuin 7-3-6',
    description: '100% organische meststof voor borders en heesters. Met Mycorrhizae en fosfaatvrijmakende bacteriën. Prijs op aanvraag.',
    detailed_description: 'Speciaal samengestelde organische meststof voor sierborders en heesters. Mycorrhiza zorgt voor optimale wortelontwikkeling en bloei. U ontvangt de actuele handelsprijzen na het plaatsen van uw bestelling.',
    price: 0,
    volume: '25 kg per zak',
    category: 'ECOstyle Professioneel',
    image_url: '/images/myco-siertuin.jpeg',
    in_stock: true,
    popular: false,
    weight: '25 kg per zak',
    composition: '100% organische mest met mycorrhiza en bacteriën',
    nutrients: 'NPK 7-3-6 + magnesium en sporenelementen',
    ph_value: '6.0 - 7.0',
    benefits: ['Handelsprijzen', 'Gratis afhalen', 'Kies afhaaldatum', 'Stimuleert bloei', 'Sterke wortels', 'Professionele kwaliteit'],
    usage_areas: ['Sierborders', 'Heesters', 'Rozentuinen', 'Vaste planten', 'Bomen'],
  },
  {
    id: '11',
    name: 'ECOstyle Terra-Fertiel',
    description: 'Organische bodemverbeteraar met schimmels, bacteriën en gisten. Activeert het bodemleven direct. Prijs op aanvraag.',
    detailed_description: 'Terra-Fertiel is een krachtige bodemverbeteraar die het bodemleven direct activeert. Bevat een unieke mix van nuttige micro-organismen voor gezonde grond. U ontvangt de actuele handelsprijzen na het plaatsen van uw bestelling.',
    price: 0,
    volume: '25 kg per zak',
    category: 'ECOstyle Professioneel',
    image_url: '/images/terra-fertiel.jpeg',
    in_stock: true,
    popular: false,
    weight: '25 kg per zak',
    composition: 'Organische mest met levende micro-organismen',
    nutrients: 'Organische voedingsstoffen + micro-organismen',
    ph_value: '6.5 - 7.2',
    benefits: ['Handelsprijzen', 'Gratis afhalen', 'Kies afhaaldatum', 'Activeert bodemleven', 'Verbetert vruchtbaarheid', 'Professionele kwaliteit'],
    usage_areas: ['Alle tuingronden', 'Moestuinen', 'Borders', 'Gazonverbetering', 'Boomgaarden'],
  }
];

export const quickAddProducts: ProductData[] = [
  {
    id: '25',
    name: 'Tuinaarde & Compost Mix',
    description: 'Rijke mengeling van tuinaarde en compost. Perfect voor het verbeteren van uw tuingrond. Prijs op aanvraag.',
    detailed_description: 'Deze premium mengeling van tuinaarde en compost is ideaal voor het verrijken van uw tuin. De mix verbetert de bodemstructuur en voedt uw planten op natuurlijke wijze. Perfect voor gebruik in borders, moestuinen en bij aanplant.',
    price: 0,
    category: 'Tuinproducten',
    image_url: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    in_stock: true,
    popular: true,
    weight: 'Verkocht per kuub (m³)',
    composition: 'Tuinaarde en gecomposteerd organisch materiaal',
    benefits: ['Verbetert bodemstructuur', 'Voedingsrijk', 'Prijs op aanvraag', 'Gratis afhalen', 'Bulk beschikbaar', 'Lokaal geproduceerd'],
    usage_areas: ['Borders', 'Moestuin', 'Aanplant', 'Gazonverbetering', 'Tuinaanleg'],
  },
  {
    id: '26',
    name: 'Tuindecoratie & Ornamenten',
    description: 'Unieke tuindecoratie elementen en ornamenten. Handgemaakt en op maat leverbaar. Prijs op aanvraag.',
    detailed_description: 'Geef uw tuin extra karakter met onze handgemaakte decoratie elementen. Van houten vogelhuisjes tot decoratieve plantenborden en meer. Elk stuk is uniek en kan aangepast worden aan uw wensen.',
    price: 0,
    category: 'Eigen Maatwerk',
    image_url: 'https://images.pexels.com/photos/6231711/pexels-photo-6231711.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    in_stock: true,
    popular: false,
    weight: 'Afhankelijk van product',
    composition: 'Diverse materialen, hoofdzakelijk hout',
    benefits: ['Uniek handgemaakt', 'Op maat leverbaar', 'Weerbestendig', 'Prijs op aanvraag', 'Diverse stijlen', 'Persoonlijk advies'],
    usage_areas: ['Tuin', 'Terras', 'Balkon', 'Entree', 'Muur'],
  },
  {
    id: '27',
    name: 'Sierplanten & Heesters',
    description: 'Seizoensgebonden sierplanten en heesters voor een prachtige tuin. Prijs op aanvraag.',
    detailed_description: 'Wij leveren een breed assortiment seizoensgebonden sierplanten en heesters. Van vaste planten tot bloeiende struiken - alles voor een kleurrijke tuin. Vraag naar de actuele voorraad en beschikbaarheid.',
    price: 0,
    category: 'Tuinplanten',
    image_url: 'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    in_stock: true,
    popular: true,
    weight: 'Afhankelijk van plant',
    composition: 'Diverse plantensoorten',
    benefits: ['Seizoensgebonden', 'Gezonde planten', 'Prijs op aanvraag', 'Professioneel advies', 'Diverse soorten', 'Aangeplant mogelijk'],
    usage_areas: ['Borders', 'Heesters', 'Pergola', 'Haag', 'Siertuin'],
  },
  {
    id: '28',
    name: 'Vijveraanleg & Onderhoud',
    description: 'Complete vijveraanleg inclusief materialen en onderhoud. Prijs op aanvraag.',
    detailed_description: 'Wij verzorgen de complete aanleg van vijvers en waterelementen in uw tuin. Van ontwerp tot realisatie en onderhoud. Inclusief alle benodigde materialen zoals vijverfolie, pomp, filter en beplanting.',
    price: 0,
    category: 'Tuinaanleg',
    image_url: 'https://images.pexels.com/photos/2131828/pexels-photo-2131828.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    in_stock: true,
    popular: false,
    weight: 'Project afhankelijk',
    composition: 'Compleet vijverpakket',
    benefits: ['Volledig verzorgd', 'Professionele aanleg', 'Prijs op aanvraag', 'Inclusief materialen', 'Onderhoud mogelijk', 'Persoonlijk advies'],
    usage_areas: ['Vijver', 'Waterpartij', 'Fonteinen', 'Beek', 'Waterelement'],
  },
];

export const allProducts = [...particulierProducts, ...zakelijkProducts, ...quickAddProducts];

export const getProductById = (id: string): ProductData | undefined => {
  return allProducts.find(p => p.id === id);
};
