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
    id: '1',
    name: 'Handgemaakte Tuinbankstellen',
    description: 'Op maat gemaakte, duurzame tuinbankstellen van kwaliteitshout. Verschillende afmetingen en uitvoeringen beschikbaar.',
    detailed_description: 'Onze handgemaakte tuinbankstellen worden vervaardigd van premium kwaliteit hardhout. Elk stuk is uniek en wordt speciaal voor u op maat gemaakt. De bankstellen zijn behandeld met weerbestendige coating voor jarenlang buitengebruik.',
    price: 449.99,
    category: 'Eigen Maatwerk',
    image_url: 'https://placehold.co/600x400/795548/white?text=Tuinbankstellen',
    in_stock: true,
    popular: true,
    weight: 'Ca. 35 kg per stuk',
    composition: 'Douglas hout, geïmpregneerd',
    benefits: ['Handgemaakt vakwerk', 'Weerbestendig behandeld', 'Op maat leverbaar', 'Duurzaam hardhout', 'Nederlandse productie', 'Inclusief montage instructies'],
    usage_areas: ['Terras', 'Tuin', 'Balkon', 'Veranda', 'Bedrijfsterreinen'],
  },
  {
    id: '2',
    name: 'Handgemaakte Bloembakken',
    description: 'Stevige houten bloembakken, handgemaakt op maat. Perfect voor borders en terrassen.',
    detailed_description: 'Deze robuuste bloembakken zijn ideaal voor het creëren van mooie borders en terrassen. Gemaakt van duurzaam hout en verkrijgbaar in verschillende afmetingen.',
    price: 159.99,
    category: 'Eigen Maatwerk',
    image_url: 'https://placehold.co/600x400/6D4C41/white?text=Bloembakken',
    in_stock: true,
    popular: false,
    weight: 'Ca. 8-12 kg afhankelijk van maat',
    composition: 'Lariks hout, FSC-gecertificeerd',
    benefits: ['Diverse maten beschikbaar', 'Sterk en stevig', 'Weerbestendig', 'Met drainage gaten', 'Handgemaakt', 'Natuurlijke uitstraling'],
    usage_areas: ['Borders', 'Terrassen', 'Balkons', 'Tuinpaden', 'Entrees'],
  },
  {
    id: '3',
    name: 'Tuintafels op Maat',
    description: 'Stevige houten tuintafels, handgemaakt volgens uw wensen. Duurzaam en weersbestendig.',
    detailed_description: 'Onze maatwerk tuintafels worden speciaal voor u gemaakt in elk gewenst formaat. Van intieme bistrotafels tot grote familietafels, alles is mogelijk.',
    price: 649.99,
    category: 'Eigen Maatwerk',
    image_url: 'https://placehold.co/600x400/8B7355/white?text=Tuintafels',
    in_stock: true,
    popular: true,
    weight: 'Ca. 40-60 kg afhankelijk van afmeting',
    composition: 'Steigerhout of Douglas, naar keuze',
    benefits: ['Volledig op maat', 'Robuuste constructie', 'Duurzaam hout', 'Weerbestendig afgewerkt', 'Handgemaakt', 'Uniek design mogelijk'],
    usage_areas: ['Tuin', 'Terras', 'Buitenkeuken', 'Feesten & evenementen', 'Horeca'],
  },
  {
    id: '4',
    name: 'Plantenbakken',
    description: 'Duurzame houten plantenbakken op maat gemaakt. Verschillende maten en uitvoeringen mogelijk.',
    detailed_description: 'Perfect voor het presenteren van uw favoriete planten. Deze plantenbakken combineren functionaliteit met stijl en zijn verkrijgbaar in elke gewenste maat.',
    price: 129.99,
    category: 'Eigen Maatwerk',
    image_url: 'https://placehold.co/600x400/6D5D4B/white?text=Plantenbakken',
    in_stock: true,
    popular: false,
    weight: 'Ca. 6-10 kg afhankelijk van maat',
    composition: 'Vurenhout, geïmpregneerd',
    benefits: ['Op maat leverbaar', 'Met drainage systeem', 'Stabiele constructie', 'Natuurlijke look', 'Eenvoudig te verplaatsen', 'Onderhoudsarm'],
    usage_areas: ['Entrees', 'Terrassen', 'Balkons', 'Serres', 'Winkel displays'],
  },
  {
    id: '5',
    name: 'Overkappingen & Pergola\'s',
    description: 'Op maat gemaakte houten overkappingen en pergola\'s. Compleet geïnstalleerd in uw tuin.',
    detailed_description: 'Creëer een beschutte plek in uw tuin met onze maatwerk overkappingen en pergola\'s. Inclusief professionele montage en garantie.',
    price: 2499.99,
    category: 'Eigen Maatwerk',
    image_url: 'https://placehold.co/600x400/8B6F47/white?text=Overkappingen',
    in_stock: true,
    popular: true,
    weight: 'Ca. 200-400 kg afhankelijk van afmeting',
    composition: 'Douglas of eiken balken',
    benefits: ['Inclusief montage', 'Volledig maatwerk', 'Sterke constructie', 'Professioneel geïnstalleerd', '10 jaar garantie', 'Met fundering'],
    usage_areas: ['Terras overdekking', 'Lounge gebied', 'Tuinkamer', 'Carport', 'Buitenkeuken'],
  },
  {
    id: '6',
    name: 'Schuttingen op Maat',
    description: 'Houten schuttingen in elk gewenst model. Van klassiek tot modern, alles is mogelijk.',
    detailed_description: 'Professionele houten schuttingen volledig naar uw wensen. Van horizontaal modern tot klassiek verticaal, in elke gewenste hoogte.',
    price: 899.99,
    category: 'Eigen Maatwerk',
    image_url: 'https://placehold.co/600x400/7A5C42/white?text=Schuttingen',
    in_stock: true,
    popular: false,
    weight: 'Ca. 25 kg per paneel',
    composition: 'Grenen of lariks, naar keuze',
    benefits: ['Diverse stijlen mogelijk', 'Op elke hoogte leverbaar', 'Inclusief palen en beslag', 'Professionele plaatsing', 'Onderhoudsarm', 'Lange levensduur'],
    usage_areas: ['Tuinafscheiding', 'Privacy scherm', 'Windscherm', 'Geluidswering', 'Erfafscheiding'],
  }
];

