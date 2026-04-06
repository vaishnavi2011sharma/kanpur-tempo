'use client'

import { useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import BookingCard from '@/components/BookingCard'
import Toast, { ToastHandle } from '@/components/Toast'

/* ─── SVG HELPERS ─── */
const BusSvg = ({ color = '#0f6ec8' }: { color?: string }) => (
  <svg viewBox="0 0 80 40" fill="none" style={{ width: 72, height: 72, opacity: 0.4 }}>
    <rect x="2" y="14" width="70" height="20" rx="4" fill={color} fillOpacity=".18" />
    <rect x="8" y="8" width="48" height="16" rx="3" fill={color} fillOpacity=".28" />
    <circle cx="16" cy="34" r="5" fill={color} fillOpacity=".4" />
    <circle cx="58" cy="34" r="5" fill={color} fillOpacity=".4" />
    <rect x="24" y="9" width="1.5" height="14" fill={color} fillOpacity=".2" />
    <rect x="34" y="9" width="1.5" height="14" fill={color} fillOpacity=".2" />
    <rect x="44" y="9" width="1.5" height="14" fill={color} fillOpacity=".2" />
  </svg>
)

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.11 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
  </svg>
)

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f6ec8" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 2 }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
)
const CrossIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f6ec8" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 2 }}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

/* ─── DATA ─── */
const BOOKING_TABS = ['Ram Mandir Darshan', 'Pilgrimage Tour', 'Airport Transfer', 'Outstation']
const VEHICLE_OPTIONS = [
  'Select Vehicle', '9 Seater Tempo Traveller', '12 Seater Tempo Traveller',
  '13 Seater Tempo Traveller', '14 Seater Tempo Traveller',
  '16 Seater Urbania Tempo Traveller', '20 Seater Tempo Traveller',
  'Luxury Tempo Traveller', 'Maharaja Tempo Traveller',
]

const VEHICLES = [
  {
    badge: 'Rs 23/km', title: '12 Seater Tempo Traveller', popular: 'Most Booked',
    imgAlt: '12 Seater Tempo Traveller Ayodhya', color: '#0f6ec8', badgeOrange: false,
    price: 'Rs.23/km', priceLabel: ' onwards',
    specs: [
      { label: '10–12 People', sub: 'Group Size' },
      { label: 'Rs.23–25/km', sub: 'Outstation Rate' },
      { label: 'Full AC', sub: 'Cabin' },
      { label: 'Families and', sub: 'Small Groups' },
    ],
    tags: ['Full AC', 'Pushback Seats', 'Ram Mandir Tour', 'Varanasi Trip'],
    tagOrange: false, btnLabel: 'Book 12 Seater', selectKey: '12 Seater Tempo Traveller',
  },
  {
    badge: 'Rs 26/km', title: '16 Seater Urbania Tempo Traveller', popular: '',
    imgAlt: '16 Seater Urbania Tempo Traveller Ayodhya', color: '#0f6ec8', badgeOrange: false,
    price: 'Rs.26/km', priceLabel: ' onwards',
    specs: [
      { label: '13–16 People', sub: 'Group Size' },
      { label: 'Rs.26–28/km', sub: 'Outstation Rate' },
      { label: 'Full AC', sub: 'Cabin' },
      { label: 'Medium Groups', sub: 'Pilgrimage' },
    ],
    tags: ['Full AC', 'Pushback Seats', 'Prayagraj Tour', 'Temple Circuit'],
    tagOrange: false, btnLabel: 'Book 16 Seater', selectKey: '16 Seater Urbania Tempo Traveller',
  },
  {
    badge: 'Rs 30/km', title: '20 Seater Tempo Traveller', popular: 'Large Groups',
    imgAlt: '20 Seater Tempo Traveller Ayodhya', color: '#ff6b35', badgeOrange: true,
    price: 'Rs.30/km', priceLabel: ' onwards',
    specs: [
      { label: '17–20 People', sub: 'Group Size' },
      { label: 'Rs.30/km', sub: 'Outstation Rate' },
      { label: 'Full AC', sub: 'Cabin' },
      { label: 'Large Groups and', sub: 'Corporate Tours' },
    ],
    tags: ['Full AC', 'Max Luggage', 'Corporate Tours', 'Wedding Groups'],
    tagOrange: true, btnLabel: 'Book 20 Seater', selectKey: '20 Seater Tempo Traveller',
  },
  {
    badge: 'Premium', title: 'Luxury Tempo Traveller', popular: 'VIP and Weddings',
    imgAlt: 'Luxury Tempo Traveller Ayodhya', color: '#0f6ec8', badgeOrange: false,
    price: 'Best', priceLabel: ' Rate on Call',
    specs: [
      { label: '9–16 Seater', sub: 'Flexible Sizes' },
      { label: 'Premium AC', sub: 'Multi-Zone' },
      { label: 'Reclining', sub: 'Leather Seats' },
      { label: 'Weddings and', sub: 'VIP Travel' },
    ],
    tags: ['Leather Seats', 'LED Lights', 'Music System', 'Charging Points'],
    tagOrange: false, btnLabel: 'Book Luxury Tempo', selectKey: 'Luxury Tempo Traveller',
  },
  {
    badge: 'Ultimate Luxury', title: 'Maharaja Tempo Traveller', popular: 'VIPs and Senior Citizens',
    imgAlt: 'Maharaja Tempo Traveller Ayodhya', color: '#0f6ec8', badgeOrange: false,
    price: 'Best', priceLabel: ' Rate on Call',
    specs: [
      { label: '9–16 Seater', sub: 'Flexible Sizes' },
      { label: 'Premium AC', sub: 'Full Cabin' },
      { label: 'Pushback Sofa', sub: 'Reclining Seats' },
      { label: 'Special Occasions', sub: 'Pilgrimages' },
    ],
    tags: ['Sofa Seats', 'Full Recline', 'Senior Citizens', 'Ram Mandir VIP'],
    tagOrange: false, btnLabel: 'Book Maharaja Tempo', selectKey: 'Maharaja Tempo Traveller',
  },
]

