export interface Gem {
  id: string;
  name: {
    en: string;
    kn: string;
  };
  shortDescription: {
    en: string;
    kn: string;
  };
  fullDescription: {
    en: string;
    kn: string;
  };
  funFact: {
    en: string;
    kn: string;
  };
  category: 'heritage' | 'art' | 'nature' | 'commerce' | 'food';
  image: string;
  gallery: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  address: {
    en: string;
    kn: string;
  };
  timings: string;
  entryFee: {
    en: string;
    kn: string;
  };
  rating: number;
  reviewCount: number;
}

export const gems: Gem[] = [
  {
    id: 'sand-sculpture-museum',
    name: {
      en: 'Sand Sculpture Museum',
      kn: 'ಮರಳು ಶಿಲ್ಪ ವಸ್ತುಸಂಗ್ರಹಾಲಯ',
    },
    shortDescription: {
      en: 'India\'s first permanent sand sculpture museum featuring intricate artworks',
      kn: 'ಭಾರತದ ಮೊದಲ ಶಾಶ್ವತ ಮರಳು ಶಿಲ್ಪ ವಸ್ತುಸಂಗ್ರಹಾಲಯ',
    },
    fullDescription: {
      en: 'Nestled within the serene Chamundi Hill region, the Sand Sculpture Museum is a testament to the ephemeral beauty of sand art made permanent. Founded by renowned artist M.N. Gowri, this unique museum houses over 150 sculptures depicting mythology, history, and contemporary themes. Each piece is crafted from specially treated sand that preserves these delicate creations for years.',
      kn: 'ಚಾಮುಂಡಿ ಬೆಟ್ಟದ ಪ್ರಶಾಂತ ಪ್ರದೇಶದಲ್ಲಿ ನೆಲೆಸಿರುವ ಮರಳು ಶಿಲ್ಪ ವಸ್ತುಸಂಗ್ರಹಾಲಯವು ಶಾಶ್ವತವಾಗಿ ಮಾಡಲ್ಪಟ್ಟ ಮರಳು ಕಲೆಯ ಅಲ್ಪಕಾಲಿಕ ಸೌಂದರ್ಯಕ್ಕೆ ಸಾಕ್ಷಿಯಾಗಿದೆ. ಪ್ರಸಿದ್ಧ ಕಲಾವಿದ ಎಂ.ಎನ್. ಗೌರಿ ಅವರಿಂದ ಸ್ಥಾಪಿಸಲ್ಪಟ್ಟ ಈ ವಿಶಿಷ್ಟ ವಸ್ತುಸಂಗ್ರಹಾಲಯವು ಪುರಾಣ, ಇತಿಹಾಸ ಮತ್ತು ಸಮಕಾಲೀನ ವಿಷಯಗಳನ್ನು ಚಿತ್ರಿಸುವ 150 ಕ್ಕೂ ಹೆಚ್ಚು ಶಿಲ್ಪಗಳನ್ನು ಹೊಂದಿದೆ.',
    },
    funFact: {
      en: 'Each sculpture takes 3-4 months to complete and the sand is mixed with a special organic adhesive that makes it last for over 20 years!',
      kn: 'ಪ್ರತಿ ಶಿಲ್ಪವನ್ನು ಪೂರ್ಣಗೊಳಿಸಲು 3-4 ತಿಂಗಳು ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ ಮತ್ತು ಮರಳನ್ನು ವಿಶೇಷ ಸಾವಯವ ಅಂಟು ಬೆರೆಸಲಾಗುತ್ತದೆ ಅದು 20 ವರ್ಷಗಳಿಗೂ ಹೆಚ್ಚು ಕಾಲ ಉಳಿಯುತ್ತದೆ!',
    },
    category: 'art',
    image: '/gems/sand-museum.jpg',
    gallery: ['/gems/sand-museum-1.jpg', '/gems/sand-museum-2.jpg', '/gems/sand-museum-3.jpg'],
    coordinates: { lat: 12.2724, lng: 76.6697 },
    address: {
      en: 'Near Chamundi Hill, Lalithadripura, Mysuru',
      kn: 'ಚಾಮುಂಡಿ ಬೆಟ್ಟದ ಬಳಿ, ಲಲಿತಾದ್ರಿಪುರ, ಮೈಸೂರು',
    },
    timings: '9:00 AM - 6:00 PM',
    entryFee: { en: '₹50 Adults, ₹25 Children', kn: '₹50 ವಯಸ್ಕರು, ₹25 ಮಕ್ಕಳು' },
    rating: 4.5,
    reviewCount: 328,
  },
  {
    id: 'karighatta-hills',
    name: {
      en: 'Karighatta Hills',
      kn: 'ಕರಿಘಟ್ಟ ಬೆಟ್ಟಗಳು',
    },
    shortDescription: {
      en: 'A sacred hilltop with panoramic views and an ancient Srirangapatna temple',
      kn: 'ವಿಹಂಗಮ ನೋಟಗಳು ಮತ್ತು ಪ್ರಾಚೀನ ಶ್ರೀರಂಗಪಟ್ಟಣ ದೇವಾಲಯದೊಂದಿಗೆ ಪವಿತ್ರ ಬೆಟ್ಟದ ತುದಿ',
    },
    fullDescription: {
      en: 'Rising 2697 feet above sea level, Karighatta is a hidden sanctuary just 12 km from Mysuru. The hill is crowned by the Karigirivasa Temple dedicated to Lord Vishnu, offering breathtaking sunrise views over the Kaveri River. The winding path through dense forest reveals peacocks, langurs, and rare birds. Local legend says the hill gets its name from the black rocks (Kari = black, Ghatta = hill) that absorb the morning sun.',
      kn: 'ಸಮುದ್ರ ಮಟ್ಟದಿಂದ 2697 ಅಡಿ ಎತ್ತರದಲ್ಲಿರುವ ಕರಿಘಟ್ಟವು ಮೈಸೂರಿನಿಂದ ಕೇವಲ 12 ಕಿ.ಮೀ ದೂರದಲ್ಲಿರುವ ಗುಪ್ತ ಪ್ರದೇಶವಾಗಿದೆ. ಬೆಟ್ಟದ ಮೇಲೆ ವಿಷ್ಣುವಿಗೆ ಸಮರ್ಪಿತವಾದ ಕರಿಗಿರಿವಾಸ ದೇವಾಲಯವಿದೆ, ಕಾವೇರಿ ನದಿಯ ಮೇಲೆ ಉಸಿರು ಕಟ್ಟುವ ಸೂರ್ಯೋದಯ ನೋಟಗಳನ್ನು ನೀಡುತ್ತದೆ.',
    },
    funFact: {
      en: 'The temple priest performs a unique ritual at dawn where he feeds wild monkeys before opening the temple - a tradition over 400 years old!',
      kn: 'ದೇವಾಲಯದ ಪೂಜಾರಿ ಮುಂಜಾನೆ ವಿಶಿಷ್ಟ ಆಚರಣೆಯನ್ನು ನಡೆಸುತ್ತಾರೆ, ಅಲ್ಲಿ ಅವರು ದೇವಾಲಯವನ್ನು ತೆರೆಯುವ ಮೊದಲು ಕಾಡು ಕೋತಿಗಳಿಗೆ ಆಹಾರ ನೀಡುತ್ತಾರೆ - 400 ವರ್ಷಗಳಿಗೂ ಹೆಚ್ಚು ಹಳೆಯ ಸಂಪ್ರದಾಯ!',
    },
    category: 'nature',
    image: '/gems/karighatta.jpg',
    gallery: ['/gems/karighatta-1.jpg', '/gems/karighatta-2.jpg', '/gems/karighatta-3.jpg'],
    coordinates: { lat: 12.4181, lng: 76.6914 },
    address: {
      en: 'Karighatta, Near Srirangapatna, Mysuru District',
      kn: 'ಕರಿಘಟ್ಟ, ಶ್ರೀರಂಗಪಟ್ಟಣ ಬಳಿ, ಮೈಸೂರು ಜಿಲ್ಲೆ',
    },
    timings: '6:00 AM - 6:00 PM (Temple: 7 AM - 1 PM, 4 PM - 7 PM)',
    entryFee: { en: 'Free', kn: 'ಉಚಿತ' },
    rating: 4.7,
    reviewCount: 156,
  },
  {
    id: 'melody-world-wax-museum',
    name: {
      en: 'Melody World Wax Museum',
      kn: 'ಮೆಲೊಡಿ ವರ್ಲ್ಡ್ ವ್ಯಾಕ್ಸ್ ಮ್ಯೂಸಿಯಂ',
    },
    shortDescription: {
      en: 'A whimsical world of life-size wax figures and vintage music instruments',
      kn: 'ನೈಜ ಗಾತ್ರದ ಮೇಣದ ಆಕೃತಿಗಳು ಮತ್ತು ಹಳೆಯ ಸಂಗೀತ ವಾದ್ಯಗಳ ವಿಲಕ್ಷಣ ಜಗತ್ತು',
    },
    fullDescription: {
      en: 'Hidden in the heart of Mysuru, Melody World is a treasure trove for music lovers and curious minds alike. The museum houses over 100 life-sized wax figures of legendary musicians from Beethoven to A.R. Rahman, alongside a stunning collection of 300+ vintage musical instruments from around the world. The acoustically designed chambers let you hear each instrument\'s unique voice through interactive displays.',
      kn: 'ಮೈಸೂರಿನ ಹೃದಯಭಾಗದಲ್ಲಿ ಅಡಗಿರುವ ಮೆಲೊಡಿ ವರ್ಲ್ಡ್ ಸಂಗೀತ ಪ್ರಿಯರು ಮತ್ತು ಕುತೂಹಲಿ ಮನಸ್ಸುಗಳಿಗೆ ನಿಧಿಯಾಗಿದೆ. ವಸ್ತುಸಂಗ್ರಹಾಲಯವು ಬೀಥೋವೆನ್‌ನಿಂದ ಎ.ಆರ್. ರಹಮಾನ್ ವರೆಗಿನ ದಂತಕಥೆಯ ಸಂಗೀತಗಾರರ 100 ಕ್ಕೂ ಹೆಚ್ಚು ನೈಜ ಗಾತ್ರದ ಮೇಣದ ಆಕೃತಿಗಳನ್ನು ಹೊಂದಿದೆ.',
    },
    funFact: {
      en: 'The museum has a working 200-year-old gramophone that still plays vinyl records - you can request your favorite classic song!',
      kn: 'ವಸ್ತುಸಂಗ್ರಹಾಲಯದಲ್ಲಿ 200 ವರ್ಷ ಹಳೆಯ ಕೆಲಸ ಮಾಡುವ ಗ್ರಾಮೋಫೋನ್ ಇದೆ, ಅದು ಇನ್ನೂ ವಿನೈಲ್ ರೆಕಾರ್ಡ್‌ಗಳನ್ನು ನುಡಿಸುತ್ತದೆ - ನಿಮ್ಮ ನೆಚ್ಚಿನ ಕ್ಲಾಸಿಕ್ ಹಾಡನ್ನು ಕೋರಬಹುದು!',
    },
    category: 'art',
    image: '/gems/melody-world.jpg',
    gallery: ['/gems/melody-world-1.jpg', '/gems/melody-world-2.jpg', '/gems/melody-world-3.jpg'],
    coordinates: { lat: 12.3051, lng: 76.6551 },
    address: {
      en: 'KRS Road, Near Brindavan Gardens, Mysuru',
      kn: 'ಕೆಆರ್‌ಎಸ್ ರಸ್ತೆ, ಬೃಂದಾವನ ಗಾರ್ಡನ್ ಬಳಿ, ಮೈಸೂರು',
    },
    timings: '10:00 AM - 7:00 PM (Closed on Tuesdays)',
    entryFee: { en: '₹150 Adults, ₹80 Children', kn: '₹150 ವಯಸ್ಕರು, ₹80 ಮಕ್ಕಳು' },
    rating: 4.3,
    reviewCount: 412,
  },
  {
    id: 'jayalakshmi-vilas-mansion',
    name: {
      en: 'Jayalakshmi Vilas Mansion',
      kn: 'ಜಯಲಕ್ಷ್ಮಿ ವಿಲಾಸ್ ಮಹಲ್',
    },
    shortDescription: {
      en: 'A restored royal mansion housing a fascinating folklore museum',
      kn: 'ಆಕರ್ಷಕ ಜಾನಪದ ವಸ್ತುಸಂಗ್ರಹಾಲಯವನ್ನು ಹೊಂದಿರುವ ಪುನಃಸ್ಥಾಪಿತ ರಾಜ ಮಹಲ್',
    },
    fullDescription: {
      en: 'Built in 1905 for Princess Jayalakshammanni, this magnificent Indo-Saracenic mansion within the University of Mysore campus is now home to the Folklore Museum. The building itself is a masterpiece of royal architecture, with ornate pillars, sprawling courtyards, and intricate woodwork. Inside, you\'ll discover Karnataka\'s rich folk traditions through 6,500+ artifacts including shadow puppets, traditional masks, agricultural tools, and ceremonial objects.',
      kn: '1905 ರಲ್ಲಿ ರಾಜಕುಮಾರಿ ಜಯಲಕ್ಷಮ್ಮಣ್ಣಿಗಾಗಿ ನಿರ್ಮಿಸಲಾದ, ಮೈಸೂರು ವಿಶ್ವವಿದ್ಯಾಲಯ ಕ್ಯಾಂಪಸ್‌ನಲ್ಲಿರುವ ಈ ಭವ್ಯ ಇಂಡೋ-ಸಾರಾಸೆನಿಕ್ ಮಹಲ್ ಈಗ ಜಾನಪದ ವಸ್ತುಸಂಗ್ರಹಾಲಯಕ್ಕೆ ನೆಲೆಯಾಗಿದೆ. ಕಟ್ಟಡವೇ ಅಲಂಕೃತ ಕಂಬಗಳು, ವಿಸ್ತಾರವಾದ ಅಂಗಳಗಳು ಮತ್ತು ಸಂಕೀರ್ಣ ಮರಗೆಲಸಗಳೊಂದಿಗೆ ರಾಜ ವಾಸ್ತುಶಿಲ್ಪದ ಮೇರುಕೃತಿಯಾಗಿದೆ.',
    },
    funFact: {
      en: 'The mansion has a secret underground tunnel that was said to connect it directly to the Mysore Palace - though it\'s now sealed, the entrance is still visible!',
      kn: 'ಮಹಲ್‌ನಲ್ಲಿ ಗುಪ್ತ ಭೂಗತ ಸುರಂಗವಿದೆ ಎಂದು ಹೇಳಲಾಗುತ್ತದೆ, ಅದು ನೇರವಾಗಿ ಮೈಸೂರು ಅರಮನೆಗೆ ಸಂಪರ್ಕಿಸುತ್ತಿತ್ತು - ಅದು ಈಗ ಮುಚ್ಚಿದ್ದರೂ, ಪ್ರವೇಶದ್ವಾರ ಇನ್ನೂ ಕಾಣಿಸುತ್ತದೆ!',
    },
    category: 'heritage',
    image: '/gems/jayalakshmi-vilas.jpg',
    gallery: ['/gems/jayalakshmi-vilas-1.jpg', '/gems/jayalakshmi-vilas-2.jpg', '/gems/jayalakshmi-vilas-3.jpg'],
    coordinates: { lat: 12.3119, lng: 76.6547 },
    address: {
      en: 'Manasagangotri, University of Mysore Campus, Mysuru',
      kn: 'ಮಾನಸಗಂಗೋತ್ರಿ, ಮೈಸೂರು ವಿಶ್ವವಿದ್ಯಾಲಯ ಕ್ಯಾಂಪಸ್, ಮೈಸೂರು',
    },
    timings: '10:30 AM - 5:30 PM (Closed on Sundays & Government Holidays)',
    entryFee: { en: '₹20 Indians, ₹200 Foreigners', kn: '₹20 ಭಾರತೀಯರು, ₹200 ವಿದೇಶಿಯರು' },
    rating: 4.6,
    reviewCount: 89,
  },
  {
    id: 'devaraja-market',
    name: {
      en: 'Devaraja Market',
      kn: 'ದೇವರಾಜ ಮಾರುಕಟ್ಟೆ',
    },
    shortDescription: {
      en: 'A 140-year-old bustling bazaar bursting with colors, spices, and local life',
      kn: '140 ವರ್ಷ ಹಳೆಯ ಬಣ್ಣಗಳು, ಮಸಾಲೆಗಳು ಮತ್ತು ಸ್ಥಳೀಯ ಜೀವನದಿಂದ ತುಂಬಿರುವ ಗಜಿಬಿಜಿ ಬಜಾರ್',
    },
    fullDescription: {
      en: 'Step into a sensory explosion at Devaraja Market, one of South India\'s oldest and most vibrant bazaars. Established during the reign of Tipu Sultan, this sprawling market stretches across 5 blocks and has been the heartbeat of Mysuru\'s commerce for over 140 years. Wander through lanes overflowing with pyramid-stacked kumkum, mountains of fragrant jasmine, rainbow displays of glass bangles, and sacks of exotic spices. The best time to visit is early morning when flower vendors arrange their blooms in stunning geometric patterns.',
      kn: 'ದಕ್ಷಿಣ ಭಾರತದ ಅತ್ಯಂತ ಹಳೆಯ ಮತ್ತು ಅತ್ಯಂತ ರೋಮಾಂಚಕ ಬಜಾರ್‌ಗಳಲ್ಲಿ ಒಂದಾದ ದೇವರಾಜ ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಇಂದ್ರಿಯ ಸ್ಫೋಟಕ್ಕೆ ಕಾಲಿಡಿ. ಟಿಪ್ಪು ಸುಲ್ತಾನನ ಆಳ್ವಿಕೆಯಲ್ಲಿ ಸ್ಥಾಪಿತವಾದ, ಈ ವಿಸ್ತಾರವಾದ ಮಾರುಕಟ್ಟೆಯು 5 ಬ್ಲಾಕ್‌ಗಳಲ್ಲಿ ಹರಡಿಕೊಂಡಿದೆ ಮತ್ತು 140 ವರ್ಷಗಳಿಂದ ಮೈಸೂರಿನ ವಾಣಿಜ್ಯದ ಹೃದಯಬಡಿತವಾಗಿದೆ.',
    },
    funFact: {
      en: 'The market\'s iconic flower section sells over 2 tonnes of fresh jasmine daily during the Dasara festival - enough to fill an Olympic swimming pool!',
      kn: 'ಮಾರುಕಟ್ಟೆಯ ಐಕಾನಿಕ್ ಹೂವು ವಿಭಾಗವು ದಸರಾ ಹಬ್ಬದ ಸಮಯದಲ್ಲಿ ದಿನಕ್ಕೆ 2 ಟನ್‌ಗಿಂತ ಹೆಚ್ಚು ತಾಜಾ ಮಲ್ಲಿಗೆ ಮಾರಾಟ ಮಾಡುತ್ತದೆ - ಒಲಿಂಪಿಕ್ ಈಜುಕೊಳವನ್ನು ತುಂಬಲು ಸಾಕು!',
    },
    category: 'commerce',
    image: '/gems/devaraja-market.jpg',
    gallery: ['/gems/devaraja-market-1.jpg', '/gems/devaraja-market-2.jpg', '/gems/devaraja-market-3.jpg'],
    coordinates: { lat: 12.3086, lng: 76.6561 },
    address: {
      en: 'Dhanwanthri Road, Devaraja Mohalla, Mysuru',
      kn: 'ಧನ್ವಂತ್ರಿ ರಸ್ತೆ, ದೇವರಾಜ ಮೊಹಲ್ಲಾ, ಮೈಸೂರು',
    },
    timings: '6:00 AM - 9:00 PM (Best: 6 AM - 10 AM)',
    entryFee: { en: 'Free', kn: 'ಉಚಿತ' },
    rating: 4.4,
    reviewCount: 723,
  },
  {
    id: 'karanji-lake',
    name: {
      en: 'Karanji Lake Nature Park',
      kn: 'ಕಾರಂಜಿ ಕೆರೆ ನೇಚರ್ ಪಾರ್ಕ್',
    },
    shortDescription: {
      en: 'A serene urban oasis with a walk-through butterfly aviary and bird sanctuary',
      kn: 'ನಡೆಯುವ ಚಿಟ್ಟೆ ಪಕ್ಷಿಶಾಲೆ ಮತ್ತು ಪಕ್ಷಿಧಾಮದೊಂದಿಗೆ ಪ್ರಶಾಂತ ನಗರ ಓಯಸಿಸ್',
    },
    fullDescription: {
      en: 'Just behind the famous Mysuru Zoo lies Karanji Lake, a 90-acre nature haven that most tourists overlook. The park is home to India\'s largest walk-through aviary, where you can stroll among hundreds of free-flying butterflies. The lake itself is a paradise for birdwatchers, hosting over 147 species including painted storks, spot-billed pelicans, and the rare purple heron. A nature trail winds through the Regional Museum of Natural History and the Butterfly Park, offering a full day of eco-exploration.',
      kn: 'ಪ್ರಸಿದ್ಧ ಮೈಸೂರು ಮೃಗಾಲಯದ ಹಿಂದೆಯೇ ಕಾರಂಜಿ ಕೆರೆ ಇದೆ, ಹೆಚ್ಚಿನ ಪ್ರವಾಸಿಗರು ಕಡೆಗಣಿಸುವ 90 ಎಕರೆ ಪ್ರಕೃತಿ ತಾಣ. ಉದ್ಯಾನವನವು ಭಾರತದ ಅತಿದೊಡ್ಡ ನಡೆಯುವ ಪಕ್ಷಿಶಾಲೆಗೆ ನೆಲೆಯಾಗಿದೆ, ಅಲ್ಲಿ ನೀವು ನೂರಾರು ಮುಕ್ತವಾಗಿ ಹಾರುವ ಚಿಟ್ಟೆಗಳ ನಡುವೆ ನಡೆಯಬಹುದು.',
    },
    funFact: {
      en: 'During winter migration (November-February), over 20,000 birds from as far as Siberia and Central Asia make Karanji Lake their temporary home!',
      kn: 'ಚಳಿಗಾಲದ ವಲಸೆ ಸಮಯದಲ್ಲಿ (ನವೆಂಬರ್-ಫೆಬ್ರವರಿ), ಸೈಬೀರಿಯಾ ಮತ್ತು ಮಧ್ಯ ಏಷ್ಯಾದಿಂದ 20,000 ಕ್ಕೂ ಹೆಚ್ಚು ಪಕ್ಷಿಗಳು ಕಾರಂಜಿ ಕೆರೆಯನ್ನು ತಮ್ಮ ತಾತ್ಕಾಲಿಕ ನೆಲೆಯಾಗಿ ಮಾಡಿಕೊಳ್ಳುತ್ತವೆ!',
    },
    category: 'nature',
    image: '/gems/karanji-lake.jpg',
    gallery: ['/gems/karanji-lake-1.jpg', '/gems/karanji-lake-2.jpg', '/gems/karanji-lake-3.jpg'],
    coordinates: { lat: 12.2958, lng: 76.6631 },
    address: {
      en: 'Behind Mysuru Zoo, Indira Nagar, Mysuru',
      kn: 'ಮೈಸೂರು ಮೃಗಾಲಯದ ಹಿಂದೆ, ಇಂದಿರಾ ನಗರ, ಮೈಸೂರು',
    },
    timings: '8:30 AM - 5:30 PM (Closed on Tuesdays)',
    entryFee: { en: '₹50 Adults, ₹20 Children, Aviary ₹20 extra', kn: '₹50 ವಯಸ್ಕರು, ₹20 ಮಕ್ಕಳು, ಪಕ್ಷಿಶಾಲೆ ₹20 ಹೆಚ್ಚುವರಿ' },
    rating: 4.5,
    reviewCount: 534,
  },
];