export const zakelijkProducts: ProductData[] = [
  {
    id: '7',
    name: 'ECOstyle OpMaat Kalk',
    description: '100% natuurlijke kalk verrijkt met micro-organismen voor verbetering van pH-waarde en bodemstructuur.',
    detailed_description: 'ECOstyle OpMaat Kalk is een unieke samenstelling van natuurlijke kalk met micro-organismen. Ideaal voor verzuurde bodems en verbetert de bodemstructuur voor optimale plantengroei.',
    price: 0,
    volume: '20 kg',
    minOrder: '10 zakken',
    category: 'ECOstyle',
    image_url: 'https://placehold.co/600x400/228B22/white?text=OpMaat+Kalk',
    in_stock: true,
    popular: true,
    weight: '20 kg per zak',
    composition: '100% natuurlijke kalk met micro-organismen',
    ph_value: 'Verhoogt pH naar optimaal niveau',
    nutrients: 'CaCO3 + micro-organismen',
    benefits: ['Verhoogt pH-waarde', 'Verbetert bodemstructuur', 'Stimuleert bodemleven', 'Bevordert nutriëntenopname', '100% natuurlijk', 'Professionele kwaliteit'],
    usage_areas: ['Verzuurde gazons', 'Moestuinen', 'Sierborders', 'Sportvelden', 'Golfbanen'],
  },
  {
    id: '8',
    name: 'ECOstyle Myco-Gazon 8-3-6',
    description: '100% organische gazonmeststof met micro-organismen voor een sterk en diepgroen gazon.',
    detailed_description: 'Speciaal ontwikkelde organische gazonmest met mycorrhiza schimmels die de wortels versterken. Zorgt voor een diepgroen, sterk gazon dat beter bestand is tegen stress.',
    price: 0,
    volume: '25 kg',
    minOrder: '10 zakken',
    category: 'ECOstyle',
    image_url: 'https://placehold.co/600x400/2E7D32/white?text=Myco-Gazon',
    in_stock: true,
    popular: true,
    weight: '25 kg per zak',
    composition: '100% organische mest met mycorrhiza',
    nutrients: 'NPK 8-3-6 + sporenelementen',
    ph_value: '6.5 - 7.0',
    benefits: ['Diepgroene kleur', 'Sterke wortels door mycorrhiza', 'Langdurige werking', 'Verbetert bodemstructuur', '100% organisch', 'Professionele kwaliteit'],
    usage_areas: ['Gazons particulier', 'Sportvelden', 'Golfbanen', 'Parken', 'Recreatieterreinen'],
  },
  {
    id: '9',
    name: 'ECOstyle Terra-Actif',
    description: 'Hoogwaardige bodemverbeteraar rijk aan kokosvezels. Verbetert bodemstructuur en lucht-/waterhuishouding.',
    detailed_description: 'Terra-Actif is een premium bodemverbeteraar op basis van kokosvezel. Verbetert de structuur van zware kleigrond en lichte zandgrond voor optimale groeiomstandigheden.',
    price: 0,
    volume: '70 L',
    minOrder: '10 zakken',
    category: 'ECOstyle',
    image_url: 'https://placehold.co/600x400/795548/white?text=Terra-Actif',
    in_stock: true,
    popular: false,
    weight: 'Ca. 8 kg per zak (70L)',
    composition: 'Hoogwaardige kokosvezels en compost',
    ph_value: '6.0 - 6.8',
    nutrients: 'Organische voeding',
    benefits: ['Verbetert luchthuishouding', 'Optimaliseert waterhuishouding', 'Voorkomt verdichting', 'Duurzaam product', 'Langdurige werking', 'Geschikt voor alle grondsoorten'],
    usage_areas: ['Zware kleigrond', 'Lichte zandgrond', 'Borders', 'Boomkuilen', 'Gazonverbetering'],
  },
  {
    id: '10',
    name: 'ECOstyle Myco-Siertuin 7-3-6',
    description: '100% organische meststof voor borders en heesters. Met Mycorrhizae en fosfaatvrijmakende bacteriën.',
    detailed_description: 'Speciaal samengestelde organische meststof voor sierborders en heesters. Mycorrhiza zorgt voor optimale wortelontwikkeling en bloei.',
    price: 0,
    volume: '25 kg',
    minOrder: '10 zakken',
    category: 'ECOstyle',
    image_url: 'https://placehold.co/600x400/558B2F/white?text=Myco-Siertuin',
    in_stock: true,
    popular: false,
    weight: '25 kg per zak',
    composition: '100% organische mest met mycorrhiza en bacteriën',
    nutrients: 'NPK 7-3-6 + magnesium en sporenelementen',
    ph_value: '6.0 - 7.0',
    benefits: ['Stimuleert bloei', 'Sterke wortels', 'Verhoogde weerstand', 'Langdurige werking', '100% organisch', 'Met fosfaatvrijmakende bacteriën'],
    usage_areas: ['Sierborders', 'Heesters', 'Rozentuinen', 'Vaste planten', 'Bomen'],
  },
  {
    id: '11',
    name: 'ECOstyle Terra-Fertiel',
    description: 'Organische bodemverbeteraar met schimmels, bacteriën en gisten. Activeert het bodemleven direct.',
    detailed_description: 'Terra-Fertiel is een krachtige bodemverbeteraar die het bodemleven direct activeert. Bevat een unieke mix van nuttige micro-organismen voor gezonde grond.',
    price: 0,
    volume: '25 kg',
    minOrder: '10 zakken',
    category: 'ECOstyle',
    image_url: 'https://placehold.co/600x400/6D4C41/white?text=Terra-Fertiel',
    in_stock: true,
    popular: false,
    weight: '25 kg per zak',
    composition: 'Organische mest met levende micro-organismen',
    nutrients: 'Organische voedingsstoffen + micro-organismen',
    ph_value: '6.5 - 7.2',
    benefits: ['Activeert bodemleven direct', 'Verbetert vruchtbaarheid', 'Stimuleert wortelgroei', 'Verhoogt weerbaarheid', 'Duurzaam en biologisch', 'Professionele kwaliteit'],
    usage_areas: ['Alle tuingronden', 'Moestuinen', 'Borders', 'Gazonverbetering', 'Boomgaarden'],
  }
];

export const allProducts = [...particulierProducts, ...zakelijkProducts];

export const getProductById = (id: string): ProductData | undefined => {
  return allProducts.find(p => p.id === id);
};
