export interface TourService {
  id: string;
  badge: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  isDarkTheme?: boolean;
  tags: { iconName: string; label: string }[];
  ctaLabel: string;
  duration?: string;
  idealFor?: string;
  highlights?: string[];
  inclusions?: string[];
}

export interface Destination {
  id: string;
  badge: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  bestTimeToVisit: string;
  recommendedStay: string;
  highlights: string[];
  location: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'beaches' | 'mountains' | 'wildlife' | 'heritage';
  categoryLabel: string;
  image: string;
  location: string;
  caption: string;
}

export const TOUR_SERVICES: TourService[] = [
  {
    id: 'airport-transfers',
    badge: 'SEAMLESS TRANSIT',
    title: 'Airport Transfers',
    subtitle: 'Executive Chauffeur Fleet',
    description:
      'Enjoy comfortable, reliable transportation between the airport, boutique hotels, and your chosen destinations. Modern AC fleet with courteous chauffeurs and flight tracking.',
    isDarkTheme: true,
    tags: [
      { iconName: 'Clock', label: '24/7 On-Time' },
      { iconName: 'Car', label: 'Luxury AC' }
    ],
    ctaLabel: 'BOOK TRANSFER',
    duration: 'Direct & On Demand',
    idealFor: 'Solo, couples, families, VIP executives',
    highlights: [
      'Complimentary flight tracking & waiting time up to 90 minutes',
      'VIP greeting service inside Bandaranaike International Airport (CMB)',
      'Bottled Ceylon water, cold towels, and high-speed Wi-Fi onboard',
      'Toll expressway fees and airport parking fully included',
      'Child seats and booster chairs available upon prior request'
    ],
    inclusions: [
      'Private air-conditioned vehicle (Sedan, KDH Van or SUV)',
      'English-speaking certified tourist chauffeur',
      'All fuel, expressway tolls & highway surcharges',
      'Luggage assistance door-to-door'
    ]
  },
  {
    id: 'sightseeing-tours',
    badge: 'HISTORIC & URBAN',
    title: 'Sightseeing Tours',
    description:
      "Discover Sri Lanka's iconic landmarks, historic colonial fortifications, cultural bastions, and vibrant coastal cities on expertly guided walking and driving tours.",
    image:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80',
    tags: [
      { iconName: 'Clock', label: 'Full & Half Day' },
      { iconName: 'UserCheck', label: 'Licensed Guide' }
    ],
    ctaLabel: 'EXPLORE ITINERARY',
    duration: 'Half Day (4 hrs) / Full Day (8 hrs)',
    idealFor: 'History buffs, photographers, architecture lovers',
    highlights: [
      'Galle Dutch Fort UNESCO ramparts, colonial courtyards, and clocktower',
      'Colombo Old Dutch Hospital, Pettah spice bazaar, and Gangaramaya Temple',
      'Artisan craft workshops and handloom textile ateliers',
      'Sunset oceanfront strolls with street food tasting (kottu, egg hoppers)'
    ],
    inclusions: [
      'Dedicated chauffeur-guide with audio commentary',
      'City entrance tickets and temple permits',
      'King coconut refreshment stops',
      'Private door-to-door hotel transfers'
    ]
  },
  {
    id: 'tea-plantation-tours',
    badge: 'HILL COUNTRY',
    title: 'Tea Plantation & Mountain Tours',
    description:
      'Explore lush tea estates, misty highlands, cascading waterfalls, and picturesque hill-country hamlets like Ella and Nuwara Eliya with historic train journeys.',
    image:
      'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80',
    tags: [
      { iconName: 'Train', label: 'Scenic Rail Option' },
      { iconName: 'Coffee', label: 'Tea Tastings' }
    ],
    ctaLabel: 'EXPLORE ITINERARY',
    duration: '2 to 4 Days (Customizable)',
    idealFor: 'Nature lovers, couples, tea connoisseurs',
    highlights: [
      'Reserved 1st or 2nd class seats on the world-famous Kandy-Ella scenic train',
      'Walking across the Nine Arch Bridge surrounded by emerald jungle tea slopes',
      'Private Ceylon tea tasting and factory tour with a resident master planter',
      'Sunrise hike to Little Adam’s Peak overlooking Ella Gap',
      'Ramboda Falls and British colonial estates in Nuwara Eliya'
    ],
    inclusions: [
      'Pre-reserved train tickets between Kandy, Nanu Oya, and Ella',
      'Luxury chauffeured transport keeping up with your luggage',
      'Factory tour fees and artisanal single-origin tea tastings',
      'Curated recommendations for colonial tea planters bungalows'
    ]
  },
  {
    id: 'wildlife-safari',
    badge: 'WILD EXPEDITIONS',
    title: 'Wildlife & Safari Adventures',
    description:
      'Experience heart-racing open-top 4x4 safaris in Yala, Udawalawe, and Minneriya. Witness herds of wild elephants, elusive Sri Lankan leopards, and sloth bears.',
    image:
      'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=1200&q=80',
    tags: [
      { iconName: 'Compass', label: '4x4 Safari Jeep' },
      { iconName: 'Eye', label: 'Naturalist Ranger' }
    ],
    ctaLabel: 'EXPLORE ITINERARY',
    duration: 'Half Day / Full Day Safari',
    idealFor: 'Wildlife photographers, families, adventure seekers',
    highlights: [
      'Tracking the Sri Lankan leopard (Panthera pardus kotiya) in Yala Block 1',
      'Udawalawe elephant transit home and massive gathering of wild herds',
      'Minneriya "Great Elephant Gathering" during dry season (up to 300 elephants)',
      'Birdwatching in Bundala Ramsar wetlands with over 200 migratory species',
      'Specially modified open-sided 4x4 Land Cruiser with raised tiered seating'
    ],
    inclusions: [
      'Private 4x4 safari vehicle with dedicated driver and spotter tracker',
      'Department of Wildlife Conservation entry tickets and safari permits',
      'Morning gourmet breakfast hamper or sunset sundowner refreshments',
      'Binoculars and field guides provided onboard'
    ]
  },
  {
    id: 'beach-coastal-tours',
    badge: 'COASTAL SANCTUARY',
    title: 'Beach & Coastal Tours',
    description:
      'Unwind along secluded palm-lined golden shores from Bentota to Mirissa. Experience whale watching expeditions, coral snorkeling, surfing, and sunset seafood dining.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    tags: [
      { iconName: 'Ship', label: 'Ocean Excursions' },
      { iconName: 'Sun', label: 'Tropical Bays' }
    ],
    ctaLabel: 'EXPLORE ITINERARY',
    duration: '3 to 7 Days (Customizable)',
    idealFor: 'Beach lovers, honeymooners, marine enthusiasts',
    highlights: [
      'Private catamaran blue whale and spinner dolphin watching in Mirissa',
      'Snorkeling with wild sea turtles at Polhena & Hikkaduwa coral reefs',
      'Surfing gentle breaks in Weligama Bay with certified instructors',
      'Boutique sunset cocktails at Coconut Tree Hill overlooking Indian Ocean',
      'Madu River mangrove safari with cinnamon island demonstration'
    ],
    inclusions: [
      'Certified boat charter with safety jackets and marine insurance',
      'Snorkeling gear and bottled water onboard',
      'Private chauffeur transitions between south coast beaches',
      'Curated beachfront dining reservations'
    ]
  },
  {
    id: 'cultural-heritage-tours',
    badge: 'LIVING HERITAGE',
    title: 'Cultural & Heritage Tours',
    description:
      'Step back millennia into the sacred Cultural Triangle. Visit ancient rock temples, majestic royal ruins in Polonnaruwa, sacred relics in Kandy, and artisan villages.',
    image:
      'https://images.unsplash.com/photo-1588598198321-9735fd52455f?auto=format&fit=crop&w=1200&q=80',
    tags: [
      { iconName: 'Landmark', label: '6 UNESCO Sites' },
      { iconName: 'BookOpen', label: 'Deep Storytelling' }
    ],
    ctaLabel: 'EXPLORE ITINERARY',
    duration: '3 to 6 Days (Customizable)',
    idealFor: 'Culture enthusiasts, spiritual travelers, families',
    highlights: [
      'Sigiriya Lion Rock 5th-century palace citadel and ancient frescoes',
      'Dambulla Golden Cave Temple with 150+ gilded Buddha statues',
      'Temple of the Sacred Tooth Relic (Sri Dalada Maligawa) evening pooja in Kandy',
      'Sacred ancient capitals of Anuradhapura and Polonnaruwa by bicycle or buggy',
      'Traditional Kandyan cultural dance and fire-walking presentation'
    ],
    inclusions: [
      'Licensed Archaeological guide with deep historical insight',
      'Pre-arranged fast-track ticketing to UNESCO World Heritage complexes',
      'Traditional village bullock cart ride and home-cooked clay pot lunch',
      'Private climate-controlled transport between heritage sites'
    ]
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'sigiriya',
    badge: 'UNESCO MARVEL',
    title: 'Sigiriya Rock Fortress',
    description: '5th-century palace citadel rising 200m from emerald jungles with ancient fresco galleries.',
    fullDescription:
      'Rising dramatically 200 meters above the central jungle plains, Sigiriya is an ancient sky palace built by King Kashyapa in the 5th century. Famed for its monumental lion paw gateway, mirror wall with historical graffiti, and preserved celestial maidens frescoes, Sigiriya is widely recognized as the 8th Wonder of the World.',
    image:
      'https://images.unsplash.com/photo-1588598198321-9735fd52455f?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'December to April, July to September (early morning climbs recommended)',
    recommendedStay: '1 - 2 Days',
    location: 'Matale District, Central Province',
    highlights: [
      'Climb the 1,200 steps past the colossal Lion Paws to the royal palace plateau',
      'Gaze at the 1,500-year-old painted frescoes of the heavenly maidens',
      'Walk through the oldest landscaped water gardens in Asia',
      'Catch panoramic 360-degree sunrise views of Pidurangala Rock'
    ]
  },
  {
    id: 'ella',
    badge: 'HIGHLAND PARADISE',
    title: 'Ella & Nine Arch Bridge',
    description: 'Colonial viaduct wonder surrounded by tea estates, misty peaks, and serene waterfalls.',
    fullDescription:
      'Ella is a tranquil mountain village tucked in the Uva Province highlands. It combines dramatic topography, cascading waterfalls like Ravana Falls, and the iconic Nine Arch Bridge—a masterwork of colonial British railway engineering constructed without a single piece of steel.',
    image:
      'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'January to May (clear skies and pleasant mountain weather)',
    recommendedStay: '2 - 3 Days',
    location: 'Badulla District, Uva Province',
    highlights: [
      'Photograph the iconic blue train traversing the Nine Arch Bridge',
      'Gentle hike up Little Adam’s Peak through rolling tea plantations',
      'Challenging climb to Ella Rock for mist-shrouded valley views',
      'Cool off at the multi-tiered Diyaluma and Ravana waterfalls'
    ]
  },
  {
    id: 'nuwara-eliya',
    badge: 'LITTLE ENGLAND',
    title: 'Nuwara Eliya Tea Hills',
    description: 'Historic colonial bungalows, pristine Ceylon tea factories, and cool mountain breezes.',
    fullDescription:
      'Nestled at an elevation of 1,868 meters, Nuwara Eliya earned the title "Little England" for its cool climate, Tudor-style country cottages, manicured golf courses, and Gregory Lake. It remains the heart of the world-acclaimed high-grown Ceylon Tea trade.',
    image:
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'February to May (crisp sunshine and spring flora)',
    recommendedStay: '1 - 2 Days',
    location: 'Central Province',
    highlights: [
      'High tea at the historic 1891 Grand Hotel',
      'Factory tour and tea picking at Pedro or Labookellie tea estates',
      'Boat cruise on Lake Gregory surrounded by pine-covered hills',
      'Victorian post office visit and colonial country club strolls'
    ]
  },
  {
    id: 'kandy',
    badge: 'SACRED HEART',
    title: 'Kandy Royal City',
    description: 'Temple of the Sacred Tooth Relic, serene royal lake, and botanical royal gardens.',
    fullDescription:
      'The last royal capital of Sri Lanka before British colonization, Kandy is a UNESCO World Heritage cultural haven nestled among rainforest-clad hills. At its center rests the sacred Temple of the Tooth (Sri Dalada Maligawa), preserving Sri Lanka’s most revered Buddhist relic.',
    image:
      'https://images.unsplash.com/photo-1608755728617-aefab37d2edd?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'December to April & July/August during the famous Esala Perahera festival',
    recommendedStay: '2 Days',
    location: 'Central Province',
    highlights: [
      'Attend the evening drumming and pooja ceremony at the Temple of the Tooth',
      'Stroll the 147-acre Royal Botanical Gardens in Peradeniya with giant bamboo',
      'Circumnavigate the scenic Kandy Lake at twilight',
      'Visit the Ceylon Tea Museum in Hantana'
    ]
  },
  {
    id: 'yala',
    badge: 'BIG GAME SAFARI',
    title: 'Yala National Park',
    description: "World's highest leopard density alongside free-roaming elephant herds and saltwater lagoons.",
    fullDescription:
      'Bordering the Indian Ocean, Yala National Park spans 978 square kilometers of thorn scrub, freshwater lakes, and ocean beaches. It is globally celebrated as having one of the highest densities of leopards on earth, alongside abundant Asian elephants, sloth bears, and crocodiles.',
    image:
      'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'February to July (dry season offers prime leopard and wildlife sightings)',
    recommendedStay: '1 - 2 Days (Morning & Afternoon Safaris)',
    location: 'Southern & Uva Provinces',
    highlights: [
      'Dawn safari in search of leopards lounging on monumental granite rocks',
      'Elephants bathing in seasonal waterholes',
      'Spotting rare sloth bears during the palu fruit season',
      'Pristine seaside dunes and coastal wildlife observation'
    ]
  },
  {
    id: 'mirissa',
    badge: 'OCEAN COAST',
    title: 'Mirissa & South Coast',
    description: 'Coconut tree hills, legendary whale watching, golden sunsets, and secluded surf breaks.',
    fullDescription:
      'Mirissa is Sri Lanka’s premier coastal sanctuary, famous for its crescent-shaped golden beach, turquoise bay, and swaying palm groves. Just off its shores lies the deep underwater trench where majestic Blue Whales, Sperm Whales, and pods of spinner dolphins migrate year-round.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'November to April (calm blue seas and peak whale watching season)',
    recommendedStay: '2 - 4 Days',
    location: 'Southern Province',
    highlights: [
      'Early morning responsible whale watching expedition with marine biologists',
      'Iconic Coconut Tree Hill for panoramic sunset photography',
      'Surfing gentle reef breaks at Secret Beach',
      'Fresh grilled seafood dining right by the lapping waves'
    ]
  },
  {
    id: 'galle',
    badge: '16TH-CENTURY',
    title: 'Galle Colonial Fort',
    description: 'Living ramparts overlooking the Indian ocean, cobbled alleys, and boutique heritage villas.',
    fullDescription:
      'First built by the Portuguese in 1588 and extensively fortified by the Dutch in the 17th century, Galle Fort is the best-preserved European fortified city in South Asia. Today, it thrives as a bohemian enclave of art galleries, gem merchants, boutique hotels, and atmospheric cafes within historic coral-stone ramparts.',
    image:
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'October to April (warm tropical sunshine)',
    recommendedStay: '1 - 2 Days',
    location: 'Galle District, Southern Coast',
    highlights: [
      'Walk the oceanfront ramparts at sunset to the white Galle Lighthouse',
      'Explore restored Dutch colonial merchant houses and cobblestone lanes',
      'Visit the National Maritime Museum and Dutch Reformed Church',
      'Boutique gemstone and Ceylon sapphire shopping'
    ]
  },
  {
    id: 'horton-plains',
    badge: 'CLOUD PLATEAU',
    title: "Horton Plains & World's End",
    description: 'Wild high-altitude plateau terminating in a dramatic 870-meter vertical sheer cliff drop.',
    fullDescription:
      'Resting at an altitude over 2,100 meters, Horton Plains National Park is a windswept plateau of montane grasslands and cloud forests. It is home to endemic sambar deer, purple-faced langurs, and the famous "World’s End"—a sheer precipice plunging 870 meters down into tea estates.',
    image:
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'January to March (clear morning visibility before mist settles)',
    recommendedStay: 'Half Day (Hike starts at 6:00 AM)',
    location: 'Central Highlands',
    highlights: [
      'Circular 9.5 km nature trek across mystical cloud forest and dwarf bamboo',
      'Breath-taking view over the edge of World’s End cliff',
      'Mini World’s End viewpoint with dramatic Southern vistas',
      'Baker’s Falls cascading over granite boulders'
    ]
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-1',
    title: 'Ella Nine Arch Railway Viaduct',
    category: 'mountains',
    categoryLabel: 'Mountains & Tea',
    image:
      'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80',
    location: 'Ella, Central Highlands',
    caption: 'The majestic colonial stone viaduct framed by morning mist and vibrant green tea bushes.'
  },
  {
    id: 'photo-2',
    title: 'Sunset over Mirissa Coast',
    category: 'beaches',
    categoryLabel: 'Beaches',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    location: 'Mirissa, Southern Coast',
    caption: 'Golden hour silhouette of leaning coconut palms kissing the warm Indian Ocean surf.'
  },
  {
    id: 'photo-3',
    title: 'Wild Elephant Herd on the March',
    category: 'wildlife',
    categoryLabel: 'Wildlife',
    image:
      'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=1200&q=80',
    location: 'Udawalawe / Minneriya',
    caption: 'Gentle giants navigating through the wild scrubland in their ancestral migratory corridor.'
  },
  {
    id: 'photo-4',
    title: 'The Scenic Blue Train to Nuwara Eliya',
    category: 'mountains',
    categoryLabel: 'Mountains & Tea',
    image:
      'https://images.unsplash.com/photo-1588258524675-c61921852df8?auto=format&fit=crop&w=1200&q=80',
    location: 'Kandy to Ella Rail Passage',
    caption: 'The celebrated highland train passage tracing the contours of emerald tea valleys.'
  },
  {
    id: 'photo-5',
    title: 'Galle Fort Ramparts & Lighthouse',
    category: 'heritage',
    categoryLabel: 'Heritage',
    image:
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80',
    location: 'Galle Dutch Fort',
    caption: 'Cobbled alleys, century-old ramparts, and maritime legacy overlooking the ocean.'
  },
  {
    id: 'photo-6',
    title: 'Twilight Reflections on Southern Shores',
    category: 'beaches',
    categoryLabel: 'Beaches',
    image:
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    location: 'Bentota & Ahangama',
    caption: 'Stilt fishermen silhouettes and mirror-like tide pools under an amber evening sky.'
  }
];

export const COMPANY_CONTACT = {
  name: 'Explore Ceylon Tours',
  tagline: 'Bespoke Island Journeys',
  phoneDisplay: '0767247699',
  phoneCall: '+94767247699',
  phone2Display: '0760256625',
  phone2Call: '+94760256625',
  hotlines: [
    { display: '0767247699', tel: '+94767247699' },
    { display: '0760256625', tel: '+94760256625' }
  ],
  whatsappUrl: 'https://wa.me/94767247699?text=Hello%20Explore%20Ceylon%20Tours,%20I%20would%20like%20to%20inquire%20about%20a%20bespoke%20Sri%20Lankan%20tour.',
  email: 'zeemazeema12@gmail.com',
  address: 'Colombo, Sri Lanka',
  license: 'Registered Sri Lanka Tourism Development Authority (SLTDA)'
};