const OPTIONS_TABLE = [
  { vehicle: '9 Seater Tempo Traveller', cap: '9 + Driver', ac: 'AC', ideal: 'Small families visiting Ram Mandir and nearby temples. Starting Rs 22/km' },
  { vehicle: '12 Seater Tempo Traveller', cap: '12 + Driver', ac: 'AC', ideal: 'Best for families and small groups — Ram Mandir darshan, Varanasi, Prayagraj, Lucknow. Rs 23–25/km' },
  { vehicle: '13 Seater Tempo Traveller', cap: '13 + Driver', ac: 'AC', ideal: 'Airport transfer Rs 2,200. Good for medium family groups and outstation pilgrimage trips' },
  { vehicle: '14 Seater Tempo Traveller', cap: '14 + Driver', ac: 'AC', ideal: 'Airport transfer Rs 2,200. Comfortable for medium-sized groups with full luggage' },
  { vehicle: '16 Seater Urbania', cap: '16 + Driver', ac: 'AC', ideal: 'Suitable for medium-sized groups — temple circuits, corporate travel, outstation trips. Rs 26–28/km' },
  { vehicle: '20 Seater Tempo Traveller', cap: '20 + Driver', ac: 'AC', ideal: 'Large pilgrimage groups, corporate teams, wedding parties. Rs 30/km. Volvo bus available for even larger groups' },
  { vehicle: 'Luxury and Maharaja Tempo Traveller', cap: '9–16 + Driver', ac: 'Premium AC', ideal: 'VIP travel, special occasions, senior citizens, weddings — pushback sofa seats, LED lights, music system, charging points' },
]

const AIRPORT_TABLE = [
  { vehicle: '9 Seater Tempo Traveller', pickup: 'On Request', drop: 'On Request', outstation: 'Rs 22/km' },
  { vehicle: '12 Seater Tempo Traveller', pickup: 'Rs 2,000', drop: 'Rs 2,000', outstation: 'Rs 23–25/km' },
  { vehicle: '13 Seater Tempo Traveller', pickup: 'Rs 2,200', drop: 'Rs 2,200', outstation: 'On Request' },
  { vehicle: '14 Seater Tempo Traveller', pickup: 'Rs 2,200', drop: 'Rs 2,200', outstation: 'On Request' },
  { vehicle: '16 Seater Urbania', pickup: 'Rs 2,500', drop: 'Rs 2,500', outstation: 'Rs 26–28/km' },
  { vehicle: '20 Seater Tempo Traveller', pickup: 'On Request', drop: 'On Request', outstation: 'Rs 30/km' },
]

const USE_TAGS = [
  'Ram Mandir Darshan Tour', 'Hanuman Garhi Temple Visit', 'Kanak Bhawan Darshan',
  'Saryu Ghat Evening Aarti', 'Pilgrimage and Religious Tours', 'Family Outings and Vacations',
  'Wedding Guest Transportation', 'Corporate Travel and Group Tours',
  'Ayodhya Airport Transfer', 'Ayodhya to Varanasi Trip',
  'Ayodhya to Lucknow Travel', 'Senior Citizens Comfort Travel',
]

const BENEFITS = [
  { title: 'Affordable Tempo Traveller Price', desc: 'Competitive rates starting from Rs 22/km for a 9 seater. Complete cost details shared in advance. Toll tax, parking charges, and driver allowance clearly discussed — no hidden charges.' },
  { title: 'Fully AC and Comfortable Vehicles', desc: 'All vehicles fully air-conditioned with pushback seats, good legroom, and neat interiors. Every vehicle is checked and cleaned before each trip so you always step into a fresh, well-maintained vehicle.' },
  { title: 'Experienced and Verified Drivers', desc: 'Drivers know local Ayodhya roads, Ram Mandir routes, and all major outstation highways well. Verified, trained, and polite — ensuring safe, smooth, and punctual journeys every time.' },
  { title: 'Easy Booking by Call or WhatsApp', desc: 'Simply call or WhatsApp 9044019511 with your travel date, pickup location, destination, and number of passengers. Our team provides an instant quote and confirmation.' },
  { title: '24x7 Customer Support', desc: 'Yatra Travel India team available around the clock. Whether you need to book, modify a trip, or get help during travel — someone always picks up and gives you a clear answer immediately.' },
  { title: 'Customized Pilgrimage Packages', desc: 'Customized Ayodhya pilgrimage tour packages, Ram Mandir darshan travel plans, and group tour packages for families, corporate groups, and travel agents available on request.' },
]

