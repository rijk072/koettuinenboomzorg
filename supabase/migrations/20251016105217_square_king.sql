/*
  # Initial Data voor Koet Tuin & Boomzorg

  1. Products
    - Potgrond producten
    - Tuinmeubels
    - Accessoires

  2. Services
    - Tuinontwerp
    - Tuinaanleg
    - Onderhoud
    - etc.

  3. Project Gallery
    - Voorbeeld projecten

  4. Reviews
    - Klantbeoordelingen
*/

-- Insert Products
INSERT INTO products (name, description, detailed_description, price, original_price, category, volume, weight, composition, ph_value, nutrients, in_stock, popular, image_url, image_urls, benefits, usage_areas) VALUES
(
  'Ecologische Potgrond Premium',
  'Hoogwaardige biologische potgrond voor alle tuinplanten. Rijk aan organische stoffen en perfect gebalanceerd voor optimale plantengroei.',
  'Onze Premium Ecologische Potgrond is zorgvuldig samengesteld uit de beste natuurlijke ingrediënten. Deze potgrond bevat geen kunstmatige toevoegingen en is rijk aan organische stoffen die essentieel zijn voor gezonde plantengroei. De perfecte balans van voedingsstoffen zorgt ervoor dat uw planten optimaal kunnen groeien en bloeien.',
  12.95,
  15.95,
  'Potgrond',
  '40 liter',
  '15 kg',
  'Tuincompost, kokosvezel, perliet',
  '6.0 - 7.0',
  'NPK 14-16-18 + sporenelementen',
  true,
  true,
  'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  ARRAY[
    'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  ],
  ARRAY[
    '100% biologisch en natuurlijk',
    'Verbetert bodemstructuur',
    'Stimuleert wortelgroei',
    'Langdurige voeding',
    'Uitstekende drainage',
    'Geschikt voor alle planten'
  ],
  ARRAY[
    'Tuinborders en bloembedden',
    'Groentemoestuin',
    'Bloembakken en potten',
    'Gazonherstel',
    'Boomgaard en fruitbomen'
  ]
),
(
  'Groente & Kruiden Potgrond',
  'Speciaal samengestelde potgrond voor groenten en kruiden. Extra rijk aan organische mest voor optimale oogst.',
  'Deze speciale potgrond is ontwikkeld voor het kweken van groenten en kruiden. De samenstelling is geoptimaliseerd voor eetbare planten met extra organische mest voor een rijke oogst. Perfect voor moestuinen, kweekbakken en potten.',
  14.95,
  NULL,
  'Potgrond',
  '40 liter',
  '16 kg',
  'Compost, kokosvezel, vermiculiet, organische mest',
  '6.5 - 7.2',
  'NPK 12-14-16 + calcium en magnesium',
  true,
  false,
  'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  ARRAY[
    'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  ],
  ARRAY[
    'Speciaal voor eetbare planten',
    'Extra voedingsstoffen',
    'Verbeterde smaak van groenten',
    'Stimuleert gezonde groei',
    'Biologisch gecertificeerd',
    'Veilig voor consumptie'
  ],
  ARRAY[
    'Groentemoestuin',
    'Kruidenplanten',
    'Tomaten en paprika''s',
    'Sla en bladgroenten',
    'Kweekbakken'
  ]
),
(
  'Bloembakken & Potten Mix',
  'Lichte potgrond speciaal ontwikkeld voor bloembakken en potten. Houdt vocht vast en voorkomt uitdroging.',
  'Deze lichtgewicht potgrond is speciaal ontwikkeld voor gebruik in bloembakken, potten en containers. De formule houdt vocht optimaal vast en voorkomt uitdroging, perfect voor balkon- en terrasplanten.',
  11.95,
  NULL,
  'Potgrond',
  '30 liter',
  '10 kg',
  'Kokosvezel, perliet, vermiculiet, tuincompost',
  '6.0 - 6.8',
  'NPK 10-12-14 + ijzer',
  true,
  false,
  'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  ARRAY[
    'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  ],
  ARRAY[
    'Lichtgewicht formule',
    'Uitstekende vochtretentie',
    'Voorkomt uitdroging',
    'Perfect voor containers',
    'Goede drainage',
    'Langdurige voeding'
  ],
  ARRAY[
    'Bloembakken en jardinières',
    'Potten en containers',
    'Balkon- en terrasplanten',
    'Hangplanten',
    'Kamerplanten'
  ]
),
(
  'Compost & Bodemverbeteraar',
  'Pure compost voor het verbeteren van uw tuingrond. Verhoogt de vruchtbaarheid en bodemstructuur natuurlijk.',
  'Onze pure compost is een natuurlijke bodemverbeteraar die de vruchtbaarheid en structuur van uw tuingrond aanzienlijk verbetert. Rijk aan organische stoffen en bodemleven voor een gezonde tuin.',
  9.95,
  NULL,
  'Compost',
  '50 liter',
  '20 kg',
  '100% gecomposteerd organisch materiaal',
  '6.8 - 7.5',
  'Natuurlijke organische voeding',
  false,
  false,
  'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  ARRAY[
    'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  ],
  ARRAY[
    '100% gecomposteerd',
    'Verbetert bodemstructuur',
    'Stimuleert bodemleven',
    'Verhoogt vruchtbaarheid',
    'Duurzaam geproduceerd',
    'Natuurlijke voeding'
  ],
  ARRAY[
    'Bodemverbetering',
    'Mulchen',
    'Compostmengsel',
    'Tuinborders',
    'Boomvoeding'
  ]
),
(
  'Tuinmeubel Set Steigerhout',
  'Complete tuinset van duurzaam steigerhout. Tafel + 4 stoelen, weerbestendig behandeld voor jarenlang plezier.',
  'Deze prachtige tuinset is vervaardigd van hoogwaardig steigerhout en biedt een perfecte combinatie van stijl en functionaliteit. De set bestaat uit een ruime tafel en vier comfortabele stoelen, allemaal weerbestendig behandeld.',
  299.00,
  349.00,
  'Tuinmeubels',
  'Set van 5 stuks',
  '45 kg',
  'Duurzaam steigerhout',
  'N.v.t.',
  'N.v.t.',
  true,
  true,
  'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  ARRAY[
    'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  ],
  ARRAY[
    'Duurzaam steigerhout',
    'Weerbestendig behandeld',
    'Complete set (tafel + 4 stoelen)',
    'Robuuste constructie',
    'Tijdloos design',
    'Jarenlang plezier'
  ],
  ARRAY[
    'Terras en patio',
    'Tuindiner',
    'Buitenentertainment',
    'Relaxen in de tuin',
    'Familiebijeenkomsten'
  ]
),
(
  'Plantenbakken Set (3 stuks)',
  'Elegante plantenbakken van duurzaam hout. Perfect voor het creëren van groene accenten op terras of balkon.',
  'Deze set van drie elegante plantenbakken is gemaakt van duurzaam hout en perfect voor het creëren van prachtige groene accenten. Ideaal voor terras, balkon of als decoratief element in de tuin.',
  89.95,
  NULL,
  'Accessoires',
  'Set van 3 stuks',
  '12 kg',
  'Duurzaam behandeld hout',
  'N.v.t.',
  'N.v.t.',
  true,
  false,
  'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  ARRAY[
    'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  ],
  ARRAY[
    'Set van 3 verschillende maten',
    'Duurzaam hout',
    'Elegante uitstraling',
    'Weerbestendig',
    'Veelzijdig inzetbaar',
    'Perfecte afwerking'
  ],
  ARRAY[
    'Terras decoratie',
    'Balkon styling',
    'Tuinaccenten',
    'Kruidenplanten',
    'Bloemen display'
  ]
);

