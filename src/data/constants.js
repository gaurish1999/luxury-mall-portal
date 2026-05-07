export const NAV_SECTIONS = [
  { id: 'hero', label: 'Overview', icon: 'home' },
  { id: 'demographics', label: 'Demographics', icon: 'bar-chart-2' },
  { id: 'retail', label: 'Luxury Retail', icon: 'shopping-bag' },
  { id: 'events', label: 'Events & Venues', icon: 'calendar' },
];

export const STATS = [
  { label: 'Annual Visitors (2024)', value: 111, suffix: 'M+', prefix: '' },
  { label: 'Retail Sales Velocity', value: 12.5, suffix: 'B+', prefix: '$' },
  { label: 'Gross Leasable Area', value: 3.7, suffix: 'M+', prefix: '' }, // Sq Ft GLA
  { label: 'Premium Brands', value: 1200, suffix: '+', prefix: '' },
];

export const FOOTFALL_DATA = [
  { year: '2020', visitors: 62 },
  { year: '2021', visitors: 78 },
  { year: '2022', visitors: 88 },
  { year: '2023', visitors: 105 },
  { year: '2024', visitors: 111 },
];

export const RETAIL_BRANDS = [
  {
    name: 'Hermès',
    category: 'Fashion Avenue',
    image: 'hermes.webp', 
    url: 'https://www.hermes.com'
  },
  {
    name: 'Louis Vuitton',
    category: 'Fashion Avenue',
    image: 'louis-vuitton.webp', 
    url: 'https://www.louisvuitton.com'
  },
  {
    name: 'Rolex',
    category: 'Watches & Jewelry',
    image: 'rolex.webp', 
    url: 'https://www.rolex.com'
  },
  {
    name: 'Cartier',
    category: 'Watches & Jewelry',
    image: 'https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwa6a43eb2/images/large/8906b9f795c250f5aaa8000ceea4536d.png?sw=2000&sh=2000&sm=fit&sfrm=png', // Your preferred watch/jewelry image
    url: 'https://www.cartier.com'
  },
  {
    name: 'Henry Jacques',
    category: 'Perfumes & Lifestyle',
    image: 'https://henry-jacques.transforms.svdcdn.com/production/images/home/Voyage-banner/HJ-2025-Voyage-8804_HIGH-RES-CROP-FULL-NICKQUINEv2_2-edited.png?w=1800&h=1350&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1763998819&s=b7a29c98a14557252f9de8ff05bc9493', 
    url: 'https://parfumshenryjacques.com/'
  },
  {
    name: 'Balenciaga',
    category: 'Fashion Avenue',
    image: 'balenciaga.webp', 
    url: 'https://www.balenciaga.com'
  },
  {
    name: 'Tiffany & Co.',
    category: 'The Souk',
    image: 'tiffany.webp',
    url: 'https://www.tiffany.com'
  },
  {
    name: 'Gucci',
    category: 'Fashion Avenue',
    image: 'gucci.webp', 
    url: 'https://www.gucci.com'
  }
  // Add more brands as needed
];

export const RETAIL_WINGS = [
  { wing: 'Fashion Avenue', speciality: 'Haute Couture & Luxury', brands: 150 },
  { wing: 'The Souk', speciality: 'Jewelry & Arabic Heritage', brands: 220 },
  { wing: 'The Village', speciality: 'Outdoor Lifestyle & Denim', brands: 85 },
  { wing: 'Chinatown', speciality: 'Asian Fashion & Wellness', brands: 60 },
];