const INCLUDED = ['5% GST', 'Driver Day Charge', 'Fuel Charge', 'Base Fare of Tempo Traveller', 'Driver Accommodation (Multi-day trips)']
const EXCLUDED = [
  'Toll Tax during trip (clearly discussed in advance)',
  'Parking Charges as per actual and paid by customer',
  'Airport Parking Charges as per airport authority rules',
  'State Tax for outstation trips outside Uttar Pradesh',
  'Driver Night Charge (Tempo Traveller – 500)',
]

const ATTRACTIONS = [
  { title: 'Shri Ram Janmabhoomi — Ram Mandir', desc: 'The most important pilgrimage site in Ayodhya — the birthplace of Lord Shri Ram and the newly built Ram Mandir. Devotees from across India and the world come here to seek blessings and offer prayers. Our trained local drivers know the routes around Ram Mandir very well and ensure on-time pickup, smooth drop, and safe travel so you can focus only on your darshan and prayers.' },
  { title: 'Hanuman Garhi Temple', desc: 'One of the most visited temples in Ayodhya, dedicated to Lord Hanuman — situated on a hillock in the heart of the city. Believed that no pilgrimage to Ayodhya is complete without visiting Hanuman Garhi first. A standard stop on every Ayodhya darshan tour by tempo traveller — easily combined with Ram Mandir and Kanak Bhawan in one comfortable full-day group tour.' },
  { title: 'Kanak Bhawan', desc: 'A beautiful temple dedicated to Lord Ram and Goddess Sita, known for its stunning golden architecture and peaceful atmosphere. A favourite among devotees for its elaborate deity decorations and serene ambience. Located close to Hanuman Garhi and Ram Mandir — all three covered comfortably in a single day local sightseeing tour by tempo traveller from Ayodhya.' },
  { title: 'Saryu River Ghat and Evening Aarti', desc: 'The Saryu River flows through Ayodhya and holds immense spiritual significance. The evening aarti on the Saryu Ghat is one of the most beautiful and peaceful experiences in Ayodhya, leaving a lasting impression on every visitor. The ghat area has several smaller temples and sacred spots along its banks — a meaningful end to any Ayodhya darshan day by tempo traveller.' },
  { title: 'Nageshwarnath Temple and Dashrath Mahal', desc: 'Nageshwarnath Temple is one of the ancient temples of Ayodhya, associated with Lord Ram\'s son Kush and dedicated to Lord Shiva. Dashrath Mahal is the legendary palace of King Dashrath, the father of Lord Ram. Both are significant heritage stops on the Ayodhya temple circuit for pilgrims visiting for the complete Ramayana heritage experience.' },
  { title: 'Varanasi — Kashi Vishwanath', desc: 'Around 200 km from Ayodhya. Varanasi — Kashi — is the spiritual capital of India. Home to the Kashi Vishwanath Temple and the famous Ganga Aarti. A very popular religious route by tempo traveller from Ayodhya for families and pilgrimage groups. Both same-day return and overnight packages available. Call 9044019511 to book.' },
  { title: 'Prayagraj — Triveni Sangam', desc: 'Around 160 km from Ayodhya. The sacred confluence of Ganga, Yamuna, and the mythological Saraswati rivers. One of the most important pilgrimage destinations in India — especially popular during Kumbh Mela years. Popular same-day or overnight tempo traveller package from Ayodhya for pilgrimage groups, student groups, and family tours.' },
  { title: 'Agra, Mathura and Vrindavan', desc: 'A great combination for sightseeing and heritage trips from Ayodhya. Taj Mahal in Agra, the Mathura Krishna Janmabhoomi, and Vrindavan Banke Bihari Temple — all in one comfortable multi-city group tour by luxury tempo traveller from Ayodhya for premium group experiences.' },
]

const ROUTES = [
  { title: 'Ayodhya to Varanasi Tempo Traveller', desc: 'A favourite route for temple visits and spiritual journeys. Our tempo traveller from Ayodhya to Varanasi is perfect for families and groups who want a relaxed and smooth ride to Kashi Vishwanath and the Ganga Ghats.' },
  { title: 'Ayodhya to Lucknow Tempo Traveller', desc: 'Ideal for business meetings, shopping trips, and weekend travel. Book a reliable tempo traveller from Ayodhya to Lucknow for airport, station, and city transfers with on-time pickup guaranteed.' },
  { title: 'Ayodhya to Delhi Tempo Traveller', desc: 'Best for long-distance journeys, group tours, and pilgrimage travel. Spacious seating and comfortable AC travel for the full Ayodhya to Delhi route for corporate and family groups.' },
  { title: 'Ayodhya to Gorakhpur Tempo Traveller', desc: 'Suitable for short outstation trips and family visits. We provide 12 seater and bigger vehicles for smooth group journeys on this popular Uttar Pradesh route.' },
  { title: 'Ayodhya to Prayagraj Tempo Traveller', desc: 'Popular for cultural tours, student groups, and pilgrimage travel to the Triveni Sangam. Safe and convenient travel with experienced local highway drivers.' },
  { title: 'Ayodhya to Haridwar and Rishikesh', desc: 'Perfect for spiritual tours and group pilgrimages across the Char Dham circuit. Our tempo traveller hire Ayodhya ensures comfort throughout the journey to Uttarakhand.' },
  { title: 'Ayodhya to Agra, Mathura and Vrindavan', desc: 'Great for sightseeing and heritage trips. Travel comfortably with our luxury tempo traveller Ayodhya for premium multi-city group experiences across UP and Rajasthan.' },
  { title: 'Ayodhya Airport Tempo Traveller Booking', desc: 'Group transport to or from the airport. Punctual pickups, smooth rides, clean vehicles. 12 seater from Rs 2,000 and 16 seater from Rs 2,500 for airport transfers.' },
]