-- Insert Services
INSERT INTO services (name, description, detailed_description, icon, features, price_range, duration, active, sort_order) VALUES
(
  'Tuinontwerp',
  'Unieke ontwerpen die perfect aansluiten bij uw wensen, budget en de natuurlijke omgeving van uw tuin.',
  'Ons ontwerpproces begint met een uitgebreid gesprek over uw wensen en dromen. We maken 3D visualisaties en gedetailleerde plantenschema''s die perfect aansluiten bij uw levensstijl en budget.',
  'palette',
  ARRAY['3D visualisaties', 'Plantenschema''s', 'Materiaaladvies', 'Seizoensplanning'],
  '€500 - €2.500',
  '2-4 weken',
  true,
  1
),
(
  'Tuinaanleg',
  'Professionele aanleg van uw droomtuin met hoogwaardige materialen en vakkundige uitvoering.',
  'Van grondvoorbereiding tot de laatste plant - wij realiseren uw tuinontwerp met vakmanschap en oog voor detail. Alle werkzaamheden worden uitgevoerd door ervaren specialisten.',
  'tree-pine',
  ARRAY['Grondvoorbereiding', 'Beplanting & gazon', 'Verharding & paden', 'Tuinverlichting'],
  '€5.000 - €50.000',
  '1-8 weken',
  true,
  2
),
(
  'Tuinonderhoud',
  'Regelmatig onderhoud zorgt ervoor dat uw tuin het hele jaar door op zijn mooist blijft.',
  'Ons onderhoudsabonnement houdt uw tuin in perfecte conditie. Van seizoensnoei tot gazonverzorging - wij zorgen ervoor dat uw tuin altijd op zijn best is.',
  'scissors',
  ARRAY['Seizoensnoei', 'Gazonverzorging', 'Onkruidbestrijding', 'Bemesting'],
  '€75 - €200 per beurt',
  'Doorlopend',
  true,
  3
),
(
  'Boomverzorging',
  'European Tree Worker gecertificeerde boomverzorging voor de gezondheid en veiligheid van uw bomen.',
  'Als gecertificeerde European Tree Worker bieden wij professionele boomverzorging. Van snoei tot ziektediagnose - uw bomen zijn in veilige handen.',
  'tree-pine',
  ARRAY['Professionele snoei', 'Ziektediagnose', 'Veiligheidscontroles', 'Boomadvies'],
  '€150 - €1.500',
  '1-3 dagen',
  true,
  4
),
(
  'Irrigatiesystemen',
  'Slimme bewateringssystemen voor optimale plantverzorging en waterbesparende oplossingen.',
  'Moderne irrigatiesystemen zorgen voor optimale watervoorziening van uw planten. Automatisch, efficiënt en waterbesparend.',
  'droplets',
  ARRAY['Druppelirrigatie', 'Sproeisystemen', 'Slimme timers', 'Regenwateropvang'],
  '€500 - €5.000',
  '1-2 weken',
  true,
  5
),
(
  'Tuinverlichting',
  'Sfeervolle verlichting die uw tuin ook ''s avonds tot leven brengt en voor veiligheid zorgt.',
  'Professionele tuinverlichting creëert sfeer en veiligheid. Van subtiele accentverlichting tot functionele padverlichting.',
  'sun',
  ARRAY['LED spotverlichting', 'Padverlichting', 'Sfeerverlichting', 'Slimme bediening'],
  '€300 - €3.000',
  '3-7 dagen',
  true,
  6
);