export const EVENT_VENUES = [
  {
    id: 'star-atrium',
    name: 'The Star Atrium',
    capacity: '2,500+',
    description: 'The mall’s central architectural masterpiece, offering unrivaled 360-degree visibility across four levels. Ideal for massive product launches and high-footfall public activations.',
    features: ['360° Visibility', 'High-Res LED Integration', 'Central Footfall'],
    image: 'https://images.unsplash.com/photo-1582650859079-ee63913ecb84?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fashion-catwalk',
    name: 'Fashion Avenue Catwalk',
    capacity: '800',
    description: 'A dedicated, ultra-luxury setting within the high-fashion wing. Features a built-in professional runway and hydraulic platform, surrounded by the world’s leading maisons.',
    features: ['Ultra-Luxury Setting', 'Built-in Runway', 'VIP Seating Areas'],
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ice-rink',
    name: 'Dubai Ice Rink',
    capacity: '5,000+',
    description: 'An Olympic-sized venue that transforms into a massive concert or exhibition hall. Features advanced audio-visual infrastructure and customizable flooring for unique, large-scale events.',
    features: ['Olympic Sized', 'Multi-purpose Flooring', 'Concert Audio'],
    // FIXED URL: High-quality indoor rink atmosphere
    image: 'https://images.unsplash.com/photo-1517137879134-48acfbe3be13?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fountain-views',
    name: 'Fountain Views Boardwalk',
    capacity: '1,500+',
    description: 'An exclusive outdoor activation zone with breathtaking, front-row views of The Dubai Fountain and Burj Khalifa. The ultimate destination for high-impact evening events and brand takeovers.',
    features: ['Burj Khalifa View', 'Fountain Proximity', 'Premium Outdoor Zone'],
    // FIXED URL: Stunning evening view of the Dubai Fountain & Burj Khalifa
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800'
  }
];

export const EXPANSION_ROADMAP = [
  {
    phase: 'Phase I',
    title: 'Groundbreaking & Site Prep',
    date: 'Q3 2024',
    status: 'Completed',
    investment: 'AED 250M',
    details: 'Initial structural reinforcement of the North Wing and utility diversion to support vertical expansion.'
  },
  {
    phase: 'Phase II',
    title: 'The Grand Atrium Link',
    date: 'Q2 2025',
    status: 'In Progress',
    investment: 'AED 600M',
    details: 'Integration of the new luxury corridor connecting the existing Fashion Avenue to the new expansion zone.'
  },
  {
    phase: 'Phase III',
    title: 'Luxury Retail Handover',
    date: 'Q4 2025',
    status: 'Upcoming',
    investment: 'AED 450M',
    details: 'Handover of 240 new units to global anchor tenants and luxury maisons for fit-out works.'
  },
  {
    phase: 'Phase IV',
    title: 'Grand Inauguration',
    date: 'Q2 2026',
    status: 'Future',
    investment: 'AED 200M',
    details: 'Completion of the expansion, adding 1.2M sq. ft. of premium leasable area to the Dubai Mall portfolio.'
  }
];

export const LIFESTYLE_ASSETS = [
  {
    id: 'aquarium',
    name: 'Dubai Aquarium',
    stat: '10M Liters',
    label: 'Water Capacity',
    description: 'Dive into a world of wonder at Dubai Mall Aquarium & Underwater Zoo, experience one of the world’s largest suspended aquariums, home to thousands of marine animals. Walk through a mesmerizing tunnel surrounded by sharks, rays, and vibrant schools of fish. Meet majestic crocodiles, playful otters, and enchanting penguins in the captivating Underwater Zoo above.',
    image: 'https://mcpprodcdn.azureedge.net/uploads/advertisement/mainPicture/69d36331721d4.jpg'
  },
  {
    id: 'fountain',
    name: 'The Dubai Fountain',
    stat: '6,600',
    label: 'WET Superlights',
    description: 'Dubai Fountain Experience the world’s largest choreographed fountain show, a breathtaking spectacle set on the Burj Lake beside Dubai Mall. The iconic attraction brings music, and light together in perfect harmony, dancing in sync with classical melodies and contemporary hits. Dubai Fountain Timings: • Afternoon Shows (Except Friday): 1:00 PM & 1:30 PM • Evening Shows (Every 30 minutes): 6:00 PM - 11:30 PM • Friday Shows: 2:00 PM & 2:30 PM',
    image: 'https://mcpprodcdn.azureedge.net/uploads/store/elevatedPic/69677f022d566.jpg'
  },
  {
    id: 'burj-khalifa',
    name: 'AT THE TOP, BURJ KHALIFA',
    stat: '2,717',
    label: 'Feet Tall',
    description: 'Step into a world of wonder as you ascend to At the Top, Burj Khalifa, the world\'s tallest observation deck at Dubai Mall. Soar high above the vibrant city, where breath-taking panoramic views stretch from the desert skyline to the sparkling Arabian Gulf.',
    image: 'https://mcpprodcdn.azureedge.net/uploads/store/plus1Pic/68108b8e6f5e5.jpg'
  }
];