const SEASONS = [
  { title: 'October to March — Perfect Season for Family Visit', paras: ['This is the best time to visit Ayodhya with family. Pleasant and cool weather ideal for sightseeing. Comfortable for Ram Mandir darshan, Hanuman Garhi, and Saryu Ghat visits. Great for senior citizens, children, and group travellers. Peak season for Ayodhya pilgrimage tours.', 'Book your tempo traveller in Ayodhya early to avoid last-minute hassle during this busy period.'] },
  { title: 'April to June — Summer Travel in Ayodhya', paras: ['Summers are hot but Ayodhya family trips are still possible with proper planning. Best to travel in the morning or evening. AC tempo traveller hire in Ayodhya ensures a cool and comfortable ride throughout the journey. Ideal for short trips and overnight stays. Avoid afternoon travel during the hottest months.'] },
  { title: 'July to September — Monsoon Visits', paras: ['Monsoon brings freshness to Ayodhya, making it ideal for peaceful family trips. Less crowded than peak season. Greenery around Saryu Ghat and temples makes sightseeing pleasant. Choose experienced drivers for safe outstation travel. Our Ayodhya tempo traveller service guarantees smooth and safe travel even in rainy conditions.'] },
  { title: 'Festival Season — Experience Ayodhya at Its Best', paras: ['Ayodhya is magical during festivals like Ram Navami, Diwali, and Makar Sankranti. Special prayers, cultural events, and decorations make every visit truly memorable. High demand for hotels and transport during these periods. Early booking of tempo traveller in Ayodhya — at least 3 to 5 days in advance — is strongly recommended for stress-free travel.'] },
]

const WHY_CARDS = [
  { title: 'Choose the Right Tempo Traveller Size', desc: '12 seater for small families. 16 seater Urbania for medium groups. Luxury or Maharaja for VIP travel or special occasions. 20 seater or Volvo Bus for large pilgrimage or corporate groups.' },
  { title: 'Check Vehicle Features for Comfort', desc: 'Ensure fully air-conditioned interiors, pushback reclining seats for long journeys, spacious luggage area, LED lights, music system, and other amenities before confirming the booking.' },
  { title: 'Confirm Transparent Pricing', desc: 'Always confirm the tempo traveller fare in Ayodhya before booking. Check if toll, parking, and driver allowance are included to avoid surprise charges at the end of the trip.' },
  { title: 'Plan Your Outstation Route', desc: 'Popular routes — Ayodhya to Varanasi, Lucknow, Delhi, Prayagraj, Haridwar, Rishikesh. Experienced drivers can suggest the safest and fastest highways for your group.' },
  { title: 'Verified and Polite Drivers', desc: 'Always choose services with verified, trained, and polite drivers. Drivers know local Ayodhya roads and highway routes — essential for safe pilgrimage tours and Ram Mandir darshan travel.' },
  { title: 'Book Early During Festivals and Peak Season', desc: 'Festivals like Ram Navami, Diwali, and Makar Sankranti attract large crowds. Book at least 3 to 5 days in advance. Luxury or Maharaja tempo traveller recommended for VIPs and senior citizens.' },
]

