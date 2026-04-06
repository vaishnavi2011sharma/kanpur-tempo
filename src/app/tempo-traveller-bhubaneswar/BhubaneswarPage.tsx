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
const BOOKING_TABS = ['Local Sightseeing', 'Puri and Konark', 'Wedding Transfer', 'Outstation']
const VEHICLE_OPTIONS = [
  'Select Vehicle', '9 Seater Tempo Traveller', '12 Seater Tempo Traveller',
  '16 Seater Tempo Traveller', '20 Seater Tempo Traveller',
  '24 Seater Tempo Traveller', 'Luxury Tempo Traveller',
]

const VEHICLES = [
  {
    badge: 'Rs 3,000 Local', title: '9 Seater Tempo Traveller', popular: 'Small Groups',
    color: '#0f6ec8', badgeOrange: false,
    price: 'Rs.5,800', priceLabel: ' local onwards',
    specs: [
      { label: '6–9 People', sub: 'Group Size' },
      { label: 'Rs.5,800', sub: '8 hrs / 80 km' },
      { label: 'Rs.23/km', sub: 'Outstation Rate' },
      { label: 'Pushback Seats', sub: 'Music System' },
    ],
    tags: ['Full AC', 'Pushback Seats', 'Temple Tour', 'Short Trips'],
    tagOrange: false, btnLabel: 'Book 9 Seater', selectKey: '9 Seater Tempo Traveller',
  },
  {
    badge: 'Rs 6,200 Local', title: '12 Seater Tempo Traveller', popular: 'Most Booked',
    color: '#0f6ec8', badgeOrange: false,
    price: 'Rs.6,200', priceLabel: ' local onwards',
    specs: [
      { label: '10–12 People', sub: 'Group Size' },
      { label: 'Rs.6,200', sub: '8 hrs / 80 km' },
      { label: 'Rs.24/km', sub: 'Outstation Rate' },
      { label: 'LED TV', sub: 'Charging Points' },
    ],
    tags: ['Full AC', 'LED TV', 'Puri Trip', 'Konark Tour'],
    tagOrange: false, btnLabel: 'Book 12 Seater', selectKey: '12 Seater Tempo Traveller',
  },
  {
    badge: 'Rs 7,500 Local', title: '16 Seater Tempo Traveller', popular: '',
    color: '#0f6ec8', badgeOrange: false,
    price: 'Rs.7,500', priceLabel: ' local onwards',
    specs: [
      { label: '13–16 People', sub: 'Group Size' },
      { label: 'Rs.7,500', sub: '8 hrs / 80 km' },
      { label: 'Rs.26/km', sub: 'Outstation Rate' },
      { label: 'Reclining Seats', sub: 'Multi-Zone AC' },
    ],
    tags: ['Multi-Zone AC', 'Reclining Seats', 'Corporate Groups', 'School Trips'],
    tagOrange: false, btnLabel: 'Book 16 Seater', selectKey: '16 Seater Tempo Traveller',
  },
  {
    badge: 'Rs 9,500 Local', title: '20 Seater Tempo Traveller', popular: 'Large Groups',
    color: '#ff6b35', badgeOrange: true,
    price: 'Rs.9,500', priceLabel: ' local onwards',
    specs: [
      { label: '17–20 People', sub: 'Group Size' },
      { label: 'Rs.9,500', sub: '8 hrs / 80 km' },
      { label: 'Rs.30/km', sub: 'Outstation Rate' },
      { label: 'Large Boot', sub: 'Entertainment' },
    ],
    tags: ['Full AC', 'Large Boot', 'Pilgrimage Groups', 'Wedding Parties'],
    tagOrange: true, btnLabel: 'Book 20 Seater', selectKey: '20 Seater Tempo Traveller',
  },
  {
    badge: 'Rs 11,000 Local', title: 'Luxury Tempo Traveller', popular: 'VIP and Weddings',
    color: '#0f6ec8', badgeOrange: false,
    price: 'Rs.11,000', priceLabel: ' local onwards',
    specs: [
      { label: '9–16 People', sub: 'Group Size' },
      { label: 'Rs.11,000', sub: '8 hrs / 80 km' },
      { label: 'Rs.30+/km', sub: 'Outstation Rate' },
      { label: 'WiFi · Mini Fridge', sub: 'LED Lighting' },
    ],
    tags: ['Leather Seats', 'WiFi', 'Mini Fridge', 'LED Lighting'],
    tagOrange: false, btnLabel: 'Book Luxury Tempo', selectKey: 'Luxury Tempo Traveller',
  },
]