export const categoryInfo = {
  heritage: {
    en: { name: 'Heritage', icon: 'landmark', color: 'mysore-burgundy' },
    kn: { name: 'ಪರಂಪರೆ', icon: 'landmark', color: 'mysore-burgundy' },
  },
  art: {
    en: { name: 'Art & Museums', icon: 'palette', color: 'mysore-gold' },
    kn: { name: 'ಕಲೆ ಮತ್ತು ವಸ್ತುಸಂಗ್ರಹಾಲಯಗಳು', icon: 'palette', color: 'mysore-gold' },
  },
  nature: {
    en: { name: 'Nature', icon: 'trees', color: 'mysore-teal' },
    kn: { name: 'ಪ್ರಕೃತಿ', icon: 'trees', color: 'mysore-teal' },
  },
  commerce: {
    en: { name: 'Markets & Artisans', icon: 'store', color: 'mysore-brown' },
    kn: { name: 'ಮಾರುಕಟ್ಟೆ ಮತ್ತು ಕುಶಲಕರ್ಮಿಗಳು', icon: 'store', color: 'mysore-brown' },
  },
  food: {
    en: { name: 'Food & Culture', icon: 'utensils', color: 'destructive' },
    kn: { name: 'ಆಹಾರ ಮತ್ತು ಸಂಸ್ಕೃತಿ', icon: 'utensils', color: 'destructive' },
  },
};