const FAQS = [
  { q: 'Q1. Which tempo traveller is best for Ayodhya group pilgrimage?', a: 'A 12 seater or 16 seater tempo traveller in Ayodhya is ideal for small and medium groups visiting Ram Mandir and nearby temples.' },
  { q: 'Q2. Can I hire tempo traveller in Ayodhya for same-day return trips?', a: 'Yes, we provide same-day tempo traveller hire in Ayodhya for nearby cities like Varanasi, Prayagraj, Lucknow, and Chitrakoot.' },
  { q: 'Q3. Do you provide luxury tempo traveller for Ram Mandir darshan?', a: 'Yes, we offer luxury tempo traveller in Ayodhya with pushback seats and AC for comfortable Ram Mandir pilgrimage travel.' },
  { q: 'Q4. Is night halt allowed with tempo traveller booking in Ayodhya?', a: 'Yes, multi-day and night halt tempo traveller bookings in Ayodhya are available as per your travel plan.' },
  { q: 'Q5. Can I book tempo traveller in Ayodhya for senior citizens?', a: 'Absolutely. Our AC tempo travellers in Ayodhya are spacious and comfortable, suitable for elderly passengers. The Maharaja tempo traveller is especially recommended for senior citizens.' },
  { q: 'Q6. Do tempo travellers in Ayodhya have charging points?', a: 'Yes, most of our tempo travellers in Ayodhya come with mobile charging points and reading lights.' },
  { q: 'Q7. Is tempo traveller available in Ayodhya during peak festival season?', a: 'Yes, but advance booking is recommended for tempo traveller hire in Ayodhya during Ram Navami, Diwali, and holidays.' },
  { q: 'Q8. Can I hire tempo traveller from Ayodhya to multiple cities?', a: 'Yes, we offer multi-city tempo traveller tours from Ayodhya as per your custom itinerary.' },
  { q: 'Q9. Do you offer economy and luxury tempo traveller options in Ayodhya?', a: 'Yes, you can choose between standard AC tempo traveller Ayodhya and luxury Maharaja tempo traveller Ayodhya.' },
  { q: 'Q10. Are tempo travellers in Ayodhya suitable for long-distance travel?', a: 'Yes, our vehicles are ideal for long-distance tempo traveller journeys from Ayodhya with comfortable seating and AC throughout the trip.' },
  { q: 'Q11. Do you provide last-minute tempo traveller booking in Ayodhya?', a: 'Yes, last-minute tempo traveller hire in Ayodhya is possible subject to vehicle availability. Call 9044019511 directly for immediate booking.' },
  { q: 'Q12. Can I pre-book tempo traveller in Ayodhya for future dates?', a: 'Yes, advance reservations are accepted for future tempo traveller bookings in Ayodhya.' },
  { q: 'Q13. Is luggage space sufficient in tempo traveller Ayodhya?', a: 'Yes, our tempo travellers have large luggage carriers suitable for pilgrimage and tour travel.' },
  { q: 'Q14. Do you offer tempo traveller for school or college tours in Ayodhya?', a: 'Yes, we provide tempo traveller hire in Ayodhya for educational tours and student trips.' },
]

const POPULAR_ROUTES = [
  'Ayodhya Ram Mandir Darshan Tour', 'Ayodhya to Varanasi Tempo Traveller',
  'Ayodhya to Lucknow Tempo Traveller', 'Ayodhya to Delhi Tempo Traveller',
  'Ayodhya to Prayagraj Tempo Traveller', 'Ayodhya to Gorakhpur Tempo Traveller',
  'Ayodhya to Haridwar Tempo Traveller', 'Ayodhya to Rishikesh Tempo Traveller',
  'Ayodhya to Mathura Vrindavan', 'Ayodhya to Agra Tempo Traveller',
  'Ayodhya to Chitrakoot Pilgrimage', 'Ayodhya Airport Group Transfer',
  'Hanuman Garhi Temple Tour', 'Saryu Ghat Evening Aarti Visit',
  'Ayodhya Wedding Guest Transport', 'Ayodhya Corporate Group Travel',
  '12 Seater Tempo Traveller Ayodhya', '16 Seater Urbania Tempo Ayodhya',
  'Luxury Tempo Traveller Ayodhya', 'Maharaja Tempo Traveller Ayodhya',
]