const LOCAL_FARE_TABLE = [
  { vehicle: '9 Seater Tempo Traveller', seating: '6 to 9 people', fare: 'Rs 5,800 onwards', hours: '8 hours', km: '80 km' },
  { vehicle: '12 Seater Tempo Traveller', seating: '10 to 12 people', fare: 'Rs 6,200 onwards', hours: '8 hours', km: '80 km' },
  { vehicle: '16 Seater Tempo Traveller', seating: '13 to 16 people', fare: 'Rs 7,500 onwards', hours: '8 hours', km: '80 km' },
  { vehicle: '20 Seater Tempo Traveller', seating: '17 to 20 people', fare: 'Rs 9,500 onwards', hours: '8 hours', km: '80 km' },
  { vehicle: 'Luxury Tempo Traveller', seating: '9 to 16 people', fare: 'Rs 11,000 onwards', hours: '8 hours', km: '80 km' },
]

const OUTSTATION_TABLE = [
  { vehicle: '9 Seater Tempo Traveller', seating: '6 to 9 people', rate: 'Rs 23/km', features: 'Pushback seats, AC, music system' },
  { vehicle: '12 Seater Tempo Traveller', seating: '10 to 12 people', rate: 'Rs 24/km', features: 'LED TV, charging points, luggage space' },
  { vehicle: '16 Seater Tempo Traveller', seating: '13 to 16 people', rate: 'Rs 26/km', features: 'Reclining seats, multi-zone AC' },
  { vehicle: '20 Seater Tempo Traveller', seating: '17 to 20 people', rate: 'Rs 30/km', features: 'Large boot, entertainment system' },
  { vehicle: 'Luxury Tempo Traveller', seating: '9 to 16 people', rate: 'Rs 30/km onwards', features: 'Leather seats, WiFi, mini fridge, LED lighting' },
]

const USE_TAGS = [
  'Bhubaneswar Temple Circuit Tour', 'Golden Triangle Odisha Tour',
  'Puri Jagannath Dham Pilgrimage', 'Konark Sun Temple Visit',
  'Chilika Lake Day Trip', 'Baripada and Simlipal',
  'Bhitarkanika Wildlife Tour', 'Wedding Guest Transfers',
  'Corporate Offsite Odisha', 'School Excursion Trips',
  'Gopalpur Beach Weekend', 'Multi-Day Odisha Tour',
]

const BENEFITS = [
  { title: 'One Vehicle for the Whole Group', desc: 'No splitting the group across multiple cabs. Everyone travels together from the same pickup point and arrives at the same time. No coordination stress, no waiting for stragglers — especially important on Bhubaneswar temple tours.' },
  { title: 'Budget Friendly Fares', desc: 'Starting at Rs 3,000 for a 9 seater and Rs 4,200 for a 12 seater. Split across the group and the per head cost is almost always lower than booking individual cabs across Bhubaneswar.' },
  { title: 'Transparent Fixed Pricing', desc: 'Fare confirmed before the trip starts. Fuel, toll, parking, and driver allowance all included. No meter running, no surprise additions at the end of the day.' },
  { title: 'Well Maintained Fleet', desc: 'Every vehicle is regularly serviced and checked before each trip. Clean interiors, working AC, good tyre condition — reliable on every route from Lingaraj Temple local tours to long outstation trips to Puri and Konark.' },
  { title: 'Experienced Local Drivers', desc: 'Drivers who know Bhubaneswar city roads, temple routes, and all major Odisha outstation highways personally. Not first-timers on unfamiliar roads — local knowledge makes the journey smoother.' },
  { title: 'On-Time Pickup Every Time', desc: 'Driver details shared the night before. Vehicle at your door at the confirmed time. No chasing, no waiting — especially critical for early morning temple visits and pilgrimage departures.' },
]