-- Insert Project Gallery
INSERT INTO project_gallery (title, location, size_m2, category, description, image_url, image_urls, featured, completion_date) VALUES
(
  'Luxe Villatuin',
  'Alkmaar',
  350,
  '250-500',
  'Complete herinrichting van een villa tuin met zwembad en buitenkeuken',
  'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  ARRAY[
    'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  ],
  true,
  '2024-06-15'
),
(
  'Moderne Gezinstuin',
  'Egmond',
  180,
  '100-250',
  'Kindvriendelijke tuin met speelgebied en moestuin',
  'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  ARRAY[
    'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  ],
  true,
  '2024-05-20'
),
(
  'Compacte Stadstuin',
  'Heiloo',
  75,
  '0-100',
  'Maximaal gebruik van beperkte ruimte in stedelijke omgeving',
  'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  ARRAY[
    'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  ],
  false,
  '2024-04-10'
);

-- Insert Reviews
INSERT INTO reviews (customer_name, customer_location, rating, review_text, service_type, approved, featured) VALUES
(
  'Familie Janssen',
  'Alkmaar',
  5,
  'Frans en zijn team hebben onze tuin volledig getransformeerd. Vakmanschap en betrouwbaarheid op het hoogste niveau.',
  'Tuinaanleg',
  true,
  true
),
(
  'M. van der Berg',
  'Egmond',
  5,
  'Al jaren klant van het onderhoud. Altijd netjes op tijd en de tuin ziet er het hele jaar door prachtig uit.',
  'Tuinonderhoud',
  true,
  true
),
(
  'J. de Wit',
  'Heiloo',
  5,
  'Perfecte service en prachtig resultaat. Kunnen het iedereen aanraden!',
  'Tuinontwerp',
  true,
  true
),
(
  'Maria S.',
  'Alkmaar',
  5,
  'Mijn groenten groeien fantastisch in deze potgrond. Echt het verschil merkbaar!',
  'Producten',
  true,
  false
),
(
  'Piet J.',
  'Bakkum',
  5,
  'Uitstekende kwaliteit en snelle levering. Mijn bloemen hebben nog nooit zo mooi gebloeid.',
  'Producten',
  true,
  false
),
(
  'Linda K.',
  'Egmond',
  5,
  'Biologische potgrond van topkwaliteit. Mijn kruidentuin doet het geweldig!',
  'Producten',
  true,
  false
);