/* ─── PAGE ─── */
export default function AyodhyaTempoPage() {
  const toastRef = useRef<ToastHandle>(null)
  const bookingRef = useRef<HTMLDivElement>(null)
  const [selectedVehicle, setSelectedVehicle] = useState('Select Vehicle')

  const showToast = useCallback((msg: string) => {
    toastRef.current?.show(msg)
  }, [])

  const scrollToBooking = useCallback(() => {
    bookingRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const handleSelectVehicle = useCallback((key: string, title: string) => {
    setSelectedVehicle(key)
    scrollToBooking()
    showToast(`${title} selected. Enter destination to continue.`)
  }, [scrollToBooking, showToast])

  return (
    <>
      {/* TOP BAR */}
      <div className="topbar">
        <div className="topbar-inner">
          <p>Ayodhya&apos;s Trusted Tempo Traveller — Ram Mandir Darshan, Pilgrimage Tours, Varanasi, Lucknow and Delhi</p>
          <div className="topbar-right">
            <a href="https://wa.me/919044019511">WhatsApp Us</a>
            <a href="tel:+919044019511">+91 90440 19511</a>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <Navbar onBookNowClick={scrollToBooking} />

      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <div className="breadcrumb-inner">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/#services">Services</Link>
          <span>/</span>
          <span>Tempo Traveller in Ayodhya</span>
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-heading">Tempo Traveller in Ayodhya</h1>
          <p className="hero-sub">Ram Mandir Darshan · Hanuman Garhi · Kanak Bhawan · Saryu Ghat · Varanasi · Lucknow · Delhi · Airport Transfers</p>
          <div className="hero-badges">
            {['12 to 20 Seater Available', 'Luxury and Maharaja Options', 'Starting Rs 22/km', 'Verified Drivers · 24x7 Support'].map(b => (
              <span key={b} className="hero-badge">{b}</span>
            ))}
          </div>
          <div ref={bookingRef}>
            <BookingCard
              onSearch={showToast}
              selectedVehicle={selectedVehicle}
              defaultCity="Ayodhya"
              tabs={BOOKING_TABS}
              vehicleOptions={VEHICLE_OPTIONS}
            />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        <div className="trust-inner">
          {[
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0f6ec8" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>, title: 'Verified and Trained Drivers', sub: 'Know local routes and highways' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0f6ec8" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg>, title: 'Transparent Pricing', sub: 'No hidden charges, all costs upfront' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0f6ec8" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>, title: 'On-Time Pickup', sub: 'Punctual arrivals every trip' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0f6ec8" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12" y2="18" /></svg>, title: '24x7 Customer Support', sub: 'Call or WhatsApp anytime' },
          ].map(item => (
            <div key={item.title} className="trust-item">
              <div className="trust-icon">{item.icon}</div>
              <div className="trust-text"><strong>{item.title}</strong><span>{item.sub}</span></div>
            </div>
          ))}
        </div>
      </div>

      {/* PAGE BODY */}
      <div className="page-body">

        {/* INFO BOX */}
        <div className="info-box">
          <p>Yatra Travel India provides <strong>safe, comfortable, and affordable tempo traveller hire in Ayodhya</strong> for Ram Mandir darshan, pilgrimage tours, family trips, wedding guest transfers, corporate travel, and outstation journeys to Varanasi, Prayagraj, Lucknow, Delhi, and Gorakhpur. <strong>12 seater, 16 seater Urbania, Luxury and Maharaja Tempo Traveller available.</strong> Pricing from Rs 22/km. No hidden charges. Call or WhatsApp <strong>9044019511</strong> for instant booking and best price.</p>
        </div>

        {/* INTRO */}
        <div className="intro-section">
          <h1>Ayodhya Tempo Traveller Rental — 12 Seater, 16 Seater, Luxury and Maharaja</h1>
          <p>Looking for a reliable tempo traveller rental in Ayodhya for pilgrimage, family trips, or group travel? Yatra Travel India provides safe, comfortable, and affordable tempo traveller hire in Ayodhya with multiple seating options to suit every group size. From 12 seater tempo traveller Ayodhya and 16 seater tempo traveller Ayodhya to Luxury and Maharaja tempo traveller models, we have the perfect vehicle for your journey.</p>
          <p>Whether you are visiting the sacred Ram Mandir, planning a multi-temple pilgrimage, organizing a family vacation, or travelling outstation from Ayodhya, our well-maintained AC tempo travellers ensure a smooth, relaxed, and hassle-free ride. Each vehicle is designed with comfortable pushback seats, ample legroom, clean interiors, powerful air conditioning, and enough luggage space for long and short trips alike. With experienced and verified drivers, well-serviced vehicles, and 24x7 customer support, Yatra Travel India is your trusted partner for tempo traveller rental in Ayodhya.</p>
        </div>

        {/* VEHICLE CARDS */}
        <h2 className="section-title" id="services">Tempo Traveller Options in Ayodhya</h2>
        <div className="vehicles-grid">
          {VEHICLES.map(v => (
            <div key={v.selectKey} className="vehicle-card">
              <div className="vc-img">
                <div className="vc-img-placeholder">
                  <BusSvg color={v.color} />
                  <span>{v.title}</span>
                </div>
                <span className={`vc-badge${v.badgeOrange ? ' orange' : ''}`}>{v.badge}</span>
                {v.popular && <span className="vc-popular">{v.popular}</span>}
              </div>
              <div className="vc-body">
                <h3>{v.title}</h3>
                {/* Match Kanpur design: 2-col specs grid */}
                <div className="vc-specs" style={{ gridTemplateColumns: '1fr 1fr' }}>
                  {v.specs.map(s => (
                    <div key={s.sub} className="vc-spec-item">
                      <strong>{s.label}</strong>{s.sub}
                    </div>
                  ))}
                </div>
                <div className="vc-price-row">
                  <div className="vc-price">{v.price}<span>{v.priceLabel}</span></div>
                  <div className="vc-avail">Available Now</div>
                </div>
                <div className="vc-tags">
                  {v.tags.map(t => (
                    <span key={t} className={`vc-tag${v.tagOrange ? ' orange' : ''}`}>{t}</span>
                  ))}
                </div>
                <button
                  className={`btn-book-card${v.badgeOrange ? ' orange' : ''}`}
                  onClick={() => handleSelectVehicle(v.selectKey, v.title)}
                >
                  {v.btnLabel}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* VEHICLE OPTIONS TABLE */}
        <h2 className="section-title">Vehicle Options and Seating — Tempo Traveller in Ayodhya</h2>
        <div className="vot-wrap">
          <table className="vehicle-options-table">
            <thead>
              <tr>
                <th>Vehicle Type</th><th>Seating Capacity</th><th>Air Conditioning</th><th>Ideal For</th>
              </tr>
            </thead>
            <tbody>
              {OPTIONS_TABLE.map(row => (
                <tr key={row.vehicle}>
                  <td>{row.vehicle}</td>
                  <td>{row.cap}</td>
                  <td><span className={`ac-badge${row.ac === 'Premium AC' ? ' climate' : ''}`}>{row.ac}</span></td>
                  <td>{row.ideal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="table-note">* All vehicles come with verified and trained drivers, clean interiors, and proper luggage space. Call 9044019511 for instant quote and availability confirmation.</p>

        {/* AIRPORT FARE TABLE */}
        <h2 className="section-title green">Tempo Traveller Rental Charges from Ayodhya Airport</h2>
        <div className="fare-table-wrap">
          <table className="fare-table">
            <thead>
              <tr>
                <th>Tempo Traveller Option</th><th>Airport Pickup Price</th><th>Airport Drop Price</th><th>Outstation Rate</th>
              </tr>
            </thead>
            <tbody>
              {AIRPORT_TABLE.map(row => (
                <tr key={row.vehicle}>
                  <td>{row.vehicle}</td>
                  <td>
                    {row.pickup === 'On Request'
                      ? <a href="tel:+919044019511" className="call-now-btn"><PhoneIcon />&nbsp;Call Now</a>
                      : <span className="fare-value">{row.pickup}</span>}
                  </td>
                  <td>
                    {row.drop === 'On Request'
                      ? <a href="tel:+919044019511" className="call-now-btn"><PhoneIcon />&nbsp;Call Now</a>
                      : <span className="fare-value">{row.drop}</span>}
                  </td>
                  <td>
                    {row.outstation === 'On Request'
                      ? <a href="tel:+919044019511" className="call-now-btn"><PhoneIcon />&nbsp;Call Now</a>
                      : <span className="fare-value">{row.outstation}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="table-note">* Airport parking charges payable as per airport authority rules. Toll tax, parking charges, and driver allowance are clearly discussed in advance. No hidden charges. Call 9044019511 for best price and instant confirmation.</p>

        {/* PERFECT FOR */}
        <h2 className="section-title orange">Perfect For</h2>
        <div className="use-tags">
          {USE_TAGS.map(t => <span key={t} className="use-tag">{t}</span>)}
        </div>

        {/* WHY AYODHYA */}
        <div className="why-tempo-section">
          <h2 className="section-title">Why Millions of Tourists and Pilgrims Visit Ayodhya Every Year</h2>
          <div className="why-tempo-content">
            <p>Ayodhya is popular among visitors because it holds a deep spiritual, cultural, and historical significance that touches the hearts of millions of people across India and the world. Known as the birthplace of Lord Shri Ram, Ayodhya is one of the most important pilgrimage destinations in Hinduism. One of the biggest reasons people visit Ayodhya is the Shri Ram Janmabhoomi — Ram Mandir. Devotees come here to seek blessings, offer prayers, and experience the peaceful and devotional atmosphere. The temple has become a symbol of faith and devotion, attracting pilgrims throughout the year.</p>
            <p>Ayodhya is also home to many other sacred temples such as Hanuman Garhi, Kanak Bhawan, Nageshwarnath Temple, and Dashrath Mahal, making it a perfect place for a complete spiritual journey. Apart from its religious importance, Ayodhya has a rich mythological and historical background. The city is closely linked to the Ramayana, which makes it special for those interested in Indian culture, traditions, and ancient stories. The evening aarti on the Sarayu River is a beautiful experience that leaves a lasting impression on visitors.</p>
            <p>With better roads, railway connectivity, and improved tourism facilities, Ayodhya has become easier to reach — making it a preferred destination for families, senior citizens, and group travellers. In simple words, Ayodhya offers a unique mix of faith, history, culture, and inner peace, making every visit meaningful and memorable. A tempo traveller from Yatra Travel India keeps your entire group together, comfortable, and free to focus entirely on your darshan and prayers.</p>
          </div>
        </div>

        {/* BENEFITS */}
        <h2 className="section-title">Why Choose Yatra Travel India for Tempo Traveller Hire in Ayodhya</h2>
        <div className="benefits-grid">
          {BENEFITS.map(b => (
            <div key={b.title} className="benefit-card">
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>

        {/* INCLUSIONS / EXCLUSIONS — same design as Kanpur */}
        <h2 className="section-title">Fare Inclusions and Exclusions</h2>
        <div className="ei-split">
          <div className="ei-box">
            <div className="ei-box-header">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
              <span>INCLUDED</span>
            </div>
            <ul>
              {INCLUDED.map(item => (
                <li key={item}><CheckIcon />{item}</li>
              ))}
            </ul>
          </div>
          <div className="ei-box">
            <div className="ei-box-header">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              <span>EXCLUDED</span>
            </div>
            <ul>
              {EXCLUDED.map(item => (
                <li key={item}><CrossIcon />{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* PLACES TO VISIT */}
        <h2 className="section-title orange" id="attractions">Sacred Places to Visit in Ayodhya by Tempo Traveller</h2>
        <div className="attractions-grid">
          {ATTRACTIONS.map(a => (
            <div key={a.title} className="attraction-card">
              <h4>{a.title}</h4>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>

        {/* MOST BOOKED ROUTES */}
        <h2 className="section-title">Most Booked Tempo Traveller Routes from Ayodhya</h2>
        <div className="routes-grid">
          {ROUTES.map(r => (
            <div key={r.title} className="route-card">
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>

        {/* BEST TIME TO VISIT */}
        <h2 className="section-title">Best Time to Visit Ayodhya with Family — Plan Your Trip</h2>
        <div className="season-grid">
          {SEASONS.map(s => (
            <div key={s.title} className="season-card">
              <h4>{s.title}</h4>
              {s.paras.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          ))}
        </div>

        {/* THINGS TO KNOW */}
        <h2 className="section-title">Things to Know Before Booking Tempo Traveller in Ayodhya</h2>
        <div className="why-grid">
          {WHY_CARDS.map(w => (
            <div key={w.title} className="why-card">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="#0f6ec8"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* NOTE BOX */}
        <div className="note-box">
          <p><strong>Festival and Peak Season Advance Booking:</strong> Ayodhya sees massive crowds during <strong>Ram Navami, Diwali, Makar Sankranti, and Ram Mandir special events.</strong> Book your tempo traveller at least <strong>3 to 5 days in advance</strong> during peak season. Luxury and Maharaja tempo travellers fill up faster — confirm at least <strong>1 week ahead</strong> for VIP and senior citizen group bookings. Call 9044019511 for immediate availability check.</p>
        </div>

        {/* FAQ */}
        <h2 className="section-title">Frequently Asked Questions — Tempo Traveller in Ayodhya</h2>
        <div className="faq-grid">
          {FAQS.map(f => (
            <div key={f.q} className="faq-item">
              <strong>{f.q}</strong>
              <p>{f.a}</p>
            </div>
          ))}
        </div>

        {/* CTA BANNER */}
        <div className="cta-banner">
          <div>
            <h3>Book Your Ayodhya Group Trip Today</h3>
            <p>Travel comfortably and safely for Ram Mandir darshan, family trips, pilgrimage tours, wedding groups, or outstation travel. Call or WhatsApp Yatra Travel India on 9044019511 for instant booking and best price.</p>
          </div>
          <div className="cta-buttons">
            <button className="btn-cta-primary" onClick={() => window.location.href = 'tel:+919044019511'}>
              Call Now — +91 90440 19511
            </button>
            <button className="btn-cta-secondary" onClick={() => window.open('https://wa.me/919044019511')}>
              WhatsApp Us
            </button>
          </div>
        </div>

        {/* POPULAR ROUTES GRID */}
        <div className="popular-routes-section">
          <h2 className="section-title">Popular Tempo Traveller Routes from Ayodhya</h2>
          <div className="popular-routes-grid">
            {POPULAR_ROUTES.map(r => (
              <div key={r} className="pr-item">
                <a href="#">{r}</a>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon" style={{ width: 40, height: 40 }}>
                <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
                  <path d="M4 20 L8 10 L14 17 L20 8 L24 20 Z" fill="#fff" stroke="#fff" strokeWidth=".5" />
                  <circle cx="8" cy="22" r="2.5" fill="#ff6b35" />
                  <circle cx="20" cy="22" r="2.5" fill="#ff6b35" />
                  <rect x="6" y="18" width="16" height="5" rx="1" fill="none" stroke="#fff" strokeWidth="1" />
                </svg>
              </div>
              <div className="logo-text-wrap">
                <span className="logo-main">Yatra<span>Travel</span></span>
                <span className="logo-sub">India</span>
              </div>
            </div>
            <p>India&apos;s trusted tempo traveller and bus rental platform. Serving 50+ cities with 1000+ vehicles for pilgrimage, corporate, and leisure travel.</p>
            <div className="footer-social">
              <a href="#">FB</a><a href="#">IG</a><a href="#">TW</a><a href="#">YT</a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Services in Ayodhya</h5>
            <ul>
              {['9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Urbania Tempo', '20 Seater Tempo Traveller', 'Luxury Tempo Traveller', 'Maharaja Tempo Traveller'].map(s => (
                <li key={s}><a href="#">{s}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Popular Routes</h5>
            <ul>
              {['Ram Mandir Darshan Tour', 'Ayodhya to Varanasi', 'Ayodhya to Lucknow', 'Ayodhya to Delhi', 'Ayodhya to Prayagraj', 'Ayodhya Airport Transfer'].map(r => (
                <li key={r}><a href="#">{r}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cancellation Policy</a></li>
              <li><a href="/#contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>2025 Yatra Travel India. All rights reserved. Serving group travel across India. Made in India with love.</p>
          <div className="footer-payments">
            {['UPI', 'Net Banking', 'Cash', 'Credit Card'].map(p => (
              <span key={p} className="fp">{p}</span>
            ))}
          </div>
        </div>
      </footer>

      {/* FLOATING BUTTONS — same as Kanpur (call + WhatsApp) */}
      <a href="tel:+919044019511" className="call-float">
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" width="26" height="26">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.11 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
        </svg>
      </a>
      <a href="https://wa.me/919044019511" className="wa-float" target="_blank" rel="noreferrer">
        <svg viewBox="0 0 24 24" fill="#fff" width="28" height="28">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      <Toast ref={toastRef} />
    </>
  )
}