const INCLUDED = ['5% GST', 'Driver Day Charge', 'Fuel Charge', 'Base Fare of Tempo Traveller', 'Driver Accommodation (Multi-day trips)']
const EXCLUDED = [
  'Toll Tax during trip',
  'State Tax if applicable paid by Customer',
  'Parking Charges as per actual and paid by customer',
  'Airport Parking Charge as per actual and paid by customer',
  'Driver Night Charge (Sedan – 250, SUV – 300, Tempo Traveller – 500)',
  'Carrier Charge Extra – 300',
]

const WEDDING_LIST = [
  'Guest pickup and drop between hotel and wedding venue',
  'Baraat group travel in one vehicle',
  'Reception to hotel transfers after the function',
  'Airport pickup for outstation wedding guests',
  'Multi-day wedding event transfers across Bhubaneswar',
  '12, 16 and 20 seater available for all group sizes',
]

const ATTRACTIONS = [
  { title: 'Lingaraj Temple, Bhubaneswar', desc: 'One of the oldest and most significant temples in India. Dedicated to Lord Shiva, this magnificent 11th century Kalinga-style temple is the spiritual heart of Bhubaneswar. Driver knows the best parking approach and the correct entry points. A must-start for any Bhubaneswar temple circuit by tempo traveller.' },
  { title: 'Puri Jagannath Dham', desc: 'Around 60 km from Bhubaneswar. One of the four sacred Char Dham sites in India. The Jagannath Temple complex and Puri beach together make this the single most popular outstation route from Bhubaneswar. Starting fare Rs 6,500 for a 12 seater covering the full Golden Triangle Odisha route.' },
  { title: 'Konark Sun Temple', desc: 'Around 65 km from Bhubaneswar. A UNESCO World Heritage Site and one of the greatest examples of Kalinga architecture. The massive chariot-shaped temple dedicated to the Sun God draws pilgrims and tourists from across India. Best covered together with Puri on the Golden Triangle Odisha route.' },
  { title: 'Udayagiri and Khandagiri Caves', desc: 'Around 7 km from Bhubaneswar city centre. Ancient Jain rock-cut caves dating back to the 2nd century BC. Popular school picnic and heritage group tour destination. Easy half-day stop to combine with other Bhubaneswar sightseeing including Nandankanan Zoological Park on the same day tour.' },
  { title: 'Dhauli Peace Pagoda', desc: 'Around 8 km from Bhubaneswar. The site of the famous Kalinga War where Emperor Ashoka renounced violence and embraced Buddhism. The white Peace Pagoda built by Japanese Buddhist organisations sits atop a hill overlooking the Daya River. A meaningful heritage stop on any Bhubaneswar local sightseeing tour.' },
  { title: 'Chilika Lake', desc: 'Around 100 km from Bhubaneswar. Asia\'s largest brackish water lagoon. Famous for migratory birds, Irrawaddy dolphins, and the Kalijai Temple island. Best visited between November and February when migratory birds from Siberia, Iran, and Central Asia arrive. A full-day group outing from Bhubaneswar by tempo traveller.' },
  { title: 'Bhitarkanika National Park', desc: 'Around 165 km from Bhubaneswar. Fare from Rs 7,500 for a 12 seater. One of the most spectacular eco-tourism destinations in India — dense mangrove forests, saltwater crocodiles, and migratory birds. Popular multi-day wildlife group trip from Bhubaneswar.' },
  { title: 'Baripada and Simlipal National Park', desc: 'Around 240 km from Bhubaneswar. Fare from Rs 8,500 for a 12 seater. Gateway to Simlipal National Park — one of India\'s largest tiger reserves covering over 2,700 square kilometres of forest. Popular with wildlife and nature-loving groups from Bhubaneswar. Drive takes around 4 to 5 hours.' },
]

