export type VehicleSpec = { label: string; sub: string }
export type VehicleData = {
  badge: string; title: string; popular: string
  color: string; badgeOrange: boolean
  price: string; priceLabel: string
  specs: VehicleSpec[]; tags: string[]
  tagOrange: boolean; btnLabel: string; selectKey: string
}
export type FaqItem = { q: string; a: string }
export type AttractionItem = { title: string; desc: string }
export type RouteItem = { title: string; meta?: string[]; desc: string; fareLabel?: string; fare?: string }
export type BenefitItem = { title: string; desc: string }
export type WhyCard = { title: string; desc: string }
export type FareRow = { vehicle: string; [key: string]: string }
export type OptionsRow = { vehicle: string; cap: string; ac: string; ideal: string }
export type StepItem = { num: string; title: string; desc: string }
export type FeatureItem = { title: string; desc: string }
export type SeasonItem = { title: string; paras: string[] }

export type TrustItem = { title: string; sub: string; iconType: string }

export type WeddingData = {
  heading: string; intro: string; detail: string; list: string[]
}

export type NetworkLink = { href: string; city: string; type: string }

export type EiData = { included: string[]; excluded: string[] }

export type LocalFareRow = { vehicle: string; seating: string; fare: string; hours?: string; km?: string }
export type OutstationFareRow = { vehicle: string; seating?: string; group?: string; rate?: string; features?: string; best?: string; local?: string; outstation?: string }

export interface CityData {
  slug: string
  cityName: string
  pageTitle: string
  metaTitle: string
  metaDesc: string
  metaKeywords: string
  topbarText: string
  heroHeading: string
  heroSub: string
  heroBadges: string[]
  bookingTabs: string[]
  defaultCity: string
  vehicleOptions: string[]
  trustItems: TrustItem[]
  infoBoxText: string
  introH1: string
  introParagraphs: string[]
  sectionServicesTitle: string
  vehicles: VehicleData[]
  // Tables
  optionsTable?: OptionsRow[]
  localFareTable?: LocalFareRow[]
  outstationFareTable?: OutstationFareRow[]
  fleetTable?: OutstationFareRow[]
  luxuryTable?: { vehicle: string; seating: string; local: string; outstation: string }[]
  localFareNote?: string
  outstationFareNote?: string
  fleetNote?: string
  luxuryNote?: string
  // Tags
  useTags: string[]
  // Sections
  benefits?: BenefitItem[]
  ei: EiData
  whyTempoTitle?: string
  whyTempoParas?: string[]
  steps?: StepItem[]
  features?: FeatureItem[]
  attractions: AttractionItem[]
  routes?: RouteItem[]
  seasons?: SeasonItem[]
  whyCards: WhyCard[]
  faqs: FaqItem[]
  noteBox: string
  wedding?: WeddingData
  networkLinks?: NetworkLink[]
  // Footer
  footerServices: string[]
  footerRoutes: string[]
  popularRoutes: string[]
  ctaHeading: string
  ctaDesc: string
}

/* ══════════════════════════════════════════
   KANPUR
══════════════════════════════════════════ */
const kanpur: CityData = {
  slug: 'kanpur',
  cityName: 'Kanpur',
  pageTitle: 'Tempo Traveller on Rent in Kanpur',
  metaTitle: 'Tempo Traveller on Rent in Kanpur | Yatra Travel India – Weddings, Outstation and Local Tours',
  metaDesc: 'Book tempo traveller on rent in Kanpur for weddings, VIP travel, Lucknow, Varanasi, Prayagraj and Delhi outstation trips. 12 to 20 seater. Fixed fare, experienced drivers. Call 9044019511.',
  metaKeywords: 'tempo traveller in kanpur, tempo traveller on rent in kanpur, 12 seater tempo traveller kanpur, 20 seater tempo traveller kanpur, luxury tempo traveller kanpur, kanpur outstation tempo traveller, tempo traveller hire kanpur, group travel kanpur',
  topbarText: "Kanpur's Trusted Tempo Traveller — Weddings, VIP Travel, Lucknow, Varanasi, Prayagraj and Delhi",
  heroHeading: 'Tempo Traveller on Rent in Kanpur',
  heroSub: 'Weddings and VIP Travel · Lucknow · Varanasi · Prayagraj · Delhi · Agra · Local Sightseeing',
  heroBadges: ['12 and 16 Seater Available', 'Luxury Tempo Traveller', 'Fully Air Conditioned', 'Fixed Fare · No Hidden Charges'],
  bookingTabs: ['Local Sightseeing', 'Wedding Transfer', 'Lucknow / Varanasi', 'Delhi / Agra'],
  defaultCity: 'Kanpur',
  vehicleOptions: ['Select Vehicle', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', '12 Seater Luxury Tempo Traveller', '16 Seater Luxury Tempo Traveller'],
  trustItems: [
    { title: 'On-Time Pickup', sub: 'Pickup from your exact location', iconType: 'clock' },
    { title: 'Clean and Well Maintained', sub: 'Regularly serviced before every trip', iconType: 'shield' },
    { title: 'Transparent Pricing', sub: 'Fuel, toll, driver allowance included', iconType: 'card' },
    { title: 'Professional Drivers', sub: 'Know all Kanpur routes and highways', iconType: 'person' },
  ],
  infoBoxText: 'Yatra Travel India offers <strong>tempo traveller on rent in Kanpur</strong> for local sightseeing, wedding guest transfers, VIP movement, and outstation trips to Lucknow, Varanasi, Prayagraj, Delhi, and Agra. <strong>12 seater, 16 seater, and Luxury Tempo Traveller available.</strong> Fully AC, clean, pushback seats, experienced drivers. Transparent pricing — fuel, tolls, and driver allowance all included. Call <strong>9044019511</strong> to book.',
  introH1: 'Tempo Traveller on Rent in Kanpur — Comfortable Group Travel for Every Occasion',
  introParagraphs: [
    'Kanpur is a busy city, and travelling in multiple cars can be tiring and costly. With a tempo traveller rental in Kanpur, your whole group can sit in one vehicle and enjoy the journey together. Our tempo travellers are fully air conditioned, clean, and well maintained, making them perfect for all age groups including senior citizens and children.',
    'We offer 12 seater, 16 seater, and luxury tempo travellers for premium travel. These vehicles come with comfortable pushback seats, good legroom, and proper luggage space. Whether you are going for local sightseeing in Kanpur or planning an outstation trip to Lucknow, Varanasi, Prayagraj, or Delhi, a tempo traveller with a driver in Kanpur makes travel smooth and relaxed.',
  ],
  sectionServicesTitle: 'Tempo Traveller Options in Kanpur',
  vehicles: [
    { badge: '12 Seater', title: '12 Seater Tempo Traveller in Kanpur', popular: '', color: '#0f6ec8', badgeOrange: false, price: '₹23/km', priceLabel: ' onwards', specs: [{ label: 'Seating Capacity:', value: '12 Passengers + 1 Driver' }, { label: 'Starting Fare:', value: '₹23/km' }, { label: 'Driving Charges:', value: '₹500/day' }, { label: 'Facility:', value: 'AC, Pushback Seat, Music System' }].map(s => ({ label: s.label + ' ' + (s as any).value, sub: '' })), tags: ['Full AC', 'Pushback Seats', 'Lucknow Trip', 'Family Tours'], tagOrange: false, btnLabel: 'Book 12 Seater', selectKey: '12 Seater Tempo Traveller in Kanpur' },
    { badge: '16 Seater', title: '16 Seater Tempo Traveller in Kanpur', popular: '', color: '#0f6ec8', badgeOrange: false, price: '₹26/km', priceLabel: ' onwards', specs: [{ label: 'Seating Capacity:', value: '16 Passengers + 1 Driver' }, { label: 'Starting Fare:', value: '₹26/km' }, { label: 'Driving Charges:', value: '₹500/day' }, { label: 'Facility:', value: 'AC, Pushback Seat, Music System' }].map(s => ({ label: s.label + ' ' + (s as any).value, sub: '' })), tags: ['Full AC', 'Extra Legroom', 'Varanasi Trip', 'Office Outings'], tagOrange: false, btnLabel: 'Book 16 Seater', selectKey: '16 Seater Tempo Traveller in Kanpur' },
    { badge: '20 Seater', title: '20 Seater Tempo Traveller in Kanpur', popular: '', color: '#0f6ec8', badgeOrange: false, price: '₹30/km', priceLabel: ' onwards', specs: [{ label: 'Seating Capacity:', value: '20 Passengers + 1 Driver' }, { label: 'Starting Fare:', value: '₹30/km' }, { label: 'Driving Charges:', value: '₹500/day' }, { label: 'Facility:', value: 'AC, Pushback Seat, Music System' }].map(s => ({ label: s.label + ' ' + (s as any).value, sub: '' })), tags: ['Full AC', 'Max Luggage', 'Wedding Baraat', 'Pilgrimage'], tagOrange: false, btnLabel: 'Book 20 Seater', selectKey: '20 Seater Tempo Traveller in Kanpur' },
    { badge: 'Luxury', title: 'Luxury Tempo Traveller in Kanpur', popular: '', color: '#0f6ec8', badgeOrange: false, price: 'On Request', priceLabel: '', specs: [{ label: 'Seating Capacity:', value: '9-16 Passengers + 1 Driver' }, { label: 'Starting Fare:', value: 'On Request' }, { label: 'Driving Charges:', value: '₹500/day' }, { label: 'Facility:', value: 'AC, Pushback Seat, Music System' }].map(s => ({ label: s.label + ' ' + (s as any).value, sub: '' })), tags: ['Premium AC', 'LED Lighting', 'Music System', 'Charging Points'], tagOrange: false, btnLabel: 'Book Luxury Tempo', selectKey: 'Luxury Tempo Traveller in Kanpur' },
  ],
  optionsTable: [
    { vehicle: '12 Seater Tempo Traveller in Kanpur', cap: '12 + Driver', ac: 'AC', ideal: 'Small and medium family groups - local sightseeing in Kanpur, day trips, and outstation routes to Lucknow and Prayagraj' },
    { vehicle: '16 Seater Tempo Traveller in Kanpur', cap: '16 + Driver', ac: 'AC', ideal: 'Medium to large groups - corporate tours, school excursions, wedding parties, and longer outstation routes to Varanasi and Delhi' },
    { vehicle: '20 Seater Tempo Traveller in Kanpur', cap: '20 + Driver', ac: 'AC', ideal: 'Large groups - baraat transport, religious pilgrimage groups, and large family gatherings travelling together from Kanpur' },
    { vehicle: 'Luxury Tempo Traveller in Kanpur', cap: '9–16 + Driver', ac: 'Premium AC', ideal: 'VIP guests, wedding functions, corporate travel - soft pushback seats, LED lighting, music system, and charging points included' },
  ],
  localFareTable: [
    { vehicle: 'Kanpur to Lucknow', seating: '~80 km', fare: 'Call Now' },
    { vehicle: 'Kanpur to Prayagraj', seating: '~190 km', fare: 'Call Now' },
    { vehicle: 'Kanpur to Varanasi', seating: '~330 km', fare: 'Call Now' },
    { vehicle: 'Kanpur to New Delhi', seating: '~450 km', fare: 'Call Now' },
    { vehicle: 'Kanpur to Agra', seating: '~300 km', fare: 'Call Now' },
    { vehicle: 'Kanpur to Ayodhya', seating: '~165 km', fare: 'Call Now' },
  ],
  useTags: ['Kanpur Local Sightseeing', 'Wedding Guest Transfers', 'Baraat Transport Kanpur', 'VIP Guest Movement', 'Kanpur to Lucknow Group Travel', 'Kanpur to Varanasi Pilgrimage', 'Kanpur to Prayagraj Kumbh', 'Kanpur to Delhi Outstation', 'Corporate Office Outings', 'Family Multi-Day Trips', 'Religious Pilgrimage Groups', 'Airport Group Transfers'],
  ei: {
    included: ['Base fare of Tempo Traveller', 'Fuel charges included', 'Driver day allowance included', 'Clean, well-maintained vehicle', 'Driver accommodation (Multi-day trips)'],
    excluded: ['Toll tax charges (as per actual during the trip)', 'State entry tax / permit charges (if applicable)', 'Parking charges (as per actual at locations)', 'Driver night allowance (₹500 for Tempo Traveller, if applicable)', 'Luggage carrier charges'],
  },
  whyTempoTitle: 'Luxury Tempo Traveller in Kanpur',
  whyTempoParas: [
    'If you want comfort with a premium touch, booking a luxury tempo traveller in Kanpur is the perfect choice. It is ideal for wedding guests, corporate travel, VIP movement, family tours, and long outstation trips.',
    'Our luxury tempo traveller on rent in Kanpur comes with fully air-conditioned interiors, soft pushback seats, extra legroom, and stylish lighting. The interiors are clean, modern, and designed to make long journeys relaxing.',
    'We offer 12 seater and 16 seater luxury tempo travellers in Kanpur, driven by professional and polite drivers who know city roads and highways well.',
  ],
  features: [
    { title: 'Premium Pushback Seats', desc: 'Soft and wide pushback seats provide extra comfort and support for long journeys — ideal for wedding hire and VIP travel in Kanpur' },
    { title: 'Fully Air-Conditioned', desc: 'All luxury tempo travellers are fully AC — keeps passengers comfortable during long outstation trips and local Kanpur city sightseeing in any weather' },
    { title: 'Extra Legroom', desc: 'Wide aisles and generous legroom — passengers can relax without feeling cramped on long routes from Kanpur to Varanasi or Delhi' },
    { title: 'Stylish Interiors and Ambient Lighting', desc: 'Premium flooring, roof lights, and soft LED lighting give a VIP travel experience that makes an impression at every wedding and corporate event' },
    { title: 'Large Luggage Space', desc: 'Ample luggage space for suitcases, shopping bags, and gifts — perfect for outstation trips, airport transfers, and wedding travel from Kanpur' },
    { title: 'Smooth Suspension', desc: 'Superior suspension system built for highways — smooth and comfortable ride even on long routes like Kanpur to Lucknow or Kanpur to Varanasi' },
    { title: 'Entertainment and Charging Points', desc: 'Music systems, LED TVs, and mobile charging points in most luxury tempo travellers — makes the journey fun and connected for every passenger' },
    { title: 'Professional and Polite Drivers', desc: 'Trained, polite drivers who know local Kanpur routes, highways, and sightseeing spots — ensure safe and timely travel for weddings and corporate groups' },
  ],
  attractions: [
    { title: 'Kanpur to Lucknow Tempo Traveller', desc: 'The most popular outstation route from Kanpur. Whether it is a family outing, corporate tour, wedding travel, or a pilgrimage trip, a Kanpur to Lucknow tempo traveller ensures everyone can travel together in one vehicle.' },
    { title: 'Kanpur to Prayagraj Tempo Traveller', desc: 'Make your group travel from Kanpur to Prayagraj simple and comfortable by hiring a tempo traveller. Perfect for families, friends, corporate teams, wedding guests, or pilgrims.' },
    { title: 'Kanpur to Varanasi Tempo Traveller', desc: 'Travelling from Kanpur to Varanasi with a group is easy and stress-free when you hire a tempo traveller. Long distance travel is comfortable with reclining seats, full AC, and plenty of luggage space.' },
    { title: 'Kanpur to New Delhi Tempo Traveller', desc: 'Skip the hassle of multiple cars and long drives by hiring a tempo traveller from Kanpur to New Delhi. Perfect for family trips, office tours, wedding parties, or pilgrimage journeys.' },
  ],
  whyCards: [
    { title: 'Clean and Well-Maintained Vehicles', desc: 'All tempo travellers in Kanpur are clean, well-maintained, fully air conditioned, and designed for comfort with reclining seats, enough legroom, and ample luggage space.' },
    { title: 'Experienced and Polite Drivers', desc: 'Drivers know all Kanpur city roads and highways well. You can enjoy the journey without worrying about traffic or navigation.' },
    { title: 'Fair and Transparent Pricing', desc: 'Wide range — 12 seater, 16 seater, and luxury — at fair pricing with fuel, tolls, and driver allowance included and no hidden costs.' },
    { title: 'Easy Online Booking and 24x7 Support', desc: 'Easy online booking, 24x7 support, and vehicles kept in top condition for every trip. Call 9044019511 or WhatsApp anytime.' },
    { title: 'Doorstep Pickup Anywhere in Kanpur', desc: 'Whether near the railway station, a hotel, or any residential area in Kanpur, pickup can be arranged right to your doorstep.' },
    { title: 'Multi-Day and Multi-City Trips', desc: 'Kanpur to Varanasi, Ayodhya, Lucknow, or a longer North India pilgrimage — the plan can be fully customised for your group\'s needs.' },
  ],
  faqs: [
    { q: 'Q1. How early should I book a tempo traveller in Kanpur?', a: 'Booking 4 to 7 days in advance is usually a safe choice if you want a good vehicle at a reasonable price.' },
    { q: 'Q2. Will the tempo traveller come to my exact pickup location in Kanpur?', a: 'Yes, in most cases the vehicle will come right to your doorstep. Just share the correct location while booking.' },
    { q: 'Q3. Are there any hidden charges in tempo traveller rental in Kanpur?', a: 'At Yatra Travel India it is always better to ask once before confirming so there are no surprises later. All costs are clearly explained upfront.' },
    { q: 'Q4. Can I plan a multi-day or multi-city trip from Kanpur?', a: 'Yes. Whether you are planning Kanpur to Varanasi, Ayodhya, Lucknow, or even a longer North India trip, the plan can be customized.' },
    { q: 'Q5. Is there any difference between a normal and a luxury tempo traveller?', a: 'Yes. A luxury tempo traveller comes with better seats, more leg space, charging points, and sometimes extra features like TV or lighting.' },
    { q: 'Q6. Is a tempo traveller a good option for family trips?', a: 'Honestly, yes. Instead of managing multiple cars, a tempo traveller keeps the whole family together and makes the journey more relaxed.' },
    { q: 'Q7. Can I book a tempo traveller in Kanpur just for one day?', a: 'Yes, you can. Many people book it for one-day trips like local sightseeing or nearby places.' },
    { q: 'Q8. Do drivers know the routes well for outstation travel?', a: 'Most drivers regularly travel on routes like Kanpur to Lucknow, Prayagraj, Varanasi, and Delhi. They know the roads, stops, and timing well.' },
    { q: 'Q9. Why do people prefer tempo travellers over cars for group travel?', a: 'Everyone travels together, there is enough space for luggage, and the cost per person becomes much lower compared to booking multiple cars.' },
    { q: 'Q10. Is AC available in tempo travellers in Kanpur?', a: 'Yes, AC tempo travellers are easily available and are actually the most preferred option, especially in summer.' },
  ],
  noteBox: 'Kanpur tempo travellers get booked quickly during <strong>wedding season and long weekends.</strong> Booking <strong>4 to 7 days in advance</strong> is usually a safe choice. For luxury tempo travellers during peak wedding season, book <strong>1 to 2 weeks ahead.</strong>',
  networkLinks: [
    { href: '/tempo-traveller/delhi', city: 'tempo-traveller-in-new-delhi', type: 'Corporate Travel, Weddings & Outstation' },
    { href: '/tempo-traveller/lucknow', city: 'tempo-traveller-in-lucknow', type: 'Family Travel & Religious Tours' },
    { href: '/tempo-traveller/varanasi', city: 'tempo-traveller-in-varanasi', type: 'Pilgrimage Groups & Cultural Tours' },
    { href: '/tempo-traveller/ayodhya', city: 'tempo-traveller-in-ayodhya', type: 'Ram Mandir Darshan & Pilgrimage' },
    { href: '/tempo-traveller/manali', city: 'tempo-traveller-in-manali', type: 'Rohtang Pass, Leh & Spiti Valley' },
    { href: '/tempo-traveller/bhubaneswar', city: 'tempo-traveller-in-bhubaneswar', type: 'Puri, Konark & Odisha Tours' },
  ],
  footerServices: ['12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', '12 Seater Luxury Tempo', '16 Seater Luxury Tempo', 'Wedding Baraat Transport'],
  footerRoutes: ['Kanpur to Lucknow', 'Kanpur to Varanasi', 'Kanpur to Prayagraj', 'Kanpur to Delhi', 'Kanpur to Agra', 'Kanpur to Ayodhya'],
  popularRoutes: [],
  ctaHeading: 'Book Your Kanpur Group Trip Today',
  ctaDesc: 'Weddings, VIP movement, Lucknow, Varanasi, Prayagraj, Delhi — call us with your group size and travel date. We handle everything else.',
}

/* ══════════════════════════════════════════
   AYODHYA
══════════════════════════════════════════ */
const ayodhya: CityData = {
  slug: 'ayodhya',
  cityName: 'Ayodhya',
  pageTitle: 'Tempo Traveller in Ayodhya',
  metaTitle: 'Tempo Traveller in Ayodhya | Yatra Travel India – Safe and Affordable Rentals',
  metaDesc: "Travel in comfort with Yatra Travel India's tempo traveller hired in Ayodhya. Ideal for family trips, religious tours, corporate travel, and weddings. Reliable AC vehicles with verified drivers. Call 9044019511.",
  metaKeywords: 'tempo traveller in ayodhya, hire tempo traveller in ayodhya, tempo traveller rent in ayodhya, 12 seater tempo traveller in ayodhya, 14 seater tempo traveller in ayodhya, 20 seater tempo traveller in ayodhya, luxury tempo traveller in ayodhya, ayodhya group travel vehicle, tempo traveller for ram mandir visit, tempo traveller rental service ayodhya',
  topbarText: "Ayodhya's Trusted Tempo Traveller — Ram Mandir Darshan, Pilgrimage Tours, Varanasi, Lucknow and Delhi",
  heroHeading: 'Tempo Traveller in Ayodhya',
  heroSub: 'Ram Mandir Darshan · Hanuman Garhi · Kanak Bhawan · Saryu Ghat · Varanasi · Lucknow · Delhi · Airport Transfers',
  heroBadges: ['12 to 20 Seater Available', 'Luxury and Maharaja Options', 'Starting Rs 22/km', 'Verified Drivers · 24x7 Support'],
  bookingTabs: ['Ram Mandir Darshan', 'Pilgrimage Tour', 'Airport Transfer', 'Outstation'],
  defaultCity: 'Ayodhya',
  vehicleOptions: ['Select Vehicle', '9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '13 Seater Tempo Traveller', '14 Seater Tempo Traveller', '16 Seater Urbania Tempo Traveller', '20 Seater Tempo Traveller', 'Luxury Tempo Traveller', 'Maharaja Tempo Traveller'],
  trustItems: [
    { title: 'Verified and Trained Drivers', sub: 'Know local routes and highways', iconType: 'shield' },
    { title: 'Transparent Pricing', sub: 'No hidden charges, all costs upfront', iconType: 'card' },
    { title: 'On-Time Pickup', sub: 'Punctual arrivals every trip', iconType: 'clock' },
    { title: '24x7 Customer Support', sub: 'Call or WhatsApp anytime', iconType: 'phone' },
  ],
  infoBoxText: 'Yatra Travel India provides <strong>safe, comfortable, and affordable tempo traveller hire in Ayodhya</strong> for Ram Mandir darshan, pilgrimage tours, family trips, wedding guest transfers, corporate travel, and outstation journeys to Varanasi, Prayagraj, Lucknow, Delhi, and Gorakhpur. <strong>12 seater, 16 seater Urbania, Luxury and Maharaja Tempo Traveller available.</strong> Pricing from Rs 22/km. No hidden charges. Call or WhatsApp <strong>9044019511</strong> for instant booking and best price.',
  introH1: 'Ayodhya Tempo Traveller Rental — 12 Seater, 16 Seater, Luxury and Maharaja',
  introParagraphs: [
    'Looking for a reliable tempo traveller rental in Ayodhya for pilgrimage, family trips, or group travel? Yatra Travel India provides safe, comfortable, and affordable tempo traveller hire in Ayodhya with multiple seating options to suit every group size.',
    'Whether you are visiting the sacred Ram Mandir, planning a multi-temple pilgrimage, organizing a family vacation, or travelling outstation from Ayodhya, our well-maintained AC tempo travellers ensure a smooth, relaxed, and hassle-free ride.',
  ],
  sectionServicesTitle: 'Tempo Traveller Options in Ayodhya',
  vehicles: [
    { badge: 'Rs 23/km', title: '12 Seater Tempo Traveller', popular: 'Most Booked', color: '#0f6ec8', badgeOrange: false, price: 'Rs.23/km', priceLabel: ' onwards', specs: [{ label: '10–12 People', sub: 'Group Size' }, { label: 'Rs.23–25/km', sub: 'Outstation Rate' }, { label: 'Full AC', sub: 'Cabin' }, { label: 'Families and', sub: 'Small Groups' }], tags: ['Full AC', 'Pushback Seats', 'Ram Mandir Tour', 'Varanasi Trip'], tagOrange: false, btnLabel: 'Book 12 Seater', selectKey: '12 Seater Tempo Traveller' },
    { badge: 'Rs 26/km', title: '16 Seater Urbania Tempo Traveller', popular: '', color: '#0f6ec8', badgeOrange: false, price: 'Rs.26/km', priceLabel: ' onwards', specs: [{ label: '13–16 People', sub: 'Group Size' }, { label: 'Rs.26–28/km', sub: 'Outstation Rate' }, { label: 'Full AC', sub: 'Cabin' }, { label: 'Medium Groups', sub: 'Pilgrimage' }], tags: ['Full AC', 'Pushback Seats', 'Prayagraj Tour', 'Temple Circuit'], tagOrange: false, btnLabel: 'Book 16 Seater', selectKey: '16 Seater Urbania Tempo Traveller' },
    { badge: 'Rs 30/km', title: '20 Seater Tempo Traveller', popular: 'Large Groups', color: '#ff6b35', badgeOrange: true, price: 'Rs.30/km', priceLabel: ' onwards', specs: [{ label: '17–20 People', sub: 'Group Size' }, { label: 'Rs.30/km', sub: 'Outstation Rate' }, { label: 'Full AC', sub: 'Cabin' }, { label: 'Large Groups and', sub: 'Corporate Tours' }], tags: ['Full AC', 'Max Luggage', 'Corporate Tours', 'Wedding Groups'], tagOrange: true, btnLabel: 'Book 20 Seater', selectKey: '20 Seater Tempo Traveller' },
    { badge: 'Premium', title: 'Luxury Tempo Traveller', popular: 'VIP and Weddings', color: '#0f6ec8', badgeOrange: false, price: 'Best', priceLabel: ' Rate on Call', specs: [{ label: '9–16 Seater', sub: 'Flexible Sizes' }, { label: 'Premium AC', sub: 'Multi-Zone' }, { label: 'Reclining', sub: 'Leather Seats' }, { label: 'Weddings and', sub: 'VIP Travel' }], tags: ['Leather Seats', 'LED Lights', 'Music System', 'Charging Points'], tagOrange: false, btnLabel: 'Book Luxury Tempo', selectKey: 'Luxury Tempo Traveller' },
    { badge: 'Ultimate Luxury', title: 'Maharaja Tempo Traveller', popular: 'VIPs and Senior Citizens', color: '#0f6ec8', badgeOrange: false, price: 'Best', priceLabel: ' Rate on Call', specs: [{ label: '9–16 Seater', sub: 'Flexible Sizes' }, { label: 'Premium AC', sub: 'Full Cabin' }, { label: 'Pushback Sofa', sub: 'Reclining Seats' }, { label: 'Special Occasions', sub: 'Pilgrimages' }], tags: ['Sofa Seats', 'Full Recline', 'Senior Citizens', 'Ram Mandir VIP'], tagOrange: false, btnLabel: 'Book Maharaja Tempo', selectKey: 'Maharaja Tempo Traveller' },
  ],
  optionsTable: [
    { vehicle: '9 Seater Tempo Traveller', cap: '9 + Driver', ac: 'AC', ideal: 'Small families visiting Ram Mandir and nearby temples. Starting Rs 22/km' },
    { vehicle: '12 Seater Tempo Traveller', cap: '12 + Driver', ac: 'AC', ideal: 'Best for families and small groups — Ram Mandir darshan, Varanasi, Prayagraj, Lucknow. Rs 23–25/km' },
    { vehicle: '16 Seater Urbania', cap: '16 + Driver', ac: 'AC', ideal: 'Suitable for medium-sized groups — temple circuits, corporate travel, outstation trips. Rs 26–28/km' },
    { vehicle: '20 Seater Tempo Traveller', cap: '20 + Driver', ac: 'AC', ideal: 'Large pilgrimage groups, corporate teams, wedding parties. Rs 30/km.' },
    { vehicle: 'Luxury and Maharaja Tempo Traveller', cap: '9–16 + Driver', ac: 'Premium AC', ideal: 'VIP travel, special occasions, senior citizens, weddings — pushback sofa seats, LED lights, music system, charging points' },
  ],
  localFareTable: [
    { vehicle: '9 Seater Tempo Traveller', seating: 'On Request', fare: 'On Request' },
    { vehicle: '12 Seater Tempo Traveller', seating: 'Rs 2,000', fare: 'Rs 2,000' },
    { vehicle: '13 Seater Tempo Traveller', seating: 'Rs 2,200', fare: 'Rs 2,200' },
    { vehicle: '14 Seater Tempo Traveller', seating: 'Rs 2,200', fare: 'Rs 2,200' },
    { vehicle: '16 Seater Urbania', seating: 'Rs 2,500', fare: 'Rs 2,500' },
    { vehicle: '20 Seater Tempo Traveller', seating: 'On Request', fare: 'On Request' },
  ],
  localFareNote: '* Airport parking charges payable as per airport authority rules. No hidden charges. Call 9044019511 for best price and instant confirmation.',
  useTags: ['Ram Mandir Darshan Tour', 'Hanuman Garhi Temple Visit', 'Kanak Bhawan Darshan', 'Saryu Ghat Evening Aarti', 'Pilgrimage and Religious Tours', 'Family Outings and Vacations', 'Wedding Guest Transportation', 'Corporate Travel and Group Tours', 'Ayodhya Airport Transfer', 'Ayodhya to Varanasi Trip', 'Ayodhya to Lucknow Travel', 'Senior Citizens Comfort Travel'],
  ei: {
    included: ['5% GST', 'Driver Day Charge', 'Fuel Charge', 'Base Fare of Tempo Traveller', 'Driver Accommodation (Multi-day trips)'],
    excluded: ['Toll Tax during trip (clearly discussed in advance)', 'Parking Charges as per actual and paid by customer', 'Airport Parking Charges as per airport authority rules', 'State Tax for outstation trips outside Uttar Pradesh', 'Driver Night Charge (Tempo Traveller – 500)'],
  },
  whyTempoTitle: 'Why Millions of Tourists and Pilgrims Visit Ayodhya Every Year',
  whyTempoParas: [
    'Ayodhya is popular among visitors because it holds a deep spiritual, cultural, and historical significance that touches the hearts of millions of people across India and the world. Known as the birthplace of Lord Shri Ram, Ayodhya is one of the most important pilgrimage destinations in Hinduism.',
    'Ayodhya is also home to many other sacred temples such as Hanuman Garhi, Kanak Bhawan, Nageshwarnath Temple, and Dashrath Mahal, making it a perfect place for a complete spiritual journey.',
    'With better roads, railway connectivity, and improved tourism facilities, Ayodhya has become easier to reach — making it a preferred destination for families, senior citizens, and group travellers.',
  ],
  benefits: [
    { title: 'Affordable Tempo Traveller Price', desc: 'Competitive rates starting from Rs 22/km for a 9 seater. Complete cost details shared in advance. No hidden charges.' },
    { title: 'Fully AC and Comfortable Vehicles', desc: 'All vehicles fully air-conditioned with pushback seats, good legroom, and neat interiors. Every vehicle is checked and cleaned before each trip.' },
    { title: 'Experienced and Verified Drivers', desc: 'Drivers know local Ayodhya roads, Ram Mandir routes, and all major outstation highways well. Verified, trained, and polite.' },
    { title: 'Easy Booking by Call or WhatsApp', desc: 'Simply call or WhatsApp 9044019511 with your travel date, pickup location, destination, and number of passengers. Instant quote and confirmation.' },
    { title: '24x7 Customer Support', desc: 'Yatra Travel India team available around the clock. Whether you need to book, modify a trip, or get help during travel — someone always picks up.' },
    { title: 'Customized Pilgrimage Packages', desc: 'Customized Ayodhya pilgrimage tour packages, Ram Mandir darshan travel plans, and group tour packages available on request.' },
  ],
  attractions: [
    { title: 'Shri Ram Janmabhoomi — Ram Mandir', desc: 'The most important pilgrimage site in Ayodhya — the birthplace of Lord Shri Ram and the newly built Ram Mandir. Devotees from across India and the world come here to seek blessings and offer prayers.' },
    { title: 'Hanuman Garhi Temple', desc: 'One of the most visited temples in Ayodhya, dedicated to Lord Hanuman — situated on a hillock in the heart of the city. A standard stop on every Ayodhya darshan tour by tempo traveller.' },
    { title: 'Kanak Bhawan', desc: 'A beautiful temple dedicated to Lord Ram and Goddess Sita, known for its stunning golden architecture and peaceful atmosphere. A favourite among devotees for its elaborate deity decorations.' },
    { title: 'Saryu River Ghat and Evening Aarti', desc: 'The Saryu River flows through Ayodhya and holds immense spiritual significance. The evening aarti on the Saryu Ghat is one of the most beautiful and peaceful experiences in Ayodhya.' },
    { title: 'Varanasi — Kashi Vishwanath', desc: 'Around 200 km from Ayodhya. Varanasi is the spiritual capital of India. Home to the Kashi Vishwanath Temple and the famous Ganga Aarti. Both same-day return and overnight packages available.' },
    { title: 'Prayagraj — Triveni Sangam', desc: 'Around 160 km from Ayodhya. The sacred confluence of Ganga, Yamuna, and the mythological Saraswati rivers. Especially popular during Kumbh Mela years.' },
  ],
  seasons: [
    { title: 'October to March — Perfect Season for Family Visit', paras: ['This is the best time to visit Ayodhya with family. Pleasant and cool weather ideal for sightseeing. Comfortable for Ram Mandir darshan, Hanuman Garhi, and Saryu Ghat visits.', 'Book your tempo traveller in Ayodhya early to avoid last-minute hassle during this busy period.'] },
    { title: 'April to June — Summer Travel in Ayodhya', paras: ['Summers are hot but Ayodhya family trips are still possible with proper planning. AC tempo traveller hire in Ayodhya ensures a cool and comfortable ride throughout the journey.'] },
    { title: 'July to September — Monsoon Visits', paras: ['Monsoon brings freshness to Ayodhya, making it ideal for peaceful family trips. Less crowded than peak season. Our Ayodhya tempo traveller service guarantees smooth and safe travel even in rainy conditions.'] },
    { title: 'Festival Season — Experience Ayodhya at Its Best', paras: ['Ayodhya is magical during festivals like Ram Navami, Diwali, and Makar Sankranti. Early booking of tempo traveller in Ayodhya — at least 3 to 5 days in advance — is strongly recommended.'] },
  ],
  whyCards: [
    { title: 'Choose the Right Tempo Traveller Size', desc: '12 seater for small families. 16 seater Urbania for medium groups. Luxury or Maharaja for VIP travel or special occasions.' },
    { title: 'Check Vehicle Features for Comfort', desc: 'Ensure fully air-conditioned interiors, pushback reclining seats for long journeys, spacious luggage area, LED lights, music system.' },
    { title: 'Confirm Transparent Pricing', desc: 'Always confirm the tempo traveller fare in Ayodhya before booking. Check if toll, parking, and driver allowance are included.' },
    { title: 'Plan Your Outstation Route', desc: 'Popular routes — Ayodhya to Varanasi, Lucknow, Delhi, Prayagraj, Haridwar, Rishikesh. Experienced drivers can suggest the safest highways.' },
    { title: 'Verified and Polite Drivers', desc: 'Always choose services with verified, trained, and polite drivers. Essential for safe pilgrimage tours and Ram Mandir darshan travel.' },
    { title: 'Book Early During Festivals and Peak Season', desc: 'Festivals like Ram Navami, Diwali, and Makar Sankranti attract large crowds. Book at least 3 to 5 days in advance.' },
  ],
  faqs: [
    { q: 'Q1. Which tempo traveller is best for Ayodhya group pilgrimage?', a: 'A 12 seater or 16 seater tempo traveller in Ayodhya is ideal for small and medium groups visiting Ram Mandir and nearby temples.' },
    { q: 'Q2. Can I hire tempo traveller in Ayodhya for same-day return trips?', a: 'Yes, we provide same-day tempo traveller hire in Ayodhya for nearby cities like Varanasi, Prayagraj, Lucknow, and Chitrakoot.' },
    { q: 'Q3. Do you provide luxury tempo traveller for Ram Mandir darshan?', a: 'Yes, we offer luxury tempo traveller in Ayodhya with pushback seats and AC for comfortable Ram Mandir pilgrimage travel.' },
    { q: 'Q4. Is night halt allowed with tempo traveller booking in Ayodhya?', a: 'Yes, multi-day and night halt tempo traveller bookings in Ayodhya are available as per your travel plan.' },
    { q: 'Q5. Can I book tempo traveller in Ayodhya for senior citizens?', a: 'Absolutely. The Maharaja tempo traveller is especially recommended for senior citizens — pushback sofa seats, full recline, premium interiors.' },
    { q: 'Q6. Do tempo travellers in Ayodhya have charging points?', a: 'Yes, most of our tempo travellers in Ayodhya come with mobile charging points and reading lights.' },
    { q: 'Q7. Is tempo traveller available in Ayodhya during peak festival season?', a: 'Yes, but advance booking is recommended for tempo traveller hire in Ayodhya during Ram Navami, Diwali, and holidays.' },
    { q: 'Q8. Can I hire tempo traveller from Ayodhya to multiple cities?', a: 'Yes, we offer multi-city tempo traveller tours from Ayodhya as per your custom itinerary.' },
    { q: 'Q9. Are tempo travellers in Ayodhya suitable for long-distance travel?', a: 'Yes, our vehicles are ideal for long-distance journeys from Ayodhya with comfortable seating and AC throughout the trip.' },
    { q: 'Q10. Do you provide last-minute tempo traveller booking in Ayodhya?', a: 'Yes, last-minute tempo traveller hire in Ayodhya is possible subject to vehicle availability. Call 9044019511 directly.' },
  ],
  noteBox: 'Ayodhya sees massive crowds during <strong>Ram Navami, Diwali, Makar Sankranti, and Ram Mandir special events.</strong> Book your tempo traveller at least <strong>3 to 5 days in advance</strong> during peak season. Luxury and Maharaja tempo travellers fill up faster — confirm at least <strong>1 week ahead</strong> for VIP and senior citizen group bookings.',
  footerServices: ['9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Urbania Tempo', '20 Seater Tempo Traveller', 'Luxury Tempo Traveller', 'Maharaja Tempo Traveller'],
  footerRoutes: ['Ram Mandir Darshan Tour', 'Ayodhya to Varanasi', 'Ayodhya to Lucknow', 'Ayodhya to Delhi', 'Ayodhya to Prayagraj', 'Ayodhya Airport Transfer'],
  popularRoutes: ['Ayodhya Ram Mandir Darshan Tour', 'Ayodhya to Varanasi Tempo Traveller', 'Ayodhya to Lucknow Tempo Traveller', 'Ayodhya to Delhi Tempo Traveller', 'Ayodhya to Prayagraj Tempo Traveller', 'Ayodhya to Gorakhpur Tempo Traveller', 'Ayodhya to Haridwar Tempo Traveller', 'Ayodhya to Rishikesh Tempo Traveller', 'Ayodhya to Mathura Vrindavan', 'Ayodhya to Agra Tempo Traveller', 'Ayodhya to Chitrakoot Pilgrimage', 'Ayodhya Airport Group Transfer', 'Hanuman Garhi Temple Tour', 'Saryu Ghat Evening Aarti Visit', 'Ayodhya Wedding Guest Transport', 'Ayodhya Corporate Group Travel', '12 Seater Tempo Traveller Ayodhya', '16 Seater Urbania Tempo Ayodhya', 'Luxury Tempo Traveller Ayodhya', 'Maharaja Tempo Traveller Ayodhya'],
  ctaHeading: 'Book Your Ayodhya Group Trip Today',
  ctaDesc: 'Travel comfortably and safely for Ram Mandir darshan, family trips, pilgrimage tours, wedding groups, or outstation travel. Call or WhatsApp Yatra Travel India on 9044019511 for instant booking and best price.',
}

/* ══════════════════════════════════════════
   MANALI
══════════════════════════════════════════ */
const manali: CityData = {
  slug: 'manali',
  cityName: 'Manali',
  pageTitle: 'Tempo Traveller in Manali — One Vehicle for the Whole Group',
  metaTitle: 'Tempo Traveller in Manali | Yatra Travel India – Rohtang Pass, Leh, Spiti and Local Tours',
  metaDesc: 'Book tempo traveller in Manali for Rohtang Pass, Manali to Leh, Spiti Valley, Solang Valley and local sightseeing. 9 to 35 seater. Experienced mountain drivers. Call 9044019511.',
  metaKeywords: 'tempo traveller in manali, tempo traveller on rent in manali, tempo traveller for hill travel, group tour vehicle manali, tempo traveller hire manali, tempo traveller delhi to manali, 12 seater tempo traveller manali, luxury tempo traveller in manali for hills',
  topbarText: "Manali's Trusted Tempo Traveller — Rohtang Pass, Manali to Leh, Spiti Valley, Solang Valley and Local Tours",
  heroHeading: 'Tempo Traveller in Manali — One Vehicle for the Whole Group',
  heroSub: 'Rohtang Pass · Solang Valley · Manali to Leh · Spiti Valley · Atal Tunnel · Dharamshala · Chandigarh',
  heroBadges: ['9 to 35 Seater Available', 'Luxury and Mercedes Options', 'Starting Rs 4,000 Local', 'Mountain Route Experienced Drivers'],
  bookingTabs: ['Local Sightseeing', 'Rohtang / Solang', 'Manali to Leh', 'Spiti / Outstation'],
  defaultCity: 'Manali',
  vehicleOptions: ['Select Vehicle', '9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', 'Luxury Tempo Traveller', 'Mercedes Tempo Traveller', '26 Seater Mini Bus', '35 Seater Bus'],
  trustItems: [
    { title: 'Mountain Route Drivers', sub: 'Rohtang, Leh, Spiti experience', iconType: 'shield' },
    { title: 'On-Time Pickup', sub: 'Vehicle confirmed in advance', iconType: 'clock' },
    { title: 'Fixed Fare — No Surprises', sub: 'All inclusive, nothing added after', iconType: 'card' },
    { title: 'Serviced Before Every Trip', sub: 'Tyres, brakes, engine checked', iconType: 'check' },
  ],
  infoBoxText: 'Yatra Travel India offers <strong>tempo traveller on rent in Manali</strong> for local sightseeing, Rohtang Pass day trips, Solang Valley, Atal Tunnel, and multi-day packages to Leh, Spiti Valley, Dharamshala, and Chandigarh. <strong>9 seater to 35 seater available — including Luxury and Mercedes Tempo Traveller.</strong> Every vehicle is serviced and checked before each mountain trip. Call <strong>9044019511</strong> to book.',
  introH1: 'Tempo Traveller on Rent in Manali — What to Know Before You Book',
  introParagraphs: [
    'Manali is not like other destinations. The roads are different. The weather changes fast. And when you are travelling with a group of 10 or 15 people through the Himalayas, the driver sitting behind the wheel matters more than almost anything else about the trip.',
    'Manali is not a one-size-fits-all destination. A couple heading to Solang Valley for a day needs something completely different from a 20-person corporate group driving to Leh. That is why having the right fleet matters more in Manali than almost anywhere else in India.',
  ],
  sectionServicesTitle: 'Fleet Available on Rent in Manali',
  vehicles: [
    { badge: 'Rs 4,000 Local', title: '9 Seater Tempo Traveller', popular: 'Small Groups', color: '#0f6ec8', badgeOrange: false, price: 'Rs.4,000', priceLabel: ' local onwards', specs: [{ label: '6–9 People', sub: 'Group Size' }, { label: 'Rs.4,000', sub: 'Local 8 hrs/80 km' }, { label: 'Rs.20/km', sub: 'Outstation Rate' }, { label: 'Hill Roads', sub: 'Compact' }], tags: ['Full AC', 'Pushback Seats', 'Solang Valley', 'Hidimba Temple'], tagOrange: false, btnLabel: 'Book 9 Seater', selectKey: '9 Seater Tempo Traveller' },
    { badge: 'Rs 5,000 Local', title: '12 Seater Tempo Traveller', popular: 'Most Booked', color: '#0f6ec8', badgeOrange: false, price: 'Rs.5,000', priceLabel: ' local onwards', specs: [{ label: '10–12 People', sub: 'Group Size' }, { label: 'Rs.5,000', sub: 'Local 8 hrs/80 km' }, { label: 'Rs.23/km', sub: 'Outstation Rate' }, { label: 'All Routes', sub: 'Including Leh' }], tags: ['Full AC', 'Rohtang Pass', 'Manali to Leh', 'Spiti Valley'], tagOrange: false, btnLabel: 'Book 12 Seater', selectKey: '12 Seater Tempo Traveller' },
    { badge: 'Rs 7,000 Local', title: '16 Seater Tempo Traveller', popular: '', color: '#0f6ec8', badgeOrange: false, price: 'Rs.7,000', priceLabel: ' local onwards', specs: [{ label: '13–16 People', sub: 'Group Size' }, { label: 'Rs.7,000', sub: 'Local 8 hrs/80 km' }, { label: 'Rs.28/km', sub: 'Outstation Rate' }, { label: 'Corporate Retreats', sub: 'College Trips' }], tags: ['Full AC', 'More Luggage Space', 'Multi-Day Routes', 'School Trips'], tagOrange: false, btnLabel: 'Book 16 Seater', selectKey: '16 Seater Tempo Traveller' },
    { badge: 'Rs 9,000 Local', title: '20 Seater Tempo Traveller', popular: 'Large Groups', color: '#ff6b35', badgeOrange: true, price: 'Rs.9,000', priceLabel: ' local onwards', specs: [{ label: '17–20 People', sub: 'Group Size' }, { label: 'Rs.9,000', sub: 'Local 8 hrs/80 km' }, { label: 'Rs.32/km', sub: 'Outstation Rate' }, { label: 'Wedding Parties', sub: 'Batch Trips' }], tags: ['Full AC', 'Max Luggage', 'Wedding Groups', 'College Batch'], tagOrange: true, btnLabel: 'Book 20 Seater', selectKey: '20 Seater Tempo Traveller' },
    { badge: 'Rs 8,000 Local', title: 'Luxury Tempo Traveller', popular: 'VIP and Multi-Day', color: '#0f6ec8', badgeOrange: false, price: 'Rs.8,000', priceLabel: ' local onwards', specs: [{ label: '10–15 People', sub: 'Group Size' }, { label: 'Rs.8,000', sub: 'Local 8 hrs/80 km' }, { label: 'Rs.35/km', sub: 'Outstation Rate' }, { label: 'Air Suspension', sub: 'LCD Screens' }], tags: ['Reclining Seats', 'Air Suspension', 'Leh Multi-Day', 'Corporate VIP'], tagOrange: false, btnLabel: 'Book Luxury Tempo', selectKey: 'Luxury Tempo Traveller' },
  ],
  fleetTable: [
    { vehicle: '9 Seater Tempo Traveller', group: '6 to 9 people', best: 'Local sightseeing, Solang Valley, Hidimba Temple — compact for narrow hill roads', local: 'Rs 4,000', outstation: 'Rs 20/km' },
    { vehicle: '12 Seater Tempo Traveller', group: '10 to 12 people', best: 'All routes including Rohtang Pass, Atal Tunnel, Leh highway — the most booked in Manali', local: 'Rs 5,000', outstation: 'Rs 23/km' },
    { vehicle: '16 Seater Tempo Traveller', group: '13 to 16 people', best: 'Corporate retreats, college trips, multi-day mountain routes — extra space for trekking gear', local: 'Rs 7,000', outstation: 'Rs 28/km' },
    { vehicle: '20 Seater Tempo Traveller', group: '17 to 20 people', best: 'Large groups, wedding parties, college batch trips — one vehicle, no splitting up', local: 'Rs 9,000', outstation: 'Rs 32/km' },
    { vehicle: 'Luxury Tempo Traveller', group: '10 to 15 people', best: 'Multi-day Manali to Leh, VIP corporate travel, destination weddings', local: 'Rs 8,000', outstation: 'Rs 35/km' },
    { vehicle: '26 Seater Mini Bus', group: '21 to 26 people', best: 'Large corporate teams, school excursions, highway routes to Chandigarh and Dharamshala', local: 'Rs 12,000', outstation: 'Rs 40/km' },
    { vehicle: '35 Seater Bus', group: '27 to 35 people', best: 'Very large groups, college events, community travel on local and highway routes', local: 'Rs 15,000', outstation: 'Rs 50/km' },
  ],
  fleetNote: '* All fares include fuel, toll, parking, driver allowance, and state tax for trips outside Himachal Pradesh. Rohtang Pass permit charged separately — arranged by Yatra Travel India at booking. Driver accommodation included for multi-day Leh and Spiti trips.',
  luxuryTable: [
    { vehicle: 'Luxury Tempo Traveller', seating: '9 to 12 Seater', local: 'Rs 8,000 onwards', outstation: 'Rs 26/km' },
    { vehicle: 'Luxury Tempo Traveller', seating: '13 to 16 Seater', local: 'Rs 11,000 onwards', outstation: 'Rs 29/km' },
    { vehicle: 'Mercedes Tempo Traveller', seating: '9 to 13 Seater', local: 'Rs 12,000 onwards', outstation: 'Rs 34/km' },
  ],
  luxuryNote: '* Every luxury tempo traveller includes: fully reclining leather seats, powerful multi-zone AC, air suspension, LCD entertainment screens, charging points at every seat, large luggage space for trekking gear, and an experienced mountain route driver.',
  useTags: ['Manali Local Sightseeing', 'Rohtang Pass Day Trip', 'Solang Valley Snow Trip', 'Manali to Leh Multi-Day', 'Spiti Valley Expedition', 'Atal Tunnel Sissu Drive', 'Corporate Retreats Manali', 'Destination Wedding Group', 'College Batch Trip Manali', 'Manali to Dharamshala', 'Manali to Chandigarh Transfer', 'Trekking Group Vehicle'],
  ei: {
    included: ['Fuel Charges', 'Driver Allowance', 'Toll Taxes', 'Parking (most locations)', 'Driver Accommodation (Multi-day trips)'],
    excluded: ['Rohtang Pass permit charges (arranged by Yatra Travel India at booking)', 'State Tax for trips outside Himachal Pradesh', 'Zone permits for restricted areas near Indo-Tibetan border (foreign nationals only)', 'Parking Charges as per actual at certain sites', 'Driver Night Charge for extended stays (Tempo Traveller – 500)'],
  },
  whyTempoTitle: 'Luxury Tempo Traveller in Manali — When Standard Is Not Enough',
  whyTempoParas: [
    'Sometimes the standard version is not what the trip calls for. A multi-day Manali to Leh drive, a corporate VIP group, a destination wedding party. These occasions call for something better.',
    'On a route like Manali to Leh where the group spends 8 to 10 hours a day in the vehicle across two consecutive days, the comfort difference is not a luxury. It is practical.',
    'Popular for corporate retreats in Manali, destination wedding groups, and high-end leisure travel through Himachal Pradesh.',
  ],
  steps: [
    { num: '1', title: 'Call or WhatsApp 9044019511', desc: 'Tell the team your group size, travel dates, and the routes you are planning — local sightseeing, Rohtang Pass, Solang Valley, Manali to Leh, or Spiti Valley' },
    { num: '2', title: 'Get a Clear Complete Quote', desc: 'Receive a complete fare breakdown — vehicle size, base fare, outstation rate, permit charges for Rohtang Pass, and what is included. No hidden numbers' },
    { num: '3', title: 'Confirm the Booking', desc: 'Once the quote is agreed the booking is confirmed. Vehicle details and driver name shared in advance — not on the morning of the trip' },
    { num: '4', title: 'Travel', desc: 'Vehicle arrives at your location at the confirmed time. Driver briefed on route. Fare settled as agreed. No surprises on the day' },
  ],
  features: [
    { title: 'Serviced Before Every Trip', desc: 'Tyre condition, brake performance, engine health checked before each mountain trip — non-negotiable on Himalayan roads' },
    { title: 'Mountain Route Drivers', desc: 'Drivers assigned based on specific mountain route experience — Rohtang, Leh highway, Spiti road. Not first-timers on unfamiliar terrain' },
    { title: 'Powerful AC Throughout', desc: 'Full cabin AC on all vehicles — adjusts well as temperatures drop significantly on mountain routes toward Rohtang and Leh' },
    { title: 'Large Luggage Space', desc: 'Manali trips mean trekking gear, winter clothing, and full bags. The luggage area matches the group size — no Tetris at every stop' },
    { title: 'All Inclusive Fixed Fare', desc: 'Fuel, toll, parking, driver allowance all included. Rohtang Pass permit arranged separately and confirmed at booking — no surprises' },
    { title: 'Entertainment and Charging', desc: 'LCD screens and charging points at every seat on luxury vehicles — especially important on 8 to 10 hour daily Manali to Leh drives' },
    { title: 'Air Suspension on Luxury Models', desc: 'Air suspension handles mountain roads without rattling the group — especially valuable on the rough stretches of the Leh and Spiti highway' },
    { title: 'Driver Accommodation Included', desc: 'For multi-day trips to Leh and Spiti, driver accommodation is arranged by Yatra Travel India — no separate charges added at the end' },
  ],
  attractions: [
    { title: 'Rohtang Pass', desc: 'Sits at 3,978 metres and the drive up is genuinely spectacular. The most booked single-day outstation package from Manali. Permit required — arranged at the time of booking. Starting fare Rs 7,000 for a 12 seater.' },
    { title: 'Solang Valley', desc: '14 km from Manali town. Popular for snow activities, paragliding, zorbing, and some of the best mountain views in the region. Starting fare Rs 4,000 for a 12 seater.' },
    { title: 'Hidimba Devi Temple and Old Manali', desc: 'The ancient cedar wood temple dedicated to Hidimba Devi is one of Manali\'s most visited landmarks. Old Manali nearby has cafes, guesthouses, and a relaxed pace very different from the main market.' },
    { title: 'Atal Tunnel and Sissu, Lahaul Valley', desc: 'The world\'s longest highway tunnel at 9.02 km connects Manali to Sissu in Lahaul Valley. One of the most scenic drives in Himachal Pradesh. Starting fare Rs 6,000 for a 12 seater.' },
    { title: 'Manali to Spiti Valley', desc: 'For groups that want the road less travelled. The Spiti route from Manali via Kunzum Pass is one of the most remote and visually dramatic drives in India. Starting fare Rs 20,000 for a 12 seater multi-day package.' },
    { title: 'Manali to Leh Highway', desc: '2 to 3 days crossing some of the highest motorable passes in the world. A fully planned package including driver accommodation, route briefing, and permit assistance. Starting fare Rs 25,000 for a 12 seater.' },
    { title: 'Vashisht Village and Jogini Waterfall', desc: 'Vashisht is 3 km from Manali town — known for its hot springs and ancient temple. Jogini Waterfall is a short trek from Vashisht through apple orchards and pine forests.' },
    { title: 'Kullu and Naggar Castle', desc: 'Kullu is 40 km from Manali on the National Highway. Famous for the Kullu Dussehra festival, river rafting on the Beas, and the ancient Naggar Castle perched above the valley.' },
  ],
  routes: [
    { title: 'Manali Local Sightseeing Package', meta: ['8 Hours', 'Up to 80 km', 'Most Popular'], desc: 'One day, 8 hours, up to 80 km within Manali. Covers Hidimba Temple, Solang Valley, Old Manali, Vashisht Village, Jogini Waterfall, and Mall Road.', fareLabel: '12 Seater starting fare', fare: 'Rs 5,000 onwards' },
    { title: 'Manali to Rohtang Pass Day Trip', meta: ['3,978 metres altitude', 'Permit Required', 'Most Booked Day Trip'], desc: 'The most booked single-day outstation package from Manali. Rohtang Pass sits at 3,978 metres and the drive up is genuinely spectacular.', fareLabel: '12 Seater starting fare', fare: 'Rs 7,000 onwards' },
    { title: 'Manali to Solang Valley Day Trip', meta: ['14 km from Manali', 'Snow Activities', 'Paragliding'], desc: '14 km from Manali town. Snow activities, paragliding, and some of the best mountain views in the region.', fareLabel: '12 Seater starting fare', fare: 'Rs 4,000 onwards' },
    { title: 'Manali to Leh Multi-Day Package', meta: ['2–3 Days', 'Highest Motorable Passes', 'Driver Accommodation Included'], desc: 'The big one. 2 to 3 days crossing some of the highest motorable passes in the world. A fully planned package including driver accommodation.', fareLabel: '12 Seater starting fare', fare: 'Rs 25,000 onwards' },
    { title: 'Manali to Spiti Valley Multi-Day Package', meta: ['Via Kunzum Pass', 'Remote Route', 'Experienced Driver Required'], desc: 'For groups that want the road less travelled. The Spiti route from Manali via Kunzum Pass is one of the most remote and visually dramatic drives in India.', fareLabel: '12 Seater starting fare', fare: 'Rs 20,000 onwards' },
    { title: 'Manali to Dharamshala Package', meta: ['~250 km', 'Himachal Combo Trip', 'Scenic Mountain Drive'], desc: 'A popular route for groups combining two Himachal destinations in one trip. Around 250 km from Manali.', fareLabel: '12 Seater starting fare', fare: 'Rs 12,000 onwards' },
    { title: 'Manali to Sissu via Atal Tunnel', meta: ['Atal Tunnel Route', 'Lahaul Valley', 'Scenic Drive'], desc: 'One of the most scenic drives in Himachal Pradesh. Increasingly popular with groups who want something beyond the standard Rohtang Pass trip.', fareLabel: '12 Seater starting fare', fare: 'Rs 6,000 onwards' },
    { title: 'Manali to Chandigarh Package', meta: ['~310 km', '8–9 Hours', 'End of Trip Transfer'], desc: 'End of trip transfer for groups heading back to the plains. Around 310 km from Manali, the drive takes 8 to 9 hours depending on stops.', fareLabel: '12 Seater starting fare', fare: 'Rs 14,000 onwards' },
  ],
  whyCards: [
    { title: 'Vehicle Condition That Matters', desc: 'Every vehicle is serviced and checked before each mountain trip. Tyre condition, brake performance, engine health — these are not optional checks on Himalayan roads. They are non-negotiable.' },
    { title: 'Right Fleet for Every Route', desc: '9 seater for Solang Valley. 12 seater for Rohtang Pass. 20 seater for large groups. Luxury tempo for Manali to Leh. The vehicle matches the route, not just the head count.' },
    { title: 'Clear Fare Before You Confirm', desc: 'Complete fare breakdown at quote stage — base fare, permit charges, outstation rate, all inclusions clearly stated.' },
    { title: 'Vehicle and Driver Confirmed in Advance', desc: 'No waiting until the morning of the trip to find out who your driver is. Vehicle details and driver name shared in advance. Confirmed, not just promised.' },
    { title: 'Permit Assistance Included', desc: 'Rohtang Pass permit arranged at booking. For Spiti and high-altitude zones, guidance on all permit requirements before departure.' },
    { title: 'Multi-Day Package Planning', desc: 'Manali to Leh and Spiti packages include route briefing, overnight stops, driver accommodation, and a driver who knows every stretch of the route from personal experience.' },
  ],
  faqs: [
    { q: 'Q1. What is the tempo traveller price in Manali?', a: 'Starts at Rs 4,000 for a 9 seater and Rs 5,000 for a 12 seater for a full day local tour of 8 hours and 80 km.' },
    { q: 'Q2. Is Rohtang Pass permit included in the fare?', a: 'No. Permit is charged separately and arranged by Yatra Travel India at the time of booking. Permit charges vary based on vehicle type and travel date.' },
    { q: 'Q3. Which size is best for Manali to Leh?', a: '12 seater for groups up to 12 people. 16 seater for groups of 13 or more for better comfort across a 2 to 3 day drive.' },
    { q: 'Q4. How early should I book a tempo traveller in Manali?', a: '1 to 2 weeks for local trips during peak season. 3 to 4 weeks in advance for Leh and Spiti multi-day packages.' },
    { q: 'Q5. Is a luxury tempo traveller available in Manali?', a: 'Yes. Reclining seats, multi-zone AC, air suspension, LCD screens, charging points at every seat. Starting at Rs 8,000 for local sightseeing.' },
    { q: 'Q6. What is the Manali to Leh tempo traveller fare?', a: 'Starts at Rs 25,000 for a 12 seater. 2 to 3 day package. Fuel, toll, driver allowance, and driver accommodation all included.' },
    { q: 'Q7. What is the Manali to Rohtang Pass tempo traveller fare?', a: 'Starts at Rs 7,000 for a 12 seater. Permit arranged separately at the booking stage by Yatra Travel India.' },
    { q: 'Q8. Does the fare include toll and parking?', a: 'Yes. Every tempo traveller fare at Yatra Travel India includes fuel, toll, parking, and driver allowance. No hidden charges.' },
    { q: 'Q9. Is a tempo traveller safe on Manali mountain roads?', a: 'Yes. Every vehicle is serviced before each trip — tyres, brakes, engine health. Drivers are assigned based on specific mountain route experience.' },
    { q: 'Q10. Can I book a tempo traveller for Manali to Spiti Valley?', a: 'Yes. Multi-day Spiti package starts at Rs 20,000 for a 12 seater. Experienced Spiti route driver assigned.' },
  ],
  noteBox: 'Peak season in Manali runs from <strong>May to September.</strong> The 12 seater tempo traveller books up especially fast during this period. Book at least <strong>1 to 2 weeks in advance</strong> for local and Rohtang trips. For <strong>Manali to Leh and Spiti multi-day packages, 3 to 4 weeks in advance is strongly recommended.</strong>',
  footerServices: ['9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', 'Luxury Tempo Traveller', 'Mercedes Tempo Traveller'],
  footerRoutes: ['Manali Local Sightseeing', 'Manali to Rohtang Pass', 'Manali to Leh', 'Manali to Spiti Valley', 'Manali to Dharamshala', 'Manali to Chandigarh'],
  popularRoutes: ['Manali Local Sightseeing Tour', 'Manali to Rohtang Pass Day Trip', 'Manali to Solang Valley Trip', 'Manali to Sissu Atal Tunnel', 'Manali to Leh Multi-Day Package', 'Manali to Spiti Valley Package', 'Manali to Dharamshala Tempo Traveller', 'Manali to Chandigarh Tempo Traveller', 'Hidimba Temple and Old Manali Tour', 'Vashisht Village Jogini Waterfall', 'Manali Corporate Retreat Vehicle', 'Destination Wedding Manali Transfer', 'College Batch Trip Manali', 'Manali to Kasol Kheerganga', 'Manali to Kullu Naggar Castle', 'Manali to Lahaul Valley Tour', '12 Seater Tempo Traveller Manali', '20 Seater Tempo Traveller Manali', 'Luxury Tempo Traveller Manali', 'Mercedes Tempo Traveller Manali'],
  ctaHeading: 'Book Your Manali Group Trip Today',
  ctaDesc: 'Whether your group needs a 9 seater for a quick Solang Valley day trip or a 20 seater for a full Manali to Leh expedition, Yatra Travel India has the vehicle, the driver, and the local knowledge to make it happen properly. Call 9044019511.',
}

/* ══════════════════════════════════════════
   BHUBANESWAR
══════════════════════════════════════════ */
const bhubaneswar: CityData = {
  slug: 'bhubaneswar',
  cityName: 'Bhubaneswar',
  pageTitle: 'Best Tempo Traveller Service in Bhubaneswar',
  metaTitle: 'Tempo Traveller in Bhubaneswar | Yatra Travel India – Budget Friendly Group Travel Across Odisha',
  metaDesc: 'Book tempo traveller in Bhubaneswar starting at Rs 3,000. Puri, Konark, Lingaraj Temple, Chilika Lake, Baripada and all Odisha routes. 9 to 24 seater. Fixed fare. Call 9044019511.',
  metaKeywords: 'tempo traveller in bhubaneswar, tempo traveller on rent in bhubaneswar, 12 seater tempo traveller bhubaneswar, 20 seater tempo traveller bhubaneswar, bhubaneswar to puri tempo traveller, bhubaneswar to konark tempo traveller, luxury tempo traveller bhubaneswar, golden triangle odisha tour',
  topbarText: 'Best Tempo Traveller Service in Bhubaneswar — Puri, Konark, Chilika Lake and All Odisha Routes',
  heroHeading: 'Best Tempo Traveller Service in Bhubaneswar',
  heroSub: 'Lingaraj Temple · Puri Jagannath Dham · Konark Sun Temple · Chilika Lake · Baripada Simlipal · Golden Triangle Odisha',
  heroBadges: ['9 to 24 Seater Available', 'Starting Rs 3,000', 'Luxury Tempo Traveller', 'No Hidden Charges'],
  bookingTabs: ['Local Sightseeing', 'Puri and Konark', 'Wedding Transfer', 'Outstation'],
  defaultCity: 'Bhubaneswar',
  vehicleOptions: ['Select Vehicle', '9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', '24 Seater Tempo Traveller', 'Luxury Tempo Traveller'],
  trustItems: [
    { title: 'On-Time Pickup', sub: 'Driver details shared night before', iconType: 'clock' },
    { title: 'Transparent Fixed Fare', sub: 'Everything included, nothing added after', iconType: 'card' },
    { title: 'Well Maintained Fleet', sub: 'Regularly serviced, clean interiors', iconType: 'shield' },
    { title: 'Experienced Local Drivers', sub: 'Know all Bhubaneswar and Odisha routes', iconType: 'person' },
  ],
  infoBoxText: 'Yatra Travel India offers <strong>budget-friendly tempo travellers in Bhubaneswar</strong> for every group size — starting at <strong>Rs 3,000 for a 9 seater</strong> and <strong>Rs 4,200 for a 12 seater.</strong> Transparent pricing, no hidden charges, fare confirmed before the trip starts. Call <strong>9044019511</strong> to book today.',
  introH1: 'Best Tempo Traveller Service in Bhubaneswar — Yatra Travel India',
  introParagraphs: [
    'Travelling with a group in Bhubaneswar does not have to be expensive. Yatra Travel India offers budget-friendly tempo travellers in Bhubaneswar for every group size — starting at Rs 3,000 for a 9 seater and Rs 4,200 for a 12 seater. Transparent pricing, no hidden charges, and fare confirmed before the trip starts.',
    'Whether your group is heading to Lingaraj Temple, Puri Jagannath Dham, Konark Sun Temple, or anywhere across Odisha, Yatra Travel India has the right vehicle at the right price. Split the fare across 10 or 12 people and the per head cost beats individual cabs on every route.',
  ],
  sectionServicesTitle: 'Vehicle Options Available in Bhubaneswar',
  vehicles: [
    { badge: 'Rs 3,000 Local', title: '9 Seater Tempo Traveller', popular: 'Small Groups', color: '#0f6ec8', badgeOrange: false, price: 'Rs.5,800', priceLabel: ' local onwards', specs: [{ label: '6–9 People', sub: 'Group Size' }, { label: 'Rs.5,800', sub: '8 hrs / 80 km' }, { label: 'Rs.23/km', sub: 'Outstation Rate' }, { label: 'Pushback Seats', sub: 'Music System' }], tags: ['Full AC', 'Pushback Seats', 'Temple Tour', 'Short Trips'], tagOrange: false, btnLabel: 'Book 9 Seater', selectKey: '9 Seater Tempo Traveller' },
    { badge: 'Rs 6,200 Local', title: '12 Seater Tempo Traveller', popular: 'Most Booked', color: '#0f6ec8', badgeOrange: false, price: 'Rs.6,200', priceLabel: ' local onwards', specs: [{ label: '10–12 People', sub: 'Group Size' }, { label: 'Rs.6,200', sub: '8 hrs / 80 km' }, { label: 'Rs.24/km', sub: 'Outstation Rate' }, { label: 'LED TV', sub: 'Charging Points' }], tags: ['Full AC', 'LED TV', 'Puri Trip', 'Konark Tour'], tagOrange: false, btnLabel: 'Book 12 Seater', selectKey: '12 Seater Tempo Traveller' },
    { badge: 'Rs 7,500 Local', title: '16 Seater Tempo Traveller', popular: '', color: '#0f6ec8', badgeOrange: false, price: 'Rs.7,500', priceLabel: ' local onwards', specs: [{ label: '13–16 People', sub: 'Group Size' }, { label: 'Rs.7,500', sub: '8 hrs / 80 km' }, { label: 'Rs.26/km', sub: 'Outstation Rate' }, { label: 'Reclining Seats', sub: 'Multi-Zone AC' }], tags: ['Multi-Zone AC', 'Reclining Seats', 'Corporate Groups', 'School Trips'], tagOrange: false, btnLabel: 'Book 16 Seater', selectKey: '16 Seater Tempo Traveller' },
    { badge: 'Rs 9,500 Local', title: '20 Seater Tempo Traveller', popular: 'Large Groups', color: '#ff6b35', badgeOrange: true, price: 'Rs.9,500', priceLabel: ' local onwards', specs: [{ label: '17–20 People', sub: 'Group Size' }, { label: 'Rs.9,500', sub: '8 hrs / 80 km' }, { label: 'Rs.30/km', sub: 'Outstation Rate' }, { label: 'Large Boot', sub: 'Entertainment' }], tags: ['Full AC', 'Large Boot', 'Pilgrimage Groups', 'Wedding Parties'], tagOrange: true, btnLabel: 'Book 20 Seater', selectKey: '20 Seater Tempo Traveller' },
    { badge: 'Rs 11,000 Local', title: 'Luxury Tempo Traveller', popular: 'VIP and Weddings', color: '#0f6ec8', badgeOrange: false, price: 'Rs.11,000', priceLabel: ' local onwards', specs: [{ label: '9–16 People', sub: 'Group Size' }, { label: 'Rs.11,000', sub: '8 hrs / 80 km' }, { label: 'Rs.30+/km', sub: 'Outstation Rate' }, { label: 'WiFi · Mini Fridge', sub: 'LED Lighting' }], tags: ['Leather Seats', 'WiFi', 'Mini Fridge', 'LED Lighting'], tagOrange: false, btnLabel: 'Book Luxury Tempo', selectKey: 'Luxury Tempo Traveller' },
  ],
  localFareTable: [
    { vehicle: '9 Seater Tempo Traveller', seating: '6 to 9 people', fare: 'Rs 5,800 onwards', hours: '8 hours', km: '80 km' },
    { vehicle: '12 Seater Tempo Traveller', seating: '10 to 12 people', fare: 'Rs 6,200 onwards', hours: '8 hours', km: '80 km' },
    { vehicle: '16 Seater Tempo Traveller', seating: '13 to 16 people', fare: 'Rs 7,500 onwards', hours: '8 hours', km: '80 km' },
    { vehicle: '20 Seater Tempo Traveller', seating: '17 to 20 people', fare: 'Rs 9,500 onwards', hours: '8 hours', km: '80 km' },
    { vehicle: 'Luxury Tempo Traveller', seating: '9 to 16 people', fare: 'Rs 11,000 onwards', hours: '8 hours', km: '80 km' },
  ],
  localFareNote: '* Budget-friendly starting fares: Rs 3,000 for 9 seater and Rs 4,200 for 12 seater — contact 9044019511 for these special rates. Fare includes fuel, toll, parking, and driver allowance. No hidden charges.',
  outstationFareTable: [
    { vehicle: '9 Seater Tempo Traveller', seating: '6 to 9 people', rate: 'Rs 23/km', features: 'Pushback seats, AC, music system' },
    { vehicle: '12 Seater Tempo Traveller', seating: '10 to 12 people', rate: 'Rs 24/km', features: 'LED TV, charging points, luggage space' },
    { vehicle: '16 Seater Tempo Traveller', seating: '13 to 16 people', rate: 'Rs 26/km', features: 'Reclining seats, multi-zone AC' },
    { vehicle: '20 Seater Tempo Traveller', seating: '17 to 20 people', rate: 'Rs 30/km', features: 'Large boot, entertainment system' },
    { vehicle: 'Luxury Tempo Traveller', seating: '9 to 16 people', rate: 'Rs 30/km onwards', features: 'Leather seats, WiFi, mini fridge, LED lighting' },
  ],
  outstationFareNote: '* Per km rate covers full distance both ways. Rate includes fuel, toll, parking, driver allowance, and state tax for outstation trips. No extra charges after the trip. Call 9044019511 for exact quote.',
  useTags: ['Bhubaneswar Temple Circuit Tour', 'Golden Triangle Odisha Tour', 'Puri Jagannath Dham Pilgrimage', 'Konark Sun Temple Visit', 'Chilika Lake Day Trip', 'Baripada and Simlipal', 'Bhitarkanika Wildlife Tour', 'Wedding Guest Transfers', 'Corporate Offsite Odisha', 'School Excursion Trips', 'Gopalpur Beach Weekend', 'Multi-Day Odisha Tour'],
  benefits: [
    { title: 'One Vehicle for the Whole Group', desc: 'No splitting the group across multiple cabs. Everyone travels together from the same pickup point and arrives at the same time. No coordination stress, no waiting for stragglers.' },
    { title: 'Budget Friendly Fares', desc: 'Starting at Rs 3,000 for a 9 seater and Rs 4,200 for a 12 seater. Split across the group and the per head cost is almost always lower than booking individual cabs across Bhubaneswar.' },
    { title: 'Transparent Fixed Pricing', desc: 'Fare confirmed before the trip starts. Fuel, toll, parking, and driver allowance all included. No meter running, no surprise additions at the end of the day.' },
    { title: 'Well Maintained Fleet', desc: 'Every vehicle is regularly serviced and checked before each trip. Clean interiors, working AC, good tyre condition.' },
    { title: 'Experienced Local Drivers', desc: 'Drivers who know Bhubaneswar city roads, temple routes, and all major Odisha outstation highways personally.' },
    { title: 'On-Time Pickup Every Time', desc: 'Driver details shared the night before. Vehicle at your door at the confirmed time. No chasing, no waiting — especially critical for early morning temple visits.' },
  ],
  ei: {
    included: ['5% GST', 'Driver Day Charge', 'Fuel Charge', 'Base Fare of Tempo Traveller', 'Driver Accommodation (Multi-day trips)'],
    excluded: ['Toll Tax during trip', 'State Tax if applicable paid by Customer', 'Parking Charges as per actual and paid by customer', 'Airport Parking Charge as per actual and paid by customer', 'Driver Night Charge (Sedan – 250, SUV – 300, Tempo Traveller – 500)', 'Carrier Charge Extra – 300'],
  },
  wedding: {
    heading: 'Wedding Transport in Bhubaneswar — On Time, Together, Comfortable',
    intro: 'Wedding transport in Bhubaneswar needs to work perfectly. No delays, no confusion, no guests stranded at the wrong venue. A tempo traveller from Yatra Travel India keeps the whole wedding party together, on time, and comfortable throughout the day.',
    detail: "Moving guests between mandap, hotel, and reception across Bhubaneswar in multiple cabs always creates problems. Someone gets delayed, someone takes a wrong turn, and the bride's family is waiting while half the guests are still on the way. One tempo traveller removes all of that. One pickup, one vehicle, everyone arrives together.",
    list: ['Guest pickup and drop between hotel and wedding venue', 'Baraat group travel in one vehicle', 'Reception to hotel transfers after the function', 'Airport pickup for outstation wedding guests', 'Multi-day wedding event transfers across Bhubaneswar', '12, 16 and 20 seater available for all group sizes'],
  },
  attractions: [
    { title: 'Lingaraj Temple, Bhubaneswar', desc: 'One of the oldest and most significant temples in India. Dedicated to Lord Shiva, this magnificent 11th century Kalinga-style temple is the spiritual heart of Bhubaneswar. A must-start for any Bhubaneswar temple circuit by tempo traveller.' },
    { title: 'Puri Jagannath Dham', desc: 'Around 60 km from Bhubaneswar. One of the four sacred Char Dham sites in India. The Jagannath Temple complex and Puri beach together make this the single most popular outstation route from Bhubaneswar. Starting fare Rs 6,500 for a 12 seater.' },
    { title: 'Konark Sun Temple', desc: 'Around 65 km from Bhubaneswar. A UNESCO World Heritage Site and one of the greatest examples of Kalinga architecture. Best covered together with Puri on the Golden Triangle Odisha route.' },
    { title: 'Udayagiri and Khandagiri Caves', desc: 'Around 7 km from Bhubaneswar city centre. Ancient Jain rock-cut caves dating back to the 2nd century BC. Popular school picnic and heritage group tour destination.' },
    { title: 'Dhauli Peace Pagoda', desc: 'Around 8 km from Bhubaneswar. The site of the famous Kalinga War where Emperor Ashoka renounced violence and embraced Buddhism. A meaningful heritage stop on any Bhubaneswar local sightseeing tour.' },
    { title: 'Chilika Lake', desc: 'Around 100 km from Bhubaneswar. Asia\'s largest brackish water lagoon. Famous for migratory birds, Irrawaddy dolphins, and the Kalijai Temple island. Best visited between November and February.' },
    { title: 'Bhitarkanika National Park', desc: 'Around 165 km from Bhubaneswar. Fare from Rs 7,500 for a 12 seater. One of the most spectacular eco-tourism destinations in India — dense mangrove forests, saltwater crocodiles, and migratory birds.' },
    { title: 'Baripada and Simlipal National Park', desc: 'Around 240 km from Bhubaneswar. Fare from Rs 8,500 for a 12 seater. Gateway to Simlipal National Park — one of India\'s largest tiger reserves. Drive takes around 4 to 5 hours.' },
  ],
  whyCards: [
    { title: 'On-Time Pickup Every Time', desc: 'Driver details shared the night before. Vehicle at your door at the confirmed time. No chasing, no waiting — for temple tours, pilgrimage groups, and early morning departures.' },
    { title: 'Budget Friendly Starting at Rs 3,000', desc: 'Most affordable tempo traveller rates in Bhubaneswar. Starting at Rs 3,000 for 9 seater and Rs 4,200 for 12 seater. Transparent pricing, nothing added after the trip.' },
    { title: 'Well Maintained and Clean Fleet', desc: 'Every vehicle is regularly serviced, clean interiors, working AC, good tyre condition. Reliable on every route from Lingaraj Temple local tours to Puri, Konark, and Simlipal outstation.' },
    { title: 'Experienced Odisha Route Drivers', desc: 'Drivers who know Bhubaneswar city roads, temple routes, Puri highway, Konark road, and all major Odisha outstation highways personally.' },
    { title: 'Right Size for Every Group', desc: '9 seater, 12 seater, 16 seater, 20 seater, and 24 seater available. Small pilgrim family or large corporate team, there is a vehicle that fits exactly.' },
    { title: 'One Call Booking', desc: 'Call 9044019511. Share group size, travel date, and route. Booking confirmed on the same call with vehicle details, driver name, and fixed fare.' },
  ],
  faqs: [
    { q: 'Q1. Is a tempo traveller better than booking multiple cabs in Bhubaneswar?', a: 'Yes. A tempo traveller in Bhubaneswar keeps the whole group in one vehicle. No splitting up, no coordination across multiple cabs, no one arriving late. And when the fare is split across 10 or 12 people the per head cost beats individual cabs on almost every route.' },
    { q: 'Q2. Can I hire a tempo traveller in Bhubaneswar for a corporate offsite?', a: 'Yes. Corporate tempo traveller hire in Bhubaneswar is one of the most regularly booked services. 12 and 16 seater most popular for corporate groups. Professional driver, confirmed vehicle, fixed fare agreed upfront. Call 9044019511 to book.' },
    { q: 'Q3. What is the best tempo traveller route for a Golden Triangle Odisha trip from Bhubaneswar?', a: 'The most popular Golden Triangle Odisha route covers Bhubaneswar, Puri, and Konark in one full day. Starting fare Rs 6,500 for a 12 seater covering all three destinations.' },
    { q: 'Q4. How much does a 20 seater tempo traveller cost in Bhubaneswar?', a: '20 seater tempo traveller in Bhubaneswar starts at Rs 9,500 for a local tour of 8 hours and 80 km. Outstation rate starts at Rs 30 per km.' },
    { q: 'Q5. Is tempo traveller available for school picnic trips from Bhubaneswar?', a: 'Yes. Tempo traveller for school trips from Bhubaneswar is regularly booked for educational tours, picnics, and excursions. Nandankanan Zoological Park, Udayagiri Khandagiri Caves, Dhauli Peace Pagoda.' },
    { q: 'Q6. What is the tempo traveller fare from Bhubaneswar to Odisha temple circuit?', a: 'Full day local package starts at Rs 4,200 for a 12 seater. All major Bhubaneswar temples covered comfortably in one day.' },
    { q: 'Q7. Can I book a tempo traveller in Bhubaneswar for a multi-day Odisha tour?', a: 'Yes. Multi-day tempo traveller package from Bhubaneswar is available covering Bhubaneswar, Puri, Konark, Chilika Lake, Simlipal, and Baripada. Driver accommodation included for overnight stops.' },
    { q: 'Q8. Is tempo traveller available from Bhubaneswar to Baripada?', a: 'Yes. Tempo traveller Bhubaneswar to Baripada starts at Rs 8,500 for a 12 seater. Drive takes around 4 to 5 hours.' },
    { q: 'Q9. What is the tempo traveller fare from Bhubaneswar to Gopalpur Beach?', a: 'Tempo traveller Bhubaneswar to Gopalpur Beach fare starts at Rs 9,000 for a 12 seater. Gopalpur is 180 km from Bhubaneswar. Call 9044019511 to book.' },
    { q: 'Q10. Can I get a tempo traveller in Bhubaneswar with a driver who knows Odisha pilgrimage routes?', a: 'Yes. Every tempo traveller driver at Yatra Travel India in Bhubaneswar is familiar with all major Odisha pilgrimage routes including Jagannath Puri, Konark, Lingaraj Temple, Taratarini Temple.' },
    { q: 'Q11. What is the tempo traveller fare from Bhubaneswar to Bhitarkanika?', a: 'Tempo traveller Bhubaneswar to Bhitarkanika fare starts at Rs 7,500 for a 12 seater. Bhitarkanika National Park is 165 km from Bhubaneswar. Multi-day package available.' },
    { q: 'Q12. What makes Yatra Travel India the best tempo traveller service in Bhubaneswar?', a: 'Vehicle on time, driver knows every Odisha route, fare exactly as agreed. Well-maintained fleet, transparent pricing, experienced drivers on all local and outstation routes across Odisha.' },
  ],
  noteBox: 'For the <strong>Golden Triangle Odisha tour (Bhubaneswar–Puri–Konark)</strong> and <strong>Rath Yatra season</strong> in Puri, book at least <strong>2 to 3 weeks in advance.</strong> For school trips, <strong>Chilika Lake group tours</strong> during November–February bird season, and <strong>wedding transfers</strong> book at least 7 to 10 days ahead.',
  footerServices: ['9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', '24 Seater Tempo Traveller', 'Luxury Tempo Traveller'],
  footerRoutes: ['Bhubaneswar to Puri', 'Bhubaneswar to Konark', 'Golden Triangle Odisha', 'Bhubaneswar to Chilika Lake', 'Bhubaneswar to Baripada', 'Bhubaneswar to Bhitarkanika'],
  popularRoutes: ['Bhubaneswar Temple Circuit Tour', 'Bhubaneswar to Puri Tempo Traveller', 'Bhubaneswar to Konark Tempo Traveller', 'Golden Triangle Odisha Tour', 'Bhubaneswar to Chilika Lake', 'Bhubaneswar to Bhitarkanika Tour', 'Bhubaneswar to Baripada Simlipal', 'Bhubaneswar to Gopalpur Beach', 'Lingaraj Temple Local Tour', 'Udayagiri Khandagiri Caves Tour', 'Dhauli Peace Pagoda Day Trip', 'Bhubaneswar Airport Group Transfer', 'Bhubaneswar Wedding Guest Transport', 'Bhubaneswar Corporate Offsite', 'School Picnic Nandankanan Zoo', 'Multi-Day Odisha Tour Package', '12 Seater Tempo Traveller Bhubaneswar', '20 Seater Tempo Traveller Bhubaneswar', 'Luxury Tempo Traveller Bhubaneswar', 'Bhubaneswar to Sambalpur Tempo Traveller'],
  ctaHeading: 'Book Your Bhubaneswar Group Trip Today',
  ctaDesc: 'Budget-friendly fares, well-maintained fleet, experienced local drivers, fixed transparent pricing. Call 9044019511 — tell us your group size, route, and travel date. We will handle everything else.',
}

/* ══════════════════════════════════════════
   SOMNATH
══════════════════════════════════════════ */
const somnath: CityData = {
  slug: 'somnath',
  cityName: 'Somnath',
  pageTitle: 'Tempo Traveller in Somnath Temple',
  metaTitle: 'Tempo Traveller in Somnath Temple | Yatra Travel India – Jyotirlinga Darshan Group Tour',
  metaDesc: 'Book tempo traveller in Somnath for Jyotirlinga darshan group tour. Covers Somnath Temple, Bhalka Tirth, Triveni Sangam, Dwarka route. AC vehicles, experienced drivers, transparent pricing.',
  metaKeywords: 'tempo traveller in somnath, tempo traveller rental in somnath, somnath jyotirlinga darshan tour, somnath to dwarka tempo traveller, 12 seater tempo traveller somnath, luxury tempo traveller somnath, saurashtra circuit tempo traveller, kartik purnima somnath tour',
  topbarText: 'Somnath Jyotirlinga Darshan Group Tour — Reliable Tempo Traveller Service',
  heroHeading: 'Tempo Traveller in Somnath Temple',
  heroSub: 'Jyotirlinga Darshan · Bhalka Tirth · Triveni Sangam · Somnath to Dwarka · Saurashtra Circuit',
  heroBadges: ['9 to 20 Seater Options', 'Experienced Local Drivers', 'Starting Rs.3,000', 'No Hidden Charges · 24/7 Support'],
  bookingTabs: ['Local Darshan', 'Somnath to Dwarka', 'Saurashtra Circuit', 'Outstation'],
  defaultCity: 'Somnath',
  vehicleOptions: ['Select Vehicle', '9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', 'Luxury Tempo Traveller'],
  trustItems: [
    { title: 'Local Route Experts', sub: 'Somnath & Gujarat specialists', iconType: 'shield' },
    { title: '24/7 Support', sub: 'Available round the clock', iconType: 'clock' },
    { title: 'Online Payment', sub: 'UPI, Card, Net Banking', iconType: 'card' },
    { title: 'Transparent Pricing', sub: 'No hidden charges ever', iconType: 'check' },
  ],
  infoBoxText: 'Yatra Travel India provides <strong>tempo traveller rental in Somnath</strong> for Jyotirlinga darshan group tours, Somnath to Dwarka pilgrimage, Saurashtra circuit tours, and local sightseeing. <strong>One reliable vehicle and one experienced driver who knows Somnath well.</strong> Call <strong>9044019511</strong> to book instantly.',
  introH1: 'Book Tempo Traveller in Somnath Temple — Jyotirlinga Darshan Group Tour',
  introParagraphs: [
    'Somnath is one of the twelve Jyotirlingas in India. Every year thousands of devotees travel to Somnath in groups for darshan. Getting the whole group to the temple on time, managing parking near the Jyotirlinga, and covering nearby sacred spots on the same day needs one reliable vehicle and one experienced driver who knows Somnath well.',
    'A full day darshan package covers Somnath Jyotirlinga Temple, Triveni Sangam, Bhalka Tirth, Geeta Mandir, Lakshminarayan Temple, and Suraj Mandir — all comfortably covered in one full day. Most groups visiting Somnath also add Dwarka Dwarkadhish darshan to the same trip.',
  ],
  sectionServicesTitle: 'Tempo Traveller Options in Somnath',
  vehicles: [
    { badge: 'From Rs.3,000', title: '9 Seater Tempo Traveller', popular: 'Budget Pick', color: '#0f6ec8', badgeOrange: false, price: 'Rs.7,000', priceLabel: ' darshan tour', specs: [{ label: 'Up to 9 People', sub: 'Group Size' }, { label: 'Rs.7,000', sub: 'Full Day Darshan' }, { label: 'AC Comfort', sub: 'All Stops' }, { label: 'Driver Waits', sub: 'At Every Stop' }], tags: ['AC', 'Pushback Seats', 'Somnath Temple', 'Local Sightseeing'], tagOrange: false, btnLabel: 'Book 9 Seater', selectKey: '9 Seater Tempo Traveller' },
    { badge: 'From Rs.4,000', title: '12 Seater Tempo Traveller', popular: 'Most Booked', color: '#0f6ec8', badgeOrange: false, price: 'Rs.8,000', priceLabel: ' darshan tour', specs: [{ label: 'Up to 12 People', sub: 'Group Size' }, { label: 'Rs.8,000', sub: 'Full Day Darshan' }, { label: 'All Routes', sub: 'Dwarka, Diu' }, { label: 'Best Value', sub: 'Per Head Cost' }], tags: ['AC', 'Pushback Seats', 'Somnath–Dwarka', 'Saurashtra Circuit'], tagOrange: false, btnLabel: 'Book 12 Seater', selectKey: '12 Seater Tempo Traveller' },
    { badge: 'From Rs.5,500', title: '16 Seater Tempo Traveller', popular: '', color: '#0f6ec8', badgeOrange: false, price: 'Rs.8,500', priceLabel: ' darshan tour', specs: [{ label: '13–16 People', sub: 'Group Size' }, { label: 'Rs.8,500', sub: 'Full Day Darshan' }, { label: 'Extra Legroom', sub: 'Comfortable' }, { label: 'Long Routes', sub: 'Ahmedabad' }], tags: ['AC', 'Extra Legroom', 'Luggage Space', 'Group Tours'], tagOrange: false, btnLabel: 'Book 16 Seater', selectKey: '16 Seater Tempo Traveller' },
    { badge: 'Large Groups', title: '20 Seater Tempo Traveller', popular: 'Festival Season', color: '#ff6b35', badgeOrange: true, price: 'Rs.9,500', priceLabel: ' darshan tour', specs: [{ label: '17–20 People', sub: 'Group Size' }, { label: 'Rs.9,500', sub: 'Full Day Darshan' }, { label: 'Kartik Purnima', sub: 'Festival Groups' }, { label: 'Max Luggage', sub: 'All Trips' }], tags: ['AC', 'Max Luggage', 'Group Friendly', 'Pilgrim Tours'], tagOrange: true, btnLabel: 'Book 20 Seater', selectKey: '20 Seater Tempo Traveller' },
    { badge: 'From Rs.7,000', title: 'Luxury Tempo Traveller', popular: 'VIP Darshan', color: '#0f6ec8', badgeOrange: false, price: 'Rs.7,000', priceLabel: ' local onwards', specs: [{ label: '9–16 People', sub: 'Group Size' }, { label: 'Rs.7,000', sub: 'Local Tour' }, { label: 'Senior Citizens', sub: 'VIP Groups' }, { label: 'Premium', sub: 'Comfort' }], tags: ['Reclining Seats', 'Multi-Zone AC', 'LCD Screen', 'Charging Points'], tagOrange: false, btnLabel: 'Book Luxury Tempo', selectKey: 'Luxury Tempo Traveller' },
  ],
  localFareTable: [
    { vehicle: '9 Seater Tempo Traveller', seating: 'Up to 9', fare: 'Rs 7,000 onwards', hours: 'Full Day', km: 'All stops' },
    { vehicle: '12 Seater Tempo Traveller', seating: 'Up to 12', fare: 'Rs 8,000 onwards', hours: 'Full Day', km: 'All stops' },
    { vehicle: '16 Seater Tempo Traveller', seating: 'Up to 16', fare: 'Rs 8,500 onwards', hours: 'Full Day', km: 'All stops' },
    { vehicle: '20 Seater Tempo Traveller', seating: 'Up to 20', fare: 'Rs 9,500 onwards', hours: 'Full Day', km: 'All stops' },
  ],
  localFareNote: '* Local temple tour (shorter): starts at Rs.3,000 for 9 seater and Rs.4,000 for 12 seater. Driver waits at every stop. All fares include fuel and driver allowance.',
  useTags: ['Somnath Jyotirlinga Darshan', 'Bhalka Tirth Visit', 'Triveni Sangam', 'Evening Aarti Tour', 'Somnath to Dwarka Pilgrimage', 'Saurashtra Circuit Tour', 'Kartik Purnima Festival', 'Family Pilgrimage Groups', 'Senior Citizen VIP Tours', 'Sasan Gir Wildlife Day Trip'],
  ei: {
    included: ['5% GST', 'Driver Day Charge', 'Fuel Charge', 'Base Fare of Tempo Traveller'],
    excluded: ['Toll Tax during trip', 'State Tax if applicable paid by Customer', 'Parking Charges as per actual', 'Airport Parking Charge as per actual', 'Driver Night Charge (Tempo Traveller – 500)', 'Carrier Charge Extra – 300'],
  },
  whyTempoTitle: 'Why Tempo Traveller is the Best Choice for Somnath Darshan',
  whyTempoParas: [
    'Somnath is one of the twelve Jyotirlingas — among the most sacred temples in all of India. Getting the whole group to the temple on time, managing parking near the Jyotirlinga during busy darshan hours, and covering nearby sacred spots on the same day requires one reliable vehicle with a driver who knows the area well.',
    'With a tempo traveller, the entire group travels together in one vehicle. There is no coordination between multiple taxis, no group getting split between cars, and no confusion about who goes where. Everyone arrives together, does darshan together, and moves to the next sacred spot together.',
    'Most groups visiting Somnath also extend the trip to Dwarka Dwarkadhish Temple. With a booked tempo traveller, this is simply a route extension. The driver is briefed, the vehicle is ready, and the group continues the pilgrimage without arranging separate transport from scratch.',
  ],
  features: [
    { title: 'Full Air Conditioning', desc: 'Powerful AC to keep the group comfortable in Gujarat warm weather during darshan and travel between sacred spots' },
    { title: 'Comfortable Pushback Seats', desc: 'Reclining seats for long outstation routes to Dwarka, Ahmedabad, and the Saurashtra circuit' },
    { title: 'Experienced Local Drivers', desc: 'Drivers familiar with Somnath temple parking, darshan timings, and all Gujarat pilgrimage routes personally' },
    { title: 'Driver Waits at Every Stop', desc: 'Your driver stays with the vehicle at each sacred spot — no need to arrange return transport at each location' },
    { title: 'Flexible Stops', desc: 'Visit all 6 sacred spots in Somnath at your own pace — aarti timings, photo stops, prasad breaks all accommodated' },
    { title: 'Clean and Well-Maintained', desc: 'All vehicles sanitized and regularly serviced before every pilgrimage trip — fresh interiors, working AC' },
    { title: 'Transparent Pricing', desc: 'Full fare breakdown before booking. No hidden charges added at the end of the trip. Driver allowance included' },
    { title: 'Music System', desc: 'Music system available for devotional songs during the pilgrimage journey from Somnath to every sacred site' },
  ],
  attractions: [
    { title: 'Somnath Jyotirlinga Temple', desc: 'One of the twelve sacred Jyotirlingas dedicated to Lord Shiva and the first among them. Situated on the western coast of Gujarat facing the Arabian Sea, the temple is a symbol of eternal faith rebuilt multiple times throughout history.' },
    { title: 'Somnath Beach and Triveni Sangam', desc: 'The meeting point of three sacred rivers — Kapila, Hiran, and Saraswati — at the Arabian Sea. Devotees take a holy dip here before temple darshan. The Triveni Sangam holds deep spiritual significance for pilgrims visiting Somnath.' },
    { title: 'Bhalka Tirth', desc: 'The sacred spot where Lord Krishna was wounded by an arrow from a hunter, marking his departure from earthly life. A deeply revered site for devotees of Lord Krishna, located close to Somnath temple.' },
    { title: 'Geeta Mandir', desc: 'A beautiful temple with the complete text of the Bhagavad Gita inscribed on its walls. A place of profound spiritual learning and reflection, very popular with pilgrim groups visiting Somnath.' },
    { title: 'Somnath to Sasan Gir', desc: '45 km from Somnath. Most popular wildlife day trip from Somnath. Home of the Asiatic lion. Perfect add-on for groups combining Jyotirlinga darshan with a wildlife safari. Starting fare Rs 3,500 for a 12 seater.' },
    { title: 'Somnath to Dwarka Dwarkadhish', desc: '230 km on smooth Gujarat highway. The most popular pilgrimage route from Somnath. Covers both Jyotirlingas in one comfortable trip. Multi-day package with driver accommodation available. Starting fare Rs 9,000 for a 12 seater.' },
  ],
  whyCards: [
    { title: 'Local Somnath Route Knowledge', desc: 'Drivers know temple parking, aarti timings, and every sacred spot on the Somnath darshan circuit. No wasted time navigating or asking for directions.' },
    { title: 'Transparent Pricing Always', desc: 'Competitive rates with no hidden charges. Full fare breakdown at booking — toll, parking, and driver allowance all clearly stated upfront.' },
    { title: 'Easy Booking — Same Call Confirmation', desc: 'Call or WhatsApp on 9044019511. Share group size, travel date, and route. Booking confirmed on the same call with driver details and fixed fare.' },
    { title: 'Multi-Day Pilgrimage Packages', desc: 'Somnath to Dwarka, Saurashtra full circuit, and Gujarat multi-city pilgrimages arranged with driver accommodation included for all overnight stops.' },
    { title: '24/7 Customer Support', desc: 'Support available round-the-clock via call and WhatsApp for any query or assistance during your Somnath pilgrimage trip.' },
    { title: 'Right Vehicle for Every Group', desc: 'From 9 seater for small family groups to 20 seater for large Kartik Purnima festival pilgrimages and luxury for VIP darshan tours.' },
  ],
  faqs: [
    { q: 'Q1. Is a tempo traveller the best way to travel from Somnath to Dwarka?', a: 'Yes. Tempo traveller from Somnath to Dwarka is the most practical option for pilgrimage groups. 230 km, smooth Gujarat highway, 4 hour drive. Starting fare Rs.9,000 for a 12 seater.' },
    { q: 'Q2. What is the tempo traveller fare for Somnath local temple tour?', a: 'Starts at Rs.3,000 for a 9 seater and Rs.4,000 for a 12 seater. Covers Somnath Jyotirlinga, Bhalka Tirth, Triveni Sangam, Geeta Mandir, and Somnath Beach in one full day.' },
    { q: 'Q3. Can I book for Kartik Purnima festival?', a: 'Yes. Tempo traveller for Kartik Purnima in Somnath is in high demand. Book at least 3 to 4 weeks in advance. 16 and 20 seater most popular for large festival pilgrimage groups.' },
    { q: 'Q4. What is the tempo traveller fare from Somnath to Sasan Gir?', a: 'Starts at Rs.3,500 for a 12 seater. Sasan Gir is 45 km from Somnath. Most popular wildlife day trip from Somnath — home of the Asiatic lion.' },
    { q: 'Q5. Is tempo traveller available for the Saurashtra pilgrimage circuit?', a: 'Yes. Covers Somnath, Dwarka, Palitana, Girnar, and Porbandar. Multi-day package with driver accommodation available. Call 9044019511 to plan and book.' },
    { q: 'Q6. What is the tempo traveller fare from Somnath to Diu?', a: 'Starts at Rs.5,000 for a 12 seater. Diu is 90 km from Somnath. Popular coastal add-on for groups combining Jyotirlinga darshan with a beach getaway.' },
    { q: 'Q7. Which size is best for a group of 15 people?', a: '16 seater tempo traveller is the right choice. Better legroom, more luggage space, and comfortable on longer routes like Somnath to Dwarka. Starting fare Rs.5,500.' },
    { q: 'Q8. Can I book for evening aarti and return?', a: 'Yes. Short hire tempo traveller available for evening aarti visit. Aarti held daily at 7 PM with sea backdrop. Call 9044019511 for short hire fare confirmation.' },
    { q: 'Q9. Is luxury tempo traveller available in Somnath?', a: 'Yes. Pushback reclining seats, multi-zone AC, air suspension, LCD screens, charging points at every seat. Starting fare Rs.7,000 for local tour. Recommended for elderly passengers.' },
    { q: 'Q10. What is the tempo traveller fare from Somnath to Ahmedabad?', a: 'Starts at Rs.15,000 for a 12 seater. Ahmedabad is 400 km from Somnath, drive takes 6 to 7 hours. Multi-day Gujarat tour package available on request.' },
  ],
  noteBox: 'Somnath sees its highest footfall during <strong>Kartik Purnima festival</strong> — book at least <strong>3 to 4 weeks in advance.</strong> For evening aarti visits confirm the same morning. For <strong>Somnath to Dwarka multi-day packages</strong> book at least 1 week ahead.',
  footerServices: ['9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', 'Luxury Tempo Traveller', 'Saurashtra Circuit Tours'],
  footerRoutes: ['Somnath Local Darshan', 'Somnath to Dwarka', 'Somnath to Sasan Gir', 'Somnath to Diu', 'Somnath to Junagadh', 'Somnath to Ahmedabad'],
  popularRoutes: ['Somnath to Dwarka Tempo Traveller', 'Somnath Local Darshan Tempo Traveller', 'Somnath to Sasan Gir Tempo Traveller', 'Somnath to Diu Tempo Traveller', 'Somnath to Junagadh Tempo Traveller', 'Somnath to Ahmedabad Tempo Traveller', 'Somnath to Palitana Tempo Traveller', 'Somnath to Porbandar Tempo Traveller', 'Somnath to Girnar Tempo Traveller', 'Somnath to Rajkot Tempo Traveller', 'Saurashtra Pilgrimage Circuit Tempo Traveller', 'Somnath Evening Aarti Short Hire', '12 Seater Tempo Traveller Somnath', '20 Seater Tempo Traveller Somnath', 'Luxury Tempo Traveller Somnath', 'Somnath Kartik Purnima Tour'],
  ctaHeading: 'Plan Your Somnath Jyotirlinga Group Tour Today',
  ctaDesc: 'Book your tempo traveller for a comfortable, well-organised pilgrimage to one of India\'s most sacred Jyotirlingas. Affordable rates, local drivers, 24/7 support.',
}

/* ══════════════════════════════════════════
   COIMBATORE
══════════════════════════════════════════ */
const coimbatore: CityData = {
  slug: 'coimbatore',
  cityName: 'Coimbatore',
  pageTitle: 'Tempo Traveller in Coimbatore',
  metaTitle: 'Tempo Traveller in Coimbatore | Yatra Travel India – Local Tours and Outstation Trips',
  metaDesc: 'Book tempo traveller in Coimbatore for local sightseeing, Ooty, Kodaikanal, Chennai, Bangalore and Tirupati. 9 to 20 seater. Fixed fare, experienced drivers. Call 9044019511.',
  metaKeywords: 'tempo traveller in coimbatore, tempo traveller on rent in coimbatore, 9 seater tempo traveller coimbatore, 12 seater tempo traveller coimbatore, coimbatore to ooty tempo traveller, coimbatore to kodaikanal tempo traveller, luxury tempo traveller coimbatore, coimbatore airport transfer',
  topbarText: 'Coimbatore\'s Trusted Tempo Traveller — Local Tours, Ooty, Kodaikanal, Chennai and Bangalore',
  heroHeading: 'Tempo Traveller in Coimbatore',
  heroSub: 'Local Sightseeing · Ooty and Kodaikanal Hill Trips · Chennai · Bangalore · Tirupati · Airport Transfers',
  heroBadges: ['9 to 20 Seater Available', 'Luxury Tempo Traveller', 'Starting Rs.3,200 Local', 'Fixed Fare · No Hidden Charges'],
  bookingTabs: ['Local Tour', 'Ooty / Kodaikanal', 'Airport Transfer', 'Outstation'],
  defaultCity: 'Coimbatore',
  vehicleOptions: ['Select Vehicle', '9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', 'Luxury Tempo Traveller'],
  trustItems: [
    { title: 'Confirmed Vehicle', sub: 'Registration shared at booking', iconType: 'shield' },
    { title: 'On-Time Pickup', sub: 'Driver at your door on time', iconType: 'clock' },
    { title: 'Fixed Fare', sub: 'Agreed upfront, no extras after', iconType: 'card' },
    { title: 'Experienced Drivers', sub: 'All Coimbatore and hill routes', iconType: 'person' },
  ],
  infoBoxText: 'Yatra Travel India offers <strong>9 to 20 seater tempo travellers in Coimbatore</strong> for local sightseeing, hill station trips to Ooty and Kodaikanal, outstation routes to Chennai, Bangalore, and Tirupati, and airport group transfers. <strong>Fixed fare, confirmed vehicle, experienced local driver on every route.</strong> No hidden charges. Call <strong>9044019511</strong> to book instantly.',
  introH1: 'Tempo Traveller in Coimbatore for Local Tours and Outstation Trips',
  introParagraphs: [
    'Need a tempo traveller in Coimbatore for a local tour or outstation trip? Yatra Travel India offers 9 to 20 seater tempo travellers for all group sizes. Local sightseeing, hill station trips to Ooty and Kodaikanal, outstation routes to Chennai, Bangalore, and Tirupati. Fixed fare, confirmed vehicle, experienced driver on every route. No hidden charges.',
    'Coimbatore connects to hill stations, temple towns, and major cities across South India. A well-maintained tempo traveller with proper AC and luggage space makes these long drives genuinely comfortable. Split the fare across 10 or 12 people and the per head cost is almost always lower than booking individual cabs.',
  ],
  sectionServicesTitle: 'Tempo Traveller Options in Coimbatore',
  vehicles: [
    { badge: 'Rs.3,200 Local', title: '9 Seater Tempo Traveller', popular: 'Small Groups', color: '#0f6ec8', badgeOrange: false, price: 'Rs.3,200', priceLabel: ' local onwards', specs: [{ label: '6–9 People', sub: 'Group Size' }, { label: 'Rs.3,200', sub: 'Local 8 hrs/80 km' }, { label: 'Rs.16/km', sub: 'Outstation Rate' }, { label: 'Full AC', sub: 'Cabin' }], tags: ['Full AC', 'Pushback Seats', 'Local Sightseeing', 'Ooty Day Trip'], tagOrange: false, btnLabel: 'Book 9 Seater', selectKey: '9 Seater Tempo Traveller' },
    { badge: 'Rs.4,200 Local', title: '12 Seater Tempo Traveller', popular: 'Most Booked', color: '#0f6ec8', badgeOrange: false, price: 'Rs.4,200', priceLabel: ' local onwards', specs: [{ label: '10–12 People', sub: 'Group Size' }, { label: 'Rs.4,200', sub: 'Local 8 hrs/80 km' }, { label: 'Rs.21/km', sub: 'Outstation Rate' }, { label: 'Best Value', sub: 'Per Head Cost' }], tags: ['Full AC', 'Pushback Seats', 'Kodaikanal Trip', 'Corporate Outings'], tagOrange: false, btnLabel: 'Book 12 Seater', selectKey: '12 Seater Tempo Traveller' },
    { badge: 'Rs.5,500 Local', title: '16 Seater Tempo Traveller', popular: '', color: '#0f6ec8', badgeOrange: false, price: 'Rs.5,500', priceLabel: ' local onwards', specs: [{ label: '13–16 People', sub: 'Group Size' }, { label: 'Rs.5,500', sub: 'Local 8 hrs/80 km' }, { label: 'Hill Routes', sub: 'Nilgiri Roads' }, { label: 'Extra Legroom', sub: 'Long Drives' }], tags: ['Full AC', 'Extra Legroom', 'College Trips', 'Family Groups'], tagOrange: false, btnLabel: 'Book 16 Seater', selectKey: '16 Seater Tempo Traveller' },
    { badge: 'Large Groups', title: '20 Seater Tempo Traveller', popular: 'Best Value', color: '#ff6b35', badgeOrange: true, price: 'Rs.7,500', priceLabel: ' local onwards', specs: [{ label: '17–20 People', sub: 'Group Size' }, { label: 'Rs.7,500', sub: 'Local 8 hrs/80 km' }, { label: 'Full AC', sub: 'Cabin' }, { label: 'Max Luggage', sub: 'Space' }], tags: ['Full AC', 'Max Luggage', 'Corporate Teams', 'Large Groups'], tagOrange: true, btnLabel: 'Book 20 Seater', selectKey: '20 Seater Tempo Traveller' },
    { badge: 'From Rs.7,000', title: 'Luxury Tempo Traveller', popular: 'VIP Travel', color: '#0f6ec8', badgeOrange: false, price: 'Rs.7,000', priceLabel: ' local onwards', specs: [{ label: '9–16 People', sub: 'Group Size' }, { label: 'Rs.7,000', sub: 'Local 8 hrs/80 km' }, { label: 'Rs.30/km', sub: 'Outstation Rate' }, { label: 'Corporate VIP', sub: 'Weddings' }], tags: ['Leather Seats', 'LCD Screen', 'Air Suspension', 'Charging Points'], tagOrange: false, btnLabel: 'Book Luxury Tempo', selectKey: 'Luxury Tempo Traveller' },
  ],
  localFareTable: [
    { vehicle: '9 Seater Tempo Traveller', seating: '6 to 9 people', fare: 'Rs 3,200 onwards', hours: '8 hours', km: '80 km' },
    { vehicle: '12 Seater Tempo Traveller', seating: '10 to 12 people', fare: 'Rs 4,200 onwards', hours: '8 hours', km: '80 km' },
    { vehicle: '16 Seater Tempo Traveller', seating: '13 to 16 people', fare: 'Rs 5,500 onwards', hours: '8 hours', km: '80 km' },
    { vehicle: '20 Seater Tempo Traveller', seating: '17 to 20 people', fare: 'Rs 7,500 onwards', hours: '8 hours', km: '80 km' },
    { vehicle: 'Luxury Tempo Traveller', seating: '9 to 16 people', fare: 'Rs 7,000 onwards', hours: '8 hours', km: '80 km' },
  ],
  localFareNote: '* Driver waits at every stop. Outstation rate starts at Rs.16/km for 9 seater and Rs.21/km for 12 seater. All fares confirmed at booking — no hidden charges. Call 9044019511 for exact quote.',
  useTags: ['Coimbatore Local Sightseeing', 'Ooty Hill Station Day Trip', 'Kodaikanal Weekend Package', 'Munnar Kerala Trip', 'Corporate Group Outings', 'College Excursions', 'Coimbatore Airport Transfers', 'Chennai Outstation Trip', 'Bangalore Group Travel', 'Tirupati Pilgrimage Tour'],
  benefits: [
    { title: 'Everyone Travels Together', desc: 'No splitting the group across multiple cabs. One vehicle, one driver, one pickup. Everyone arrives at the same time without any coordination stress.' },
    { title: 'Cost Effective for Groups', desc: 'Split the tempo traveller fare across 10 or 12 people and the per head cost is almost always lower than booking individual cabs. Especially on longer outstation routes like Coimbatore to Ooty.' },
    { title: 'Fixed Fare, No Surprises', desc: 'Fare confirmed before the trip starts. Fuel, toll, parking, and driver allowance all included. No meter running, no last minute additions. What is quoted is what is paid.' },
    { title: 'Right Size for Every Group', desc: '9 seater, 12 seater, 16 seater, and 20 seater available. Small family or large corporate team, there is a tempo traveller that fits exactly.' },
    { title: 'Comfortable for Long Drives', desc: 'A well-maintained tempo traveller with proper AC and luggage space makes long drives genuinely comfortable for every passenger on routes to Ooty or Chennai.' },
    { title: 'Experienced Local Drivers', desc: 'Drivers who know Coimbatore roads, hill routes to Ooty and Kodaikanal, and all major outstation highways personally. Familiar with parking at every destination.' },
  ],
  ei: {
    included: ['5% GST', 'Driver Day Charge', 'Fuel Charge', 'Base Fare of Tempo Traveller', 'Driver Accommodation (Multi-day trips)'],
    excluded: ['Toll Tax during trip', 'State Tax if applicable paid by Customer', 'Parking Charges as per actual', 'Airport Parking Charge as per actual', 'Driver Night Charge (Tempo Traveller – 500)', 'Carrier Charge Extra – 300'],
  },
  whyTempoTitle: 'Hire Luxury Tempo Traveller in Coimbatore — Yatra Travel India',
  whyTempoParas: [
    'Looking for a luxury tempo traveller in Coimbatore? Yatra Travel India offers premium group travel vehicles for corporate VIP travel, destination weddings, special occasions, and long outstation trips where comfort genuinely matters.',
    'Fully reclining leather seats that let passengers actually rest on long drives. Powerful multi-zone AC that keeps the whole cabin cool even on the Coimbatore to Ooty climb where temperatures shift significantly. Air suspension handles Nilgiri hill roads without rattling the group.',
    'LCD entertainment screens for long journeys. Charging points at every seat so nobody arrives with a dead phone. On a 6 or 7 hour drive to Chennai, Tirupati, or Bangalore that difference adds up to a completely different arrival experience.',
  ],
  features: [
    { title: 'Powerful AC Throughout', desc: 'Full cabin AC — keeps everyone cool on Coimbatore plains and adjusts as temperature drops on Nilgiri hill routes to Ooty' },
    { title: 'Pushback Reclining Seats', desc: 'Every seat reclines — essential for 7 hour drives to Chennai and 6 hour drives to Bangalore' },
    { title: 'Experienced Local Drivers', desc: 'Drivers know all Coimbatore local routes, Ooty and Kodaikanal hill roads, and major South India outstation highways' },
    { title: 'Extra Legroom', desc: 'Generous space between rows. No knees pressed against the seat on 4 to 7 hour outstation drives from Coimbatore' },
    { title: 'Large Luggage Space', desc: 'Dedicated luggage area handles full group bags. Families, pilgrimage groups, and corporate teams all travel comfortably' },
    { title: 'LCD and Charging Points', desc: 'LCD entertainment screens and charging points on luxury models. Music system standard on all vehicles' },
    { title: 'Fixed Transparent Fare', desc: 'Fare confirmed at booking. Fuel, toll, parking, driver allowance, and state tax all included. Nothing added after the trip' },
    { title: 'Air Suspension', desc: 'Handles Nilgiri hill roads smoothly. Available on luxury tempo traveller models for premium comfort on long drives' },
  ],
  attractions: [
    { title: 'Marudamalai Temple', desc: 'One of the most visited temples in Coimbatore. Situated on a hillock on the outskirts of the city. Dedicated to Lord Murugan. Best visited early morning before crowds build up.' },
    { title: 'Dhyanalinga Isha Yoga Centre', desc: 'A powerful spiritual destination just 30 km from Coimbatore city. Built by Sadhguru, this unique space is popular with family groups and corporate teams.' },
    { title: 'Siruvani Waterfalls', desc: 'Around 37 km from Coimbatore. One of the most scenic natural spots in the region. Best visited between June and November when water flow is at its peak.' },
    { title: 'VOC Park and Zoo', desc: 'Great for family groups travelling with children. Centrally located in Coimbatore city and easy to cover in 2 to 3 hours.' },
    { title: 'Black Thunder Theme Park', desc: 'Around 40 km from Coimbatore city in Mettupalayam. One of the largest water theme parks in South India and a favourite group outing destination.' },
    { title: 'Anamalai Tiger Reserve', desc: 'Around 85 km from Coimbatore. Perfect for wildlife and nature-loving groups. The reserve is home to elephants, leopards, and diverse bird species.' },
    { title: 'Velliangiri Mountains', desc: 'Known as the Kailash of the South. Popular pilgrimage and trekking destination around 40 km from Coimbatore. The seven-hill circuit is a powerful spiritual journey.' },
    { title: 'Gedee Car Museum', desc: 'A unique attraction housing a rare collection of vintage cars and motorcycles from around the world. Worth including for groups with an interest in history and automobiles.' },
  ],
  whyCards: [
    { title: 'Confirmed Vehicle at Booking', desc: 'Vehicle registration details shared before the trip starts. Not a verbal promise. Know exactly which vehicle and driver are coming.' },
    { title: 'Fixed All-Inclusive Fare', desc: 'Fuel, toll, parking, driver allowance, and state tax for outstation trips all included. What is agreed before the trip is exactly what is paid at the end.' },
    { title: 'On-Time Pickup Always', desc: 'Driver at your hotel, home, or airport at the confirmed time. Especially critical for flight connections and early morning hill station departures.' },
    { title: 'Hill Route Expertise', desc: 'Drivers personally know the Ooty and Kodaikanal hill roads — the switchbacks, the best stops, and the parking situation at every major viewpoint.' },
    { title: 'One Call Booking', desc: 'Call 9044019511. Share group size, travel date, and route. Booking confirmed on the same call with vehicle details, driver name, and fixed fare.' },
    { title: 'Multi-Day Outstation Trips', desc: 'Driver accommodation included for multi-day outstation trips. Fare confirmed upfront for the full trip duration. No additions after travel begins.' },
  ],
  faqs: [
    { q: 'Q1. What is the tempo traveller price in Coimbatore?', a: 'Starts at Rs 3,200 for a 9 seater and Rs 4,200 for a 12 seater for 8 hours and 80 km local tour. All inclusive, no hidden charges.' },
    { q: 'Q2. What is the outstation tempo traveller rate from Coimbatore?', a: 'Starts at Rs 16 per km for a 9 seater and Rs 21 per km for a 12 seater. Rate covers full distance both ways. Includes fuel, toll, parking, and driver allowance.' },
    { q: 'Q3. What is the tempo traveller fare from Coimbatore to Ooty?', a: 'Starts at Rs 5,500 for a 12 seater. Ooty is 90 km from Coimbatore. Most booked hill station day trip from Coimbatore by tempo traveller.' },
    { q: 'Q4. What is the tempo traveller fare from Coimbatore to Munnar?', a: 'Starts at Rs 8,000 for a 12 seater. Munnar is 150 km from Coimbatore via Kerala border. Popular weekend group trip and corporate retreat destination.' },
    { q: 'Q5. What is the tempo traveller fare from Coimbatore to Chennai?', a: 'Starts at Rs 17,000 for a 12 seater. Chennai is 500 km from Coimbatore. Drive takes 7 to 8 hours. Luxury tempo traveller recommended for this long distance group trip.' },
    { q: 'Q6. Is luxury tempo traveller available in Coimbatore?', a: 'Yes. Pushback reclining seats, multi-zone AC, air suspension, LCD screens, charging points at every seat. Starting fare Rs 7,000 for local tour.' },
    { q: 'Q7. What is the tempo traveller fare from Coimbatore to Bangalore?', a: 'Starts at Rs 13,000 for a 12 seater. Bangalore is 360 km from Coimbatore. Drive takes around 6 hours. Popular for corporate group travel and family trips.' },
    { q: 'Q8. Is tempo traveller available from Coimbatore airport?', a: 'Yes. Tempo traveller from Coimbatore airport available for all group sizes. Driver waiting at arrival, vehicle confirmed in advance, fixed fare.' },
    { q: 'Q9. What is the tempo traveller fare from Coimbatore to Kodaikanal?', a: 'Starts at Rs 9,000 for a 12 seater. Kodaikanal is 175 km from Coimbatore. Most popular weekend hill station group package from Coimbatore.' },
    { q: 'Q10. What is included in tempo traveller fare in Coimbatore?', a: 'Every tempo traveller fare includes fuel, toll, parking, driver allowance, and state tax for outstation trips outside Tamil Nadu. Driver accommodation included for multi-day trips.' },
  ],
  noteBox: 'Tempo travellers fill up quickly during <strong>school holidays, long weekends, and peak tourist seasons</strong> for Ooty and Kodaikanal. Book at least <strong>3 to 5 days in advance</strong> for local tours and hill station day trips. Airport transfers should be confirmed at least <strong>24 hours in advance.</strong>',
  footerServices: ['9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', 'Luxury Tempo Traveller', 'Coimbatore Airport Transfer'],
  footerRoutes: ['Coimbatore Local Tour', 'Coimbatore to Ooty', 'Coimbatore to Kodaikanal', 'Coimbatore to Munnar', 'Coimbatore to Chennai', 'Coimbatore to Bangalore'],
  popularRoutes: ['Coimbatore Local Sightseeing Tour', 'Coimbatore to Ooty Tempo Traveller', 'Coimbatore to Kodaikanal Tempo Traveller', 'Coimbatore to Munnar Tempo Traveller', 'Coimbatore to Chennai Tempo Traveller', 'Coimbatore to Bangalore Tempo Traveller', 'Coimbatore to Tirupati Tempo Traveller', 'Coimbatore Airport Group Transfer', 'Coimbatore to Marudamalai Temple', 'Coimbatore to Black Thunder Theme Park', 'Coimbatore to Siruvani Waterfalls', 'Coimbatore to Anamalai Tiger Reserve', '12 Seater Tempo Traveller Coimbatore', '20 Seater Tempo Traveller Coimbatore', 'Luxury Tempo Traveller Coimbatore', 'Coimbatore Corporate Group Outing'],
  ctaHeading: 'Book Your Coimbatore Group Trip Today',
  ctaDesc: 'Fixed fare, confirmed vehicle, experienced local driver. One call and everything is sorted — for local sightseeing, Ooty hill trips, airport transfers, or long outstation drives across South India.',
}

/* ══════════════════════════════════════════
   GHAZIABAD
══════════════════════════════════════════ */
const ghaziabad: CityData = {
  slug: 'ghaziabad',
  cityName: 'Ghaziabad',
  pageTitle: 'Tempo Traveller in Ghaziabad',
  metaTitle: 'Tempo Traveller in Ghaziabad | Yatra Travel India – Comfortable Group Travel',
  metaDesc: 'Book tempo traveller in Ghaziabad for local tours, outstation trips, weddings, corporate travel, and pilgrimage tours. 9 to 20 seaters. Fixed fare, experienced drivers, no hidden charges. Call 9044019511.',
  metaKeywords: 'tempo traveller in ghaziabad, tempo traveller on rent in ghaziabad, 12 seater tempo traveller ghaziabad, 20 seater tempo traveller ghaziabad, ghaziabad to haridwar tempo traveller, ghaziabad to mathura vrindavan tempo traveller, luxury tempo traveller ghaziabad, ncr tempo traveller hire',
  topbarText: 'Ghaziabad\'s Trusted Tempo Traveller Rental — Fixed Fare, On-Time Pickup, No Hidden Charges',
  heroHeading: 'Tempo Traveller in Ghaziabad',
  heroSub: 'Local Tours · Outstation Trips · Weddings · Corporate Travel · Pilgrimage Tours',
  heroBadges: ['9 to 20 Seater Options', 'Confirmed Vehicle at Booking', 'Starting Rs.3,500 Local', 'Fixed Fare · No Hidden Charges'],
  bookingTabs: ['Local Tour', 'Outstation', 'Wedding', 'Pilgrimage'],
  defaultCity: 'Ghaziabad',
  vehicleOptions: ['Select Vehicle', '9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', 'Luxury Tempo Traveller'],
  trustItems: [
    { title: 'Confirmed Vehicle', sub: 'Registration shared at booking', iconType: 'shield' },
    { title: 'On-Time Pickup', sub: 'Driver details shared night before', iconType: 'clock' },
    { title: 'Fixed Fare', sub: 'Agreed upfront, nothing added after', iconType: 'card' },
    { title: 'Experienced Drivers', sub: 'All NCR & outstation routes', iconType: 'person' },
  ],
  infoBoxText: 'Yatra Travel India offers <strong>tempo traveller hire in Ghaziabad</strong> for local tours, outstation trips, weddings, corporate travel, and pilgrimage tours. <strong>9 to 20 seaters available.</strong> Vehicle confirmed at booking, experienced driver assigned, fare fixed upfront — fuel, toll, parking, driver allowance all included. No hidden charges. Call <strong>9044019511</strong> to book.',
  introH1: 'Book Tempo Traveller in Ghaziabad — Comfortable Group Travel at the Best Price',
  introParagraphs: [
    'Ghaziabad is one of NCR\'s busiest cities and group travel here means one thing — you need a reliable vehicle that shows up on time and gets everyone where they need to go without any drama. A tempo traveller from Yatra Travel India removes all of that. One pickup point, one vehicle, one driver, one fare.',
    'Split a tempo traveller fare across 10 or 12 people in Ghaziabad and the per head amount is almost always lower than booking individual cabs — especially on longer outstation routes to Haridwar, Agra, and Mathura Vrindavan.',
  ],
  sectionServicesTitle: 'Tempo Traveller Options in Ghaziabad',
  vehicles: [
    { badge: 'Rs.18/km Outstation', title: '9 Seater Tempo Traveller', popular: 'Budget Pick', color: '#0f6ec8', badgeOrange: false, price: 'Rs.3,500', priceLabel: ' local onwards', specs: [{ label: '6–9 People', sub: 'Group Size' }, { label: 'Rs.3,500', sub: 'Local 8 hrs / 80 km' }, { label: 'Rs.18/km', sub: 'Outstation Rate' }, { label: 'NCR + All Routes', sub: 'Coverage' }], tags: ['AC', 'Pushback Seats', 'Pilgrimage Tours', 'Family Trips'], tagOrange: false, btnLabel: 'Book 9 Seater', selectKey: '9 Seater Tempo Traveller' },
    { badge: 'Rs.23/km Outstation', title: '12 Seater Tempo Traveller', popular: 'Most Booked', color: '#0f6ec8', badgeOrange: false, price: 'Rs.4,500', priceLabel: ' local onwards', specs: [{ label: '10–12 People', sub: 'Group Size' }, { label: 'Rs.4,500', sub: 'Local 8 hrs / 80 km' }, { label: 'Rs.23/km', sub: 'Outstation Rate' }, { label: 'Best Value', sub: 'Per Head Cost' }], tags: ['AC', 'Pushback Seats', 'All Routes', 'Wedding & Corporate'], tagOrange: false, btnLabel: 'Book 12 Seater', selectKey: '12 Seater Tempo Traveller' },
    { badge: 'Rs.28/km Outstation', title: '16 Seater Tempo Traveller', popular: '', color: '#0f6ec8', badgeOrange: false, price: 'Rs.5,500', priceLabel: ' local onwards', specs: [{ label: '13–16 People', sub: 'Group Size' }, { label: 'Rs.5,500', sub: 'Local 8 hrs / 80 km' }, { label: 'Rs.28/km', sub: 'Outstation Rate' }, { label: 'More Legroom', sub: 'Comfort' }], tags: ['AC', 'Extra Legroom', 'Office Outings', 'School Trips'], tagOrange: false, btnLabel: 'Book 16 Seater', selectKey: '16 Seater Tempo Traveller' },
    { badge: 'Large Groups', title: '20 Seater Tempo Traveller', popular: 'Best Value', color: '#ff6b35', badgeOrange: true, price: 'Rs.6,500', priceLabel: ' local onwards', specs: [{ label: '17–20 People', sub: 'Group Size' }, { label: 'Rs.6,500', sub: 'Local 8 hrs / 80 km' }, { label: 'Rs.32/km', sub: 'Outstation Rate' }, { label: 'One Vehicle', sub: 'Whole Group' }], tags: ['AC', 'Max Luggage', 'Wedding Parties', 'Pilgrimage Groups'], tagOrange: true, btnLabel: 'Book 20 Seater', selectKey: '20 Seater Tempo Traveller' },
    { badge: 'From Rs.7,500', title: 'Luxury Tempo Traveller', popular: 'Premium', color: '#0f6ec8', badgeOrange: false, price: 'Rs.7,500', priceLabel: ' local onwards', specs: [{ label: '9–16 People', sub: 'Group Size' }, { label: 'Rs.7,500', sub: 'Local 8 hrs / 80 km' }, { label: 'Rs.32/km', sub: 'Outstation Rate' }, { label: 'Corporate VIP', sub: 'Weddings' }], tags: ['Leather Seats', 'LCD Screen', 'Air Suspension', 'Charging Points'], tagOrange: false, btnLabel: 'Book Luxury Tempo', selectKey: 'Luxury Tempo Traveller' },
  ],
  localFareTable: [
    { vehicle: 'Ghaziabad to Mathura Vrindavan', seating: '140 km', fare: 'Rs 5,500 (12 Seater)' },
    { vehicle: 'Ghaziabad to Haridwar', seating: '200 km', fare: 'Rs 7,000 (12 Seater)' },
    { vehicle: 'Ghaziabad to Agra', seating: '180 km', fare: 'Rs 6,500 (12 Seater)' },
    { vehicle: 'Ghaziabad to Rishikesh', seating: '230 km', fare: 'Rs 8,000 (12 Seater)' },
    { vehicle: 'Ghaziabad to Nainital', seating: '300 km', fare: 'Rs 11,000 (12 Seater)' },
    { vehicle: 'Ghaziabad to Jaipur', seating: '240 km', fare: 'Rs 9,000 (12 Seater)' },
  ],
  localFareNote: '* All fares include fuel, toll, parking, and driver allowance. No hidden charges. Call 9044019511 for exact quote on your route.',
  useTags: ['Haridwar Pilgrimage Tours', 'Mathura Vrindavan Day Trip', 'Agra Taj Mahal Visit', 'Wedding Guest Transfers', 'Corporate Outings', 'School Excursions', 'Rishikesh Adventure Groups', 'Nainital Weekend Trips', 'Delhi Airport Transfers', 'Varanasi Pilgrimage Tours'],
  ei: {
    included: ['5% GST', 'Driver Day Charge', 'Fuel Charge', 'Base Fare of Tempo Traveller', 'Driver Accommodation (Multi-day trips)'],
    excluded: ['Toll Tax during trip', 'State Tax if applicable paid by Customer', 'Parking Charges as per actual', 'Airport Parking Charge as per actual', 'Driver Night Charge (Tempo Traveller – 500)', 'Carrier Charge Extra – 300'],
  },
  whyTempoTitle: 'Why Tempo Traveller is the Right Choice for Ghaziabad Group Travel',
  whyTempoParas: [
    'Ghaziabad is one of NCR\'s fastest growing cities and group travel demand here is high. Getting everyone there together in one vehicle is always the smarter call.',
    'Split a tempo traveller fare across 10 or 12 people in Ghaziabad and the per head amount is almost always lower than booking individual cabs. Especially on longer outstation routes to Haridwar, Agra, or Mathura Vrindavan — the saving is significant.',
    'Every booking includes a confirmed vehicle — not a verbal promise. Driver details shared before the trip. Fare agreed upfront with fuel, toll, parking, and driver allowance all included. Nothing added after the trip ends.',
  ],
  steps: [
    { num: '1', title: 'Call or WhatsApp 9044019511', desc: 'Share your group size, travel date, pickup location, and route. Direct conversation, straight answers.' },
    { num: '2', title: 'Get a Clear Fare Quote', desc: 'Fare confirmed on the same call. Fuel, toll, parking, and driver allowance all included in one number. Nothing hidden.' },
    { num: '3', title: 'Confirm the Booking', desc: 'Once fare is agreed, booking confirmed immediately. Vehicle registration and driver name shared before the trip starts.' },
    { num: '4', title: 'Travel', desc: 'Driver arrives at confirmed pickup location at agreed time. Fare settled as confirmed at booking. Nothing added after.' },
  ],
  features: [
    { title: 'Confirmed Vehicle at Booking', desc: 'Registration details shared before the trip starts — not just a verbal promise.' },
    { title: 'Experienced Driver Assigned', desc: 'Every driver knows NCR roads and outstation routes — Haridwar, Agra, Mathura, Nainital, Jaipur, Dehradun.' },
    { title: 'Fixed Fare Agreed Upfront', desc: 'Fuel, toll, parking, driver allowance — all included. Nothing added after the trip ends.' },
    { title: 'On-Time Pickup Guaranteed', desc: 'Driver details shared the night before. Vehicle at your door at the confirmed time. Not approximately. On time.' },
    { title: 'Full Air Conditioning', desc: 'Powerful AC on all vehicles to keep the group comfortable on every trip, local or outstation.' },
    { title: 'Comfortable Pushback Seats', desc: 'Reclining seats for long outstation drives to Haridwar, Nainital, Shimla, and Varanasi.' },
    { title: 'Direct Contact Throughout', desc: 'Driver number shared before the trip. Team reachable if anything needs sorting — no chasing, no waiting.' },
    { title: '24/7 Support', desc: 'Support available round-the-clock via call and WhatsApp throughout your trip from Ghaziabad.' },
  ],
  attractions: [
    { title: 'Ghaziabad to Haridwar — Rs 7,000', desc: '200 km, ~5 hrs via NH58. One of the most booked outstation destinations. Pilgrimage groups, family religious tours, and weekend travellers. Day trip or overnight package available.' },
    { title: 'Ghaziabad to Mathura Vrindavan — Rs 5,500', desc: '140 km, ~3 hrs via NH19. Most booked outstation day trip. Mathura and Vrindavan together make a full day pilgrimage itinerary. 9 and 12 seater most popular.' },
    { title: 'Ghaziabad to Agra — Rs 6,500', desc: '180 km via Yamuna Expressway. Taj Mahal group visits, school excursions, and family trips. Day trip easily done in 8 to 10 hours including sightseeing.' },
    { title: 'Ghaziabad to Rishikesh — Rs 8,000', desc: '230 km, ~5-6 hrs via NH58. Popular with adventure groups, yoga retreat travellers, and pilgrimage tours. 12 and 16 seater most popular.' },
    { title: 'Ghaziabad to Nainital — Rs 11,000', desc: '300 km, ~6-7 hrs. Most popular weekend hill station destination from NCR. Scenic Kumaon hills, lake views, cool weather.' },
    { title: 'Ghaziabad to Jaipur — Rs 9,000', desc: '240 km via NH48. Most booked Rajasthan destination. Heritage sites, forts, markets. NH48 is a smooth well-maintained highway.' },
    { title: 'Ghaziabad to Varanasi — Rs 18,000', desc: '780 km via NH19. One of the most important pilgrimage destinations. Multi-day package with driver accommodation included. 20 seater popular for large groups.' },
    { title: 'Ghaziabad to Delhi — Rs 3,000', desc: '25 km via NH9. Most booked local NCR transfer. Airport pickups and drops, Delhi city tours, wedding guest transfers. 9 and 12 seater most popular.' },
  ],
  whyCards: [
    { title: 'Confirmed Vehicle at Booking', desc: 'Not a verbal promise. Vehicle registration details shared before the trip starts. Know exactly what vehicle is coming before the day of travel.' },
    { title: 'Experienced Drivers on All Routes', desc: 'Every driver knows major NCR roads and outstation routes — Haridwar, Agra, Mathura, Nainital, Jaipur, Dehradun. No first timers on unfamiliar routes.' },
    { title: 'Fixed All-Inclusive Fare', desc: 'Fuel, toll, parking, driver allowance — all included. What is agreed before departure is what is paid on return. No surprises.' },
    { title: 'On-Time Pickup Always', desc: 'Driver details shared the night before. Vehicle at your door at the confirmed time. Not approximately. On time, every time.' },
    { title: 'One Call Booking', desc: 'No complicated forms. No long waiting time. One call and everything is sorted — vehicle confirmed, driver assigned, fare fixed.' },
    { title: '9, 12, 16, 20 Seater + Luxury', desc: 'Right vehicle for every group size. From small 9-seater for family trips to 20-seater for large wedding parties and pilgrimage groups.' },
  ],
  faqs: [
    { q: 'Q1. What is the tempo traveller price in Ghaziabad for a local tour?', a: 'Starts at Rs.3,500 for a 9 seater and Rs.4,500 for a 12 seater. Covers 8 hours and 80 km. Fare includes fuel, toll, parking, and driver allowance. No hidden charges.' },
    { q: 'Q2. What is the outstation tempo traveller rate from Ghaziabad?', a: 'Starts at Rs.18/km for a 9 seater and Rs.23/km for a 12 seater. Rate covers full distance both ways. Includes fuel, toll, parking, and driver allowance.' },
    { q: 'Q3. What is the tempo traveller fare from Ghaziabad to Haridwar?', a: 'Starts at Rs.6,000 for a 9 seater and Rs.7,000 for a 12 seater. Haridwar is 200 km from Ghaziabad. Drive takes around 5 hours on NH58.' },
    { q: 'Q4. What is the fare from Ghaziabad to Mathura Vrindavan?', a: 'Starts at Rs.4,500 for a 9 seater and Rs.5,500 for a 12 seater. Mathura is 140 km from Ghaziabad. Both Mathura and Vrindavan covered in one day trip.' },
    { q: 'Q5. What is the fare from Ghaziabad to Agra?', a: 'Starts at Rs.5,500 for a 9 seater and Rs.6,500 for a 12 seater. Agra is 180 km via Yamuna Expressway. Drive takes 3 to 4 hours.' },
    { q: 'Q6. Can I book a tempo traveller in Ghaziabad for a wedding?', a: 'Yes. Available for guest transfers, venue to venue trips, and hotel pickup and drop. 12 seater for small parties. 16 and 20 seater for larger groups.' },
    { q: 'Q7. Is luxury tempo traveller available in Ghaziabad?', a: 'Yes. Reclining leather seats, multi-zone AC, air suspension, LCD screens, charging points at every seat. Starting at Rs.7,500 for local tour.' },
    { q: 'Q8. How far in advance should I book?', a: '3 to 5 days for local tours, 1 to 2 weeks for outstation trips. During peak season and festival periods book 3 to 4 weeks early.' },
    { q: 'Q9. Is tempo traveller available from Ghaziabad to Nainital?', a: 'Yes. Starts at Rs.9,000 for a 9 seater and Rs.11,000 for a 12 seater. Nainital is 300 km from Ghaziabad. Multi-day package with driver accommodation available.' },
    { q: 'Q10. What is included in the tempo traveller fare?', a: 'Every fare includes fuel, toll, parking, driver allowance, and state tax for outstation trips. Driver accommodation included for multi-day packages. No hidden charges.' },
  ],
  noteBox: 'Vehicles fill up fast in Ghaziabad during <strong>peak season, long weekends, wedding months, and festival periods.</strong> For local tours book 3–5 days in advance. During Diwali, Holi, and wedding season book <strong>3–4 weeks early</strong> to ensure vehicle availability.',
  footerServices: ['9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', 'Luxury Tempo Traveller', 'Wedding Tempo Traveller'],
  footerRoutes: ['Ghaziabad to Haridwar', 'Ghaziabad to Mathura Vrindavan', 'Ghaziabad to Agra', 'Ghaziabad to Rishikesh', 'Ghaziabad to Nainital', 'Ghaziabad to Delhi'],
  popularRoutes: ['Ghaziabad to Haridwar Tempo Traveller', 'Ghaziabad to Mathura Vrindavan Tempo Traveller', 'Ghaziabad to Agra Tempo Traveller', 'Ghaziabad to Rishikesh Tempo Traveller', 'Ghaziabad to Nainital Tempo Traveller', 'Ghaziabad to Dehradun Tempo Traveller', 'Ghaziabad to Jaipur Tempo Traveller', 'Ghaziabad to Shimla Tempo Traveller', 'Ghaziabad to Varanasi Tempo Traveller', 'Ghaziabad to Delhi Tempo Traveller', 'Ghaziabad to Prayagraj Tempo Traveller', 'Ghaziabad to Ayodhya Tempo Traveller', '12 Seater Tempo Traveller Ghaziabad', 'Luxury Tempo Traveller Ghaziabad', '20 Seater Tempo Traveller Ghaziabad', 'Ghaziabad Wedding Tempo Traveller'],
  ctaHeading: 'Ready to Book Your Ghaziabad Group Trip?',
  ctaDesc: 'One call confirms everything — vehicle, driver, fare. Fixed upfront, no surprises. Call now for instant confirmation and the best price.',
}

/* ══════════════════════════════════════════
   Update existing cities with new SEO
══════════════════════════════════════════ */
// Update Ayodhya SEO
ayodhya.metaTitle = 'Best Tempo Traveller Ayodhya | Yatra Travel India'
ayodhya.metaDesc = 'Tour Ram Mandir plus nearby temples via spacious tempo traveller in Ayodhya. Get reliable rides from Yatra Travel India. Dial 91 9044019511 to book fast.'

// Update Manali SEO
manali.metaTitle = 'Luxury Tempo Traveller in Manali for Hills | Yatra Travel India'
manali.metaDesc = 'Enjoy safe hill travel with tempo traveller in Manali driven by experienced drivers. Ideal for groups. Call +91 9044019511 | Yatra Travel India'

const raipur: CityData = {
  slug: 'raipur',
  cityName: 'Raipur',
  pageTitle: 'Luxury Tempo Traveller on Rent in Raipur',
  metaTitle: 'Luxury Tempo Traveller on Rent in Raipur | Yatra Travel India',
  metaDesc: 'Looking for a tempo traveller in Raipur for group tours or family trips? Get AC, pushback seats & professional drivers at competitive rates. Call 91 9044019511.',
  metaKeywords: 'tempo traveller in raipur, tempo traveller on rent in raipur, raipur group travel vehicle, 12 seater tempo traveller raipur, raipur outstation tempo traveller, luxury tempo traveller in raipur, hire a tempo traveller in raipur, 16 seater tempo traveller in raipur, 20 seater tempo traveller for rent in raipur',
  topbarText: "Raipur's Trusted Tempo Traveller — Local Tours, Weddings, Bastar, Jagdalpur and Pilgrimage Routes",
  heroHeading: 'Tempo Traveller in Raipur',
  heroSub: 'Local Sightseeing · Jagdalpur Bastar · Bilaspur · Rajim · Pilgrimage Tours · Corporate Outings · Weddings',
  heroBadges: ['9 to 26 Seater Available', 'Luxury Tempo Traveller', 'Starting Rs.4,500 Local', 'Fixed Fare · No Hidden Charges'],
  bookingTabs: ['Local Sightseeing', 'Pilgrimage Tour', 'Bastar / Jagdalpur', 'Outstation'],
  defaultCity: 'Raipur',
  vehicleOptions: ['Select Vehicle', '9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', '24 / 26 Seater Tempo Traveller', 'Luxury Tempo Traveller'],
  trustItems: [
    { title: 'On-Time Pickup', sub: 'Morning or evening, always on schedule', iconType: 'clock' },
    { title: 'Fixed Fare', sub: 'Confirmed before the trip starts', iconType: 'card' },
    { title: 'Well Maintained Vehicles', sub: 'AC, clean interiors every trip', iconType: 'shield' },
    { title: '24/7 Support', sub: 'Available every day of the week', iconType: 'person' },
  ],
  infoBoxText: 'Yatra Travel India offers <strong>tempo traveller on rent in Raipur</strong> for local sightseeing, family functions, weddings, corporate outings, pilgrimage tours to Rajim and Dantewada, and outstation trips to Jagdalpur, Bilaspur, and Ambikapur. <strong>9 to 26 seater available including Luxury Tempo Traveller.</strong> Fixed fare, well-maintained vehicles, proficient drivers, 24/7 service. Outstation rate starts at <strong>Rs 23/km.</strong> Local 12 seater from <strong>Rs 4,500.</strong> Call <strong>9044019511</strong> to book.',
  introH1: 'Tempo Traveller in Raipur — Spacious, Budget-Friendly and Always Punctual',
  introParagraphs: [
    'Getting a group of 10 or 12 people from one place to another in Raipur is more of a headache than it sounds. A tempo traveller just fixes all of that in one booking.',
    'Whether it is a family function, an office outing, a wedding party, or a pilgrimage tour, hiring a tempo traveller in Raipur keeps everyone together, keeps the cost reasonable, and keeps the trip moving without unnecessary drama.',
  ],
  sectionServicesTitle: 'Tempo Traveller Options in Raipur',
  vehicles: [
    { badge: 'Small Groups', title: '9 Seater Tempo Traveller', popular: 'City Tours', color: '#0f6ec8', badgeOrange: false, price: 'Best', priceLabel: ' Rate on Call', specs: [{ label: '6–9 People', sub: 'Group Size' }, { label: 'Full AC', sub: 'Cabin' }, { label: 'City Roads', sub: 'Compact' }, { label: 'Driver Waits', sub: 'Every Stop' }], tags: ['Full AC', 'Pushback Seats', 'Family Outings', 'Short Trips'], tagOrange: false, btnLabel: 'Book 9 Seater', selectKey: '9 Seater Tempo Traveller' },
    { badge: 'Rs.4,500 Local', title: '12 Seater Tempo Traveller', popular: 'Most Booked', color: '#0f6ec8', badgeOrange: false, price: 'Rs.4,500', priceLabel: ' local onwards', specs: [{ label: '10–12 People', sub: 'Group Size' }, { label: 'Rs.4,500', sub: 'Local 8 hrs/80 km' }, { label: 'Rs.23/km', sub: 'Outstation Rate' }, { label: 'Best Value', sub: 'Per Head Cost' }], tags: ['Full AC', 'Pushback Seats', 'Rajim Pilgrimage', 'Office Outings'], tagOrange: false, btnLabel: 'Book 12 Seater', selectKey: '12 Seater Tempo Traveller' },
    { badge: 'Medium Groups', title: '16 Seater Tempo Traveller', popular: '', color: '#0f6ec8', badgeOrange: false, price: 'Best', priceLabel: ' Rate on Call', specs: [{ label: '13–16 People', sub: 'Group Size' }, { label: 'Full AC', sub: 'Cabin' }, { label: 'Extra Legroom', sub: 'Long Drives' }, { label: 'School and Office', sub: 'Groups' }], tags: ['Full AC', 'More Space', 'School Trips', 'Bastar Tour'], tagOrange: false, btnLabel: 'Book 16 Seater', selectKey: '16 Seater Tempo Traveller' },
    { badge: 'Large Groups', title: '20 Seater Tempo Traveller', popular: 'Wedding Events', color: '#ff6b35', badgeOrange: true, price: 'Best', priceLabel: ' Rate on Call', specs: [{ label: '17–20 People', sub: 'Group Size' }, { label: 'Full AC', sub: 'Cabin' }, { label: 'Logistics Simple', sub: 'Everyone Together' }, { label: 'Religious and', sub: 'Corporate Tours' }], tags: ['Full AC', 'Max Luggage', 'Wedding Groups', 'School Trips'], tagOrange: true, btnLabel: 'Book 20 Seater', selectKey: '20 Seater Tempo Traveller' },
    { badge: 'Premium', title: 'Luxury Tempo Traveller', popular: 'Weddings and VIP', color: '#0f6ec8', badgeOrange: false, price: 'Best', priceLabel: ' Rate on Call', specs: [{ label: '9–20 Seater', sub: 'Flexible Sizes' }, { label: 'Multi-Zone AC', sub: 'Premium' }, { label: 'Air Suspension', sub: 'Smooth Ride' }, { label: 'Reclining', sub: 'Leather Seats' }], tags: ['TV Screen', 'Charging Points', 'Night Lighting', 'GPS Enabled'], tagOrange: false, btnLabel: 'Book Luxury Tempo', selectKey: 'Luxury Tempo Traveller' },
  ],
  optionsTable: [
    { vehicle: '9 Seater Tempo Traveller', cap: '9 + Driver', ac: 'AC', ideal: 'Small groups of 6 to 9 people. Compact enough for Raipur city roads, comfortable enough for short outstation trips. Good for small family outings and intimate group travel' },
    { vehicle: '12 Seater Tempo Traveller', cap: '12 + Driver', ac: 'AC', ideal: 'Most booked size in Raipur. Fits 10 to 12 comfortably with luggage, handles local and outstation routes well, and gives the best per-head cost when fare is split across the group' },
    { vehicle: '16 Seater Tempo Traveller', cap: '16 + Driver', ac: 'AC', ideal: 'Medium groups of 13 to 16 — noticeably more space than 12 seater, better luggage capacity. Popular with office groups, school trips, and extended family tours in Chhattisgarh' },
    { vehicle: '20 Seater Tempo Traveller', cap: '20 + Driver', ac: 'AC', ideal: 'Large groups of 17 to 20 — everyone together in one vehicle. Ideal for corporate events, wedding parties, and religious tours where keeping the group together actually matters' },
    { vehicle: '24 / 26 Seater Tempo Traveller', cap: '24–26 + Driver', ac: 'AC', ideal: 'Very large groups needing maximum capacity. Top-tier facilities and wide seating for business trips, large family tours, and major group excursions from Raipur' },
    { vehicle: 'Luxury Tempo Traveller', cap: '9–20 + Driver', ac: 'Multi-Zone AC', ideal: 'Weddings, VIP guests, destination weddings, long outstation drives — reclining seats, TV screen, night lighting, GPS, charging points, air suspension' },
  ],
  localFareTable: [
    { vehicle: '12 Seater Tempo Traveller', seating: 'Rs 4,500 onwards', fare: 'Rs 23/km (both ways)' },
    { vehicle: '9 Seater Tempo Traveller', seating: 'On Request', fare: 'On Request' },
    { vehicle: '16 Seater Tempo Traveller', seating: 'On Request', fare: 'On Request' },
    { vehicle: '20 Seater Tempo Traveller', seating: 'On Request', fare: 'On Request' },
  ],
  useTags: ['Raipur Local Sightseeing', 'Raipur to Rajim Pilgrimage', 'Raipur to Jagdalpur Bastar', 'Raipur to Dantewada Tour', 'Raipur to Bilaspur Trip', 'Raipur to Champaran Pilgrimage', 'Raipur to Sirpur Tour', 'Wedding Guest Transfers', 'Corporate Office Outings', 'School Annual Excursions', 'Banjari Mata Temple Visit', 'Ghatarani Waterfall Day Trip'],
  ei: {
    included: ['5% GST', 'Driver Day Charge', 'Fuel Charge', 'Base Fare of Tempo Traveller', 'Driver Accommodation (Multi-day trips)'],
    excluded: ['Toll Tax during trip', 'State Tax if applicable paid by Customer', 'Parking Charges as per actual and paid by customer', 'Airport Parking Charge as per actual', 'Driver Night Charge (Tempo Traveller – 500)', 'Carrier Charge Extra – 300'],
  },
  whyTempoTitle: 'Luxury Tempo Traveller in Raipur — When You Want Something Better',
  whyTempoParas: [
    'A standard tempo traveller is fine. It fits everyone, handles the bags, and gets the job done. But sometimes you want the trip itself to feel good — not just get it over with. That is when a luxury tempo traveller makes sense.',
    'Think about a wedding. You have spent weeks planning every little detail. The last thing you want is your guests sitting in a hot, bumpy vehicle. A luxury tempo traveller changes that completely — everyone arrives comfortable, relaxed, and looking forward to the event.',
    'The best part? When you split the cost across 10 or 12 people, the price difference is smaller than most people expect.',
  ],
  features: [
    { title: 'Strong AC Throughout', desc: 'Powerful multi-zone AC in all vehicles — keeps the cabin comfortable on Raipur\'s hot summer days and long outstation drives' },
    { title: 'Enough Luggage Space', desc: 'Dedicated luggage area for full group bags, offerings, and suitcases — covers pilgrimage groups, wedding parties, and multi-day trips' },
    { title: 'TV Screen and Music System', desc: 'LCD television and music system for entertainment on long journeys — available in standard and luxury tempo travellers' },
    { title: 'Mobile Charging Points', desc: 'Charging points at every seat so nobody arrives with a dead phone — especially useful on longer routes to Jagdalpur and Bilaspur' },
    { title: 'GPS Enabled', desc: 'GPS tracking for safety and route efficiency — your group always knows where the vehicle is, especially useful on forest road routes in Bastar' },
    { title: 'Night Moon Lighting', desc: 'Ambient night lighting in luxury tempo travellers for evening events and late-night wedding transfers' },
    { title: 'Large Window Panes', desc: 'Wide window panes give passengers clear views of the road and scenery — especially enjoyable on the Bastar forest route' },
    { title: 'Multi-Seating Options', desc: '9, 10, 12, 14, 15, 16, 17, 18, 20, 21, 24 and 26 seater available — right size for every group' },
  ],
  attractions: [
    { title: 'Banjari Mata Temple, Raipur', desc: 'One of the most well-known temples in Raipur. A divine temple dedicated to Goddess Bangla Mukhi. A popular group pilgrimage stop easily covered as part of a local sightseeing day tour by tempo traveller from Raipur.' },
    { title: 'Ghatarani Waterfall', desc: 'A popular destination for bathing and natural sightseeing, located in a forested region with Hindu temples, food stalls, and natural attractions. A favourite half-day or full-day group outing from Raipur.' },
    { title: 'Rajim — Triveni Sangam', desc: 'Around 45 km from Raipur. Known as the Prayagraj of Chhattisgarh. The Triveni Sangam of Mahanadi, Pairy, and Sondur rivers. Famous for the Rajim Kumbh Mela and the ancient Rajim Lochana Temple.' },
    { title: 'Jagdalpur and Bastar — Chitrakote and Tirathgarh Waterfalls', desc: 'Around 300 km from Raipur. The Bastar district is one of the most scenic group travel routes in Chhattisgarh — dense forest roads, tribal villages, Chitrakote Waterfall (the Niagara of India).' },
    { title: 'Champaran — Birthplace of Sant Vallabhacharya', desc: 'Around 60 km from Raipur. An important Vaishnava pilgrimage site. Home to the birthplace of Sant Vallabhacharya and the Charbhuja Temple.' },
    { title: 'Dantewada — Danteshwari Mata Temple', desc: 'Around 350 km from Raipur in the Bastar region. One of the 52 Shakti Peethas in India. One of the most important pilgrimage sites in Chhattisgarh.' },
  ],
  whyCards: [
    { title: 'Fixed Fare — No Surprise Charges', desc: 'There is a fixed fare for all clients. What you are quoted before the trip is what you pay after. No hidden additions, no last-minute extras.' },
    { title: 'Assured Tempo Traveller at Nominal Rate', desc: 'The tempo traveller is confirmed at booking. No last-minute substitutions. Vehicle details shared before departure so you know exactly what to expect.' },
    { title: '24/7 Customer Assistance', desc: 'Services available every day of the week. Whether it is a morning trip to Rajim or an evening function in Raipur, support is always available.' },
    { title: 'Proficient and Experienced Drivers', desc: 'Drivers know all Raipur city roads, the Bastar forest routes, outstation highways, and sightseeing spots personally.' },
    { title: 'Easy Online Booking', desc: 'Book online or call 9044019511 directly. Tell us group size, pickup point, and destination — we sort everything else out for you immediately.' },
    { title: 'No Cancellation Charges', desc: 'If you need to cancel your trip there are no cancellation charges. Flexible and customer-friendly booking that reduces hassle before the journey even begins.' },
  ],
  faqs: [
    { q: 'Q1. Is a tempo traveller the cheapest way to travel as a group in Raipur?', a: 'Honestly, yes in most cases. The tempo traveller price in Raipur for a full day local tour starts at Rs 4,500 for a 12 seater — divide that by 12 people and you are looking at Rs 375 per person for a full day of comfortable group travel.' },
    { q: 'Q2. What is the best tempo traveller route from Raipur for a group pilgrimage?', a: 'The most popular pilgrimage routes from Raipur include Raipur to Rajim, Raipur to Dantewada, Raipur to Champaran, and Raipur to Sirpur. For longer religious tours, the 20 seater tempo traveller works best.' },
    { q: 'Q3. Can I hire a tempo traveller in Raipur for a Bastar jungle trip?', a: 'Yes and it is one of the most scenic group travel experiences in Chhattisgarh. The route from Raipur to Jagdalpur through Bastar passes through dense forest roads, tribal villages, and natural waterfalls like Chitrakote and Tirathgarh.' },
    { q: 'Q4. Is there a tempo traveller available in Raipur for corporate office outings?', a: 'Yes and it is one of the most popular use cases. The 12 and 16 seater are the most commonly booked sizes for office groups.' },
    { q: 'Q5. What is the per km rate for an outstation tempo traveller from Raipur?', a: 'The standard outstation tempo traveller rate from Raipur starts at Rs 23 per km for a 12 seater. This rate includes fuel, driver allowance, toll taxes, and state tax for trips outside Chhattisgarh.' },
    { q: 'Q6. Are luxury tempo travellers available in Raipur for destination weddings?', a: 'Yes. Luxury tempo traveller hire in Raipur for weddings is increasingly popular — especially for ferrying guests between venues, hotels, and mandap locations.' },
  ],
  noteBox: 'Wedding season in Chhattisgarh runs roughly <strong>November through February</strong> — the busiest period for tempo traveller bookings in Raipur. Book at least <strong>3 to 4 weeks early</strong> during this period.',
  footerServices: ['9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', '24/26 Seater Tempo Traveller', 'Luxury Tempo Traveller'],
  footerRoutes: ['Raipur Local Sightseeing', 'Raipur to Rajim', 'Raipur to Jagdalpur', 'Raipur to Bilaspur', 'Raipur to Dantewada', 'Raipur to Prayagraj'],
  popularRoutes: ['Raipur Local Sightseeing Tour', 'Raipur to Rajim Tempo Traveller', 'Raipur to Jagdalpur Tempo Traveller', 'Raipur to Bilaspur Tempo Traveller', 'Raipur to Dantewada Tempo Traveller', 'Raipur to Champaran Pilgrimage', 'Raipur to Sirpur Heritage Tour', 'Raipur to Ambikapur Tempo Traveller', 'Raipur Ghatarani Waterfall Day Trip', 'Raipur Banjari Mata Temple Tour', 'Raipur Airport Group Transfer', 'Raipur Wedding Guest Transport', 'Raipur Corporate Office Outing', 'Raipur School Excursion Trip', 'Raipur to Chitrakote Waterfall', '12 Seater Tempo Traveller Raipur', '20 Seater Tempo Traveller Raipur', 'Luxury Tempo Traveller Raipur', 'Raipur to Nagpur Tempo Traveller', 'Raipur to Prayagraj Tempo Traveller'],
  ctaHeading: 'Book Your Raipur Group Trip Today',
  ctaDesc: 'Call or WhatsApp Yatra Travel India on 9044019511. Tell us your group size, pickup point, and where you are headed. Fixed fare, no hidden charges, experienced driver.',
}

/* ══════════════════════════════════════════
   GOA
══════════════════════════════════════ */
const goa: CityData = {
  slug: 'goa',
  cityName: 'Goa',
  pageTitle: 'Tempo Traveller in Goa | Group Travel & Tours',
  metaTitle: 'Tempo Traveller in Goa | Group Travel & Tours | Yatra Travel India',
  metaDesc: 'Enjoy Goa trips with tempo traveller rental for friends and family. Comfortable travel and easy booking. Call +91 9044019511.',
  metaKeywords: 'tempo traveller in goa, tempo traveller on rent in goa, tempo traveller goa, tempo traveller booking in goa, 12 seater tempo traveller in goa, 20 seater tempo traveller in goa, luxury tempo traveller on rent goa, hire tempo traveller for rent in goa, tempo traveller rental in goa, mercedes tempo traveller goa',
  topbarText: "Goa's Trusted Tempo Traveller — Beaches, Sightseeing, Outstation Trips and Destination Weddings",
  heroHeading: 'Tempo Traveller on Rent in Goa',
  heroSub: 'Beach Tours · Local Sightseeing · Destination Weddings · Corporate Groups · Goa to Mumbai and Bangalore',
  heroBadges: ['9 to 20 Seater Available', 'Mercedes and Toyota Hiace', 'Starting Rs.5,000 Local', 'No Hidden Charges'],
  bookingTabs: ['Local Sightseeing', 'Beach Tour', 'Wedding Transfer', 'Outstation'],
  defaultCity: 'Goa',
  vehicleOptions: ['Select Vehicle', '9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', 'Mercedes Tempo Traveller', 'Toyota Hiace Van', 'Luxury Tempo Traveller'],
  trustItems: [
    { title: 'Confirmed Vehicle', sub: 'Confirmed before your trip starts', iconType: 'shield' },
    { title: 'No Hidden Charges', sub: "What you're quoted is what you pay", iconType: 'card' },
    { title: 'All Inclusive Fare', sub: 'Toll, parking, state tax included', iconType: 'check' },
    { title: 'Experienced Drivers', sub: 'Know Goa and outstation routes well', iconType: 'person' },
  ],
  infoBoxText: 'Yatra Travel India offers <strong>tempo traveller on rent in Goa</strong> for local sightseeing, beach tours, destination weddings, corporate outings, and outstation trips to Mumbai, Bangalore, and Kolhapur. <strong>9 to 20 seater available — plus Mercedes Tempo Traveller, Toyota Hiace Van, and full Luxury Tempo Traveller.</strong> Fixed fare, no hidden charges. Starting at Rs.5,000 for local tours and Rs.23/km for outstation. Call <strong>9044019511</strong> to book instantly.',
  introH1: 'Book a Tempo Traveller on Rent in Goa — Comfortable Group Travel Made Simple',
  introParagraphs: [
    'Goa offers something for everyone. Whether you want to enjoy water sports, taste amazing seafood, or simply spend peaceful time by the sea, this destination never disappoints. A tempo traveller is perfect for both local sightseeing in Goa and outstation trips to nearby destinations in Maharashtra and Karnataka.',
    'Instead of managing multiple cars, you can travel together, enjoy the journey, and explore more places without any hassle. We offer a variety of tempo traveller options — from a standard 12 seater to a premium Mercedes Tempo Traveller or Luxury Urbania — so you can choose what suits your group and budget.',
  ],
  sectionServicesTitle: 'Tempo Traveller Options in Goa',
  vehicles: [
    { badge: 'Small Groups', title: '9 Seater Tempo Traveller', popular: 'Coastal Roads', color: '#0f6ec8', badgeOrange: false, price: 'Best', priceLabel: ' Rate on Call', specs: [{ label: '6–9 People', sub: 'Group Size' }, { label: 'Full AC', sub: 'Cabin' }, { label: 'Compact', sub: 'Coastal Roads' }, { label: 'Driver Waits', sub: 'Every Stop' }], tags: ['Full AC', 'Pushback Seats', 'Beach Tour', 'Couples Trip'], tagOrange: false, btnLabel: 'Book 9 Seater', selectKey: '9 Seater Tempo Traveller' },
    { badge: 'Rs.5,000 Local', title: '12 Seater Tempo Traveller', popular: 'Most Booked', color: '#0f6ec8', badgeOrange: false, price: 'Rs.5,000', priceLabel: ' local onwards', specs: [{ label: '10–12 People', sub: 'Group Size' }, { label: 'Rs.5,000', sub: 'Local 8–9 hrs/80 km' }, { label: 'Rs.23/km', sub: 'Outstation Rate' }, { label: 'Best Value', sub: 'Per Head Cost' }], tags: ['Full AC', 'Pushback Seats', 'Office Groups', 'Family Trips'], tagOrange: false, btnLabel: 'Book 12 Seater', selectKey: '12 Seater Tempo Traveller' },
    { badge: 'Medium Groups', title: '16 Seater Tempo Traveller', popular: '', color: '#0f6ec8', badgeOrange: false, price: 'Best', priceLabel: ' Rate on Call', specs: [{ label: '13–16 People', sub: 'Group Size' }, { label: 'Full AC', sub: 'Cabin' }, { label: 'More Space', sub: 'Longer Drives' }, { label: 'Office Outings', sub: 'School Trips' }], tags: ['Full AC', 'Generous Luggage', 'College Groups', 'Extended Family'], tagOrange: false, btnLabel: 'Book 16 Seater', selectKey: '16 Seater Tempo Traveller' },
    { badge: 'Large Groups', title: '20 Seater Tempo Traveller', popular: 'Best for Events', color: '#ff6b35', badgeOrange: true, price: 'Best', priceLabel: ' Rate on Call', specs: [{ label: '17–20 People', sub: 'Group Size' }, { label: 'Full AC', sub: 'Cabin' }, { label: 'Wedding Parties', sub: 'Corporate Groups' }, { label: 'No Splitting Up', sub: 'Everyone Together' }], tags: ['Full AC', 'Max Luggage', 'Religious Tours', 'Large Groups'], tagOrange: true, btnLabel: 'Book 20 Seater', selectKey: '20 Seater Tempo Traveller' },
    { badge: 'From Rs.7,500', title: 'Mercedes Tempo Traveller', popular: 'Premium', color: '#0f6ec8', badgeOrange: false, price: 'Rs.7,500', priceLabel: ' local onwards', specs: [{ label: '9–13 Seater', sub: 'Flexible Sizes' }, { label: 'Rs.7,500', sub: 'Local onwards' }, { label: 'Rs.30–35/km', sub: 'Outstation' }, { label: 'Air Suspension', sub: 'Corporate VIP' }], tags: ['Airline Seats', 'Air Suspension', 'Corporate Travel', 'Weddings'], tagOrange: false, btnLabel: 'Book Mercedes Tempo', selectKey: 'Mercedes Tempo Traveller' },
  ],
  optionsTable: [
    { vehicle: '9 Seater Tempo Traveller', cap: '9 + Driver', ac: 'AC', ideal: 'Small groups of 6 to 9 — couples trips, small families, compact enough for Goa\'s coastal roads, comfortable legroom for everyone' },
    { vehicle: '12 Seater Tempo Traveller', cap: '12 + Driver', ac: 'AC', ideal: 'Most popular in Goa. Office groups, college friends, family reunions — works for local sightseeing and outstation trips. Best per-head cost' },
    { vehicle: '16 Seater Tempo Traveller', cap: '16 + Driver', ac: 'AC', ideal: 'Groups of 13 to 16 — office outings, school and college trips, extended family holidays. Better legroom and luggage space than a 12 seater' },
    { vehicle: '20 Seater Tempo Traveller', cap: '20 + Driver', ac: 'AC', ideal: 'Large corporate groups, wedding parties, religious tours — roomy, well-spaced seating, everyone travels together without splitting up' },
    { vehicle: 'Mercedes Tempo Traveller', cap: '9–13 + Driver', ac: 'Full AC', ideal: 'Corporate travel, weddings, premium tours — pushback airline-style seats, air suspension, reads more professional than a standard van' },
    { vehicle: 'Luxury Tempo Traveller', cap: '12–20 + Driver', ac: 'Multi-Zone AC', ideal: 'Destination weddings, VIP tours, long outstation drives to Mumbai and Bangalore — reclining leather seats, LCD screens, mini fridge, charging points' },
  ],
  localFareTable: [
    { vehicle: '12 Seater Tempo Traveller', seating: '10–12 people', fare: 'Rs 5,000 onwards' },
    { vehicle: 'Mercedes Tempo Traveller', seating: '9–13 people', fare: 'Rs 7,500 onwards' },
    { vehicle: 'Toyota Hiace Van', seating: '10–14 people', fare: 'Rs 6,500 onwards' },
    { vehicle: 'Luxury Tempo Traveller', seating: '12–20 people', fare: 'Rs 10,000 onwards' },
  ],
  useTags: ['Goa Beach Tour', 'Goa Local Sightseeing', 'Destination Wedding Goa', 'Corporate Group Outing', 'Family Vacation Goa', 'Friends Group Trip', 'Goa to Mumbai Transfer', 'Goa to Bangalore Outstation', 'Goa to Kolhapur Trip', 'Goa to Gokarna Tour', 'Honeymoon Group Package', 'Goa Flea Market Tour'],
  ei: {
    included: ['5% GST', 'Driver Day Charge', 'Fuel Charge', 'Base Fare of Tempo Traveller', 'Driver Accommodation (Multi-day trips)'],
    excluded: ['Toll Tax during trip', 'State Tax if applicable paid by Customer', 'Parking Charges as per actual', 'Airport Parking Charge as per actual', 'Driver Night Charge (Tempo Traveller – 500)', 'Carrier Charge Extra – 300'],
  },
  whyTempoTitle: 'Why Booking a Tempo Traveller in Goa Just Makes Sense',
  whyTempoParas: [
    'When you split the cost across 10 or 12 people, a tempo traveller almost always works out cheaper than booking multiple cabs. And the convenience of everyone travelling together — same vehicle, same schedule, no one getting lost — is hard to put a price on.',
    "Goa's roads range from well-maintained coastal highways to narrower village lanes near the beaches. An experienced local driver who knows these roads makes a genuine difference to how smoothly the day runs.",
    'The per-head cost works out particularly well for the 12 seater. Split Rs 5,000 across 12 people and each person pays around Rs 420 for a full day of Goa sightseeing in an air-conditioned vehicle.',
  ],
  attractions: [
    { title: 'Calangute, Baga and Anjuna Beaches', desc: 'Each beach has its own vibe — cheap beer, fresh seafood, and a jet ski ride you probably should not say no to but definitely will. The tempo traveller drops the group at each beach and waits while everyone explores.' },
    { title: 'Old Goa — Basilica of Bom Jesus and Se Cathedral', desc: 'The Basilica of Bom Jesus and Se Cathedral are genuinely impressive up close. The Portuguese left behind some serious architecture and it shows. Parking near Old Goa can be tricky — your driver knows the best spots.' },
    { title: 'Dudhsagar Waterfalls', desc: 'Around 60 km from Panaji. One of the tallest waterfalls in India, set inside Mollem National Park. Best during monsoon and post-monsoon season. Book the tempo traveller early for Dudhsagar day trips.' },
    { title: 'Spice Plantation Tours', desc: 'Ponda area, around 30 km from Panaji. A favourite for groups that want something genuinely different from the beach circuit. Walk through cardamom, vanilla, and nutmeg plants, and eat a proper Goan lunch.' },
    { title: 'Fort Aguada and Chapora Fort', desc: 'Two of Goa\'s most photogenic heritage sites. Fort Aguada is a 17th century Portuguese fort at the northern tip of the Goa coast. Both can be covered as part of a full day North Goa sightseeing circuit.' },
    { title: 'Mandovi River Cruise at Sunset', desc: 'One of the best things you can do in Goa. No jet skis, no loud music. Just water, sky, and that specific kind of quiet that is hard to find in Goa after dark.' },
  ],
  whyCards: [
    { title: 'No Hidden Charges — Ever', desc: 'The fare includes toll taxes, parking charges, driver allowance, fuel, and state tax for outstation trips. The price quoted upfront is the final amount you pay.' },
    { title: '7 Vehicle Options for Every Group', desc: 'Standard 9, 12, 16, 20 seater plus Mercedes Tempo Traveller, Toyota Hiace Van, and full Luxury Tempo Traveller. Right size for every group and budget.' },
    { title: 'Covers 8 to 9 Hours for Local Tours', desc: 'Starting at Rs 5,000 for a 12 seater covering 8 to 9 hours and up to 80 km — more than enough to hit every major Goa attraction in a single comfortable day.' },
    { title: 'Best for Outstation from Goa', desc: 'Goa to Mumbai, Goa to Bangalore, Goa to Kolhapur, Goa to Gokarna — all outstation routes covered at Rs 23/km for standard and Rs 30 to 45/km for luxury.' },
    { title: 'Cost Effective When Split', desc: 'Split a 12 seater across 12 people and each person pays around Rs 420 for a full day in an AC vehicle. That beats individual cabs on every metric.' },
    { title: 'Easy One Call Booking', desc: 'Call 9044019511. Share group size, travel date, and route. Booking confirmed on the same call with vehicle details, driver name, and fixed fare.' },
  ],
  faqs: [
    { q: 'Q1. What is the price of a tempo traveller in Goa?', a: 'The starting fare for a 12 seater tempo traveller in Goa is Rs 5,000 for a local tour covering 8 to 9 hours and up to 80 km. For outstation trips from Goa, the rate is Rs 23 per km. Luxury tempo travellers start from Rs 7,500 for local tours and Rs 30 to 45 per km for outstation travel.' },
    { q: 'Q2. Which is the best tempo traveller for a group trip in Goa?', a: 'It depends on your group size. A 9 to 12 seater tempo traveller works best for small groups, while a 16 to 20 seater is the right pick for medium to large groups. For premium comfort, the Mercedes Tempo Traveller or Toyota Hiace van are excellent choices.' },
    { q: 'Q3. How far in advance should I book a tempo traveller in Goa?', a: 'During peak season November to February, it is strongly recommended to book at least 2 to 3 weeks in advance. Luxury vehicles like the Mercedes Tempo Traveller get booked fast during this period.' },
    { q: 'Q4. Is a luxury tempo traveller worth it in Goa?', a: 'Yes — especially for long outstation trips, weddings, or corporate travel. A luxury tempo traveller in Goa offers pushback reclining seats, air suspension, multi-zone AC, LCD screens, and charging points at every seat.' },
    { q: 'Q5. Are there any hidden charges in tempo traveller booking in Goa?', a: 'No hidden charges. The tempo traveller fare in Goa includes toll taxes, parking charges, driver allowance, fuel, and state tax for outstation trips. The price quoted upfront is the final amount you pay.' },
  ],
  noteBox: 'Goa\'s peak tourist season runs from <strong>November to February.</strong> Luxury vehicles like the <strong>Mercedes Tempo Traveller fill up fast</strong> during this period. Book at least <strong>2 to 3 weeks in advance</strong> during peak season. For destination weddings in Goa, confirm transport at least <strong>4 to 6 weeks before the event date.</strong>',
  footerServices: ['9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', 'Mercedes Tempo Traveller', 'Luxury Tempo Traveller'],
  footerRoutes: ['Goa Local Sightseeing', 'Goa to Mumbai', 'Goa to Bangalore', 'Goa to Kolhapur', 'Goa to Gokarna', 'Goa Airport Transfer'],
  popularRoutes: ['Goa Local Sightseeing Tour', 'Goa North Beach Circuit Tour', 'Goa to Mumbai Tempo Traveller', 'Goa to Bangalore Tempo Traveller', 'Goa to Kolhapur Tempo Traveller', 'Goa to Gokarna Tempo Traveller', 'Old Goa Heritage Tour', 'Anjuna Flea Market Tempo Traveller', 'Dudhsagar Waterfalls Day Trip', 'Goa Spice Plantation Tour', 'Mandovi River Cruise Transfer', 'Goa Airport Group Transfer', 'Destination Wedding Goa Transfer', 'Goa Corporate Group Outing', '12 Seater Tempo Traveller Goa', '20 Seater Tempo Traveller Goa', 'Mercedes Tempo Traveller Goa', 'Toyota Hiace Van Goa', 'Luxury Tempo Traveller Goa', 'Goa to Pondicherry Tempo Traveller'],
  ctaHeading: 'Book Your Goa Group Trip Today',
  ctaDesc: 'Call 9044019511 and tell us your group size, your route, and your travel date. We will handle everything else. Fixed fare, no hidden charges, experienced driver, right-sized vehicle for your group.',
}

/* ══════════════════════════════════════════
   NASHIK
══════════════════════════════════════════ */
const nashik: CityData = {
  slug: 'nashik',
  cityName: 'Nashik',
  pageTitle: 'Tempo Traveller Rental in Nashik',
  metaTitle: 'Tempo Traveller Rental in Nashik | Yatra Travel India',
  metaDesc: 'Explore Nashik vineyards and temples in a roomy tempo traveller. Yatra Travel India makes your trip smooth and fun. Call 91 -9044019511 to book now.',
  metaKeywords: 'tempo traveller in nashik, tempo traveller on rent in nashik, nashik group travel vehicle, tempo traveller for pilgrimage nashik, luxury tempo traveller in nashik, 12 seater tempo traveller in nashik, 20 seater tempo traveller in nashik, 24 seater tempo traveller in nashik, AC tempo traveller rental nashik, kumbh mela nashik tempo traveller',
  topbarText: "Nashik's Trusted Tempo Traveller — Kumbh Mela, Shirdi, Trimbakeshwar, Sula Vineyards and Outstation Tours",
  heroHeading: 'Tempo Traveller in Nashik',
  heroSub: 'Kumbh Mela · Shirdi Pilgrimage · Trimbakeshwar · Sula Vineyards · Pune · Mumbai · Igatpuri',
  heroBadges: ['9 to 20 Seater Available', 'Luxury Tempo Traveller', 'Starting Rs.3,500 Local', 'Fixed Fare · No Hidden Charges'],
  bookingTabs: ['Local Sightseeing', 'Shirdi Pilgrimage', 'Pune / Mumbai', 'Outstation'],
  defaultCity: 'Nashik',
  vehicleOptions: ['Select Vehicle', '9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', 'Luxury Tempo Traveller'],
  trustItems: [
    { title: 'On-Time Pickup', sub: 'Not approximately — on time, every time', iconType: 'clock' },
    { title: 'Clean and Maintained', sub: 'Serviced and checked before every trip', iconType: 'shield' },
    { title: 'Fixed Fare Always', sub: 'No hidden charges at the end of the day', iconType: 'card' },
    { title: 'Experienced Drivers', sub: 'Know every Nashik route personally', iconType: 'person' },
  ],
  infoBoxText: 'Yatra Travel India offers <strong>tempo traveller rental in Nashik</strong> for Kumbh Mela pilgrimages, Shirdi group tours, Trimbakeshwar visits, Sula vineyard trips, local sightseeing, and all outstation routes. <strong>9 to 20 seater available including Luxury Tempo Traveller.</strong> On-time pickup, clean vehicles, fixed fare, no hidden charges. Call <strong>9044019511</strong> — tell us your group size, route, and travel date. We will handle everything else.',
  introH1: 'Tempo Traveller in Nashik — For a City That Loves Group Travel',
  introParagraphs: [
    'Nashik is a city that loves group travel. Kumbh Mela, Ganesh Chaturthi, grape harvest season, Sula Fest — there is always something happening here and people always go together.',
    'With Yatra Travel India in Nashik you get on-time pickup every time, a clean and well-maintained vehicle, a fixed fare with nothing hidden, and an experienced driver who knows every route from Nashik city roads to the expressway to Shirdi to the Balaghat range routes toward Igatpuri.',
  ],
  sectionServicesTitle: 'Tempo Traveller Options in Nashik',
  vehicles: [
    { badge: 'Rs.3,500 Local', title: '9 Seater Tempo Traveller', popular: 'Small Groups', color: '#0f6ec8', badgeOrange: false, price: 'Rs.3,500', priceLabel: ' local onwards', specs: [{ label: 'Up to 9 People', sub: 'Group Size' }, { label: 'Rs.3,500', sub: 'Local 8 hrs/80 km' }, { label: 'Full AC', sub: 'Cabin' }, { label: 'Driver Waits', sub: 'Every Stop' }], tags: ['Full AC', 'Pushback Seats', 'Trimbakeshwar', 'Igatpuri Trip'], tagOrange: false, btnLabel: 'Book 9 Seater', selectKey: '9 Seater Tempo Traveller' },
    { badge: 'Rs.4,500 Local', title: '12 Seater Tempo Traveller', popular: 'Most Booked', color: '#0f6ec8', badgeOrange: false, price: 'Rs.4,500', priceLabel: ' local onwards', specs: [{ label: '10–12 People', sub: 'Group Size' }, { label: 'Rs.4,500', sub: 'Local 8 hrs/80 km' }, { label: 'Rs.23/km', sub: 'Outstation Rate' }, { label: 'Best Value', sub: 'Per Head Cost' }], tags: ['Full AC', 'Pushback Seats', 'Shirdi Trip', 'Sula Wine Tour'], tagOrange: false, btnLabel: 'Book 12 Seater', selectKey: '12 Seater Tempo Traveller' },
    { badge: 'Corporate Groups', title: '16 Seater Tempo Traveller', popular: '', color: '#0f6ec8', badgeOrange: false, price: 'Best', priceLabel: ' Rate on Call', specs: [{ label: '13–16 People', sub: 'Group Size' }, { label: 'Full AC', sub: 'Cabin' }, { label: 'Nashik to Pune', sub: 'Express Route' }, { label: 'Extra Legroom', sub: 'Long Drives' }], tags: ['Full AC', 'Extra Legroom', 'Pune / Mumbai', 'Saptashrungi'], tagOrange: false, btnLabel: 'Book 16 Seater', selectKey: '16 Seater Tempo Traveller' },
    { badge: 'Large Groups', title: '20 Seater Tempo Traveller', popular: 'Kumbh Mela Special', color: '#ff6b35', badgeOrange: true, price: 'Best', priceLabel: ' Rate on Call', specs: [{ label: '17–20 People', sub: 'Group Size' }, { label: 'Full AC', sub: 'Cabin' }, { label: 'Mumbai Events', sub: 'Wedding Parties' }, { label: 'Max Luggage', sub: 'Space' }], tags: ['Full AC', 'Max Luggage', 'Kumbh Mela', 'Wedding Parties'], tagOrange: true, btnLabel: 'Book 20 Seater', selectKey: '20 Seater Tempo Traveller' },
    { badge: 'From Rs.10,000', title: 'Luxury Tempo Traveller', popular: 'Weddings and VIP', color: '#0f6ec8', badgeOrange: false, price: 'Rs.10,000', priceLabel: ' local onwards', specs: [{ label: '12–20 Seater', sub: 'Flexible Sizes' }, { label: 'Rs.10,000', sub: 'Local onwards' }, { label: 'Rs.38–45/km', sub: 'Outstation Rate' }, { label: 'Mini Fridge', sub: 'Curtains' }], tags: ['Leather Seats', 'LCD Screen', 'Air Suspension', 'Mini Fridge'], tagOrange: false, btnLabel: 'Book Luxury Tempo', selectKey: 'Luxury Tempo Traveller' },
  ],
  optionsTable: [
    { vehicle: '9 Seater Tempo Traveller', cap: '9 + Driver', ac: 'AC', ideal: 'Small families, Trimbakeshwar pilgrimage half-day trips, Igatpuri weekend getaways, and local Nashik sightseeing' },
    { vehicle: '12 Seater Tempo Traveller', cap: '12 + Driver', ac: 'AC', ideal: 'Most popular for families — Shirdi day trips, Sula vineyard wine tours, local sightseeing, and outstation trips from Nashik' },
    { vehicle: '16 Seater Tempo Traveller', cap: '16 + Driver', ac: 'AC', ideal: 'Medium-sized corporate groups, college trips, and Nashik to Pune and Nashik to Mumbai outstation routes' },
    { vehicle: '20 Seater Tempo Traveller', cap: '20 + Driver', ac: 'AC', ideal: 'Large family groups, Kumbh Mela pilgrimage groups, wedding parties travelling to Mumbai, and Saptashrungi temple tours' },
    { vehicle: 'Luxury Tempo Traveller', cap: '12–20 + Driver', ac: 'Multi-Zone AC', ideal: 'Destination weddings, VIP corporate travel, special occasions. Full recline leather seats, LCD screens, mini fridge, curtains, air suspension' },
  ],
  localFareTable: [
    { vehicle: '9 Seater Tempo Traveller', seating: 'Rs 3,500 onwards', fare: 'On Request' },
    { vehicle: '12 Seater Tempo Traveller', seating: 'Rs 4,500 onwards', fare: 'Rs 23/km onwards' },
    { vehicle: 'Luxury Tempo Traveller', seating: 'Rs 10,000 onwards', fare: 'Rs 38–45/km' },
    { vehicle: 'Nashik to Shirdi (12 Seater)', seating: 'Rs 5,500 onwards', fare: '85 km from Nashik' },
  ],
  useTags: ['Kumbh Mela Nashik Pilgrimage', 'Shirdi Sai Baba Day Trip', 'Trimbakeshwar Jyotirlinga', 'Sula Vineyards Wine Tour', 'Nashik to Pune Group Travel', 'Nashik to Mumbai Wedding Party', 'Igatpuri Weekend Getaway', 'Saptashrungi Temple Tour', 'Nashik Local Sightseeing', 'Corporate Office Outings', 'Ganesh Chaturthi Group Tours', 'Destination Wedding Transfers'],
  ei: {
    included: ['5% GST', 'Driver Day Charge', 'Fuel Charge', 'Base Fare of Tempo Traveller', 'Driver Accommodation (Multi-day trips)'],
    excluded: ['Toll Tax during trip', 'State Tax if applicable paid by Customer', 'Parking Charges as per actual', 'Airport Parking Charge as per actual', 'Driver Night Charge (Tempo Traveller – 500)', 'Carrier Charge Extra – 300'],
  },
  whyTempoTitle: 'What Makes Yatra Travel India the Best Tempo Traveller Service in Nashik',
  whyTempoParas: [
    'On time pickup. A tempo traveller that shows up 45 minutes late ruins the start of every trip. At Yatra Travel India, the booking is confirmed the night before, driver details are sent in advance, and the vehicle is at your door at the time agreed. Not approximately. Not after three phone calls. On time, every time.',
    'Clean and well-maintained vehicles. Every tempo traveller in the Yatra Travel India fleet is regularly serviced and well looked after. AC that works properly, seats that are clean, luggage space that is actually usable.',
    'Fixed fare with no hidden charges. The price quoted before the trip is the price paid after it. Toll taxes, parking, state tax for outstation trips, driver allowance. All of it is included upfront at Yatra Travel India.',
  ],
  routes: [
    { title: 'Nashik to Shirdi by Tempo Traveller', meta: ['85 km', 'Day Trip or Overnight', 'Most Booked Route'], desc: 'One of the most booked routes in Maharashtra for group travel. Regularly done as a day trip or overnight pilgrimage by families, religious groups, and office teams.', fareLabel: '12 Seater starting fare', fare: 'Rs.5,500 onwards' },
    { title: 'Nashik to Trimbakeshwar', meta: ['28 km', 'Half Day Trip', 'Jyotirlinga Pilgrimage'], desc: 'Just 28 km from Nashik city but one of the most visited pilgrimage spots in the region. Quick half day trip, easy route.', fareLabel: '9 Seater starting fare', fare: 'On Request' },
    { title: 'Nashik to Pune', meta: ['~210 km via Expressway', 'Corporate and College Groups'], desc: 'A popular route for corporate groups, college trips, and weekend travellers. The expressway makes it a smooth drive.', fareLabel: '16 Seater starting fare', fare: 'On Request' },
    { title: 'Nashik to Mumbai', meta: ['~170 km', 'Wedding Parties and Corporate'], desc: 'Wedding parties, corporate transfers, family trips. One of the most consistently booked outstation runs from Nashik.', fareLabel: '12 Seater starting fare', fare: 'On Request' },
    { title: 'Nashik to Igatpuri', meta: ['~50 km', 'Weekend Getaway and Trekking'], desc: 'Weekend getaway favourite. Igatpuri sits in the Sahyadris and the drive from Nashik is genuinely scenic.', fareLabel: '9 Seater starting fare', fare: 'On Request' },
    { title: 'Nashik to Saptashrungi', meta: ['65 km', 'Pilgrimage with Hill Terrain'], desc: 'Increasingly popular pilgrimage route. Saptashrungi Devi temple involves some hill terrain. Larger family groups tend to book the 16 or 20 seater.', fareLabel: '16 Seater starting fare', fare: 'On Request' },
  ],
  attractions: [
    { title: 'Trimbakeshwar Temple', desc: 'One of the twelve Jyotirlingas in India and one of the most visited religious sites in Maharashtra. Just 28 km from Nashik city. A must-visit for any group doing a local sightseeing trip in Nashik.' },
    { title: 'Panchavati — Ram Kund, Sita Gumpha, Kalaram Temple', desc: 'The heart of religious Nashik. Ram Kund, Sita Gumpha, and Kalaram Temple. This area carries deep historical and spiritual significance and is one of the most photographed parts of the city.' },
    { title: 'Sula Vineyards', desc: 'Something completely different and genuinely worth including in the itinerary. Nashik is India\'s wine capital and Sula is the most well-known vineyard in the region. Tours, tastings, and stunning views of the grape fields.' },
    { title: 'Pandavleni Caves', desc: 'Ancient Buddhist rock-cut caves dating back over 2,000 years. Situated on a hill just outside the city with good views of Nashik from the top. A great heritage stop on any Nashik sightseeing tour.' },
    { title: 'Ramshej Fort', desc: 'For groups that enjoy a bit of trekking and history mixed in. The fort sits above Nashik and offers a proper elevated view of the surrounding landscape.' },
    { title: 'Dugarwadi Waterfall', desc: 'A popular stop especially during and after monsoon season. Around 35 km from Nashik city. Best visited between July and October when the waterfall is at full flow.' },
  ],
  whyCards: [
    { title: 'On-Time Pickup, Every Single Trip', desc: 'Booking confirmed the night before. Driver details sent in advance. Vehicle at your door at the agreed time. Not after three phone calls. On time, every time.' },
    { title: 'Clean and Well-Maintained Vehicles', desc: 'Every tempo traveller in the fleet is regularly serviced. AC that works properly, seats that are clean, luggage space that is actually usable on every single booking.' },
    { title: 'Fixed Fare, Nothing Hidden', desc: 'Price quoted before the trip is the price paid after. Toll, parking, state tax, driver allowance. All included upfront. No surprise charges when everyone is tired at the end of the day.' },
    { title: 'Drivers Who Know Every Route', desc: 'City roads, Shirdi highway, Balaghat range, Trimbakeshwar road, expressway to Pune. Every driver knows these routes personally — smoother, safer, faster.' },
    { title: 'All Routes Covered', desc: 'Shirdi, Trimbakeshwar, Pune, Mumbai, Igatpuri, Saptashrungi. All outstation routes from Nashik handled with experienced drivers on every run.' },
    { title: 'Responsive Customer Support', desc: 'Before the trip, during booking, and if something changes last minute. The Yatra Travel India team picks up the phone and gives straight answers. Always.' },
  ],
  faqs: [
    { q: 'Q1. What is the starting fare for a tempo traveller in Nashik?', a: 'Rs 3,500 for a 9 seater and Rs 4,500 for a 12 seater for a full day local tour covering 8 hours and 80 km.' },
    { q: 'Q2. Does the tempo traveller fare in Nashik include toll and parking?', a: 'Yes. At Yatra Travel India the fare includes toll taxes, parking charges, driver allowance, and fuel. No hidden charges.' },
    { q: 'Q3. What is the tempo traveller fare from Nashik to Shirdi?', a: 'Starts at Rs 5,500 for a 12 seater. Fare includes toll, fuel, and driver allowance. No extra charges after the trip.' },
    { q: 'Q4. Is a luxury tempo traveller available in Nashik?', a: 'Yes. Yatra Travel India offers luxury tempo travellers with reclining leather seats, multi-zone AC, LCD screens, mini fridge, curtains, and charging points at every seat.' },
    { q: 'Q5. Can I book a tempo traveller in Nashik for a wine tour?', a: 'Yes. A 12 seater is the most popular choice for Sula Vineyards and Nashik wine trail group tours.' },
  ],
  noteBox: 'During <strong>Kumbh Mela, Ganesh Chaturthi, wedding season, and festival periods</strong> book 3 to 4 weeks early — vehicles fill up fast. For Trimbakeshwar during <strong>Shravan month</strong> book well in advance as demand spikes significantly.',
  footerServices: ['9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', 'Luxury Tempo Traveller', 'Kumbh Mela Group Tour'],
  footerRoutes: ['Nashik Local Sightseeing', 'Nashik to Shirdi', 'Nashik to Trimbakeshwar', 'Nashik to Pune', 'Nashik to Mumbai', 'Nashik to Igatpuri'],
  popularRoutes: ['Nashik Local Sightseeing Tour', 'Nashik to Shirdi Tempo Traveller', 'Nashik to Trimbakeshwar Tempo Traveller', 'Nashik to Pune Tempo Traveller', 'Nashik to Mumbai Tempo Traveller', 'Nashik to Igatpuri Tempo Traveller', 'Nashik to Saptashrungi Tempo Traveller', 'Nashik Kumbh Mela Group Tour', 'Nashik to Sula Vineyards Wine Tour', 'Nashik Panchavati Temple Tour', 'Nashik to Pandavleni Caves', 'Nashik Ganesh Chaturthi Group Tour', 'Nashik Destination Wedding Transfer', '12 Seater Tempo Traveller Nashik', '20 Seater Tempo Traveller Nashik', 'Luxury Tempo Traveller Nashik', 'Nashik Corporate Team Outing', 'Nashik to Ramshej Fort Trekking', 'Nashik to Dugarwadi Waterfall', 'Nashik to Anjneri Hill Temple'],
  ctaHeading: 'Book Your Nashik Group Trip Today',
  ctaDesc: 'Ready to book? Call us on 9044019511 and tell us your group size, your route, and your travel date. We will take care of the rest. Fixed fare, on-time pickup, clean vehicle, experienced driver.',
}

/* ══════════════════════════════════════════
   SOMNATH
══════════════════════════════════════════ */
const somnath: CityData = {
  slug: 'somnath',
  cityName: 'Somnath',
  pageTitle: 'Tempo Traveller in Somnath Temple — Jyotirlinga Darshan Group Tour',
  metaTitle: 'Tempo Traveller in Somnath Temple | Yatra Travel India – Jyotirlinga Darshan Group Tour',
  metaDesc: 'Book tempo traveller in Somnath for Jyotirlinga darshan group tour. Covers Somnath Temple, Bhalka Tirth, Triveni Sangam, Dwarka route. AC vehicles, experienced drivers, transparent pricing. Call 9044019511.',
  topbarText: 'Somnath Jyotirlinga Darshan Group Tour — Reliable Tempo Traveller Service',
  heroHeading: 'Tempo Traveller in Somnath Temple',
  heroSub: 'Jyotirlinga Darshan · Bhalka Tirth · Triveni Sangam · Somnath to Dwarka · Saurashtra Circuit',
  heroBadges: ['9 to 20 Seater Options', 'Experienced Local Drivers', 'Starting Rs.3,000', 'No Hidden Charges · 24/7 Support'],
  bookingTabs: ['Local Darshan', 'Somnath to Dwarka', 'Saurashtra Circuit', 'Outstation'],
  defaultCity: 'Somnath',
  vehicleOptions: ['Select Vehicle', '9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', 'Luxury Tempo Traveller'],
  trustItems: [
    { title: 'Local Route Experts', sub: 'Somnath & Gujarat specialists', iconType: 'shield' },
    { title: '24/7 Support', sub: 'Available round the clock', iconType: 'clock' },
    { title: 'Online Payment', sub: 'UPI, Card, Net Banking', iconType: 'card' },
    { title: 'Transparent Pricing', sub: 'No hidden charges ever', iconType: 'check' },
  ],
  infoBoxText: 'Yatra Travel India provides <strong>tempo traveller rental in Somnath</strong> for Jyotirlinga darshan group tours, Somnath to Dwarka pilgrimage, Saurashtra circuit tours, and local sightseeing. Somnath is one of the twelve Jyotirlingas in India — getting the whole group to the temple on time, managing parking near the temple, and covering nearby sacred spots in one day needs <strong>one reliable vehicle and one experienced driver who knows Somnath well.</strong>',
  introH1: 'Book Tempo Traveller in Somnath Temple — Jyotirlinga Darshan Group Tour',
  introParagraphs: [
    'Somnath is one of the twelve Jyotirlingas in India. Every year thousands of devotees travel to Somnath in groups for darshan. Getting the whole group to the temple on time, managing parking near the Jyotirlinga, and covering nearby sacred spots on the same day needs one reliable vehicle and one experienced driver who knows Somnath well.',
    'A full day darshan package by tempo traveller in Somnath covers Somnath Jyotirlinga Temple darshan, Somnath Beach and Triveni Sangam, Bhalka Tirth where Lord Krishna was wounded, Geeta Mandir, Lakshminarayan Temple, and Suraj Mandir — all comfortably covered in one full day.',
  ],
  sectionServicesTitle: 'Tempo Traveller Options in Somnath',
  vehicles: [
    { badge: 'From Rs.3,000', title: '9 Seater Tempo Traveller', popular: 'Budget Pick', color: '#0f6ec8', badgeOrange: false, price: 'Rs.7,000', priceLabel: ' darshan tour', specs: [{ label: 'Up to 9 People', sub: 'Group Size' }, { label: 'Rs.7,000', sub: 'Full Day Darshan' }, { label: 'AC Comfort', sub: 'All Stops' }, { label: 'Driver Waits', sub: 'At Every Stop' }], tags: ['AC', 'Pushback Seats', 'Somnath Temple', 'Local Sightseeing'], tagOrange: false, btnLabel: 'Book 9 Seater', selectKey: '9 Seater Tempo Traveller' },
    { badge: 'From Rs.4,000', title: '12 Seater Tempo Traveller', popular: 'Most Booked', color: '#0f6ec8', badgeOrange: false, price: 'Rs.8,000', priceLabel: ' darshan tour', specs: [{ label: 'Up to 12 People', sub: 'Group Size' }, { label: 'Rs.8,000', sub: 'Full Day Darshan' }, { label: 'All Routes', sub: 'Dwarka, Diu' }, { label: 'Best Value', sub: 'Per Head Cost' }], tags: ['AC', 'Pushback Seats', 'Somnath–Dwarka', 'Saurashtra Circuit'], tagOrange: false, btnLabel: 'Book 12 Seater', selectKey: '12 Seater Tempo Traveller' },
    { badge: 'From Rs.5,500', title: '16 Seater Tempo Traveller', popular: '', color: '#0f6ec8', badgeOrange: false, price: 'Rs.8,500', priceLabel: ' darshan tour', specs: [{ label: '13–16 People', sub: 'Group Size' }, { label: 'Rs.8,500', sub: 'Full Day Darshan' }, { label: 'Extra Legroom', sub: 'Comfortable' }, { label: 'Long Routes', sub: 'Ahmedabad' }], tags: ['AC', 'Extra Legroom', 'Luggage Space', 'Group Tours'], tagOrange: false, btnLabel: 'Book 16 Seater', selectKey: '16 Seater Tempo Traveller' },
    { badge: 'Large Groups', title: '20 Seater Tempo Traveller', popular: 'Festival Season', color: '#ff6b35', badgeOrange: true, price: 'Rs.9,500', priceLabel: ' darshan tour', specs: [{ label: '17–20 People', sub: 'Group Size' }, { label: 'Rs.9,500', sub: 'Full Day Darshan' }, { label: 'Kartik Purnima', sub: 'Festival Groups' }, { label: 'Max Luggage', sub: 'All Trips' }], tags: ['AC', 'Max Luggage', 'Group Friendly', 'Pilgrim Tours'], tagOrange: true, btnLabel: 'Book 20 Seater', selectKey: '20 Seater Tempo Traveller' },
    { badge: 'From Rs.7,000', title: 'Luxury Tempo Traveller', popular: 'VIP Darshan', color: '#0f6ec8', badgeOrange: false, price: 'Rs.7,000', priceLabel: ' local onwards', specs: [{ label: '9–16 People', sub: 'Group Size' }, { label: 'Rs.7,000', sub: 'Local Tour' }, { label: 'Senior Citizens', sub: 'VIP Groups' }, { label: 'Premium', sub: 'Comfort' }], tags: ['Reclining Seats', 'Multi-Zone AC', 'LCD Screen', 'Charging Points'], tagOrange: false, btnLabel: 'Book Luxury Tempo', selectKey: 'Luxury Tempo Traveller' },
  ],
  optionsTable: [
    { vehicle: '9 Seater Tempo Traveller in Somnath', cap: 'Up to 9', ac: 'AC', ideal: 'Small family pilgrimage groups for Somnath Jyotirlinga darshan and local temple tour at affordable rates' },
    { vehicle: '12 Seater Tempo Traveller in Somnath', cap: 'Up to 12', ac: 'AC', ideal: 'Most popular size for Somnath pilgrimage groups. Ideal for local darshan tour and outstation routes to Dwarka, Diu, and Junagadh' },
    { vehicle: '16 Seater Tempo Traveller in Somnath', cap: 'Up to 16', ac: 'AC', ideal: 'Best for groups of 13 to 16 people. Better legroom and luggage space on longer routes like Somnath to Dwarka or Somnath to Ahmedabad' },
    { vehicle: '20 Seater Tempo Traveller in Somnath', cap: 'Up to 20', ac: 'AC', ideal: 'For large pilgrimage groups, Kartik Purnima festival groups, and corporate group tours across the Saurashtra pilgrimage circuit' },
    { vehicle: 'Luxury Tempo Traveller in Somnath', cap: '9–16 + Driver', ac: 'Multi-Zone AC', ideal: 'Recommended for VIP pilgrimage groups and groups with elderly or senior citizen passengers on long Somnath to Dwarka routes' },
  ],
  useTags: ['Somnath Jyotirlinga Darshan', 'Bhalka Tirth Visit', 'Triveni Sangam', 'Evening Aarti Tour', 'Somnath to Dwarka Pilgrimage', 'Saurashtra Circuit Tour', 'Kartik Purnima Festival', 'Family Pilgrimage Groups', 'Senior Citizen VIP Tours', 'Sasan Gir Wildlife Day Trip'],
  ei: {
    included: ['5% GST', 'Driver Day Charge', 'Fuel Charge', 'Base Fare of Tempo Traveller'],
    excluded: ['Toll Tax during trip', 'State Tax if applicable paid by Customer', 'Parking Charges as per actual', 'Airport Parking Charge as per actual', 'Driver Night Charge (Tempo Traveller – 500)', 'Carrier Charge Extra – 300'],
  },
  whyTempoTitle: 'Why Tempo Traveller is the Best Choice for Somnath Darshan',
  whyTempoParas: [
    'Somnath is one of the twelve Jyotirlingas — among the most sacred temples in all of India. Thousands of devotees travel here in groups every year. Getting the whole group to the temple on time, managing parking near the Jyotirlinga during busy darshan hours, and covering nearby sacred spots all on the same day requires one reliable vehicle with a driver who knows the area well.',
    'With a tempo traveller, the entire group travels together in one vehicle. There is no coordination between multiple taxis, no group getting split between cars, and no confusion about who goes where. Everyone arrives together, does darshan together, and moves to the next sacred spot together.',
    'The driver plays a crucial role in a Somnath darshan tour. A local driver knows the best time to arrive at the temple to avoid peak queues, knows the parking zones closest to the Jyotirlinga, and knows the route to Bhalka Tirth and other spots without wasting time on navigation.',
  ],
  routes: [
    { title: 'Somnath to Dwarka', meta: ['230 km', 'Day Trip or Overnight', 'Most Popular Route'], desc: 'The most popular pilgrimage route from Somnath. 230 km on smooth Gujarat highway, approximately 4 hour drive. Covers both Jyotirlingas in one comfortable trip.', fareLabel: '12 Seater starting fare', fare: 'Rs.9,000 onwards' },
    { title: 'Somnath to Sasan Gir', meta: ['45 km', 'Wildlife Day Trip', 'Asiatic Lion Safari'], desc: 'Most popular wildlife day trip from Somnath. Home of the Asiatic lion. Perfect add-on for groups combining Jyotirlinga darshan with a wildlife safari.', fareLabel: '12 Seater starting fare', fare: 'Rs.3,500 onwards' },
    { title: 'Somnath to Diu', meta: ['90 km', 'Coastal Add-on', 'Beach Getaway'], desc: 'Popular coastal add-on for groups combining Jyotirlinga darshan with a beach getaway. Scenic coastal drive through Gujarat\'s shoreline.', fareLabel: '12 Seater starting fare', fare: 'Rs.5,000 onwards' },
    { title: 'Somnath to Junagadh', meta: ['85 km', 'Girnar Pilgrimage', 'Heritage Visit'], desc: 'Popular for Girnar Hill pilgrimage groups and Uparkot Fort heritage visits. A complete day trip combining heritage and spiritual travel.', fareLabel: '12 Seater starting fare', fare: 'Rs.4,500 onwards' },
  ],
  attractions: [
    { title: 'Somnath Jyotirlinga Temple', desc: 'One of the twelve sacred Jyotirlingas dedicated to Lord Shiva and the first among them. Situated on the western coast of Gujarat facing the Arabian Sea, the temple is a symbol of eternal faith rebuilt multiple times throughout history.' },
    { title: 'Somnath Beach & Triveni Sangam', desc: 'The meeting point of three sacred rivers — Kapila, Hiran, and Saraswati — at the Arabian Sea. Devotees take a holy dip here before temple darshan. The Triveni Sangam holds deep spiritual significance for pilgrims.' },
    { title: 'Bhalka Tirth', desc: 'The sacred spot where Lord Krishna was wounded by an arrow from a hunter, marking his departure from earthly life. A deeply revered site for devotees of Lord Krishna, located close to Somnath temple.' },
    { title: 'Geeta Mandir', desc: 'A beautiful temple with the complete text of the Bhagavad Gita inscribed on its walls. A place of profound spiritual learning and reflection, very popular with pilgrim groups visiting Somnath.' },
    { title: 'Lakshminarayan Temple', desc: 'An elegant temple dedicated to Lord Vishnu and Goddess Lakshmi, located near Somnath. Known for its beautiful architecture and serene atmosphere, it is a peaceful stop on the Somnath darshan circuit.' },
    { title: 'Suraj Mandir', desc: 'A historic temple dedicated to the Sun God, located in the Somnath complex area. One of the must-visit sacred spots included in every complete Somnath darshan group tour itinerary.' },
  ],
  whyCards: [
    { title: 'Local Somnath Route Knowledge', desc: 'Drivers know temple parking, aarti timings, and every sacred spot on the Somnath darshan circuit. No wasted time navigating.' },
    { title: 'Transparent Pricing Always', desc: 'Competitive rates with no hidden charges. Full fare breakdown at booking — toll, parking, and driver allowance all clearly stated.' },
    { title: 'Easy Booking — Same Call Confirmation', desc: 'Call or WhatsApp on 9044019511. Share group size, travel date, and route. Booking confirmed on the same call with driver details.' },
    { title: 'Multi-Day Pilgrimage Packages', desc: 'Somnath to Dwarka, Saurashtra full circuit, and Gujarat multi-city pilgrimages arranged with driver accommodation included.' },
    { title: '24/7 Customer Support', desc: 'Support available round-the-clock via call and WhatsApp for any query or assistance during your Somnath pilgrimage trip.' },
    { title: 'Right Vehicle for Every Group', desc: 'From 9 seater for small family groups to 20 seater for large Kartik Purnima festival pilgrimages and luxury for VIP darshan tours.' },
  ],
  faqs: [
    { q: 'Q1. Is a tempo traveller the best way to travel from Somnath to Dwarka?', a: 'Yes. Tempo traveller from Somnath to Dwarka is the most practical option for pilgrimage groups. 230 km, smooth Gujarat highway, 4 hour drive. Starting fare Rs.9,000 for a 12 seater.' },
    { q: 'Q2. What is the tempo traveller fare for Somnath local temple tour?', a: 'Starts at Rs.3,000 for a 9 seater and Rs.4,000 for a 12 seater. Covers Somnath Jyotirlinga, Bhalka Tirth, Triveni Sangam, Geeta Mandir, and Somnath Beach in one full day.' },
    { q: 'Q3. Can I book for Kartik Purnima festival?', a: 'Yes. Tempo traveller for Kartik Purnima in Somnath is in high demand. Book at least 3 to 4 weeks in advance. 16 and 20 seater most popular for large festival pilgrimage groups.' },
    { q: 'Q4. Is luxury tempo traveller available in Somnath?', a: 'Yes. Pushback reclining seats, multi-zone AC, air suspension, LCD screens, charging points at every seat. Starting fare Rs.7,000 for local tour. Recommended for elderly passengers.' },
    { q: 'Q5. What is the tempo traveller fare from Somnath to Ahmedabad?', a: 'Starts at Rs.15,000 for a 12 seater. Ahmedabad is 400 km from Somnath, drive takes 6 to 7 hours.' },
  ],
  noteBox: 'During <strong>Kartik Purnima</strong> and other major festival periods book at least <strong>3 to 4 weeks in advance.</strong> Waiting until 2 weeks before the festival almost always means either no availability or significantly higher rates.',
  footerServices: ['9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', 'Luxury Tempo Traveller', 'Saurashtra Circuit Tours'],
  footerRoutes: ['Somnath Local Darshan', 'Somnath to Dwarka', 'Somnath to Sasan Gir', 'Somnath to Diu', 'Somnath to Junagadh', 'Somnath to Ahmedabad'],
  popularRoutes: ['Somnath to Dwarka Tempo Traveller', 'Somnath Local Darshan Tempo Traveller', 'Somnath to Sasan Gir Tempo Traveller', 'Somnath to Diu Tempo Traveller', 'Somnath to Junagadh Tempo Traveller', 'Somnath to Ahmedabad Tempo Traveller', 'Somnath to Palitana Tempo Traveller', 'Somnath to Porbandar Tempo Traveller', 'Somnath to Girnar Tempo Traveller', 'Somnath to Rajkot Tempo Traveller', 'Saurashtra Pilgrimage Circuit', 'Somnath Evening Aarti Short Hire', '12 Seater Tempo Traveller Somnath', '20 Seater Tempo Traveller Somnath', 'Luxury Tempo Traveller Somnath', 'Somnath Kartik Purnima Tour', 'Somnath to Dwarka Luxury Tempo', 'Somnath to Bhavnagar Tempo Traveller', 'Somnath to Vadodara Tempo Traveller', 'Somnath to Rajkot Group Tour'],
  ctaHeading: 'Plan Your Somnath Jyotirlinga Group Tour Today',
  ctaDesc: 'Book your tempo traveller for a comfortable, well-organised pilgrimage to one of India\'s most sacred Jyotirlingas. Affordable rates, local drivers, 24/7 support.',
}

/* ══════════════════════════════════════════
   COIMBATORE
══════════════════════════════════════════ */
const coimbatore: CityData = {
  slug: 'coimbatore',
  cityName: 'Coimbatore',
  pageTitle: 'Tempo Traveller in Coimbatore — Local Tours and Outstation Trips',
  metaTitle: 'Tempo Traveller in Coimbatore | Yatra Travel India – Local Tours and Outstation Trips',
  metaDesc: 'Book tempo traveller in Coimbatore for local sightseeing, Ooty, Kodaikanal, Chennai, Bangalore and Tirupati. 9 to 20 seater. Fixed fare, experienced drivers. Call 9044019511.',
  topbarText: "Coimbatore's Trusted Tempo Traveller — Local Tours, Ooty, Kodaikanal, Chennai and Bangalore",
  heroHeading: 'Tempo Traveller in Coimbatore',
  heroSub: 'Local Sightseeing · Ooty and Kodaikanal Hill Trips · Chennai · Bangalore · Tirupati · Airport Transfers',
  heroBadges: ['9 to 20 Seater Available', 'Luxury Tempo Traveller', 'Starting Rs.3,200 Local', 'Fixed Fare · No Hidden Charges'],
  bookingTabs: ['Local Tour', 'Ooty / Kodaikanal', 'Airport Transfer', 'Outstation'],
  defaultCity: 'Coimbatore',
  vehicleOptions: ['Select Vehicle', '9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', 'Luxury Tempo Traveller'],
  trustItems: [
    { title: 'Confirmed Vehicle', sub: 'Registration shared at booking', iconType: 'shield' },
    { title: 'On-Time Pickup', sub: 'Driver at your door on time', iconType: 'clock' },
    { title: 'Fixed Fare', sub: 'Agreed upfront, no extras after', iconType: 'card' },
    { title: 'Experienced Drivers', sub: 'All Coimbatore and hill routes', iconType: 'person' },
  ],
  infoBoxText: 'Yatra Travel India offers <strong>9 to 20 seater tempo travellers in Coimbatore</strong> for local sightseeing, hill station trips to Ooty and Kodaikanal, outstation routes to Chennai, Bangalore, and Tirupati, and airport group transfers. <strong>Fixed fare, confirmed vehicle, experienced local driver on every route.</strong> No hidden charges. Call <strong>9044019511</strong> to book instantly.',
  introH1: 'Tempo Traveller in Coimbatore for Local Tours and Outstation Trips',
  introParagraphs: [
    'Need a tempo traveller in Coimbatore for a local tour or outstation trip? Yatra Travel India offers 9 to 20 seater tempo travellers for all group sizes. Local sightseeing, hill station trips to Ooty and Kodaikanal, outstation routes to Chennai, Bangalore, and Tirupati. Fixed fare, confirmed vehicle, experienced driver on every route. No hidden charges.',
    'Coimbatore connects to hill stations, temple towns, and major cities across South India. A well-maintained tempo traveller with proper AC and luggage space makes these long drives genuinely comfortable — whether the group is heading up the Nilgiri hills to Ooty or covering the 7 hour highway drive to Chennai.',
  ],
  sectionServicesTitle: 'Tempo Traveller Options in Coimbatore',
  vehicles: [
    { badge: 'Rs.3,200 Local', title: '9 Seater Tempo Traveller', popular: 'Small Groups', color: '#0f6ec8', badgeOrange: false, price: 'Rs.3,200', priceLabel: ' local onwards', specs: [{ label: '6–9 People', sub: 'Group Size' }, { label: 'Rs.3,200', sub: 'Local 8 hrs/80 km' }, { label: 'Rs.16/km', sub: 'Outstation Rate' }, { label: 'Full AC', sub: 'Cabin' }], tags: ['Full AC', 'Pushback Seats', 'Local Sightseeing', 'Ooty Day Trip'], tagOrange: false, btnLabel: 'Book 9 Seater', selectKey: '9 Seater Tempo Traveller' },
    { badge: 'Rs.4,200 Local', title: '12 Seater Tempo Traveller', popular: 'Most Booked', color: '#0f6ec8', badgeOrange: false, price: 'Rs.4,200', priceLabel: ' local onwards', specs: [{ label: '10–12 People', sub: 'Group Size' }, { label: 'Rs.4,200', sub: 'Local 8 hrs/80 km' }, { label: 'Rs.21/km', sub: 'Outstation Rate' }, { label: 'Best Value', sub: 'Per Head Cost' }], tags: ['Full AC', 'Pushback Seats', 'Kodaikanal Trip', 'Corporate Outings'], tagOrange: false, btnLabel: 'Book 12 Seater', selectKey: '12 Seater Tempo Traveller' },
    { badge: 'Rs.5,500 Local', title: '16 Seater Tempo Traveller', popular: '', color: '#0f6ec8', badgeOrange: false, price: 'Rs.5,500', priceLabel: ' local onwards', specs: [{ label: '13–16 People', sub: 'Group Size' }, { label: 'Rs.5,500', sub: 'Local 8 hrs/80 km' }, { label: 'Hill Routes', sub: 'Nilgiri Roads' }, { label: 'Extra Legroom', sub: 'Long Drives' }], tags: ['Full AC', 'Extra Legroom', 'College Trips', 'Family Groups'], tagOrange: false, btnLabel: 'Book 16 Seater', selectKey: '16 Seater Tempo Traveller' },
    { badge: 'Large Groups', title: '20 Seater Tempo Traveller', popular: 'Best Value', color: '#ff6b35', badgeOrange: true, price: 'Rs.7,500', priceLabel: ' local onwards', specs: [{ label: '17–20 People', sub: 'Group Size' }, { label: 'Rs.7,500', sub: 'Local 8 hrs/80 km' }, { label: 'Full AC', sub: 'Cabin' }, { label: 'Max Luggage', sub: 'Space' }], tags: ['Full AC', 'Max Luggage', 'Corporate Teams', 'Large Groups'], tagOrange: true, btnLabel: 'Book 20 Seater', selectKey: '20 Seater Tempo Traveller' },
    { badge: 'From Rs.7,000', title: 'Luxury Tempo Traveller', popular: 'VIP Travel', color: '#0f6ec8', badgeOrange: false, price: 'Rs.7,000', priceLabel: ' local onwards', specs: [{ label: '9–16 People', sub: 'Group Size' }, { label: 'Rs.7,000', sub: 'Local 8 hrs/80 km' }, { label: 'Rs.30/km', sub: 'Outstation Rate' }, { label: 'Corporate VIP', sub: 'Weddings' }], tags: ['Leather Seats', 'LCD Screen', 'Air Suspension', 'Charging Points'], tagOrange: false, btnLabel: 'Book Luxury Tempo', selectKey: 'Luxury Tempo Traveller' },
  ],
  optionsTable: [
    { vehicle: '9 Seater Tempo Traveller', cap: '9 + Driver', ac: 'AC', ideal: 'Perfect for small families, airport pickups, Coimbatore city sightseeing, and short local trips to Marudamalai Temple and Siruvani' },
    { vehicle: '12 Seater Tempo Traveller', cap: '12 + Driver', ac: 'AC', ideal: 'Ideal for medium groups, Ooty day trips, Kodaikanal weekend packages, corporate outings, and outstation travel to Chennai or Bangalore' },
    { vehicle: '16 Seater Tempo Traveller', cap: '16 + Driver', ac: 'AC', ideal: 'Excellent for larger family groups, college excursions, hill station trips, and corporate team outings from Coimbatore' },
    { vehicle: '20 Seater Tempo Traveller', cap: '20 + Driver', ac: 'AC', ideal: 'Best for large corporate teams, school groups, and extended family holidays covering South India destinations from Coimbatore' },
    { vehicle: 'Luxury Tempo Traveller', cap: '9–16 + Driver', ac: 'Multi-Zone AC', ideal: 'Perfect for VIP corporate travel, destination weddings, special occasions, and long outstation trips to Chennai, Tirupati, and Bangalore' },
  ],
  localFareTable: [
    { vehicle: '9 Seater Tempo Traveller', seating: '6 to 9 people', fare: 'Rs 3,200 onwards' },
    { vehicle: '12 Seater Tempo Traveller', seating: '10 to 12 people', fare: 'Rs 4,200 onwards' },
    { vehicle: '16 Seater Tempo Traveller', seating: '13 to 16 people', fare: 'Rs 5,500 onwards' },
    { vehicle: '20 Seater Tempo Traveller', seating: '17 to 20 people', fare: 'Rs 7,500 onwards' },
    { vehicle: 'Luxury Tempo Traveller', seating: '9 to 16 people', fare: 'Rs 7,000 onwards' },
  ],
  useTags: ['Coimbatore Local Sightseeing', 'Ooty Hill Station Day Trip', 'Kodaikanal Weekend Package', 'Munnar Kerala Trip', 'Corporate Group Outings', 'College Excursions', 'Coimbatore Airport Transfers', 'Chennai Outstation Trip', 'Bangalore Group Travel', 'Tirupati Pilgrimage Tour'],
  benefits: [
    { title: 'Everyone Travels Together', desc: 'No splitting the group across multiple cabs. One vehicle, one driver, one pickup. Everyone arrives at the same time without any coordination stress.' },
    { title: 'Cost Effective for Groups', desc: 'Split the tempo traveller fare across 10 or 12 people and the per head cost is almost always lower than booking individual cabs.' },
    { title: 'Fixed Fare, No Surprises', desc: 'Fare confirmed before the trip starts. Fuel, toll, parking, and driver allowance all included. No meter running, no last minute additions.' },
    { title: 'Right Size for Every Group', desc: '9 seater, 12 seater, 16 seater, and 20 seater available. Small family or large corporate team, there is a tempo traveller in Coimbatore that fits exactly.' },
    { title: 'Comfortable for Long Drives', desc: 'A well-maintained tempo traveller with proper AC and luggage space makes these long drives genuinely comfortable for every passenger.' },
    { title: 'Experienced Local Drivers', desc: 'Drivers who know Coimbatore roads, hill routes to Ooty and Kodaikanal, and all major outstation highways personally.' },
  ],
  ei: {
    included: ['5% GST', 'Driver Day Charge', 'Fuel Charge', 'Base Fare of Tempo Traveller', 'Driver Accommodation (Multi-day trips)'],
    excluded: ['Toll Tax during trip', 'State Tax if applicable paid by Customer', 'Parking Charges as per actual', 'Airport Parking Charge as per actual', 'Driver Night Charge (Tempo Traveller – 500)', 'Carrier Charge Extra – 300'],
  },
  whyTempoTitle: 'Hire Luxury Tempo Traveller in Coimbatore — Yatra Travel India',
  whyTempoParas: [
    'Looking for a luxury tempo traveller in Coimbatore? Yatra Travel India offers premium group travel vehicles for corporate VIP travel, destination weddings, special occasions, and long outstation trips where comfort genuinely matters.',
    'Fully reclining leather seats that let passengers actually rest on long drives. Powerful multi-zone AC that keeps the whole cabin cool even on the Coimbatore to Ooty climb where temperatures shift significantly. Air suspension that handles Nilgiri hill roads and long Tamil Nadu highway drives without rattling the group around.',
    'LCD entertainment screens for long journeys. Charging points at every seat. On a 6 or 7 hour drive to Chennai, Tirupati, or Bangalore that difference adds up to a completely different arrival experience.',
  ],
  features: [
    { title: 'Powerful AC Throughout', desc: 'Full cabin AC. Keeps everyone cool on Coimbatore plains and adjusts as temperature drops on Nilgiri hill routes to Ooty' },
    { title: 'Pushback Reclining Seats', desc: 'Every seat reclines to a comfortable angle — essential for 7 hour drives to Chennai and 6 hour drives to Bangalore' },
    { title: 'Experienced Local Drivers', desc: 'Drivers know all Coimbatore local routes, Ooty and Kodaikanal hill roads, and major South India outstation highways' },
    { title: 'Extra Legroom', desc: 'Generous space between rows. No knees pressed against the seat in front on 4 to 7 hour outstation drives from Coimbatore' },
    { title: 'Large Luggage Space', desc: 'Dedicated luggage area handles full group bags. Families, pilgrimage groups, and corporate teams all travel comfortably' },
    { title: 'LCD and Charging Points', desc: 'LCD entertainment screens and charging points at every seat on luxury tempo traveller models. Music system standard on all vehicles' },
    { title: 'Fixed Transparent Fare', desc: 'Fare confirmed at booking. Fuel, toll, parking, driver allowance, and state tax for outstation trips all included. Nothing added after the trip' },
    { title: 'Air Suspension', desc: 'Handles Nilgiri hill roads and Tamil Nadu highway drives smoothly. Available on luxury tempo traveller models for premium comfort' },
  ],
  attractions: [
    { title: 'Marudamalai Temple', desc: 'One of the most visited temples in Coimbatore. Situated on a hillock on the outskirts of the city. Dedicated to Lord Murugan. Best visited early morning before crowds build up.' },
    { title: 'Dhyanalinga Isha Yoga Centre', desc: 'A powerful spiritual destination just 30 km from Coimbatore city. Built by Sadhguru, this unique energy consecrated space is popular with family groups and corporate teams.' },
    { title: 'Siruvani Waterfalls', desc: 'Around 37 km from Coimbatore. One of the most scenic natural spots in the region. Best visited between June and November when water flow is at its peak.' },
    { title: 'Black Thunder Theme Park', desc: 'Popular with college groups and families. Around 40 km from Coimbatore city in Mettupalayam. One of the largest water theme parks in South India.' },
    { title: 'Anamalai Tiger Reserve', desc: 'Around 85 km from Coimbatore. Perfect for wildlife and nature-loving groups. The reserve is home to elephants, leopards, and diverse bird species.' },
    { title: 'Velliangiri Mountains', desc: 'Known as the Kailash of the South. Popular pilgrimage and trekking destination around 40 km from Coimbatore. The seven-hill circuit is considered a powerful spiritual journey.' },
    { title: 'Gedee Car Museum', desc: 'A unique attraction in Coimbatore. Houses a rare collection of vintage cars and motorcycles from around the world. Worth including for groups with an interest in history and automobiles.' },
    { title: 'VOC Park and Zoo', desc: 'Great for family groups travelling with children. Centrally located in Coimbatore city and easy to cover in 2 to 3 hours.' },
  ],
  whyCards: [
    { title: 'Confirmed Vehicle at Booking', desc: 'Vehicle registration details shared before the trip starts. Not a verbal promise. Know exactly which vehicle and driver are coming.' },
    { title: 'Fixed All-Inclusive Fare', desc: 'Fuel, toll, parking, driver allowance, and state tax for outstation trips all included. What is agreed before the trip is exactly what is paid at the end.' },
    { title: 'On-Time Pickup Always', desc: 'Driver at your hotel, home, or airport at the confirmed time. Especially critical for flight connections and early morning hill station departures.' },
    { title: 'Hill Route Expertise', desc: 'Drivers personally know the Ooty and Kodaikanal hill roads — the switchbacks, the best stops, and the parking situation at every major viewpoint and temple.' },
    { title: 'One Call Booking', desc: 'Call 9044019511. Share group size, travel date, and route. Booking confirmed on the same call with vehicle details, driver name, and fixed fare.' },
    { title: 'Multi-Day Outstation Trips', desc: 'Driver accommodation included for multi-day outstation trips. Fare confirmed upfront for the full trip duration. No additions after travel begins.' },
  ],
  faqs: [
    { q: 'Q1. What is the tempo traveller price in Coimbatore?', a: 'Tempo traveller price in Coimbatore starts at Rs 3,200 for a 9 seater and Rs 4,200 for a 12 seater tempo traveller in Coimbatore for 8 hours and 80 km local tour. All inclusive, no hidden charges.' },
    { q: 'Q2. What is the tempo traveller fare from Coimbatore to Ooty?', a: 'Tempo traveller fare Coimbatore to Ooty starts at Rs 5,500 for a 12 seater. Ooty is 90 km from Coimbatore. Most booked hill station day trip from Coimbatore by tempo traveller.' },
    { q: 'Q3. What is the tempo traveller fare from Coimbatore to Chennai?', a: 'Tempo traveller Coimbatore to Chennai fare starts at Rs 17,000 for a 12 seater. Chennai is 500 km from Coimbatore. Drive takes 7 to 8 hours.' },
    { q: 'Q4. Is luxury tempo traveller available in Coimbatore?', a: 'Yes. Luxury tempo traveller in Coimbatore available through Yatra Travel India. Pushback reclining seats, multi-zone AC, air suspension, LCD screens, charging points at every seat. Starting fare Rs 7,000 for local tour and Rs 30 per km for outstation trips.' },
    { q: 'Q5. Is tempo traveller available from Coimbatore airport?', a: 'Yes. Tempo traveller from Coimbatore airport available for all group sizes. Driver waiting at arrival, vehicle confirmed in advance, fixed fare. Book at least 24 hours in advance. Call 9044019511 to book.' },
    { q: 'Q6. What is the tempo traveller fare from Coimbatore to Bangalore?', a: 'Tempo traveller Coimbatore to Bangalore fare starts at Rs 13,000 for a 12 seater. Bangalore is 360 km from Coimbatore. Drive takes around 6 hours.' },
  ],
  noteBox: 'Tempo travellers fill up quickly during <strong>school holidays, long weekends, and peak tourist seasons</strong> for Ooty and Kodaikanal. Book at least <strong>3 to 5 days in advance</strong> for local tours and hill station day trips. For outstation trips to Chennai, Bangalore, and Tirupati book <strong>1 to 2 weeks ahead.</strong>',
  footerServices: ['9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', 'Luxury Tempo Traveller', 'Coimbatore Airport Transfer'],
  footerRoutes: ['Coimbatore Local Tour', 'Coimbatore to Ooty', 'Coimbatore to Kodaikanal', 'Coimbatore to Munnar', 'Coimbatore to Chennai', 'Coimbatore to Bangalore'],
  popularRoutes: ['Coimbatore Local Sightseeing Tour', 'Coimbatore to Ooty Tempo Traveller', 'Coimbatore to Kodaikanal Tempo Traveller', 'Coimbatore to Munnar Tempo Traveller', 'Coimbatore to Chennai Tempo Traveller', 'Coimbatore to Bangalore Tempo Traveller', 'Coimbatore to Tirupati Tempo Traveller', 'Coimbatore Airport Group Transfer', 'Coimbatore to Marudamalai Temple', 'Coimbatore to Dhyanalinga Isha Centre', 'Coimbatore to Black Thunder Theme Park', 'Coimbatore to Siruvani Waterfalls', 'Coimbatore to Anamalai Tiger Reserve', 'Coimbatore to Velliangiri Mountains', 'Coimbatore to Palani Temple', '12 Seater Tempo Traveller Coimbatore', '20 Seater Tempo Traveller Coimbatore', 'Luxury Tempo Traveller Coimbatore', 'Coimbatore Corporate Group Outing', 'Coimbatore to Valparai Tempo Traveller'],
  ctaHeading: 'Book Your Coimbatore Group Trip Today',
  ctaDesc: 'Fixed fare, confirmed vehicle, experienced local driver. One call and everything is sorted — for local sightseeing, Ooty hill trips, airport transfers, or long outstation drives across South India.',
}

/* ══════════════════════════════════════════
   GHAZIABAD
══════════════════════════════════════════ */
const ghaziabad: CityData = {
  slug: 'ghaziabad',
  cityName: 'Ghaziabad',
  pageTitle: 'Tempo Traveller in Ghaziabad — Comfortable Group Travel',
  metaTitle: 'Tempo Traveller in Ghaziabad | Yatra Travel India – Comfortable Group Travel',
  metaDesc: 'Book tempo traveller in Ghaziabad for local tours, outstation trips, weddings, corporate travel, and pilgrimage tours. 9 to 20 seaters. Fixed fare, experienced drivers, no hidden charges. Call 9044019511.',
  topbarText: "Ghaziabad's Trusted Tempo Traveller Rental — Fixed Fare, On-Time Pickup, No Hidden Charges",
  heroHeading: 'Tempo Traveller in Ghaziabad',
  heroSub: 'Local Tours · Outstation Trips · Weddings · Corporate Travel · Pilgrimage Tours',
  heroBadges: ['9 to 20 Seater Options', 'Confirmed Vehicle at Booking', 'Starting Rs.3,500 Local', 'Fixed Fare · No Hidden Charges'],
  bookingTabs: ['Local Tour', 'Outstation', 'Wedding', 'Pilgrimage'],
  defaultCity: 'Ghaziabad',
  vehicleOptions: ['Select Vehicle', '9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', 'Luxury Tempo Traveller'],
  trustItems: [
    { title: 'Confirmed Vehicle', sub: 'Registration shared at booking', iconType: 'shield' },
    { title: 'On-Time Pickup', sub: 'Driver details shared night before', iconType: 'clock' },
    { title: 'Fixed Fare', sub: 'Agreed upfront, nothing added after', iconType: 'card' },
    { title: 'Experienced Drivers', sub: 'All NCR & outstation routes', iconType: 'person' },
  ],
  infoBoxText: 'Yatra Travel India offers <strong>tempo traveller hire in Ghaziabad</strong> for local tours, outstation trips, weddings, corporate travel, and pilgrimage tours. <strong>9 to 20 seaters available.</strong> Vehicle confirmed at booking, experienced driver assigned, fare fixed upfront — fuel, toll, parking, driver allowance all included. No hidden charges. Call <strong>9044019511</strong> to book.',
  introH1: 'Book Tempo Traveller in Ghaziabad — Comfortable Group Travel at the Best Price',
  introParagraphs: [
    'Ghaziabad is one of NCR\'s busiest cities and group travel here means one thing — you need a reliable vehicle that shows up on time and gets everyone where they need to go without any drama. A tempo traveller from Yatra Travel India removes all of that.',
    'One pickup point, one vehicle, one driver, one fare. Everyone travels together and everyone arrives together. Split a tempo traveller fare across 10 or 12 people in Ghaziabad and the per head amount is almost always lower than booking individual cabs.',
  ],
  sectionServicesTitle: 'Tempo Traveller Options in Ghaziabad',
  vehicles: [
    { badge: 'Rs.18/km Outstation', title: '9 Seater Tempo Traveller', popular: 'Budget Pick', color: '#0f6ec8', badgeOrange: false, price: 'Rs.3,500', priceLabel: ' local onwards', specs: [{ label: '6–9 People', sub: 'Group Size' }, { label: 'Rs.3,500', sub: 'Local 8 hrs / 80 km' }, { label: 'Rs.18/km', sub: 'Outstation Rate' }, { label: 'NCR + All Routes', sub: 'Coverage' }], tags: ['AC', 'Pushback Seats', 'Pilgrimage Tours', 'Family Trips'], tagOrange: false, btnLabel: 'Book 9 Seater', selectKey: '9 Seater Tempo Traveller' },
    { badge: 'Rs.23/km Outstation', title: '12 Seater Tempo Traveller', popular: 'Most Booked', color: '#0f6ec8', badgeOrange: false, price: 'Rs.4,500', priceLabel: ' local onwards', specs: [{ label: '10–12 People', sub: 'Group Size' }, { label: 'Rs.4,500', sub: 'Local 8 hrs / 80 km' }, { label: 'Rs.23/km', sub: 'Outstation Rate' }, { label: 'Best Value', sub: 'Per Head Cost' }], tags: ['AC', 'Pushback Seats', 'All Routes', 'Wedding & Corporate'], tagOrange: false, btnLabel: 'Book 12 Seater', selectKey: '12 Seater Tempo Traveller' },
    { badge: 'Rs.28/km Outstation', title: '16 Seater Tempo Traveller', popular: '', color: '#0f6ec8', badgeOrange: false, price: 'Rs.5,500', priceLabel: ' local onwards', specs: [{ label: '13–16 People', sub: 'Group Size' }, { label: 'Rs.5,500', sub: 'Local 8 hrs / 80 km' }, { label: 'Rs.28/km', sub: 'Outstation Rate' }, { label: 'More Legroom', sub: 'Comfort' }], tags: ['AC', 'Extra Legroom', 'Office Outings', 'School Trips'], tagOrange: false, btnLabel: 'Book 16 Seater', selectKey: '16 Seater Tempo Traveller' },
    { badge: 'Large Groups', title: '20 Seater Tempo Traveller', popular: 'Best Value', color: '#ff6b35', badgeOrange: true, price: 'Rs.6,500', priceLabel: ' local onwards', specs: [{ label: '17–20 People', sub: 'Group Size' }, { label: 'Rs.6,500', sub: 'Local 8 hrs / 80 km' }, { label: 'Rs.32/km', sub: 'Outstation Rate' }, { label: 'One Vehicle', sub: 'Whole Group' }], tags: ['AC', 'Max Luggage', 'Wedding Parties', 'Pilgrimage Groups'], tagOrange: true, btnLabel: 'Book 20 Seater', selectKey: '20 Seater Tempo Traveller' },
    { badge: 'From Rs.7,500', title: 'Luxury Tempo Traveller', popular: 'Premium', color: '#0f6ec8', badgeOrange: false, price: 'Rs.7,500', priceLabel: ' local onwards', specs: [{ label: '9–16 People', sub: 'Group Size' }, { label: 'Rs.7,500', sub: 'Local 8 hrs / 80 km' }, { label: 'Rs.32/km', sub: 'Outstation Rate' }, { label: 'Corporate VIP', sub: 'Weddings' }], tags: ['Leather Seats', 'LCD Screen', 'Air Suspension', 'Charging Points'], tagOrange: false, btnLabel: 'Book Luxury Tempo', selectKey: 'Luxury Tempo Traveller' },
  ],
  optionsTable: [
    { vehicle: '9 Seater Tempo Traveller', cap: '9 + Driver', ac: 'AC', ideal: 'Small family groups, short local trips, airport transfers, and day trips to Mathura/Vrindavan. Starting fare Rs 3,500 local / Rs 18/km outstation' },
    { vehicle: '12 Seater Tempo Traveller', cap: '12 + Driver', ac: 'AC', ideal: 'Most popular for Haridwar, Agra, Mathura, and NCR corporate outings. Best per head cost. Rs 4,500 local / Rs 23/km outstation' },
    { vehicle: '16 Seater Tempo Traveller', cap: '16 + Driver', ac: 'AC', ideal: 'Medium corporate groups, college trips, and outstation routes to Nainital, Dehradun, and Jaipur. Rs 5,500 local / Rs 28/km outstation' },
    { vehicle: '20 Seater Tempo Traveller', cap: '20 + Driver', ac: 'AC', ideal: 'Large pilgrimages, Varanasi and Prayagraj tours, wedding parties. Rs 6,500 local / Rs 32/km outstation' },
    { vehicle: 'Luxury Tempo Traveller', cap: '9–16 + Driver', ac: 'Multi-Zone AC', ideal: 'VIP corporate, weddings, premium group travel. Rs 7,500 local / Rs 32/km outstation' },
  ],
  useTags: ['Haridwar Pilgrimage Tours', 'Mathura Vrindavan Day Trip', 'Agra Taj Mahal Visit', 'Wedding Guest Transfers', 'Corporate Outings', 'School Excursions', 'Rishikesh Adventure Groups', 'Nainital Weekend Trips', 'Delhi Airport Transfers', 'Varanasi Pilgrimage Tours'],
  ei: {
    included: ['5% GST', 'Driver Day Charge', 'Fuel Charge', 'Base Fare of Tempo Traveller', 'Driver Accommodation (Multi-day trips)'],
    excluded: ['Toll Tax during trip', 'State Tax if applicable paid by Customer', 'Parking Charges as per actual', 'Airport Parking Charge as per actual', 'Driver Night Charge (Tempo Traveller – 500)', 'Carrier Charge Extra – 300'],
  },
  whyTempoTitle: 'Why Tempo Traveller is the Right Choice for Ghaziabad Group Travel',
  whyTempoParas: [
    'Ghaziabad is one of NCR\'s fastest growing cities and group travel demand here is high. Whether your group is heading to Haridwar for a pilgrimage, Agra for a Taj Mahal visit, Mathura Vrindavan for a religious tour, or simply covering a local function across the city, getting everyone there together in one vehicle is always the smarter call.',
    'Booking multiple cabs sounds fine until someone gets delayed, someone takes the wrong route, and half the group is waiting at the venue while the other half is stuck in Ghaziabad traffic. A tempo traveller removes all of that. One pickup point, one vehicle, one driver, one fare.',
    'Ghaziabad connects directly to some of the most travelled group trip routes in North India — Mathura Vrindavan for a pilgrimage day trip, Haridwar for a Ganga aarti group tour, Agra for a Taj Mahal family visit, Nainital and Dehradun for a weekend hill station getaway.',
  ],
  steps: [
    { num: '1', title: 'Call or WhatsApp 9044019511', desc: 'Share your group size, travel date, pickup location, and route. Local sightseeing, outstation trip, pilgrimage, wedding transfer, or corporate outing. Direct conversation, straight answers.' },
    { num: '2', title: 'Get a Clear Fare Quote', desc: 'Fare confirmed on the same call. Vehicle size, base fare, outstation rate if applicable. Fuel, toll, parking, and driver allowance all included in one number. Nothing hidden, nothing vague.' },
    { num: '3', title: 'Confirm the Booking', desc: 'Once the fare is agreed, the booking is confirmed immediately. Vehicle registration details and driver name shared before the trip starts. No waiting until the morning of travel.' },
    { num: '4', title: 'Travel', desc: 'Driver arrives at the confirmed pickup location at the agreed time. Not approximately — on time. Fare settled as confirmed at booking. Nothing added after the trip ends.' },
  ],
  features: [
    { title: 'Confirmed Vehicle at Booking', desc: 'Registration details shared before the trip starts — not just a verbal promise.' },
    { title: 'Experienced Driver Assigned', desc: 'Every driver knows NCR roads and outstation routes — Haridwar, Agra, Mathura, Nainital, Jaipur, Dehradun.' },
    { title: 'Fixed Fare Agreed Upfront', desc: 'Fuel, toll, parking, driver allowance — all included. Nothing added after the trip ends.' },
    { title: 'On-Time Pickup Guaranteed', desc: 'Driver details shared the night before. Vehicle at your door at the confirmed time. Not approximately. On time.' },
    { title: 'Full Air Conditioning', desc: 'Powerful AC on all vehicles to keep the group comfortable on every trip, local or outstation.' },
    { title: 'Comfortable Pushback Seats', desc: 'Reclining seats for long outstation drives to Haridwar, Nainital, Shimla, and Varanasi.' },
    { title: 'Direct Contact Throughout', desc: 'Driver number shared before the trip. Team reachable if anything needs sorting — no chasing, no waiting.' },
    { title: '24/7 Support', desc: 'Support available round-the-clock via call and WhatsApp throughout your trip from Ghaziabad.' },
  ],
  routes: [
    { title: 'Ghaziabad to Haridwar', meta: ['200 km', '~5 hrs via NH58', 'Pilgrimage / Weekend'], desc: 'One of the most booked outstation destinations from Ghaziabad. Pilgrimage groups, family religious tours, and weekend travellers regularly make this trip.', fareLabel: '12 Seater starting fare', fare: 'Rs.7,000 onwards' },
    { title: 'Ghaziabad to Mathura Vrindavan', meta: ['140 km', '~3 hrs via NH19', 'Pilgrimage Day Trip'], desc: 'Most booked outstation day trip from Ghaziabad. Mathura and Vrindavan together make a full day pilgrimage itinerary.', fareLabel: '12 Seater starting fare', fare: 'Rs.5,500 onwards' },
    { title: 'Ghaziabad to Agra', meta: ['180 km', '~3–4 hrs via Yamuna Expressway', 'Taj Mahal / Heritage'], desc: 'Yamuna Expressway makes Ghaziabad to Agra one of the smoothest outstation drives from NCR. Day trip easily done in 8 to 10 hours including sightseeing.', fareLabel: '12 Seater starting fare', fare: 'Rs.6,500 onwards' },
    { title: 'Ghaziabad to Rishikesh', meta: ['230 km', '~5–6 hrs via NH58', 'Adventure / Yoga / Pilgrimage'], desc: 'Increasingly popular with adventure groups, yoga retreat travellers, and pilgrimage tours.', fareLabel: '12 Seater starting fare', fare: 'Rs.8,000 onwards' },
    { title: 'Ghaziabad to Nainital', meta: ['300 km', '~6–7 hrs via NH9', 'Weekend Hill Station'], desc: 'Most popular weekend hill station destination from NCR. Scenic Kumaon hills, lake views, cool weather.', fareLabel: '12 Seater starting fare', fare: 'Rs.11,000 onwards' },
    { title: 'Ghaziabad to Jaipur', meta: ['240 km', '~5 hrs via NH48', 'Rajasthan Heritage / Corporate'], desc: 'Most booked Rajasthan destination from Ghaziabad. Heritage sites, forts, markets. NH48 is a smooth well-maintained highway.', fareLabel: '12 Seater starting fare', fare: 'Rs.9,000 onwards' },
  ],
  attractions: [
    { title: 'Mathura Vrindavan — Pilgrimage Day Trip', desc: 'Most booked day trip from Ghaziabad. Mathura Vrindavan, Govardhan, and Barsana can all be covered in one comfortable day with a tempo traveller from Ghaziabad.' },
    { title: 'Haridwar and Rishikesh — Ganga Aarti Tour', desc: 'Haridwar evening Ganga aarti group tours are one of the most regularly booked packages from Ghaziabad. 200 km on smooth NH58. Day trip or overnight package available.' },
    { title: 'Agra — Taj Mahal Group Visit', desc: 'Yamuna Expressway makes the Agra drive from Ghaziabad smooth and fast. Day trip easily covers Taj Mahal, Agra Fort, and Fatehpur Sikri in one comfortable group outing.' },
    { title: 'Nainital and Mussoorie — Hill Station Weekends', desc: 'Most popular hill station weekend packages from NCR. Kumaon hills, scenic lake views, and pleasant weather. Multi-day package with driver accommodation available.' },
    { title: 'Delhi — NCR Airport and City Tours', desc: 'Most booked local NCR transfer from Ghaziabad. Airport pickups and drops, Delhi city tours, and wedding guest transfers between Ghaziabad and Delhi.' },
    { title: 'Varanasi and Prayagraj — Pilgrimage Packages', desc: 'One of the most important pilgrimage destinations in India. Most groups plan a 2 to 3 day trip. Multi-day package with driver accommodation included.' },
  ],
  whyCards: [
    { title: 'Confirmed Vehicle at Booking', desc: 'Not a verbal promise. Vehicle registration details shared before the trip starts. Know exactly what vehicle is coming before the day of travel.' },
    { title: 'Experienced Drivers on All Routes', desc: 'Every driver knows major NCR roads and outstation routes — Haridwar, Agra, Mathura, Nainital, Jaipur, Dehradun. No first timers on unfamiliar routes.' },
    { title: 'Fixed All-Inclusive Fare', desc: 'Fuel, toll, parking, driver allowance — all included. What is agreed before departure is what is paid on return. No surprises.' },
    { title: 'On-Time Pickup Always', desc: 'Driver details shared the night before. Vehicle at your door at the confirmed time. Not approximately. On time, every time.' },
    { title: 'One Call Booking', desc: 'No complicated forms. No long waiting time. One call and everything is sorted — vehicle confirmed, driver assigned, fare fixed.' },
    { title: '9, 12, 16, 20 Seater + Luxury', desc: 'Right vehicle for every group size. From small 9-seater for family trips to 20-seater for large wedding parties and pilgrimage groups.' },
  ],
  faqs: [
    { q: 'Q1. What is the tempo traveller price in Ghaziabad for a local tour?', a: 'Starts at Rs.3,500 for a 9 seater and Rs.4,500 for a 12 seater. Covers 8 hours and 80 km. Fare includes fuel, toll, parking, and driver allowance. No hidden charges.' },
    { q: 'Q2. What is the outstation tempo traveller rate from Ghaziabad?', a: 'Starts at Rs.18/km for a 9 seater and Rs.23/km for a 12 seater. Rate covers full distance both ways. Includes fuel, toll, parking, and driver allowance.' },
    { q: 'Q3. What is the tempo traveller fare from Ghaziabad to Haridwar?', a: 'Starts at Rs.6,000 for a 9 seater and Rs.7,000 for a 12 seater. Haridwar is 200 km from Ghaziabad. Drive takes around 5 hours on NH58.' },
    { q: 'Q4. What is the fare from Ghaziabad to Mathura Vrindavan?', a: 'Starts at Rs.4,500 for a 9 seater and Rs.5,500 for a 12 seater. Mathura is 140 km from Ghaziabad. Both Mathura and Vrindavan covered in one day trip.' },
    { q: 'Q5. Can I book a tempo traveller in Ghaziabad for a wedding?', a: 'Yes. Available for guest transfers, venue to venue trips, and hotel pickup and drop. 12 seater for small wedding parties. 16 and 20 seater for larger groups. Fixed fare, clean vehicle, on-time pickup.' },
    { q: 'Q6. Is luxury tempo traveller available in Ghaziabad?', a: 'Yes. Reclining leather seats, multi-zone AC, air suspension, LCD screens, charging points at every seat. Starting at Rs.7,500 for local tour and Rs.32/km for outstation trips.' },
  ],
  noteBox: 'Vehicles fill up fast in Ghaziabad during <strong>peak season, long weekends, wedding months, and festival periods.</strong> For local tours book 3–5 days in advance. For outstation trips book 1–2 weeks ahead. During Diwali, Holi, and wedding season book <strong>3–4 weeks early</strong> to ensure vehicle availability.',
  footerServices: ['9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', 'Luxury Tempo Traveller', 'Wedding Tempo Traveller'],
  footerRoutes: ['Ghaziabad to Haridwar', 'Ghaziabad to Mathura Vrindavan', 'Ghaziabad to Agra', 'Ghaziabad to Rishikesh', 'Ghaziabad to Nainital', 'Ghaziabad to Delhi'],
  popularRoutes: ['Ghaziabad to Haridwar Tempo Traveller', 'Ghaziabad to Mathura Vrindavan Tempo Traveller', 'Ghaziabad to Agra Tempo Traveller', 'Ghaziabad to Rishikesh Tempo Traveller', 'Ghaziabad to Nainital Tempo Traveller', 'Ghaziabad to Dehradun Tempo Traveller', 'Ghaziabad to Jaipur Tempo Traveller', 'Ghaziabad to Shimla Tempo Traveller', 'Ghaziabad to Varanasi Tempo Traveller', 'Ghaziabad to Mussoorie Tempo Traveller', 'Ghaziabad to Prayagraj Tempo Traveller', 'Ghaziabad to Delhi Tempo Traveller', 'Ghaziabad to Vrindavan Tempo Traveller', 'Ghaziabad to Ayodhya Tempo Traveller', 'Ghaziabad to Amritsar Tempo Traveller', 'Ghaziabad to Chandigarh Tempo Traveller', '12 Seater Tempo Traveller Ghaziabad', 'Luxury Tempo Traveller Ghaziabad', '20 Seater Tempo Traveller Ghaziabad', 'Ghaziabad Wedding Tempo Traveller'],
  ctaHeading: 'Ready to Book Your Ghaziabad Group Trip?',
  ctaDesc: 'One call confirms everything — vehicle, driver, fare. Fixed upfront, no surprises. Call now for instant confirmation and the best price.',
}



/* ══════════════════════════════════════════
   UJJAIN
══════════════════════════════════════════ */
const ujjain: CityData = {
  slug: 'ujjain',
  cityName: 'Ujjain',
  pageTitle: 'AC Tempo Traveller in Ujjain',
  metaTitle: 'Tempo Traveller in Ujjain | Yatra Travel India – Fixed Fare, Confirmed Vehicle',
  metaDesc: 'Hire AC tempo traveller in Ujjain for Mahakaleshwar darshan, Mahakal Lok Corridor, outstation trips to Omkareshwar, Indore, Bhopal. 9 to 20 seater. Fixed fare, on-time pickup. Call 9044019511.',
  metaKeywords: 'tempo traveller in ujjain, tempo traveller on rent in ujjain, ujjain tempo traveller, mahakaleshwar darshan tempo traveller, 12 seater tempo traveller ujjain, ujjain to omkareshwar tempo traveller, ujjain to indore tempo traveller, ujjain to bhopal tempo traveller, kumbh mela ujjain tempo traveller, luxury tempo traveller ujjain',
  topbarText: "Ujjain's Trusted Tempo Traveller — Mahakaleshwar Darshan & Outstation Tours",
  heroHeading: 'AC Tempo Traveller in Ujjain',
  heroSub: 'Mahakaleshwar Darshan · Mahakal Lok Corridor · Omkareshwar · Kumbh Mela · Outstation Tours',
  heroBadges: ['9 to 20 Seater Available', 'Mahakaleshwar Darshan Packages', 'Starting Rs.3,000 Local', 'Fixed Fare · No Hidden Charges'],
  bookingTabs: ['Local Darshan', 'Omkareshwar', 'Indore / Bhopal', 'Outstation'],
  defaultCity: 'Ujjain',
  vehicleOptions: ['Select Vehicle', '9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', 'Luxury Tempo Traveller'],
  trustItems: [
    { title: 'Confirmed Vehicle', sub: 'Registration shared at booking', iconType: 'check' },
    { title: 'On-Time Pickup', sub: 'Driver at pickup, not approximately', iconType: 'clock' },
    { title: 'Fixed Fare Always', sub: 'Agreed upfront, nothing added after', iconType: 'rupee' },
    { title: 'Experienced Drivers', sub: 'All Ujjain & outstation routes', iconType: 'shield' },
  ],
  infoBoxText: 'Yatra Travel India offers <strong>AC tempo traveller hire in Ujjain</strong> for Mahakaleshwar Jyotirlinga darshan, Mahakal Lok Corridor visits, Kumbh Mela pilgrimages, wedding transfers, and outstation trips to Omkareshwar, Indore, Bhopal, and Pachmarhi. <strong>9 to 20 seater available. Every booking comes with a confirmed vehicle, experienced driver, and fixed all-inclusive fare.</strong> Budget friendly. No hidden charges. Call <strong>9044019511</strong> to book instantly.',
  introH1: 'Hire AC Tempo Traveller in Ujjain — Fixed Fare, Confirmed Vehicle, On Time Every Time',
  introParagraphs: [
    "Ujjain is one of India's most sacred cities. Home to the Mahakaleshwar Jyotirlinga, the newly built Mahakal Lok Corridor, and one of the four Kumbh Mela sites in the country. Pilgrims, tourists, and devotees travel to Ujjain in large numbers throughout the year — and almost always in groups. Getting a large group around Ujjain and to nearby pilgrimage destinations like Omkareshwar needs more than a few cabs. It needs one reliable vehicle that keeps everyone together, runs on time, and charges what was agreed upfront.",
    "That is exactly what Yatra Travel India offers. Tempo travellers in Ujjain from 9 seater to 20 seater, available for local temple tours, Mahakal Lok Corridor visits, outstation pilgrimage trips, wedding transfers, and corporate travel. Every vehicle is regularly serviced, cleaned before each trip, and checked for AC performance, tyre condition, and engine health before departure. Budget friendly rates, fully transparent pricing, and no hidden charges at the end of the trip.",
  ],
  sectionServicesTitle: 'Types of Tempo Travellers Available in Ujjain',
  vehicles: [
    { badge: 'Rs.3,000 Local', title: '9 Seater Tempo Traveller', popular: 'Budget Pick', color: '#0f6ec8', badgeOrange: false, price: 'Rs.3,000', priceLabel: ' local onwards', specs: [{ label: '6–9 People', sub: 'Group Size' }, { label: 'Rs.3,000', sub: 'Local 8 hrs/80 km' }, { label: 'Rs.19/km', sub: 'Outstation Rate' }, { label: 'Driver Waits', sub: 'Every Stop' }], tags: ['AC', 'Pushback Seats', 'Mahakal Darshan', 'Local Tour'], tagOrange: false, btnLabel: 'Book 9 Seater', selectKey: '9 Seater Tempo Traveller' },
    { badge: 'Rs.4,000 Local', title: '12 Seater Tempo Traveller', popular: 'Most Booked', color: '#0f6ec8', badgeOrange: false, price: 'Rs.4,000', priceLabel: ' local onwards', specs: [{ label: '10–12 People', sub: 'Group Size' }, { label: 'Rs.4,000', sub: 'Local 8 hrs/80 km' }, { label: 'Rs.21/km', sub: 'Outstation Rate' }, { label: 'Best Value', sub: 'Per Head Cost' }], tags: ['AC', 'Pushback Seats', 'Omkareshwar Trip', 'Bhopal Tour'], tagOrange: false, btnLabel: 'Book 12 Seater', selectKey: '12 Seater Tempo Traveller' },
    { badge: 'Rs.5,500 Local', title: '16 Seater Tempo Traveller', popular: '', color: '#0f6ec8', badgeOrange: false, price: 'Rs.5,500', priceLabel: ' local onwards', specs: [{ label: '13–16 People', sub: 'Group Size' }, { label: 'Rs.5,500', sub: 'Local 8 hrs/80 km' }, { label: 'Rs.26/km', sub: 'Outstation Rate' }, { label: 'Extra Legroom', sub: 'Long Drives' }], tags: ['AC', 'Extra Legroom', 'Office Groups', 'School Trips'], tagOrange: false, btnLabel: 'Book 16 Seater', selectKey: '16 Seater Tempo Traveller' },
    { badge: 'Large Groups', title: '20 Seater Tempo Traveller', popular: 'Kumbh Mela', color: '#ff6b35', badgeOrange: true, price: 'Rs.7,500', priceLabel: ' local onwards', specs: [{ label: '17–20 People', sub: 'Group Size' }, { label: 'Rs.7,500', sub: 'Local 8 hrs/80 km' }, { label: 'Rs.30/km', sub: 'Outstation Rate' }, { label: 'Max Luggage', sub: 'Space' }], tags: ['AC', 'Max Luggage', 'Kumbh Groups', 'Wedding Parties'], tagOrange: true, btnLabel: 'Book 20 Seater', selectKey: '20 Seater Tempo Traveller' },
    { badge: 'From Rs.7,000', title: 'Luxury Tempo Traveller', popular: 'VIP Travel', color: '#0f6ec8', badgeOrange: false, price: 'Rs.7,000', priceLabel: ' local onwards', specs: [{ label: '9–16 People', sub: 'Group Size' }, { label: 'Rs.7,000', sub: 'Local onwards' }, { label: 'Rs.30/km+', sub: 'Outstation Rate' }, { label: 'Corporate VIP', sub: 'Weddings' }], tags: ['Leather Seats', 'LCD Screen', 'Air Suspension', 'Multi-Zone AC'], tagOrange: false, btnLabel: 'Book Luxury Tempo', selectKey: 'Luxury Tempo Traveller' },
  ],
  optionsTable: [
    { vehicle: '9 Seater Tempo Traveller', cap: '9 + Driver', ac: 'AC', ideal: 'Smart pick for smaller groups heading to Mahakaleshwar, Ram Ghat, or a quick day trip to Indore. Keeps cost low for groups that do not need a larger vehicle. Local Tour: Rs.3,000 onwards. Outstation: Rs.19/km.' },
    { vehicle: '12 Seater Tempo Traveller', cap: '12 + Driver', ac: 'AC', ideal: 'ideal: `Most booked group vehicle in Ujjain. Works for every route — Mahakal Lok Corridor visits to Bhopal and Pachmarhi outstation trips. Gives the lowest per head cost when fare is divided across the group. Local Tour: Rs.4,000 onwards. Outstation: Rs.21/km.` route — Mahakal Lok Corridor visits to Bhopal and Pachmarhi outstation trips. Gives the lowest per head cost when fare is divided across the group. Local Tour: Rs.4,000 onwards. Outstation: Rs.21/km.' },
    { vehicle: '16 Seater Tempo Traveller', cap: '16 + Driver', ac: 'AC', ideal: 'Right call when group crosses 12 people. Wider seats, more room between rows, luggage area that actually fits everyone's bags. Popular with office trip groups, school excursions, and extended families on pilgrimage. Local Tour: Rs.5,500 onwards. Outstation: Rs.26/km.' },
    { vehicle: '20 Seater Tempo Traveller', cap: '20 + Driver', ac: 'AC', ideal: 'Kumbh Mela groups, large wedding parties, college batch trips. When headcount hits 17 or more — one driver, one fare, one pickup. Nobody gets left behind, nobody arrives separately. Local Tour: Rs.7,500 onwards. Outstation: Rs.30/km.' },
    { vehicle: 'Luxury Tempo Traveller', cap: '9–16 + Driver', ac: 'AC + Climate Control', ideal: 'Corporate executives, VIP wedding guests, families with elderly passengers on long outstation routes. Leather pushback seats that fully recline, air suspension, multi-zone AC, screens at every row, charging point for every phone. Local Tour: Rs.7,000 onwards. Outstation: Rs.30/km onwards.' },
  ],
  localFareTable: [
    { vehicle: '9 Seater Tempo Traveller', seating: '6–9 people', fare: 'Rs 3,000 onwards', hours: '8 hours', km: '80 km' },
    { vehicle: '12 Seater Tempo Traveller', seating: '10–12 people', fare: 'Rs 4,000 onwards', hours: '8 hours', km: '80 km' },
    { vehicle: '16 Seater Tempo Traveller', seating: '13–16 people', fare: 'Rs 5,500 onwards', hours: '8 hours', km: '80 km' },
    { vehicle: '20 Seater Tempo Traveller', seating: '17–20 people', fare: 'Rs 7,500 onwards', hours: '8 hours', km: '80 km' },
    { vehicle: 'Luxury Tempo Traveller', seating: '9–16 people', fare: 'Rs 7,000 onwards', hours: '8 hours', km: '80 km' },
  ],
  localFareNote: '* Fare confirmed at booking. What is quoted before departure is exactly what is paid on return. No additions, no surprises. Call 9044019511 for exact quote on your route.',
  outstationFareTable: [
    { vehicle: 'Ujjain to Indore', group: '55 Km', rate: '23 Rs/Km', local: '25 Rs/Km', outstation: '27 Rs/Km', best: '28 Rs/Km', features: '32 Rs/Km' },
    { vehicle: 'Ujjain to Maheshwar', group: '82 Km', rate: '23 Rs/Km', local: '25 Rs/Km', outstation: '27 Rs/Km', best: '28 Rs/Km', features: '32 Rs/Km' },
    { vehicle: 'Ujjain to Mandu', group: '100 Km', rate: '23 Rs/Km', local: '25 Rs/Km', outstation: '27 Rs/Km', best: '28 Rs/Km', features: '32 Rs/Km' },
    { vehicle: 'Ujjain to Omkareshwar', group: '140 Km', rate: '23 Rs/Km', local: '25 Rs/Km', outstation: '27 Rs/Km', best: '28 Rs/Km', features: '32 Rs/Km' },
    { vehicle: 'Ujjain to Ratlam', group: '140 Km', rate: '23 Rs/Km', local: '25 Rs/Km', outstation: '27 Rs/Km', best: '28 Rs/Km', features: '32 Rs/Km' },
    { vehicle: 'Ujjain to Bhopal', group: '185 Km', rate: '23 Rs/Km', local: '25 Rs/Km', outstation: '27 Rs/Km', best: '28 Rs/Km', features: '32 Rs/Km' },
    { vehicle: 'Ujjain to Pachmarhi', group: '350 Km', rate: '23 Rs/Km', local: '25 Rs/Km', outstation: '27 Rs/Km', best: '28 Rs/Km', features: '32 Rs/Km' },
  ],
  outstationFareNote: '* Per km rate applies to full distance both ways. Fare includes fuel, toll, parking, and driver allowance. Confirmed at booking — no changes after the trip. Call 9044019511 for exact quote.',
  useTags: ['Mahakaleshwar Jyotirlinga Darshan', 'Mahakal Lok Corridor Visit', 'Bhasma Aarti Group Tour', 'Kumbh Mela Pilgrimage', 'Ujjain to Omkareshwar Trip', 'Ram Ghat Evening Aarti', 'Wedding Guest Transfers', 'Corporate Outings Indore/Bhopal', 'Ujjain Local Sightseeing', 'Ujjain to Pachmarhi Multi-Day'],
  ei: {
    included: ['5% GST', 'Driver Day Charge', 'Fuel Charge', 'Base Fare of Tempo Traveller', 'Driver Accommodation (Multi-day trips)'],
    excluded: ['Toll Tax during trip', 'State Tax if applicable paid by Customer', 'Parking Charges as per actual and paid by customer', 'Airport Parking Charge as per actual and paid by customer', 'Driver Night Charge (Tempo Traveller – 500)', 'Carrier Charge Extra – 300'],
  },
  whyTempoTitle: 'Best Tempo Traveller Service in Ujjain',
  whyTempoParas: [
    'Yatra Travel India operates one of the most well-maintained tempo traveller fleets in Ujjain. Every vehicle is regularly serviced, cleaned before each trip, and checked for AC performance, tyre condition, and engine health before departure. New vehicles are added to the fleet regularly so the group always travels in a fresh, reliable vehicle.',
    '<strong>Budget Friendly Pricing</strong> — Affordable tempo traveller fare in Ujjain for every group size. 9 seater starts at Rs.3,000 and 12 seater starts at Rs.4,000 for a full day local tour. Split across the group and the per head cost beats individual cabs on every route.',
    '<strong>Transparent Pricing</strong> — Fare confirmed at booking includes fuel, toll, parking, and driver allowance. No surprise additions at the end of the trip. What is quoted before departure is exactly what is paid on return.',
    '<strong>Available for Local Sightseeing</strong> — Mahakaleshwar Temple, Mahakal Lok Corridor, Ram Ghat, Kal Bhairav Temple, Harsiddhi Temple, Vedh Shala. Full day local sightseeing package covering all major Ujjain attractions.',
    '<strong>Available for Outstation Trips</strong> — Ujjain to Omkareshwar, Ujjain to Indore, Ujjain to Bhopal, Ujjain to Pachmarhi, Ujjain to Mandu. All major outstation routes from Ujjain covered with experienced drivers who know the roads personally.',
  ],
  steps: [
    { num: '1', title: 'Call or WhatsApp 9044019511', desc: 'Share group size, travel date, pickup location, and route. Local sightseeing, outstation trip, Mahakal darshan, or Omkareshwar. Direct conversation, straight answers. No forms to fill.' },
    { num: '2', title: 'Get Clear Fare Quote', desc: 'Fare confirmed immediately on the same call. Fuel, toll, parking, driver allowance all included in one number. Nothing hidden, nothing vague.' },
    { num: '3', title: 'Confirm Booking', desc: 'Vehicle registration and driver name shared in advance. Booking confirmed on the same call. No waiting until the morning of travel.' },
    { num: '4', title: 'Travel', desc: 'Driver at pickup location at the confirmed time — not approximately, on time. Fare settled as agreed at booking. Nothing added after the trip ends.' },
  ],
  features: [
    { title: 'Full Air Conditioning', desc: 'Entire cabin stays cool — from Mahakal Lok Corridor visits to long outstation drives to Bhopal and Pachmarhi' },
    { title: 'Pushback Reclining Seats', desc: 'Comfortable seats for long outstation drives to Bhopal, Pachmarhi, and Amarkantak on Madhya Pradesh highways' },
    { title: 'Experienced Local Drivers', desc: 'Drivers know Mahakaleshwar Temple timings, parking zones, and all Ujjain sightseeing and outstation routes' },
    { title: 'On-Time Pickup Guaranteed', desc: 'Critical for early Bhasma Aarti — driver at hotel or pickup point at confirmed time, every single time' },
    { title: 'Confirmed Vehicle at Booking', desc: 'Registration details shared in advance — not a verbal promise. Know which vehicle and driver are coming' },
    { title: 'Music System and LCD Screens', desc: 'Music system on all vehicles. LCD screens and air suspension on luxury models for premium travel' },
    { title: 'Fixed Transparent Fare', desc: 'Fare agreed upfront includes fuel, toll, parking, driver allowance. Nothing added after the trip ends' },
    { title: 'Flexible Stops', desc: 'Visit Mahakaleshwar, Mahakal Lok, Ram Ghat, Kal Bhairav at your own pace — no time pressure' },
  ],
  routes: [
    { title: 'Ujjain to Omkareshwar', meta: ['130 km', '~2.5 hrs', '2 Jyotirlinga Circuit'], desc: 'Most spiritually significant outstation route from Ujjain. Omkareshwar Jyotirlinga combined with Ujjain makes a powerful 2 Jyotirlinga circuit in one comfortable day trip.', fareLabel: '12 Seater starting fare', fare: 'Rs.5,500 onwards' },
    { title: 'Ujjain to Indore', meta: ['55 km', '~1 hr via NH52', 'Airport / Corporate'], desc: 'Most booked short outstation route from Ujjain. Popular for airport transfers, corporate meetings, and family day trips. Smooth NH52 highway drive taking around 1 hour.', fareLabel: '12 Seater starting fare', fare: 'Rs.3,500 onwards' },
    { title: 'Ujjain to Bhopal', meta: ['185 km', '~3 hrs via NH52', 'Corporate / Heritage'], desc: 'One of the most regularly booked corporate outstation routes from Ujjain. Smooth 3 hour highway drive. 12 seater most popular for corporate teams.', fareLabel: '12 Seater starting fare', fare: 'Rs.7,500 onwards' },
    { title: 'Ujjain to Pachmarhi', meta: ['350 km', '~5–6 hrs', 'Hill Station / Multi-Day'], desc: 'Most groups plan a 2 day trip. Driver accommodation included in multi-day package. Full itinerary confirmed at booking with no additions after the trip.', fareLabel: '12 Seater starting fare', fare: 'Rs.13,000 onwards' },
    { title: 'Ujjain to Mandu', meta: ['130 km', '~2.5 hrs', 'Heritage / Weekend'], desc: 'Beautiful heritage hill fort town in Madhya Pradesh. Popular for groups combining Ujjain pilgrimage with a Mandu heritage day trip.', fareLabel: '12 Seater starting fare', fare: 'Rs.5,500 onwards' },
    { title: 'Ujjain to Amarkantak', meta: ['400 km', '~6–7 hrs', 'Pilgrimage / Multi-Day'], desc: 'Sacred source of the Narmada River. Spiritually significant for groups combining Ujjain with a complete Madhya Pradesh pilgrimage circuit. Multi-day package available.', fareLabel: '12 Seater starting fare', fare: 'Rs.15,000 onwards' },
  ],
  attractions: [
    { title: 'Mahakaleshwar Temple', desc: 'One of the twelve Jyotirlingas in India. Most visited religious site in Ujjain. Famous for the Bhasma Aarti held every morning before sunrise. Early morning visit recommended for groups.' },
    { title: 'Mahakal Lok Corridor', desc: 'Newly developed spiritual corridor connecting Mahakaleshwar Temple to the surrounding area. Stunning sculptures, walkways, and religious artwork spread across a large area.' },
    { title: 'Ram Ghat', desc: 'Most important ghat on the Shipra River. Evening aarti here is one of the most peaceful and moving experiences in Ujjain. Popular with family groups and pilgrimage tours.' },
    { title: 'Kal Bhairav Temple', desc: 'Ancient temple dedicated to Kal Bhairav, the guardian deity of Ujjain. Unique religious significance and one of the most visited temples after Mahakaleshwar.' },
    { title: 'Harsiddhi Temple', desc: 'One of the Shakti Peethas in India. Important pilgrimage stop for devotees visiting Ujjain. Located close to Mahakaleshwar making it easy to cover both temples in one focused darshan tour.' },
    { title: 'Sandipani Ashram', desc: 'Ancient ashram where Lord Krishna received his education. Deep historical and spiritual significance. Popular with family groups and religious tourists seeking a complete Ujjain spiritual experience.' },
    { title: 'Gadkalika Temple', desc: 'Ancient temple dedicated to Goddess Kalika. One of the oldest temples in Ujjain and an important stop on any Ujjain pilgrimage tour.' },
    { title: 'Vedh Shala Observatory', desc: 'Built by Maharaja Jai Singh in the 18th century. One of five astronomical observatories in India. Interesting stop for groups that want a mix of history and science alongside the pilgrimage circuit.' },
  ],
  whyCards: [
    { title: 'Well-Maintained Fleet', desc: 'Every vehicle regularly serviced and checked for AC, tyres, and engine health before each trip. New vehicles added to fleet regularly.' },
    { title: 'Budget Friendly Fixed Pricing', desc: '9 seater from Rs.3,000 and 12 seater from Rs.4,000 for full day local tour. Per head cost beats individual cabs on every route when split across the group.' },
    { title: 'Confirmed Vehicle at Booking', desc: 'Registration details shared before the trip — not a verbal promise. Know exactly which vehicle and driver are coming before the day of travel.' },
    { title: 'One Call Booking', desc: 'Call 9044019511. Share group size, travel date, and route. Vehicle confirmed, driver assigned, fare fixed — all on the same call.' },
    { title: 'Direct Contact Throughout', desc: 'Driver number shared before the trip. Team reachable throughout. No chasing, no waiting for callbacks at any point during the journey.' },
    { title: '9, 12, 16, 20 Seater + Luxury', desc: 'Right vehicle for every group — from small family darshan trips to large Kumbh Mela groups and luxury corporate outings from Ujjain.' },
  ],
  faqs: [
    { q: 'Q1. How much does a 12 seater tempo traveller cost in Ujjain for a full day?', a: '12 seater tempo traveller in Ujjain starts at Rs.4,000 for a full day local tour covering 8 hours and 80 km. Fare includes fuel, toll, parking, and driver allowance. Transparent pricing confirmed at booking.' },
    { q: 'Q2. Which is the most affordable tempo traveller option in Ujjain for a small group?', a: 'Tempo traveller price in Ujjain starts at Rs.3,000 for a 9 seater. Most budget-friendly option for groups of 6 to 9 people. Split across the group and per head cost is significantly lower than booking individual cabs.' },
    { q: 'Q3. Is tempo traveller available in Ujjain for Kumbh Mela group travel?', a: 'Yes. Tempo traveller for Kumbh Mela Ujjain is available in all sizes from 9 to 20 seater. Demand rises significantly during Simhastha so booking 4 to 6 weeks early is strongly recommended.' },
    { q: 'Q4. What is the tempo traveller fare from Ujjain to Omkareshwar?', a: 'Tempo traveller Ujjain to Omkareshwar is 130 km and takes around 2.5 hours. Fare starts at Rs.5,500 for a 12 seater. Omkareshwar and Ujjain together make a powerful 2 Jyotirlinga pilgrimage circuit in one day.' },
    { q: 'Q5. What is the tempo traveller fare from Ujjain to Bhopal?', a: 'Tempo traveller Ujjain to Bhopal fare starts at Rs.7,500 for a 12 seater. Bhopal is 185 km via NH52, smooth 3 hour drive. Most regularly booked corporate outstation route from Ujjain.' },
    { q: 'Q6. What is the tempo traveller fare from Ujjain to Pachmarhi?', a: 'Tempo traveller Ujjain to Pachmarhi fare starts at Rs.13,000 for a 12 seater. Pachmarhi is 350 km from Ujjain. Most groups plan a 2 day trip with driver accommodation included.' },
    { q: 'Q7. What is the tempo traveller fare from Ujjain to Indore?', a: 'Tempo traveller Ujjain to Indore is 55 km via NH52, takes around 1 hour. Starting fare Rs.3,500 for a 12 seater. Most booked short outstation route from Ujjain for airport transfers and corporate meetings.' },
    { q: 'Q8. Can I book a luxury tempo traveller in Ujjain for a wedding?', a: 'Yes. Luxury tempo traveller in Ujjain is available for wedding guest transfers. Pushback reclining seats, multi-zone AC, air suspension, LCD screens. Starting at Rs.7,000 for local tour. Call 9044019511.' },
    { q: 'Q9. What is the per km rate for outstation tempo travellers from Ujjain?', a: 'Outstation tempo traveller from Ujjain starts at Rs.19 per km for a 9 seater and Rs.21 per km for a 12 seater. Rate covers full distance both ways and includes fuel, toll, parking, and driver allowance.' },
    { q: 'Q10. How do I book a tempo traveller in Ujjain?', a: 'Call or WhatsApp 9044019511. Share group size, travel date, and route. Vehicle confirmed, driver assigned, fare fixed on the same call. Registration shared before departure.' },
  ],
  noteBox: 'During <strong>Simhastha / Kumbh Mela period</strong>, all tempo travellers fill up weeks in advance. Book <strong>4 to 6 weeks early</strong> for Kumbh Mela group travel. 16 and 20 seater are in highest demand during this period. For regular pilgrimage trips book 3–5 days in advance.',
  footerServices: ['9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', 'Luxury Tempo Traveller', 'Mahakaleshwar Darshan Tour'],
  footerRoutes: ['Ujjain Local Darshan', 'Ujjain to Omkareshwar', 'Ujjain to Indore', 'Ujjain to Bhopal', 'Ujjain to Pachmarhi', 'Ujjain to Mandu'],
  popularRoutes: ['Ujjain Local Mahakaleshwar Darshan', 'Ujjain to Omkareshwar Tempo Traveller', 'Ujjain to Indore Tempo Traveller', 'Ujjain to Bhopal Tempo Traveller', 'Ujjain to Pachmarhi Tempo Traveller', 'Ujjain to Mandu Tempo Traveller', 'Ujjain to Amarkantak Tempo Traveller', 'Ujjain to Maheshwar Tempo Traveller', 'Ujjain Mahakal Lok Corridor Tour', 'Ujjain Ram Ghat Evening Aarti Tour', 'Ujjain Kumbh Mela Tempo Traveller', 'Ujjain to Ratlam Tempo Traveller', '12 Seater Tempo Traveller Ujjain', '20 Seater Tempo Traveller Ujjain', 'Luxury Tempo Traveller Ujjain', 'Ujjain Wedding Tempo Traveller', 'Ujjain to Jabalpur Tempo Traveller', 'Ujjain to Sanchi Tempo Traveller', 'Ujjain Bhasma Aarti Group Tour', 'Ujjain to Dewas Tempo Traveller'],
  ctaHeading: 'Plan Your Ujjain Mahakaleshwar Trip Today',
  ctaDesc: "Book your tempo traveller for a smooth, well-organized pilgrimage to one of India's most sacred Jyotirlinga cities. Fixed fare, confirmed vehicle, on-time pickup. Call now.",
}


/* ══════════════════════════════════════════
   MYSORE
══════════════════════════════════════════ */
const mysore: CityData = {
  slug: 'mysore',
  cityName: 'Mysore',
  pageTitle: 'Tempo Traveller for Rent in Mysore',
  metaTitle: 'Tempo Traveller for Rent in Mysore | Yatra Travel India – Local Tours and Outstation Trips',
  metaDesc: 'Book tempo traveller in Mysore for Mysore Palace, Chamundi Hills, Coorg, Ooty, Wayanad and Bangalore. 9 to 20 seater. Fixed fare, experienced drivers. Call 9044019511.',
  metaKeywords: 'tempo traveller in mysore, tempo traveller for rent in mysore, 12 seater tempo traveller mysore, 20 seater tempo traveller mysore, luxury tempo traveller mysore, mysore to coorg tempo traveller, mysore to ooty tempo traveller, mysore palace sightseeing, dasara group tour mysore, mysore to bangalore tempo traveller',
  topbarText: "Mysore's Trusted Tempo Traveller — Mysore Palace, Chamundi Hills, Coorg, Ooty and Bandipur",
  heroHeading: 'Tempo Traveller for Rent in Mysore',
  heroSub: 'Mysore Palace Sightseeing · Chamundi Hills · Coorg · Ooty · Wayanad · Bandipur · Kabini',
  heroBadges: ['9 to 20 Seater Available', 'Luxury Tempo Traveller', 'Starting Rs.4,000 Local', 'Fixed Fare · No Hidden Charges'],
  bookingTabs: ['Local Sightseeing', 'Coorg / Ooty', 'Bandipur / Kabini', 'Outstation'],
  defaultCity: 'Mysore',
  vehicleOptions: ['Select Vehicle', '9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', 'Luxury Tempo Traveller'],
  trustItems: [
    { title: 'Confirmed Vehicle', sub: 'Registration shared at booking', iconType: 'check' },
    { title: 'On-Time Pickup', sub: 'From 5 AM onwards available', iconType: 'clock' },
    { title: 'Transparent Bill', sub: 'Fixed fare, no hidden charges', iconType: 'rupee' },
    { title: 'Experienced Drivers', sub: 'All Mysore and Karnataka routes', iconType: 'shield' },
  ],
  infoBoxText: 'Yatra Travel India offers <strong>tempo traveller rental in Mysore</strong> for local sightseeing tours, Dasara festival groups, outstation trips to Coorg, Ooty, Wayanad, Bandipur, and Kabini, and corporate group travel. <strong>9 to 20 seater available including Luxury Tempo Traveller.</strong> Neat cars, transparent billing, skilled drivers. No hidden charges. Call <strong>9044019511</strong> to book instantly.',
  introH1: 'Tempo Traveller for Rent in Mysore — Local Tours and Outstation Trips',
  introParagraphs: [
    'Intercity travel comes with its challenges but Mysore is made simple and comfortable when you book a tempo traveller with Yatra Travel India. For a family outing, temple visit, school trip, or corporate tour, group travel in Mysore requires enough space, good planning, and on-time movement. As operators managing daily tours in Mysore city and surrounding areas, we know how the traffic moves, what road is in what condition, and what group travellers really need.',
    'From a day trip to Chamundi Hills to a full-day sightseeing tour covering Mysore Palace, Brindavan Gardens, and Srirangapatna — a tempo traveller gives you the flexibility that booking multiple cars would not. Everyone travels together, parking is easier, and time management is better especially on weekends, during Dasara, and peak tourist seasons. Outstation routes from Mysore to Coorg, Ooty, Wayanad, Bangalore, and Kabini are also very popular and the wide corridors and generous luggage room of a tempo traveller make these long drives smooth and hassle-free.',
  ],
  sectionServicesTitle: 'Tempo Traveller Options in Mysore',
  vehicles: [
    { badge: 'Small Groups', title: '9 Seater Tempo Traveller', popular: 'Local Tours', color: '#0f6ec8', badgeOrange: false, price: 'Best', priceLabel: ' Rate on Call', specs: [{ label: 'Up to 9 People', sub: 'Group Size' }, { label: 'Full AC', sub: 'Cabin' }, { label: 'City Roads', sub: 'Ghat Routes' }, { label: 'Driver Waits', sub: 'Every Stop' }], tags: ['Full AC', 'Pushback Seats', 'Mysore Palace', 'Chamundi Hills'], tagOrange: false, btnLabel: 'Book 9 Seater', selectKey: '9 Seater Tempo Traveller' },
    { badge: 'Rs.4,500 Local', title: '12 Seater Tempo Traveller', popular: 'Most Popular', color: '#0f6ec8', badgeOrange: false, price: 'Rs.4,500', priceLabel: ' local onwards', specs: [{ label: '10–12 People', sub: 'Group Size' }, { label: 'Rs.4,500', sub: 'Local 8 hrs/80 km' }, { label: 'All Routes', sub: 'Local and Outstation' }, { label: 'Best Value', sub: 'Per Head Cost' }], tags: ['Full AC', 'Pushback Seats', 'Coorg Trip', 'Ooty Tour'], tagOrange: false, btnLabel: 'Book 12 Seater', selectKey: '12 Seater Tempo Traveller' },
    { badge: 'Rs.6,000 Local', title: '16 Seater Tempo Traveller', popular: '', color: '#0f6ec8', badgeOrange: false, price: 'Rs.6,000', priceLabel: ' local onwards', specs: [{ label: '13–16 People', sub: 'Group Size' }, { label: 'Rs.6,000', sub: 'Local 8 hrs/80 km' }, { label: 'Stable on Highways', sub: 'Karnataka Roads' }, { label: 'School and Office', sub: 'Group Trips' }], tags: ['Full AC', 'Extra Legroom', 'School Trips', 'Office Outings'], tagOrange: false, btnLabel: 'Book 16 Seater', selectKey: '16 Seater Tempo Traveller' },
    { badge: 'Large Groups', title: '20 Seater Tempo Traveller', popular: 'Dasara Special', color: '#ff6b35', badgeOrange: true, price: 'Best', priceLabel: ' Rate on Call', specs: [{ label: '17–20 People', sub: 'Group Size' }, { label: 'Full AC', sub: 'Cabin' }, { label: 'Temple Tours', sub: 'Religious Groups' }, { label: 'Max Luggage', sub: 'Space' }], tags: ['Full AC', 'Max Luggage', 'Dasara Groups', 'Temple Tours'], tagOrange: true, btnLabel: 'Book 20 Seater', selectKey: '20 Seater Tempo Traveller' },
    { badge: 'VIP Travel', title: 'Luxury Tempo Traveller', popular: 'Wedding and Corporate', color: '#0f6ec8', badgeOrange: false, price: 'Best', priceLabel: ' Rate on Call', specs: [{ label: '9–16 People', sub: 'Group Size' }, { label: 'Multi-Zone AC', sub: 'Premium' }, { label: 'Air Suspension', sub: 'Smooth Ride' }, { label: 'VIP and Wedding', sub: 'Groups' }], tags: ['Leather Seats', 'LCD Screen', 'Air Suspension', 'Charging Points'], tagOrange: false, btnLabel: 'Book Luxury Tempo', selectKey: 'Luxury Tempo Traveller' },
  ],
  localFareTable: [
    { vehicle: '9 Seater Tempo Traveller', seating: 'Up to 9 people', fare: 'On Request', hours: '8 hours', km: '80 km' },
    { vehicle: '12 Seater Tempo Traveller', seating: '10 to 12 people', fare: 'Rs 4,500 onwards', hours: '8 hours', km: '80 km' },
    { vehicle: '16 Seater Tempo Traveller', seating: '13 to 16 people', fare: 'Rs 6,000 onwards', hours: '8 hours', km: '80 km' },
    { vehicle: '20 Seater Tempo Traveller', seating: '17 to 20 people', fare: 'On Request', hours: '8 hours', km: '80 km' },
    { vehicle: 'Luxury Tempo Traveller', seating: '9 to 16 people', fare: 'On Request', hours: '8 hours', km: '80 km' },
  ],
  localFareNote: '* Tempo traveller per km rate in Mysore is applicable for outstation trips. All fares include fuel, toll, parking, and driver allowance. Call 9044019511 for exact quote on your route and date.',
  useTags: ['Mysore Palace Sightseeing', 'Chamundi Hills Temple Visit', 'Brindavan Gardens Tour', 'Srirangapatna Day Trip', 'Coorg Outstation Trip', 'Ooty Hill Station Tour', 'Wayanad Weekend Trip', 'Bandipur and Kabini Safari', 'Dasara Festival Groups', 'Wedding Guest Transfers', 'School Annual Excursions', 'Corporate Team Outings'],
  ei: {
    included: ['5% GST', 'Driver Day Charge', 'Fuel Charge', 'Base Fare of Tempo Traveller', 'Driver Accommodation (Multi-day trips)'],
    excluded: ['Toll Tax during trip', 'State Tax if applicable paid by Customer', 'Parking Charges as per actual and paid by customer', 'Airport Parking Charge as per actual and paid by customer', 'Driver Night Charge (Sedan – 250, SUV – 300, Tempo Traveller – 500)', 'Carrier Charge Extra – 300'],
  },
  whyTempoTitle: 'Why Choose a Tempo Traveller in Mysore for Your Group Trip',
  whyTempoParas: [
    'One of the biggest reasons travellers prefer tempo traveller hire in Mysore is the spacious seating and ample luggage space. With options like 12-seater and 16-seater tempo travellers, you can comfortably accommodate your entire group without feeling cramped. This is especially helpful for long journeys to nearby destinations like Coorg, Ooty, Wayanad, or Bandipur, where comfort really matters.',
    'Another advantage is cost-effectiveness. Booking a tempo traveller on rent in Mysore often turns out to be more economical than hiring multiple taxis. Fuel, tolls, and driver costs are included, making budgeting simple and transparent. Fixed pricing for outstation trips means no surprises later.',
    'Safety and convenience are also key benefits. Most tempo traveller rental services provide experienced, route-friendly drivers who know Mysore and nearby tourist places well. This allows you to relax and enjoy the journey while the driver handles traffic and navigation. Air-conditioned interiors, pushback seats, charging points, and music systems further enhance the travel experience.',
    'For group sightseeing in Mysore — Mysore Palace, Chamundi Hills, Brindavan Gardens, and nearby temples — a tempo traveller rental in Mysore offers unmatched flexibility. You can plan your own schedule, take stops as needed, and travel at your own pace.',
  ],
  features: [
    { title: 'Powerful AC Throughout', desc: 'Full air conditioning throughout the cabin — adjusts well on Mysore city routes and ghat roads to Coorg and Ooty' },
    { title: 'Pushback Reclining Seats', desc: 'Every seat reclines to a comfortable angle. Passengers can actually rest on long drives to Coorg, Wayanad, and Kabini' },
    { title: 'Skilled and Safety Certified Drivers', desc: 'Every driver is verified, experienced, and personally familiar with Mysore city roads, ghat routes, and Karnataka highways' },
    { title: 'Extra Legroom', desc: 'Generous space between rows. No cramped knees on long drives. Especially important for senior citizens and children' },
    { title: 'Large Luggage Space', desc: 'Dedicated luggage area handles full group bags. Families, wedding parties, and school groups all travel without any cramping' },
    { title: 'Music System and Charging Points', desc: 'Music system standard on all vehicles. Charging points and LCD screens available on luxury tempo traveller models' },
    { title: 'Transparent Billing', desc: 'Inclusive costs — fuel, toll, parking, driver allowance. No hidden charges, no last-minute extras after the trip ends' },
    { title: 'Round-Trip and One-Way', desc: 'Round-trip, one-way, local rentals, and airport transport all available. Flexible booking for every group requirement' },
  ],
  attractions: [
    { title: 'Mysore Palace (Amba Vilas Palace)', desc: 'The most visited tourist attraction in Mysore. One of the grandest palace structures in India with stunning Indo-Saracenic architecture. The illuminated palace on Sunday evenings and during Dasara is one of the most spectacular sights in South India.' },
    { title: 'Chamundi Hills and Chamundeshwari Temple', desc: 'A 1,000-step climb or short drive to the hilltop temple dedicated to Goddess Chamundeshwari. Offers stunning panoramic views of Mysore city. Popular for early morning visits.' },
    { title: 'Brindavan Gardens and KRS Dam', desc: 'One of the most visited gardens in South India. Located about 19 km from Mysore at the foot of the Krishnaraja Sagara Dam. Famous for the musical fountain show held in the evenings.' },
    { title: 'Srirangapatna', desc: 'Around 16 km from Mysore. Historic island fort city with Ranganathaswamy Temple, Tipu Sultan's Summer Palace, and Gumbaz Mausoleum. A compact and fascinating heritage stop easily added to any Mysore sightseeing itinerary.' },
    { title: 'Karanji Lake and Nature Park', desc: 'A nature reserve and bird sanctuary right in the heart of Mysore city. Home to over 170 bird species, a butterfly park, and a large aviary. A great stop for family groups travelling with children.' },
    { title: 'Somnathpur Hoysala Temple', desc: 'Around 38 km from Mysore. One of the finest examples of Hoysala architecture in Karnataka. Popular heritage stop for groups combining Mysore with a deeper Karnataka history tour.' },
    { title: 'Bandipur and Nagarhole Tiger Reserve', desc: 'Around 80 km from Mysore. Two of the finest tiger reserves in India. Safari bookings recommended in advance. Popular full day and overnight wildlife group outings from Mysore.' },
    { title: 'Melukote Cheluvanarayana Temple', desc: 'Around 51 km from Mysore. One of the most sacred Vaishnava pilgrimage sites in Karnataka. Popular religious group tour from Mysore combining Srirangapatna and Melukote in one day.' },
  ],
  whyCards: [
    { title: 'Neat and Well-Maintained Vehicles', desc: 'Every tempo traveller is regularly serviced and checked before each trip. Clean interiors, working AC, good tyre condition, and proper luggage space guaranteed on every booking.' },
    { title: 'Transparent Bill Always', desc: 'Fare confirmed at booking includes fuel, toll, parking, and driver allowance. What is agreed before the trip is exactly what is paid at the end.' },
    { title: 'Safety Certified Skilled Drivers', desc: 'Every driver knows Mysore city traffic, Chamundi Hills ghat roads, and all major Karnataka and South India outstation routes personally.' },
    { title: 'On-Time Pickup from 5 AM', desc: 'Early morning temple and sunrise pickups available. Driver details shared the night before every trip. Vehicle confirmed with registration number at booking.' },
    { title: 'One Call Booking', desc: 'No documents required. Call 9044019511 with group size, travel date, and route. Booking confirmed on the same call.' },
    { title: 'Several Cities Covered', desc: 'Round-trip, one-way, local rentals, and airport transport all available. Overnight multi-day outstation packages for Coorg, Ooty, Wayanad, and Kabini.' },
  ],
  faqs: [
    { q: 'Q1. Is a tempo traveller the most affordable group transport option in Mysore?', a: 'Yes. Tempo traveller in Mysore gives the best per head cost for group travel. Split a 12 seater fare across 12 people and each person pays around Rs 375 for a full day of comfortable sightseeing. That beats individual cabs on every route.' },
    { q: 'Q2. What is the best tempo traveller size for a Mysore Dasara festival group?', a: '20 seater tempo traveller in Mysore is the most popular choice during Dasara. Book at least 4 to 6 weeks in advance. Vehicles fill up fast during Dasara season.' },
    { q: 'Q3. Is tempo traveller available in Mysore for early morning pickups?', a: 'Yes. Early morning tempo traveller pickup in Mysore available from 5 AM onwards. Confirm early pickup time at booking stage. Driver briefed in advance for early departure.' },
    { q: 'Q4. Can elderly passengers travel comfortably in a tempo traveller in Mysore?', a: 'Yes. Luxury tempo traveller in Mysore is strongly recommended for groups with elderly passengers. Pushback reclining seats, air suspension for smooth rides, and powerful multi-zone AC.' },
    { q: 'Q5. Is tempo traveller available in Mysore for overnight outstation trips?', a: 'Yes. Overnight outstation tempo traveller from Mysore available for multi-day trips to Coorg, Ooty, Wayanad. Driver accommodation included for overnight stops.' },
    { q: 'Q6. What is the difference between 12 seater and 16 seater tempo traveller in Mysore?', a: '12 seater starts at Rs 4,500. 16 seater starts at Rs 6,000. Go with 16 seater if group is close to 12 and carrying heavy luggage. Extra space makes a real difference on longer drives.' },
    { q: 'Q7. Can I book a tempo traveller in Mysore for a wedding guest transfer?', a: 'Yes. Clean vehicle, on time pickup, fixed fare. 12 seater for small wedding parties. 16 and 20 seater for larger groups. Call 9044019511 to confirm availability on your wedding date.' },
    { q: 'Q8. Is tempo traveller available in Mysore for school annual excursion trips?', a: 'Yes. Safe well-maintained vehicles, experienced drivers, fixed group fare. 16 and 20 seater most popular for larger student groups. Call 9044019511 to book.' },
  ],
  noteBox: 'During Dasara season the 20 seater tempo traveller is the most popular choice. <strong>Book at least 4 to 6 weeks in advance</strong> during Dasara. Vehicles fill up fast. For regular local sightseeing and outstation trips book 3 to 5 days ahead. For school annual excursions book 2 to 3 weeks in advance.',
  footerServices: ['9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', 'Luxury Tempo Traveller', 'Mysore Dasara Group Tour'],
  footerRoutes: ['Mysore Local Sightseeing', 'Mysore to Coorg', 'Mysore to Ooty', 'Mysore to Wayanad', 'Mysore to Bandipur', 'Mysore to Bangalore'],
  popularRoutes: ['Mysore Local Sightseeing Tour', 'Mysore to Coorg Tempo Traveller', 'Mysore to Ooty Tempo Traveller', 'Mysore to Wayanad Tempo Traveller', 'Mysore to Bandipur Tempo Traveller', 'Mysore to Kabini Tempo Traveller', 'Mysore to Bangalore Tempo Traveller', 'Mysore Palace Full Day Tour', 'Mysore to Chamundi Hills Temple', 'Mysore to Brindavan Gardens', 'Mysore to Srirangapatna Tempo Traveller', 'Mysore to Somnathpur Hoysala Temple', 'Mysore to Nagarhole Tiger Reserve', 'Mysore to Melukote Tempo Traveller', 'Mysore Dasara Festival Group Tour', 'Mysore Airport Group Transfer', '12 Seater Tempo Traveller Mysore', '20 Seater Tempo Traveller Mysore', 'Luxury Tempo Traveller Mysore', 'Mysore Wedding Guest Transfer'],
  ctaHeading: 'Book Your Mysore Group Trip Today',
  ctaDesc: 'Fixed fare, confirmed vehicle, skilled driver on every route. One call and everything is sorted — Mysore Palace, Chamundi Hills, Coorg, Ooty, or any outstation destination across Karnataka and South India.',
}

/* ══════════════════════════════════════════
   MATHURA
══════════════════════════════════════════ */
const mathura: CityData = {
  slug: 'mathura',
  cityName: 'Mathura',
  pageTitle: 'Tempo Traveller in Mathura',
  metaTitle: 'Tempo Traveller in Mathura | Yatra Travel India – Pilgrimage and Braj Circuit Tours',
  metaDesc: 'Book tempo traveller in Mathura for Vrindavan, Govardhan Parikrama, Barsana, Nandgaon, Janmashtami and Holi tours. 9 to 20 seater. Fixed fare, experienced drivers. Call 9044019511.',
  metaKeywords: 'tempo traveller in mathura, tempo traveller on rent in mathura, mathura vrindavan tempo traveller, govardhan parikrama tempo traveller, janmashtami group tour mathura, holi festival braj tempo traveller, 12 seater tempo traveller mathura, maharaja tempo traveller mathura, braj pilgrimage circuit tempo traveller',
  topbarText: "Mathura's Trusted Tempo Traveller — Braj Pilgrimage Circuit, Janmashtami and Holi Group Tours",
  heroHeading: 'Tempo Traveller in Mathura',
  heroSub: 'Braj Pilgrimage Circuit · Vrindavan · Govardhan Parikrama · Barsana · Nandgaon · Janmashtami and Holi Tours',
  heroBadges: ['9 to 20 Seater Available', 'Maharaja Luxury Tempo', 'Starting Rs.7,000 Luxury', 'Fixed Fare · No Hidden Charges'],
  bookingTabs: ['Local Darshan', 'Govardhan Parikrama', 'Barsana and Nandgaon', 'Outstation'],
  defaultCity: 'Mathura',
  vehicleOptions: ['Select Vehicle', '9 Seater Standard Tempo Traveller', '12 Seater Deluxe Tempo Traveller', '14/18 Seater Luxury Tempo Traveller', '20 Seater Tempo Traveller', 'Maharaja Tempo Traveller'],
  trustItems: [
    { title: 'Confirmed Vehicle', sub: 'Registration shared at booking', iconType: 'shield' },
    { title: 'On-Time Pickup', sub: 'From 5 AM for early darshan', iconType: 'clock' },
    { title: 'Fixed Fare Always', sub: 'Agreed upfront, nothing added after', iconType: 'rupee' },
    { title: 'Experienced Drivers', sub: 'Full Braj pilgrimage circuit', iconType: 'shield' },
  ],
  infoBoxText: 'Yatra Travel India offers <strong>tempo traveller on rent in Mathura</strong> for Braj pilgrimage circuit, Janmashtami group tours, Holi festival travel, Govardhan Parikrama, and outstation trips. <strong>Standard, Deluxe, Luxury, and Maharaja Tempo Travellers available — 9 to 20+ seater.</strong> Well-maintained vehicles, experienced Mathura route drivers, fixed all-inclusive fare. No hidden charges. Call <strong>9044019511</strong> to book instantly.',
  introH1: 'Tempo Traveller in Mathura — Birthplace of Lord Krishna, Sacred Braj Pilgrimage Circuit',
  introParagraphs: [
    'Mathura is a religious place and the birthplace of Lord Krishna. It is one of the most known holy places in India, attracting millions of visitors for its cultural heritage and spiritual atmosphere. With group travel becoming more popular every day, hiring a tempo traveller in Mathura offers the right combination of comfort, convenience, and cost-effectiveness for the whole group.',
    'Mathura has no shortage of transport options — autos, cabs, e-rickshaws. But when the whole group needs to travel together to Vrindavan, Govardhan, Barsana, and Nandgaon in one comfortable vehicle with one fixed fare and one reliable driver, a tempo traveller from Yatra Travel India is the only option that actually delivers that. With wide corridors, generous luggage room, an AC entertainment system, and knowledgeable professional drivers who know every temple road and parking spot in the Braj region, it makes your pilgrimage smooth and hassle-free.',
  ],
  sectionServicesTitle: 'Tempo Traveller Options in Mathura',
  vehicles: [
    { badge: 'Budget Friendly', title: 'Standard Tempo Traveller', popular: 'Family Pilgrimage', color: '#0f6ec8', badgeOrange: false, price: 'Best', priceLabel: ' Rate on Call', specs: [{ label: '9 to 26 Seater', sub: 'Flexible Sizes' }, { label: 'Rs.16/km', sub: 'Outstation Rate' }, { label: 'Basic Comforts', sub: 'AC Available' }, { label: 'Family Tours', sub: 'Pilgrimage' }], tags: ['AC', 'Pushback Seats', 'Braj Darshan', 'Budget Friendly'], tagOrange: false, btnLabel: 'Book Standard Tempo', selectKey: 'Standard Tempo Traveller' },
    { badge: 'Rs.21/km', title: 'Deluxe Tempo Traveller', popular: 'Most Booked', color: '#0f6ec8', badgeOrange: false, price: 'Best', priceLabel: ' Rate on Call', specs: [{ label: '9 to 18 Seater', sub: 'Flexible Sizes' }, { label: 'Rs.21/km', sub: 'Outstation Rate' }, { label: 'Better Seating', sub: 'Enhanced AC' }, { label: 'Best Value', sub: 'Per Head Cost' }], tags: ['AC', 'Better Seating', 'Govardhan Tour', 'Vrindavan'], tagOrange: false, btnLabel: 'Book Deluxe Tempo', selectKey: 'Deluxe Tempo Traveller' },
    { badge: 'Long Trips', title: 'Luxury Tempo Traveller', popular: '', color: '#0f6ec8', badgeOrange: false, price: 'Rs.7,000', priceLabel: ' local onwards', specs: [{ label: '9–20 Seater', sub: 'Flexible Sizes' }, { label: 'Ample Legroom', sub: 'Premium AC' }, { label: 'Special Occasions', sub: 'Long Trips' }, { label: 'Beautiful Interior', sub: 'Spacious' }], tags: ['Premium AC', 'Extra Legroom', 'Holi Festival', 'Wedding Parties'], tagOrange: false, btnLabel: 'Book Luxury Tempo', selectKey: 'Luxury Tempo Traveller' },
    { badge: 'Large Groups', title: '20 Seater Tempo Traveller', popular: 'Janmashtami Special', color: '#ff6b35', badgeOrange: true, price: 'Rs.7,500', priceLabel: ' local onwards', specs: [{ label: '17–20 People', sub: 'Group Size' }, { label: 'Rs.7,500', sub: 'Local Tour' }, { label: 'Full AC', sub: 'Cabin' }, { label: 'Max Luggage', sub: 'Pilgrimage Bags' }], tags: ['Full AC', 'Max Luggage', 'Janmashtami', 'Holi Groups'], tagOrange: true, btnLabel: 'Book 20 Seater', selectKey: '20 Seater Tempo Traveller' },
    { badge: 'Ultimate Luxury', title: 'Maharaja Tempo Traveller', popular: 'VIP Pilgrimage', color: '#0f6ec8', badgeOrange: false, price: 'Best', priceLabel: ' Rate on Call', specs: [{ label: '9–16 Seater', sub: 'Flexible Sizes' }, { label: 'Reclining Seats', sub: 'Individual Screens' }, { label: 'Premium Interiors', sub: 'Ultimate Comfort' }, { label: 'Elderly and VIP', sub: 'Groups' }], tags: ['Reclining Seats', 'Individual Screens', 'Air Suspension', 'Premium Interiors'], tagOrange: false, btnLabel: 'Book Maharaja Tempo', selectKey: 'Maharaja Tempo Traveller' },
  ],
  localFareTable: [
    { vehicle: 'Standard Tempo Traveller', seating: '9 to 26 Seater', fare: 'On Request', hours: '8 hours', km: '80 km' },
    { vehicle: 'Deluxe Tempo Traveller', seating: '9 to 18 Seater', fare: 'On Request', hours: '8 hours', km: '80 km' },
    { vehicle: 'Luxury Tempo Traveller', seating: '9 to 20 Seater', fare: 'Rs 7,000 onwards', hours: '8 hours', km: '80 km' },
    { vehicle: '20 Seater Tempo Traveller', seating: '17–20 people', fare: 'Rs 7,500 onwards', hours: '8 hours', km: '80 km' },
    { vehicle: 'Maharaja Tempo Traveller', seating: '9, 12, 16 Seater', fare: 'On Request', hours: '8 hours', km: '80 km' },
  ],
  localFareNote: '* The ultimate price quoted comprises all additional charges including driver fees and parking charges. No hidden fees. Fare confirmed before the trip starts. Call 9044019511 for exact quote on your route, group size, and date.',
  useTags: ['Braj Pilgrimage Circuit', 'Mathura Vrindavan Darshan', 'Govardhan Parikrama', 'Barsana and Nandgaon Tour', 'Janmashtami Group Tour', 'Holi Festival in Braj', 'Banke Bihari Temple Darshan', 'ISKCON Temple Visit', 'Family Pilgrimage Groups', 'Early Morning Darshan Tours', 'Wedding Guest Transfers', 'School and College Trips'],
  ei: {
    included: ['5% GST', 'Driver Day Charge', 'Fuel Charge', 'Base Fare of Tempo Traveller', 'Driver Accommodation (Multi-day trips)'],
    excluded: ['Toll Tax during trip', 'State Tax if applicable paid by Customer', 'Parking Charges as per actual and paid by customer', 'Airport Parking Charge as per actual and paid by customer', 'Driver Night Charge (Sedan – 250, SUV – 300, Tempo Traveller – 500)', 'Carrier Charge Extra – 300'],
  },
  whyTempoTitle: 'Why Book Tempo Traveller in Mathura with Yatra Travel India',
  whyTempoParas: [
    'Mathura has no shortage of transport options — autos, cabs, e-rickshaws. But when the whole group needs to travel together to Vrindavan, Govardhan, Barsana, and Nandgaon in one comfortable vehicle with one fixed fare and one reliable driver, a tempo traveller from Yatra Travel India is the only option that actually delivers that.',
    'On time pickup every time. Driver details shared the night before. Vehicle at your hotel or dharamshala at the confirmed time. No chasing, no waiting, no starting the pilgrimage day already stressed. Every driver at Yatra Travel India knows Mathura, Vrindavan, Govardhan, Barsana, and Nandgaon roads personally — temple timings, parking near Banke Bihari Mandir, the quickest route to Govardhan during peak season.',
    'Fare confirmed before the trip starts. Fuel, toll, parking, and driver allowance all included. No meter running, no additions at the end of a long pilgrimage day when everyone is tired. New vehicles, regularly serviced, full AC throughout.',
    'Booking a tempo traveller in Mathura is trouble-free. When you book, you can be rest assured that the ultimate price quoted comprises all additional charges. No hidden fees at the last minute.',
  ],
  features: [
    { title: 'Full Cabin Air Conditioning', desc: 'Powerful multi-zone AC keeps the entire cabin cool during full day Braj pilgrimage circuits and long outstation drives' },
    { title: 'Reclining and Comfy Seats', desc: 'Pushback reclining sofa seats let passengers rest between temple stops. Especially important for senior citizens and children' },
    { title: 'Experienced Mathura Route Drivers', desc: 'Every driver knows temple timings, parking near Banke Bihari Mandir, Dwarkadhish Temple, and the quickest routes during peak season' },
    { title: 'Driver Waits at Every Stop', desc: 'Your driver stays with the vehicle at each temple and ghat while the group completes darshan' },
    { title: 'LED TV and Entertainment', desc: 'LED television, music system, and mobile charging points at every seat — especially in Luxury and Maharaja models' },
    { title: 'Large Luggage Space', desc: 'Adequate room for pilgrimage bags, prasad, and offerings. Unlike smaller vans, a tempo traveller keeps your tour restful' },
    { title: 'Transparent and Inclusive Fare', desc: 'Final price quoted includes all charges — driver fees, parking, fuel, toll. No hidden fees at the last minute' },
    { title: 'Attractive Clean Interiors', desc: 'Neat and well-maintained vehicles with attractive interiors. Cleaned before every trip.' },
  ],
  attractions: [
    { title: 'Shri Krishna Janmasthan', desc: 'The most noteworthy site in Mathura and believed to be the actual birthplace of Lord Krishna. A live site of reverence where thousands of devotees visit every day. Deep historical and religious significance dating from Dwapar Yuga.' },
    { title: 'Dwarkadhish Temple Mathura', desc: 'One of the most visited temples in Mathura. Built in 1814 by Seth Gokul Das Parikh. Well-known for its elaborate celebrations during Janmashtami and Holi. Beautifully carved pillars and a deeply holy atmosphere.' },
    { title: 'ISKCON Temple — Krishna Balaram Mandir', desc: 'Established in 1975. A major attraction for devotees and international visitors. Known for stunning deity worship, serene environment, and beautifully maintained temple complex.' },
    { title: 'Vishram Ghat', desc: 'An exceptionally important place in Mathura, believed to be where Lord Krishna rested after killing Kansa. Surrounded by many smaller temples and shrines — a must-visit stop on every Mathura pilgrimage tour.' },
    { title: 'Prem Mandir, Vrindavan', desc: 'Located in Vrindavan, 12 km from Mathura. Built by Jagadguru Kripalu Maharaj. Renowned for stunning white marble architecture and spectacular evening light show.' },
    { title: 'Banke Bihari Temple, Vrindavan', desc: 'One of the most beloved temples in Vrindavan. Famous for the unique swinging curtain darshan style. The early morning darshan before 8 AM offers the most peaceful experience.' },
    { title: 'Govardhan Parikrama', desc: 'Located 26 km from Mathura. The 21 km sacred circumambulation circuit around Govardhan Hill. The tempo traveller follows the group and waits at key rest points. Starting fare Rs 2,500 for a 12 seater.' },
    { title: 'Barsana and Nandgaon', desc: 'Barsana is the birthplace of Radha Rani and home to the famous Lathmar Holi celebration. Nandgaon is the village of Nanda Baba, foster father of Lord Krishna. Essential stops on the Braj pilgrimage circuit.' },
  ],
  whyCards: [
    { title: 'On-Time Pickup Every Time', desc: 'Driver details shared the night before. Vehicle at your hotel or dharamshala at the confirmed time. No chasing, no waiting.' },
    { title: 'Experienced Mathura Route Drivers', desc: 'Every driver knows Mathura, Vrindavan, Govardhan, Barsana, and Nandgaon personally — temple timings, parking spots, quickest routes during peak season.' },
    { title: 'Fixed Fare, Nothing Hidden', desc: 'Fare confirmed before the trip starts. Fuel, toll, parking, and driver allowance all included. No meter running, no additions at the end.' },
    { title: 'Well-Maintained Fleet', desc: 'New vehicles, regularly serviced, full AC throughout. Clean interiors before every trip. Proper luggage space for pilgrimage groups.' },
    { title: 'All Group Sizes Covered', desc: '9 seater for small family pilgrimages. 12 seater for medium groups. 16 and 20 seater for large pilgrimage tours. Maharaja for VIP and elderly pilgrims.' },
    { title: 'Direct Contact Throughout', desc: 'Driver number shared before departure. Team reachable during the trip. Someone always picks up — especially during Janmashtami and Holi.' },
  ],
  faqs: [
    { q: 'Q1. Is a tempo traveller the best transport option for Mathura Vrindavan pilgrimage groups?', a: 'Yes. Everyone can travel together comfortably, and the driver stays with you at each temple. When the cost is shared among 10 to 12 people, it becomes much more affordable compared to booking multiple cabs or autos.' },
    { q: 'Q2. What is the best time to book a tempo traveller in Mathura for Janmashtami?', a: 'Book at least 6 to 8 weeks in advance. Mathura sees its highest annual footfall during Janmashtami and every reliable vehicle gets locked in early.' },
    { q: 'Q3. Can I hire a tempo traveller in Mathura for Holi festival group tour?', a: 'Yes. Mathura, Vrindavan, Barsana, and Nandgaon all celebrate Holi differently. Book at least 4 to 5 weeks before Holi. Call 9044019511 to confirm availability.' },
    { q: 'Q4. Is a luxury tempo traveller recommended for Mathura pilgrimage groups with elderly passengers?', a: 'Yes. Fully reclining seats allow proper rest between temple stops, air suspension handles Mathura roads smoothly, and powerful multi-zone AC keeps everyone comfortable. Starting fare Rs 7,000.' },
    { q: 'Q5. Can I book a tempo traveller in Mathura for Govardhan Parikrama group tour?', a: 'Yes. Govardhan is 26 km from Mathura. The tempo traveller follows the group and waits at key rest points throughout the Parikrama. Starting fare Rs 2,500 for a 12 seater.' },
    { q: 'Q6. Is tempo traveller available in Mathura for early morning Banke Bihari Temple darshan?', a: 'Yes. Early morning pickup available from 5 AM onwards. Banke Bihari Temple opens early and the most peaceful darshan happens before 8 AM when crowds are manageable.' },
    { q: 'Q7. What is the per km rate for outstation tempo traveller from Mathura?', a: 'Outstation tempo traveller rate from Mathura starts at Rs 16 per km for a 9 seater and Rs 21 per km for a 12 seater. Includes fuel, toll, parking, and driver allowance.' },
    { q: 'Q8. Can I extend my tempo traveller booking in Mathura if the pilgrimage takes longer than expected?', a: 'Yes. Booking extension available by informing the driver directly or calling 9044019511. Extra hours charged at a fixed rate confirmed at the time of extension.' },
  ],
  noteBox: 'Mathura sees its highest annual footfall during <strong>Janmashtami</strong> — book at least <strong>6 to 8 weeks in advance.</strong> For <strong>Holi festival in Braj</strong> book at least <strong>4 to 5 weeks before Holi.</strong> Waiting until 2 weeks before either festival almost always means no availability or significantly higher rates. For regular pilgrimage trips book 3 to 5 days in advance.',
  footerServices: ['Standard Tempo Traveller', 'Deluxe Tempo Traveller', 'Luxury Tempo Traveller', '20 Seater Tempo Traveller', 'Maharaja Tempo Traveller', 'Govardhan Parikrama Package'],
  footerRoutes: ['Mathura Vrindavan Darshan', 'Mathura to Govardhan', 'Mathura to Barsana', 'Mathura to Nandgaon', 'Mathura to Agra', 'Mathura to Delhi'],
  popularRoutes: ['Mathura Vrindavan Local Darshan Tour', 'Mathura to Govardhan Parikrama', 'Mathura to Barsana Tempo Traveller', 'Mathura to Nandgaon Tempo Traveller', 'Banke Bihari Temple Darshan Tour', 'Mathura Janmashtami Group Tour', 'Braj Holi Festival Tempo Traveller', 'Mathura to Agra Tempo Traveller', 'Mathura to Delhi Tempo Traveller', 'Mathura to Gokul Tempo Traveller', 'Mathura ISKCON Temple Group Visit', 'Mathura to Dwarka Dham Tempo Traveller', 'Prem Mandir Vrindavan Group Tour', 'Vishram Ghat Evening Aarti Tour', 'Mathura to Gwalior Tempo Traveller', 'Mathura to Jaipur Tempo Traveller', '12 Seater Tempo Traveller Mathura', '20 Seater Tempo Traveller Mathura', 'Maharaja Tempo Traveller Mathura', 'Luxury Tempo Traveller Mathura'],
  ctaHeading: 'Plan Your Mathura Braj Pilgrimage Trip Today',
  ctaDesc: 'Confirmed vehicle, experienced local driver, fixed fare. One call and the entire Braj circuit is arranged — Vrindavan, Govardhan Parikrama, Barsana, Nandgaon, and every temple on the route.',
}

/* ══════════════════════════════════════════
   PURI
══════════════════════════════════════════ */
const puri: CityData = {
  slug: 'puri',
  cityName: 'Puri',
  pageTitle: 'Tempo Traveller in Puri',
  metaTitle: 'Tempo Traveller in Puri | Yatra Travel India – 9 to 20 Seater Available',
  metaDesc: 'Rent tempo traveller in Puri for Jagannath Temple darshan, Konark Sun Temple, Chilika Lake, Puri Beach. 9 to 20 seater available. Fixed fare, experienced drivers. Call 9044019511.',
  metaKeywords: 'tempo traveller in puri, tempo traveller on rent in puri, puri jagannath darshan tempo traveller, 12 seater tempo traveller puri, 20 seater tempo traveller puri, rath yatra group tour puri, puri to konark tempo traveller, puri to chilika lake tempo traveller, puri to bhubaneswar tempo traveller, luxury tempo traveller puri',
  topbarText: "Puri's Trusted Tempo Traveller — Jagannath Darshan, Konark and Chilika Lake Tours",
  heroHeading: 'Tempo Traveller in Puri',
  heroSub: 'Jagannath Temple Darshan · Konark Sun Temple · Chilika Lake · Puri Beach · Rath Yatra Tours',
  heroBadges: ['9 to 20 Seater Available', 'Jagannath Darshan Packages', 'Starting Rs.7,000 Local', 'Fixed Fare · No Hidden Charges'],
  bookingTabs: ['Local Darshan', 'Konark Day Trip', 'Chilika Lake', 'Outstation'],
  defaultCity: 'Puri',
  vehicleOptions: ['Select Vehicle', '9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', 'Luxury Tempo Traveller'],
  trustItems: [
    { title: 'Confirmed Vehicle', sub: 'Details shared at booking', iconType: 'shield' },
    { title: 'On-Time Pickup', sub: 'Driver at your hotel door', iconType: 'clock' },
    { title: 'Fixed Fare', sub: 'Agreed upfront, no extras after', iconType: 'rupee' },
    { title: 'Experienced Drivers', sub: 'All Puri and outstation routes', iconType: 'shield' },
  ],
  infoBoxText: 'Yatra Travel India offers <strong>9 to 20 seater tempo travellers in Puri</strong> for Jagannath Temple darshan, local temple tours, Rath Yatra pilgrimages, Konark Sun Temple, Chilika Lake, and all outstation group travel. <strong>Every booking comes with a confirmed vehicle, experienced local driver, and fixed all-inclusive fare.</strong> No hidden charges. Call <strong>9044019511</strong> to book instantly.',
  introH1: 'Rent Tempo Traveller in Puri — 9 to 20 Seater Available for Every Group Size',
  introParagraphs: [
    'Puri is one of the four sacred Dhams in India. Jagannath Temple, Puri Beach, Konark Sun Temple, Chilika Lake. Every year millions of pilgrims, tourists, and devotees visit Puri and almost all of them travel in groups. Getting a large group around Puri and nearby destinations needs one reliable vehicle that keeps everyone together, runs on time, and charges what was agreed.',
    'Yatra Travel India offers 9 to 20 seater tempo travellers in Puri for local temple tours, Jagannath darshan trips, Rath Yatra pilgrimages, beach outings, outstation trips to Bhubaneswar, Konark, and Chilika Lake, and all other group travel requirements. Every booking comes with a confirmed vehicle, experienced driver, and fixed all-inclusive fare. No hidden charges.',
  ],
  sectionServicesTitle: 'Tempo Traveller Options in Puri',
  vehicles: [
    { badge: 'Rs.7,200 Darshan', title: '9 Seater Tempo Traveller', popular: 'Small Groups', color: '#0f6ec8', badgeOrange: false, price: 'Rs.7,200', priceLabel: ' darshan onwards', specs: [{ label: '6–9 People', sub: 'Group Size' }, { label: 'Rs.30/km', sub: 'Outstation Rate' }, { label: 'Full AC', sub: 'Cabin' }, { label: 'Driver Waits', sub: 'Every Stop' }], tags: ['Full AC', 'Pushback Seats', 'Jagannath Darshan', 'Beach Tour'], tagOrange: false, btnLabel: 'Book 9 Seater', selectKey: '9 Seater Tempo Traveller' },
    { badge: 'Rs.7,900 Darshan', title: '12 Seater Tempo Traveller', popular: 'Most Booked', color: '#0f6ec8', badgeOrange: false, price: 'Rs.7,900', priceLabel: ' darshan onwards', specs: [{ label: '10–12 People', sub: 'Group Size' }, { label: 'Rs.30/km', sub: 'Outstation Rate' }, { label: 'All Routes', sub: 'Local and Outstation' }, { label: 'Best Value', sub: 'Per Head Cost' }], tags: ['Full AC', 'Pushback Seats', 'Konark Trip', 'Chilika Lake'], tagOrange: false, btnLabel: 'Book 12 Seater', selectKey: '12 Seater Tempo Traveller' },
    { badge: 'Rs.9,500 Darshan', title: '16 Seater Tempo Traveller', popular: '', color: '#0f6ec8', badgeOrange: false, price: 'Rs.9,500', priceLabel: ' darshan onwards', specs: [{ label: '13–16 People', sub: 'Group Size' }, { label: 'Rs.32/km', sub: 'Outstation Rate' }, { label: 'Extra Legroom', sub: 'Comfort' }, { label: 'Medium Groups', sub: 'Corporate' }], tags: ['Full AC', 'Extra Legroom', 'Pilgrim Groups', 'College Trips'], tagOrange: false, btnLabel: 'Book 16 Seater', selectKey: '16 Seater Tempo Traveller' },
    { badge: 'Large Groups', title: '20 Seater Tempo Traveller', popular: 'Rath Yatra Special', color: '#ff6b35', badgeOrange: true, price: 'Rs.10,500', priceLabel: ' darshan onwards', specs: [{ label: '17–20 People', sub: 'Group Size' }, { label: 'Rs.35/km', sub: 'Outstation Rate' }, { label: 'Large Pilgrim', sub: 'Festival Groups' }, { label: 'Max Luggage', sub: 'Space' }], tags: ['Full AC', 'Max Luggage', 'Rath Yatra', 'Large Groups'], tagOrange: true, btnLabel: 'Book 20 Seater', selectKey: '20 Seater Tempo Traveller' },
    { badge: 'Premium', title: 'Luxury Tempo Traveller', popular: 'VIP Darshan', color: '#0f6ec8', badgeOrange: false, price: 'Best', priceLabel: ' Rate on Call', specs: [{ label: '9–16 People', sub: 'Group Size' }, { label: 'Multi-Zone AC', sub: 'Premium' }, { label: 'Senior Citizens', sub: 'VIP Groups' }, { label: 'All Features', sub: 'Premium' }], tags: ['Reclining Seats', 'LCD Screen', 'Air Suspension', 'Charging Points'], tagOrange: false, btnLabel: 'Book Luxury Tempo', selectKey: 'Luxury Tempo Traveller' },
  ],
  localFareTable: [
    { vehicle: '9 Seater Tempo Traveller', seating: '6 to 9 people', fare: 'Rs 7,200 onwards', hours: '8 hours', km: '80 km' },
    { vehicle: '12 Seater Tempo Traveller', seating: '10 to 12 people', fare: 'Rs 7,900 onwards', hours: '8 hours', km: '80 km' },
    { vehicle: '16 Seater Tempo Traveller', seating: '13 to 16 people', fare: 'Rs 9,500 onwards', hours: '8 hours', km: '80 km' },
    { vehicle: '20 Seater Tempo Traveller', seating: '17 to 20 people', fare: 'Rs 10,500 onwards', hours: '8 hours', km: '80 km' },
  ],
  localFareNote: '* Full day local package covers 8 hours and 80 km. Driver waits at every stop. Outstation rate starts at Rs.30/km. All fares confirmed at booking — no hidden charges. Call 9044019511 for exact quote.',
  useTags: ['Jagannath Temple Darshan', 'Rath Yatra Pilgrimage', 'Konark Sun Temple Day Trip', 'Chilika Lake Tour', 'Puri Beach Sunrise Trip', 'Family Pilgrimage Groups', 'Corporate Outings', 'College Excursions', 'Bhubaneswar Day Trip', 'Raghurajpur Heritage Village'],
  ei: {
    included: ['5% GST', 'Driver Day Charge', 'Fuel Charge', 'Base Fare of Tempo Traveller', 'Driver Accommodation (Multi-day trips)'],
    excluded: ['Toll Tax during trip', 'State Tax if applicable paid by Customer', 'Parking Charges as per actual and paid by customer', 'Airport Parking Charge as per actual and paid by customer', 'Driver Night Charge (Sedan – 250, SUV – 300, Tempo Traveller – 500)', 'Carrier Charge Extra – 300'],
  },
  whyTempoTitle: 'Why Tempo Traveller is the Best Choice for Puri Group Travel',
  whyTempoParas: [
    'Puri is one of the four sacred Dhams in India. Millions of pilgrims and tourists visit every year and almost all of them travel in groups. Getting a large group around Jagannath Temple, Puri Beach, Konark, and Chilika Lake without a dedicated vehicle is genuinely difficult — especially during peak season and festival periods.',
    'A tempo traveller keeps the entire group together throughout the trip. No coordinating multiple cabs, no group members getting delayed, no half the group waiting at the temple while the other half is stuck in traffic near the old town.',
    'Puri is warm and humid for most of the year. Travelling between Jagannath Temple, Puri Beach, Konark, and Chilika Lake in a vehicle without proper AC is uncomfortable — especially for elderly passengers and young children. Every tempo traveller at Yatra Travel India in Puri comes with full air conditioning throughout the entire cabin.',
    'Every booking with Yatra Travel India comes with a confirmed vehicle and a fixed fare agreed before the trip starts. Nothing is added after the journey ends. What is quoted on the call is exactly what is paid on return.',
  ],
  steps: [
    { num: '1', title: 'Call or WhatsApp 9044019511', desc: 'Share group size, travel date, pickup location in Puri, and where you are heading — Jagannath Temple, Konark, Chilika Lake, or outstation.' },
    { num: '2', title: 'Get Clear Fare Quote', desc: 'Fare confirmed immediately. Fuel, toll, parking, driver allowance all included. One number, nothing hidden, nothing vague.' },
    { num: '3', title: 'Confirm Booking', desc: 'Vehicle registration and driver name shared in advance. Booking confirmed on same call.' },
    { num: '4', title: 'Travel', desc: 'Driver at your hotel or pickup point at the confirmed time. Fare settled as confirmed at booking.' },
  ],
  features: [
    { title: 'Full Cabin Air Conditioning', desc: 'Entire cabin stays cool from first stop to last — essential for Puri's warm coastal humidity' },
    { title: 'Pushback Reclining Seats', desc: 'Comfortable reclining seats for temple tours and longer outstation drives to Bhubaneswar and Cuttack' },
    { title: 'Experienced Local Drivers', desc: 'Drivers know Jagannath Temple timings, best parking zones, and all Puri sightseeing routes well' },
    { title: 'Driver Waits at Every Stop', desc: 'Your driver stays with the vehicle while the group takes darshan — no need to arrange return transport' },
    { title: 'Flexible Stops', desc: 'Visit Jagannath Temple, Konark, Chilika, and Puri Beach at your own pace without time pressure' },
    { title: 'Music System and Entertainment', desc: 'Music system standard on all vehicles. LCD screens on luxury tempo traveller models on request' },
    { title: 'Fixed Transparent Fare', desc: 'Fare confirmed at booking. Fuel, toll, parking, driver allowance included. Nothing added after the trip' },
    { title: 'Clean and Well-Maintained', desc: 'All vehicles regularly serviced and sanitized before every pilgrimage and sightseeing trip' },
  ],
  attractions: [
    { title: 'Jagannath Temple', desc: 'One of the four sacred Dhams in India. The most visited religious site in Puri. Early morning darshan recommended for groups to avoid long queues. Driver knows best entry points and waiting areas.' },
    { title: 'Puri Beach', desc: 'One of the most popular beaches in eastern India. Sunrise at Puri Beach is a genuinely special experience for groups visiting early morning. Great for family groups, college trips, and corporate outings.' },
    { title: 'Konark Sun Temple', desc: '35 km from Puri. UNESCO World Heritage Site and one of the most magnificent examples of ancient Indian architecture. Almost every group visiting Puri adds Konark to the itinerary.' },
    { title: 'Chilika Lake', desc: 'Around 50 km from Puri. Largest coastal lagoon in India with Irrawaddy dolphins, migratory birds, and scenic boat rides. Best visited between November and February.' },
    { title: 'Raghurajpur Artist Village', desc: 'Around 14 km from Puri. Traditional Odishan heritage village known for Pattachitra painting, Gotipua dance, and local handicrafts. A unique cultural stop for groups.' },
    { title: 'Sakshigopal Temple', desc: 'Around 20 km from Puri. Important Vaishnava pilgrimage site dedicated to Lord Krishna. Popular stop for religious groups combining Jagannath Temple darshan with nearby sacred temple visits.' },
    { title: 'Lokanath Temple', desc: 'One of the oldest Shiva temples in Puri. Located close to Jagannath Temple. Easy to include as part of a full day Puri pilgrimage tour.' },
    { title: 'Dhauli Giri', desc: 'Around 60 km from Puri via Bhubaneswar. Ancient site where Emperor Ashoka converted to Buddhism after the Kalinga War. White Peace Pagoda and rock edicts. Popular heritage stop.' },
  ],
  whyCards: [
    { title: 'Local Puri Route Knowledge', desc: 'Drivers know Jagannath Temple parking zones, darshan timings, and every sightseeing route in Puri and nearby destinations.' },
    { title: 'Confirmed Vehicle at Booking', desc: 'Not a verbal promise — vehicle registration details shared before the trip starts.' },
    { title: 'Fixed All-Inclusive Fare', desc: 'Fuel, toll, parking, driver allowance — all included in the quoted fare. What is agreed before the trip is exactly what is paid at the end.' },
    { title: 'On-Time Pickup Always', desc: 'Driver at your hotel door at the confirmed time for early morning darshan, Konark day trips, and Chilika Lake tours from Puri.' },
    { title: 'One Call Booking', desc: 'Call 9044019511. Share group size, travel date, and route. Booking confirmed on the same call with vehicle details and driver number.' },
    { title: '9, 12, 16, 20 Seater and Luxury', desc: 'Right vehicle for every group size — from small family darshan trips to large Rath Yatra pilgrimage groups with 20 passengers.' },
  ],
  faqs: [
    { q: 'Q1. What is the tempo traveller price in Puri?', a: 'Tempo traveller in Puri starts at Rs 7,000 for a local tour of 8 hours and 80 km. Outstation rate starts at Rs 30 per km. Fixed fare confirmed at booking, no hidden charges.' },
    { q: 'Q2. How many people can travel in a tempo traveller in Puri?', a: 'Tempo travellers in Puri are available in 9 seater, 12 seater, 16 seater, and 20 seater options. Choose based on your group size. Call 9044019511 to confirm.' },
    { q: 'Q3. Is the tempo traveller in Puri fully air conditioned?', a: 'Yes. Full multi-zone AC throughout the entire cabin. Keeps every passenger comfortable on Puri's warm coastal climate and on longer outstation drives.' },
    { q: 'Q4. Is tempo traveller the most comfortable option for Jagannath Temple darshan group tour?', a: 'Yes. Pushback seats, smooth air suspension, and powerful AC make the tempo traveller the best choice for Jagannath Temple darshan group tours in Puri.' },
    { q: 'Q5. How do I book a tempo traveller in Puri?', a: 'Call or WhatsApp Yatra Travel India on 9044019511. Share group size, travel date, and route. Booking confirmed on the same call.' },
    { q: 'Q6. Can I extend my tempo traveller booking in Puri?', a: 'Yes. If the group needs extra hours beyond the booked package, inform the driver or call 9044019511 directly. Extra hours charged at a fixed rate.' },
    { q: 'Q7. Can I modify my tempo traveller booking in Puri?', a: 'Yes. Call 9044019511 as early as possible to make any changes to travel date, pickup time, or route. Subject to vehicle availability on the revised date.' },
    { q: 'Q8. What is the advance booking recommendation for Rath Yatra period?', a: 'Book at least 2 to 3 weeks in advance during Rath Yatra and other major festival periods. The 20 seater is most popular for large pilgrimage groups during Rath Yatra season.' },
  ],
  noteBox: 'During <strong>Rath Yatra, Snana Yatra, Diwali, Durga Puja, and peak tourist season (October to February)</strong> tempo travellers fill up weeks in advance. Book <strong>3 to 5 days in advance</strong> for regular local tours. Book <strong>2 to 3 weeks in advance</strong> during major festival periods.',
  footerServices: ['9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', 'Luxury Tempo Traveller', 'Jagannath Darshan Package'],
  footerRoutes: ['Puri Local Darshan Tour', 'Puri to Konark', 'Puri to Chilika Lake', 'Puri to Bhubaneswar', 'Puri to Cuttack', 'Puri to Dhauli Giri'],
  popularRoutes: ['Puri Local Jagannath Darshan Tour', 'Puri to Konark Sun Temple Tempo Traveller', 'Puri to Chilika Lake Tempo Traveller', 'Puri to Bhubaneswar Tempo Traveller', 'Puri to Cuttack Tempo Traveller', 'Puri to Dhauli Giri Tempo Traveller', 'Puri to Raghurajpur Heritage Village', 'Puri to Sakshigopal Temple Tempo Traveller', 'Puri to Lingaraj Temple Bhubaneswar', 'Puri to Udayagiri Khandagiri Caves', 'Puri Beach Sunrise Tempo Traveller', 'Puri Rath Yatra Pilgrimage Tempo Traveller', '12 Seater Tempo Traveller Puri', '20 Seater Tempo Traveller Puri', 'Luxury Tempo Traveller Puri', 'Puri to Gopalpur Beach Tempo Traveller', 'Puri to Nandankanan Zoo Bhubaneswar', 'Puri to Balighai Beach Tempo Traveller', 'Puri Full Day Sightseeing Package', 'Puri to Bhitarkanika National Park'],
  ctaHeading: 'Plan Your Puri Jagannath Darshan Trip Today',
  ctaDesc: 'Book your tempo traveller for a comfortable, well-organised pilgrimage to one of India's four sacred Dhams. Fixed fare, confirmed vehicle, experienced driver. Call now.',
}

export const CITY_DATA: Record<string, CityData> = { kanpur, ayodhya, manali, bhubaneswar, raipur, goa, nashik, somnath, coimbatore, ghaziabad, ujjain, mysore, mathura, puri }
export const ALL_SLUGS = Object.keys(CITY_DATA)