const WHY_CARDS = [
  { title: 'On-Time Pickup Every Time', desc: 'Driver details shared the night before. Vehicle at your door at the confirmed time. No chasing, no waiting — for temple tours, pilgrimage groups, and early morning departures.' },
  { title: 'Budget Friendly Starting at Rs 3,000', desc: 'Most affordable tempo traveller rates in Bhubaneswar. Starting at Rs 3,000 for 9 seater and Rs 4,200 for 12 seater. Transparent pricing, nothing added after the trip.' },
  { title: 'Well Maintained and Clean Fleet', desc: 'Every vehicle is regularly serviced, clean interiors, working AC, good tyre condition. Reliable on every route from Lingaraj Temple local tours to Puri, Konark, and Simlipal outstation.' },
  { title: 'Experienced Odisha Route Drivers', desc: 'Drivers who know Bhubaneswar city roads, temple routes, Puri highway, Konark road, and all major Odisha outstation highways personally. Local knowledge on every route.' },
  { title: 'Right Size for Every Group', desc: '9 seater, 12 seater, 16 seater, 20 seater, and 24 seater available. Small pilgrim family or large corporate team, there is a vehicle that fits exactly without paying for empty seats.' },
  { title: 'One Call Booking', desc: 'Call 9044019511. Share group size, travel date, and route. Booking confirmed on the same call with vehicle details, driver name, and fixed fare. No documentation required from the group.' },
]

const FAQS = [
  { q: 'Q1. Is a tempo traveller better than booking multiple cabs in Bhubaneswar?', a: 'Yes. A tempo traveller in Bhubaneswar keeps the whole group in one vehicle. No splitting up, no coordination across multiple cabs, no one arriving late. And when the fare is split across 10 or 12 people the per head cost beats individual cabs on almost every route from Bhubaneswar.' },
  { q: 'Q2. Can I hire a tempo traveller in Bhubaneswar for a corporate offsite?', a: 'Yes. Corporate tempo traveller hire in Bhubaneswar is one of the most regularly booked services. Office outings, team retreats, client transfers across Odisha. 12 and 16 seater most popular for corporate groups. Professional driver, confirmed vehicle, fixed fare agreed upfront. Call 9044019511 to book.' },
  { q: 'Q3. What is the best tempo traveller route for a Golden Triangle Odisha trip from Bhubaneswar?', a: 'The most popular Golden Triangle Odisha route by tempo traveller from Bhubaneswar covers Bhubaneswar, Puri, and Konark in one full day. Starting fare Rs 6,500 for a 12 seater covering all three destinations. Temples, beaches, and heritage sites all in one comfortable group trip.' },
  { q: 'Q4. How much does a 20 seater tempo traveller cost in Bhubaneswar?', a: '20 seater tempo traveller in Bhubaneswar starts at Rs 9,500 for a local tour of 8 hours and 80 km. Outstation rate starts at Rs 30 per km. Best for large pilgrimage groups, wedding parties, and college batch trips from Bhubaneswar. Call 9044019511 to confirm availability.' },
  { q: 'Q5. Is tempo traveller available for school picnic trips from Bhubaneswar?', a: 'Yes. Tempo traveller for school trips from Bhubaneswar is regularly booked for educational tours, picnics, and excursions. Nandankanan Zoological Park, Udayagiri Khandagiri Caves, Dhauli Peace Pagoda. Safe well-maintained vehicles, experienced drivers, fixed group fare. Call 9044019511 to book.' },
  { q: 'Q6. What is the tempo traveller fare from Bhubaneswar to Odisha temple circuit?', a: 'Tempo traveller for Odisha temple circuit from Bhubaneswar covers Lingaraj Temple, Mukteshwar Temple, Rajarani Temple, Ananta Vasudeva Temple, and ISKCON Temple. Full day local package starts at Rs 4,200 for a 12 seater. All major Bhubaneswar temples covered comfortably in one day.' },
  { q: 'Q7. Can I book a tempo traveller in Bhubaneswar for a multi-day Odisha tour?', a: 'Yes. Multi-day tempo traveller package from Bhubaneswar is available covering major Odisha destinations. Bhubaneswar, Puri, Konark, Chilika Lake, Simlipal, and Baripada in one extended group tour. Driver accommodation included for overnight stops. Fare confirmed upfront for full trip duration. Call 9044019511 to plan and book.' },
  { q: 'Q8. Is tempo traveller available from Bhubaneswar to Baripada?', a: 'Yes. Tempo traveller Bhubaneswar to Baripada starts at Rs 8,500 for a 12 seater. Baripada is 240 km from Bhubaneswar and is the gateway to Simlipal National Park. Popular with wildlife and nature-loving groups from Bhubaneswar. Drive takes around 4 to 5 hours.' },
  { q: 'Q9. What is the tempo traveller fare from Bhubaneswar to Gopalpur Beach?', a: 'Tempo traveller Bhubaneswar to Gopalpur Beach fare starts at Rs 9,000 for a 12 seater. Gopalpur is 180 km from Bhubaneswar. Popular weekend beach getaway for groups. Smooth highway drive, easy day trip or overnight package available. Call 9044019511 to book.' },
  { q: 'Q10. Can I get a tempo traveller in Bhubaneswar with a driver who knows Odisha pilgrimage routes?', a: 'Yes. Every tempo traveller driver at Yatra Travel India in Bhubaneswar is familiar with all major Odisha pilgrimage routes. Jagannath Puri, Konark, Lingaraj Temple, Taratarini Temple, Maa Samaleswari Temple. Local route knowledge makes a real difference on pilgrimage group tours.' },
  { q: 'Q11. What is the tempo traveller fare from Bhubaneswar to Bhitarkanika?', a: 'Tempo traveller Bhubaneswar to Bhitarkanika fare starts at Rs 7,500 for a 12 seater. Bhitarkanika National Park is 165 km from Bhubaneswar. Popular eco tourism and wildlife group destination — mangrove forests, saltwater crocodiles, and migratory birds. Multi-day package available. Call 9044019511 to book.' },
  { q: 'Q12. What makes Yatra Travel India the best tempo traveller service in Bhubaneswar?', a: 'Best tempo traveller service in Bhubaneswar means vehicle on time, driver knows every Odisha route, fare exactly as agreed. Yatra Travel India offers well-maintained fleet, new vehicles, transparent pricing, experienced drivers on all local and outstation routes across Odisha. 9 seater to luxury tempo traveller all available. Call 9044019511 to book today.' },
]

const POPULAR_ROUTES = [
  'Bhubaneswar Temple Circuit Tour', 'Bhubaneswar to Puri Tempo Traveller',
  'Bhubaneswar to Konark Tempo Traveller', 'Golden Triangle Odisha Tour',
  'Bhubaneswar to Chilika Lake', 'Bhubaneswar to Bhitarkanika Tour',
  'Bhubaneswar to Baripada Simlipal', 'Bhubaneswar to Gopalpur Beach',
  'Lingaraj Temple Local Tour', 'Udayagiri Khandagiri Caves Tour',
  'Dhauli Peace Pagoda Day Trip', 'Bhubaneswar Airport Group Transfer',
  'Bhubaneswar Wedding Guest Transport', 'Bhubaneswar Corporate Offsite',
  'School Picnic Nandankanan Zoo', 'Multi-Day Odisha Tour Package',
  '12 Seater Tempo Traveller Bhubaneswar', '20 Seater Tempo Traveller Bhubaneswar',
  'Luxury Tempo Traveller Bhubaneswar', 'Bhubaneswar to Sambalpur Tempo Traveller',
]

/* ─── PAGE ─── */
export default function BhubaneswarPage() {
  const toastRef = useRef<ToastHandle>(null)
  const bookingRef = useRef<HTMLDivElement>(null)
  const [selectedVehicle, setSelectedVehicle] = useState('Select Vehicle')

  const showToast = useCallback((msg: string) => toastRef.current?.show(msg), [])
  const scrollToBooking = useCallback(() => bookingRef.current?.scrollIntoView({ behavior: 'smooth' }), [])

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
          <p>Best Tempo Traveller Service in Bhubaneswar — Puri, Konark, Chilika Lake and All Odisha Routes</p>
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
          <span>Tempo Traveller in Bhubaneswar</span>
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-heading">Best Tempo Traveller Service in Bhubaneswar</h1>
          <p className="hero-sub">Lingaraj Temple · Puri Jagannath Dham · Konark Sun Temple · Chilika Lake · Baripada Simlipal · Golden Triangle Odisha</p>
          <div className="hero-badges">
            {['9 to 24 Seater Available', 'Starting Rs 3,000', 'Luxury Tempo Traveller', 'No Hidden Charges'].map(b => (
              <span key={b} className="hero-badge">{b}</span>
            ))}
          </div>
          <div ref={bookingRef}>
            <BookingCard
              onSearch={showToast}
              selectedVehicle={selectedVehicle}
              defaultCity="Bhubaneswar"
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
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0f6ec8" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>, title: 'On-Time Pickup', sub: 'Driver details shared night before' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0f6ec8" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg>, title: 'Transparent Fixed Fare', sub: 'Everything included, nothing added after' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0f6ec8" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>, title: 'Well Maintained Fleet', sub: 'Regularly serviced, clean interiors' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0f6ec8" strokeWidth="2"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>, title: 'Experienced Local Drivers', sub: 'Know all Bhubaneswar and Odisha routes' },
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
          <p>Yatra Travel India offers <strong>budget-friendly tempo travellers in Bhubaneswar</strong> for every group size — starting at <strong>Rs 3,000 for a 9 seater</strong> and <strong>Rs 4,200 for a 12 seater.</strong> Transparent pricing, no hidden charges, fare confirmed before the trip starts. Whether your group is heading to Lingaraj Temple, Puri Jagannath Dham, Konark Sun Temple, or anywhere across Odisha, Yatra Travel India has the right vehicle at the right price. Call <strong>9044019511</strong> to book today.</p>
        </div>

        {/* INTRO */}
        <div className="intro-section">
          <h1>Best Tempo Traveller Service in Bhubaneswar — Yatra Travel India</h1>
          <p>Travelling with a group in Bhubaneswar does not have to be expensive. Yatra Travel India offers budget-friendly tempo travellers in Bhubaneswar for every group size — starting at Rs 3,000 for a 9 seater and Rs 4,200 for a 12 seater. Transparent pricing, no hidden charges, and fare confirmed before the trip starts.</p>
          <p>Whether your group is heading to Lingaraj Temple, Puri Jagannath Dham, Konark Sun Temple, or anywhere across Odisha, Yatra Travel India has the right vehicle at the right price. Split the fare across 10 or 12 people and the per head cost beats individual cabs on every route. Every booking includes fuel, toll, parking, and driver allowance — no surprise additions after the trip. Budget-friendly does not mean compromising on comfort or reliability. Every tempo traveller in the Yatra Travel India fleet is well maintained, regularly serviced, and driven by an experienced driver who knows Bhubaneswar and all major Odisha routes personally.</p>
        </div>

        {/* VEHICLE CARDS */}
        <h2 className="section-title" id="services">Vehicle Options Available in Bhubaneswar</h2>
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

        {/* LOCAL FARE TABLE */}
        <h2 className="section-title green">Tempo Traveller Pricing — Local Sightseeing in Bhubaneswar</h2>
        <div className="fare-table-wrap">
          <table className="fare-table">
            <thead>
              <tr><th>Vehicle</th><th>Seating</th><th>Local Fare</th><th>Hours</th><th>KM Limit</th></tr>
            </thead>
            <tbody>
              {LOCAL_FARE_TABLE.map(row => (
                <tr key={row.vehicle}>
                  <td>{row.vehicle}</td>
                  <td>{row.seating}</td>
                  <td><span className="fare-value">{row.fare}</span></td>
                  <td>{row.hours}</td>
                  <td>{row.km}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="table-note">* Budget-friendly starting fares: Rs 3,000 for 9 seater and Rs 4,200 for 12 seater — contact 9044019511 for these special rates. Fare includes fuel, toll, parking, and driver allowance. No hidden charges.</p>

        {/* OUTSTATION FARE TABLE */}
        <h2 className="section-title green">Tempo Traveller Pricing — Outstation Trips from Bhubaneswar</h2>
        <div className="fare-table-wrap">
          <table className="fare-table">
            <thead>
              <tr><th>Vehicle</th><th>Seating</th><th>Per KM Rate</th><th>Key Features</th></tr>
            </thead>
            <tbody>
              {OUTSTATION_TABLE.map(row => (
                <tr key={row.vehicle}>
                  <td>{row.vehicle}</td>
                  <td>{row.seating}</td>
                  <td><span className="fare-value">{row.rate}</span></td>
                  <td>{row.features}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="table-note">* Per km rate covers full distance both ways. Rate includes fuel, toll, parking, driver allowance, and state tax for outstation trips. No extra charges after the trip. Call 9044019511 for exact quote.</p>

        {/* PERFECT FOR */}
        <h2 className="section-title orange">Perfect For</h2>
        <div className="use-tags">
          {USE_TAGS.map(t => <span key={t} className="use-tag">{t}</span>)}
        </div>

        {/* BENEFITS */}
        <h2 className="section-title">Advantages of Booking Tempo Traveller in Bhubaneswar — Yatra Travel India</h2>
        <div className="benefits-grid">
          {BENEFITS.map(b => (
            <div key={b.title} className="benefit-card">
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>

        {/* INCLUSIONS / EXCLUSIONS */}
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

        {/* WEDDING SECTION — unique to Bhubaneswar */}
        <h2 className="section-title">Tempo Traveller for Wedding Groups in Bhubaneswar</h2>
        <div className="wedding-services">
          <h3>Wedding Transport in Bhubaneswar — On Time, Together, Comfortable</h3>
          <p>Wedding transport in Bhubaneswar needs to work perfectly. No delays, no confusion, no guests stranded at the wrong venue. A tempo traveller from Yatra Travel India keeps the whole wedding party together, on time, and comfortable throughout the day.</p>
          <p>Moving guests between mandap, hotel, and reception across Bhubaneswar in multiple cabs always creates problems. Someone gets delayed, someone takes a wrong turn, and the bride&apos;s family is waiting while half the guests are still on the way. One tempo traveller removes all of that. One pickup, one vehicle, everyone arrives together.</p>
          <div className="wedding-list">
            {WEDDING_LIST.map(item => (
              <div key={item} className="wedding-list-item">{item}</div>
            ))}
          </div>
        </div>

        {/* ATTRACTIONS */}
        <h2 className="section-title orange" id="attractions">Places to Visit in and Around Bhubaneswar by Tempo Traveller</h2>
        <div className="attractions-grid">
          {ATTRACTIONS.map(a => (
            <div key={a.title} className="attraction-card">
              <h4>{a.title}</h4>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>

        {/* WHY CHOOSE US */}
        <h2 className="section-title">Why Choose Yatra Travel India for Tempo Traveller in Bhubaneswar</h2>
        <div className="why-grid">
          {WHY_CARDS.map(w => (
            <div key={w.title} className="why-card">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="#0f6ec8">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
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
          <p><strong>Advance Booking Recommended:</strong> For the <strong>Golden Triangle Odisha tour (Bhubaneswar–Puri–Konark)</strong> and <strong>Rath Yatra season</strong> in Puri, book at least <strong>2 to 3 weeks in advance.</strong> For school trips, <strong>Chilika Lake group tours</strong> during November–February bird season, and <strong>wedding transfers</strong> book at least 7 to 10 days ahead. For luxury tempo traveller bookings, confirm availability at least 1 week in advance regardless of season.</p>
        </div>

        {/* FAQ */}
        <h2 className="section-title">Frequently Asked Questions — Tempo Traveller in Bhubaneswar</h2>
        <div className="faq-grid">
          {FAQS.map(f => (
            <div key={f.q} className="faq-item">
              <strong>{f.q}</strong>
              <p>{f.a}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="cta-banner">
          <div>
            <h3>Book Your Bhubaneswar Group Trip Today</h3>
            <p>Budget-friendly fares, well-maintained fleet, experienced local drivers, fixed transparent pricing. Call 9044019511 — tell us your group size, route, and travel date. We will handle everything else.</p>
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

        {/* POPULAR ROUTES */}
        <div className="popular-routes-section">
          <h2 className="section-title">Popular Tempo Traveller Routes from Bhubaneswar</h2>
          <div className="popular-routes-grid">
            {POPULAR_ROUTES.map(r => (
              <div key={r} className="pr-item"><a href="#">{r}</a></div>
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
            <h5>Services in Bhubaneswar</h5>
            <ul>
              {['9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', '24 Seater Tempo Traveller', 'Luxury Tempo Traveller'].map(s => (
                <li key={s}><a href="#">{s}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Popular Routes</h5>
            <ul>
              {['Bhubaneswar to Puri', 'Bhubaneswar to Konark', 'Golden Triangle Odisha', 'Bhubaneswar to Chilika Lake', 'Bhubaneswar to Baripada', 'Bhubaneswar to Bhitarkanika'].map(r => (
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

      {/* FLOATING BUTTONS */}
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
