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
const BOOKING_TABS = ['Local Sightseeing', 'Rohtang / Solang', 'Manali to Leh', 'Spiti / Outstation']
const VEHICLE_OPTIONS = [
  'Select Vehicle', '9 Seater Tempo Traveller', '12 Seater Tempo Traveller',
  '16 Seater Tempo Traveller', '20 Seater Tempo Traveller',
  'Luxury Tempo Traveller', 'Mercedes Tempo Traveller', '26 Seater Mini Bus', '35 Seater Bus',
]

const VEHICLES = [
  {
    badge: 'Rs 4,000 Local', title: '9 Seater Tempo Traveller', popular: 'Small Groups',
    color: '#0f6ec8', badgeOrange: false,
    price: 'Rs.4,000', priceLabel: ' local onwards',
    specs: [
      { label: '6–9 People', sub: 'Group Size' },
      { label: 'Rs.4,000', sub: 'Local 8 hrs/80 km' },
      { label: 'Rs.20/km', sub: 'Outstation Rate' },
      { label: 'Hill Roads', sub: 'Compact' },
    ],
    tags: ['Full AC', 'Pushback Seats', 'Solang Valley', 'Hidimba Temple'],
    tagOrange: false, btnLabel: 'Book 9 Seater', selectKey: '9 Seater Tempo Traveller',
  },
  {
    badge: 'Rs 5,000 Local', title: '12 Seater Tempo Traveller', popular: 'Most Booked',
    color: '#0f6ec8', badgeOrange: false,
    price: 'Rs.5,000', priceLabel: ' local onwards',
    specs: [
      { label: '10–12 People', sub: 'Group Size' },
      { label: 'Rs.5,000', sub: 'Local 8 hrs/80 km' },
      { label: 'Rs.23/km', sub: 'Outstation Rate' },
      { label: 'All Routes', sub: 'Including Leh' },
    ],
    tags: ['Full AC', 'Rohtang Pass', 'Manali to Leh', 'Spiti Valley'],
    tagOrange: false, btnLabel: 'Book 12 Seater', selectKey: '12 Seater Tempo Traveller',
  },
  {
    badge: 'Rs 7,000 Local', title: '16 Seater Tempo Traveller', popular: '',
    color: '#0f6ec8', badgeOrange: false,
    price: 'Rs.7,000', priceLabel: ' local onwards',
    specs: [
      { label: '13–16 People', sub: 'Group Size' },
      { label: 'Rs.7,000', sub: 'Local 8 hrs/80 km' },
      { label: 'Rs.28/km', sub: 'Outstation Rate' },
      { label: 'Corporate Retreats', sub: 'College Trips' },
    ],
    tags: ['Full AC', 'More Luggage Space', 'Multi-Day Routes', 'School Trips'],
    tagOrange: false, btnLabel: 'Book 16 Seater', selectKey: '16 Seater Tempo Traveller',
  },
  {
    badge: 'Rs 9,000 Local', title: '20 Seater Tempo Traveller', popular: 'Large Groups',
    color: '#ff6b35', badgeOrange: true,
    price: 'Rs.9,000', priceLabel: ' local onwards',
    specs: [
      { label: '17–20 People', sub: 'Group Size' },
      { label: 'Rs.9,000', sub: 'Local 8 hrs/80 km' },
      { label: 'Rs.32/km', sub: 'Outstation Rate' },
      { label: 'Wedding Parties', sub: 'Batch Trips' },
    ],
    tags: ['Full AC', 'Max Luggage', 'Wedding Groups', 'College Batch'],
    tagOrange: true, btnLabel: 'Book 20 Seater', selectKey: '20 Seater Tempo Traveller',
  },
  {
    badge: 'Rs 8,000 Local', title: 'Luxury Tempo Traveller', popular: 'VIP and Multi-Day',
    color: '#0f6ec8', badgeOrange: false,
    price: 'Rs.8,000', priceLabel: ' local onwards',
    specs: [
      { label: '10–15 People', sub: 'Group Size' },
      { label: 'Rs.8,000', sub: 'Local 8 hrs/80 km' },
      { label: 'Rs.35/km', sub: 'Outstation Rate' },
      { label: 'Air Suspension', sub: 'LCD Screens' },
    ],
    tags: ['Reclining Seats', 'Air Suspension', 'Leh Multi-Day', 'Corporate VIP'],
    tagOrange: false, btnLabel: 'Book Luxury Tempo', selectKey: 'Luxury Tempo Traveller',
  },
]

const FLEET_TABLE = [
  { vehicle: '9 Seater Tempo Traveller', group: '6 to 9 people', best: 'Local sightseeing, Solang Valley, Hidimba Temple — compact for narrow hill roads', local: 'Rs 4,000', outstation: 'Rs 20/km' },
  { vehicle: '12 Seater Tempo Traveller', group: '10 to 12 people', best: 'All routes including Rohtang Pass, Atal Tunnel, Leh highway — the most booked in Manali', local: 'Rs 5,000', outstation: 'Rs 23/km' },
  { vehicle: '16 Seater Tempo Traveller', group: '13 to 16 people', best: 'Corporate retreats, college trips, multi-day mountain routes — extra space for trekking gear', local: 'Rs 7,000', outstation: 'Rs 28/km' },
  { vehicle: '20 Seater Tempo Traveller', group: '17 to 20 people', best: 'Large groups, wedding parties, college batch trips — one vehicle, no splitting up', local: 'Rs 9,000', outstation: 'Rs 32/km' },
  { vehicle: 'Luxury Tempo Traveller', group: '10 to 15 people', best: 'Multi-day Manali to Leh, VIP corporate travel, destination weddings', local: 'Rs 8,000', outstation: 'Rs 35/km' },
  { vehicle: '26 Seater Mini Bus', group: '21 to 26 people', best: 'Large corporate teams, school excursions, highway routes to Chandigarh and Dharamshala', local: 'Rs 12,000', outstation: 'Rs 40/km' },
  { vehicle: '35 Seater Bus', group: '27 to 35 people', best: 'Very large groups, college events, community travel on local and highway routes', local: 'Rs 15,000', outstation: 'Rs 50/km' },
]

const USE_TAGS = [
  'Manali Local Sightseeing', 'Rohtang Pass Day Trip', 'Solang Valley Snow Trip',
  'Manali to Leh Multi-Day', 'Spiti Valley Expedition', 'Atal Tunnel Sissu Drive',
  'Corporate Retreats Manali', 'Destination Wedding Group', 'College Batch Trip Manali',
  'Manali to Dharamshala', 'Manali to Chandigarh Transfer', 'Trekking Group Vehicle',
]

const PACKAGES = [
  { title: 'Manali Local Sightseeing Package', meta: ['8 Hours', 'Up to 80 km', 'Most Popular'], desc: 'One day, 8 hours, up to 80 km within Manali. Covers Hidimba Temple, Solang Valley, Old Manali, Vashisht Village, Jogini Waterfall, and Mall Road. Most popular package for first-time Manali visitors travelling as a group.', fareLabel: '12 Seater starting fare', fare: 'Rs 5,000 onwards' },
  { title: 'Manali to Rohtang Pass Day Trip', meta: ['3,978 metres altitude', 'Permit Required', 'Most Booked Day Trip'], desc: 'The most booked single-day outstation package from Manali. Rohtang Pass sits at 3,978 metres and the drive up is genuinely spectacular. Permit charges apply and are arranged by Yatra Travel India at the time of booking.', fareLabel: '12 Seater starting fare', fare: 'Rs 7,000 onwards' },
  { title: 'Manali to Solang Valley Day Trip', meta: ['14 km from Manali', 'Snow Activities', 'Paragliding'], desc: '14 km from Manali town. Snow activities, paragliding, and some of the best mountain views in the region. Short drive but worth booking a dedicated vehicle rather than sharing transport with strangers.', fareLabel: '12 Seater starting fare', fare: 'Rs 4,000 onwards' },
  { title: 'Manali to Sissu via Atal Tunnel', meta: ['Atal Tunnel Route', 'Lahaul Valley', 'Scenic Drive'], desc: 'One of the most scenic drives in Himachal Pradesh. The Atal Tunnel route through to Sissu in Lahaul Valley is increasingly popular with groups who want something beyond the standard Rohtang Pass trip.', fareLabel: '12 Seater starting fare', fare: 'Rs 6,000 onwards' },
  { title: 'Manali to Leh Multi-Day Package', meta: ['2–3 Days', 'Highest Motorable Passes', 'Driver Accommodation Included'], desc: 'The big one. 2 to 3 days crossing some of the highest motorable passes in the world. A fully planned package including driver accommodation, route briefing, and permit assistance for all required zones.', fareLabel: '12 Seater starting fare', fare: 'Rs 25,000 onwards' },
  { title: 'Manali to Spiti Valley Multi-Day Package', meta: ['Via Kunzum Pass', 'Remote Route', 'Experienced Driver Required'], desc: 'For groups that want the road less travelled. The Spiti route from Manali via Kunzum Pass is one of the most remote and visually dramatic drives in India. Requires an experienced driver and a well-maintained vehicle.', fareLabel: '12 Seater starting fare', fare: 'Rs 20,000 onwards' },
  { title: 'Manali to Dharamshala Package', meta: ['~250 km', 'Himachal Combo Trip', 'Scenic Mountain Drive'], desc: 'A popular route for groups combining two Himachal destinations in one trip. Around 250 km from Manali, the drive passes through some genuinely beautiful mountain scenery along the way.', fareLabel: '12 Seater starting fare', fare: 'Rs 12,000 onwards' },
  { title: 'Manali to Chandigarh Package', meta: ['~310 km', '8–9 Hours', 'End of Trip Transfer'], desc: 'End of trip transfer for groups heading back to the plains. Around 310 km from Manali, the drive takes 8 to 9 hours depending on stops. One of the most regularly booked one-way outstation packages from Manali.', fareLabel: '12 Seater starting fare', fare: 'Rs 14,000 onwards' },
]

const LUXURY_TABLE = [
  { vehicle: 'Luxury Tempo Traveller', seating: '9 to 12 Seater', local: 'Rs 8,000 onwards', outstation: 'Rs 26/km' },
  { vehicle: 'Luxury Tempo Traveller', seating: '13 to 16 Seater', local: 'Rs 11,000 onwards', outstation: 'Rs 29/km' },
  { vehicle: 'Mercedes Tempo Traveller', seating: '9 to 13 Seater', local: 'Rs 12,000 onwards', outstation: 'Rs 34/km' },
]

const INCLUDED = ['Fuel Charges', 'Driver Allowance', 'Toll Taxes', 'Parking (most locations)', 'Driver Accommodation (Multi-day trips)']
const EXCLUDED = [
  'Rohtang Pass permit charges (arranged by Yatra Travel India at booking)',
  'State Tax for trips outside Himachal Pradesh',
  'Zone permits for restricted areas near Indo-Tibetan border (foreign nationals only)',
  'Parking Charges as per actual at certain sites',
  'Driver Night Charge for extended stays (Tempo Traveller – 500)',
]

const STEPS = [
  { num: '1', title: 'Call or WhatsApp 9044019511', desc: 'Tell the team your group size, travel dates, and the routes you are planning — local sightseeing, Rohtang Pass, Solang Valley, Manali to Leh, or Spiti Valley' },
  { num: '2', title: 'Get a Clear Complete Quote', desc: 'Receive a complete fare breakdown — vehicle size, base fare, outstation rate, permit charges for Rohtang Pass, and what is included. No hidden numbers' },
  { num: '3', title: 'Confirm the Booking', desc: 'Once the quote is agreed the booking is confirmed. Vehicle details and driver name shared in advance — not on the morning of the trip' },
  { num: '4', title: 'Travel', desc: 'Vehicle arrives at your location at the confirmed time. Driver briefed on route. Fare settled as agreed. No surprises on the day' },
]

const FEATURES = [
  { title: 'Serviced Before Every Trip', desc: 'Tyre condition, brake performance, engine health checked before each mountain trip — non-negotiable on Himalayan roads' },
  { title: 'Mountain Route Drivers', desc: 'Drivers assigned based on specific mountain route experience — Rohtang, Leh highway, Spiti road. Not first-timers on unfamiliar terrain' },
  { title: 'Powerful AC Throughout', desc: 'Full cabin AC on all vehicles — adjusts well as temperatures drop significantly on mountain routes toward Rohtang and Leh' },
  { title: 'Large Luggage Space', desc: 'Manali trips mean trekking gear, winter clothing, and full bags. The luggage area matches the group size — no Tetris at every stop' },
  { title: 'All Inclusive Fixed Fare', desc: 'Fuel, toll, parking, driver allowance all included. Rohtang Pass permit arranged separately and confirmed at booking — no surprises' },
  { title: 'Entertainment and Charging', desc: 'LCD screens and charging points at every seat on luxury vehicles — especially important on 8 to 10 hour daily Manali to Leh drives' },
  { title: 'Air Suspension on Luxury Models', desc: 'Air suspension handles mountain roads without rattling the group — especially valuable on the rough stretches of the Leh and Spiti highway' },
  { title: 'Driver Accommodation Included', desc: 'For multi-day trips to Leh and Spiti, driver accommodation is arranged by Yatra Travel India — no separate charges added at the end' },
]

const ATTRACTIONS = [
  { title: 'Rohtang Pass', desc: 'Sits at 3,978 metres and the drive up is genuinely spectacular. Snow, views of the Kullu and Lahaul valleys, and an experience that no flatland destination can replicate. The most booked single-day outstation package from Manali. Permit required — arranged at the time of booking by Yatra Travel India. Starting fare Rs 7,000 for a 12 seater.' },
  { title: 'Solang Valley', desc: '14 km from Manali town. Popular for snow activities, paragliding, zorbing, and some of the best mountain views in the region. A short drive but worth booking a dedicated vehicle. The Atal Tunnel has made Solang Valley accessible year-round even when Rohtang is closed. Starting fare Rs 4,000 for a 12 seater.' },
  { title: 'Hidimba Devi Temple and Old Manali', desc: 'The ancient cedar wood temple dedicated to Hidimba Devi is one of Manali\'s most visited landmarks. Old Manali nearby has cafes, guesthouses, and a relaxed pace very different from the main market. Both are standard stops on any Manali local sightseeing tour — covered as part of the 8 hour local sightseeing package.' },
  { title: 'Atal Tunnel and Sissu, Lahaul Valley', desc: 'The world\'s longest highway tunnel at 9.02 km connects Manali to Sissu in Lahaul Valley. One of the most scenic drives in Himachal Pradesh and increasingly popular with groups who want something beyond the standard Rohtang Pass trip. Starting fare Rs 6,000 for a 12 seater.' },
  { title: 'Vashisht Village and Jogini Waterfall', desc: 'Vashisht is 3 km from Manali town — known for its hot springs and ancient temple. Jogini Waterfall is a short trek from Vashisht through apple orchards and pine forests. Popular with groups who want a local nature walk as part of their Manali sightseeing day. Covered as part of the local sightseeing package.' },
  { title: 'Manali to Spiti Valley', desc: 'For groups that want the road less travelled. The Spiti route from Manali via Kunzum Pass is one of the most remote and visually dramatic drives in India. Ancient monasteries, high-altitude desert landscapes, and roads that see very little traffic. Starting fare Rs 20,000 for a 12 seater multi-day package.' },
  { title: 'Manali to Leh Highway', desc: '2 to 3 days crossing some of the highest motorable passes in the world — Rohtang, Baralacha La, Nakee La, Lachulung La, and Tanglang La. A fully planned package including driver accommodation, route briefing, and permit assistance. Starting fare Rs 25,000 for a 12 seater.' },
  { title: 'Kullu and Naggar Castle', desc: 'Kullu is 40 km from Manali on the National Highway. Famous for the Kullu Dussehra festival, river rafting on the Beas, and the ancient Naggar Castle perched above the valley. A popular half-day stop to combine with the return journey from Manali on the local sightseeing circuit.' },
]

const WHY_CARDS = [
  { title: 'Vehicle Condition That Matters', desc: 'Every vehicle is serviced and checked before each mountain trip. Tyre condition, brake performance, engine health — these are not optional checks on Himalayan roads. They are non-negotiable.' },
  { title: 'Right Fleet for Every Route', desc: '9 seater for Solang Valley. 12 seater for Rohtang Pass. 20 seater for large groups. Luxury tempo for Manali to Leh. The vehicle matches the route, not just the head count.' },
  { title: 'Clear Fare Before You Confirm', desc: 'Complete fare breakdown at quote stage — base fare, permit charges, outstation rate, all inclusions clearly stated. A clear figure you can share with your group and plan around.' },
  { title: 'Vehicle and Driver Confirmed in Advance', desc: 'No waiting until the morning of the trip to find out who your driver is. Vehicle details and driver name shared in advance. Confirmed, not just promised.' },
  { title: 'Permit Assistance Included', desc: 'Rohtang Pass permit arranged at booking. For Spiti and high-altitude zones, guidance on all permit requirements before departure so nothing delays the trip.' },
  { title: 'Multi-Day Package Planning', desc: 'Manali to Leh and Spiti packages include route briefing, overnight stops, driver accommodation, and a driver who knows every stretch of the route from personal experience.' },
]

const FAQS = [
  { q: 'Q1. What is the tempo traveller price in Manali?', a: 'Starts at Rs 4,000 for a 9 seater and Rs 5,000 for a 12 seater for a full day local tour of 8 hours and 80 km.' },
  { q: 'Q2. Is Rohtang Pass permit included in the fare?', a: 'No. Permit is charged separately and arranged by Yatra Travel India at the time of booking. Permit charges vary based on vehicle type and travel date — confirmed clearly at booking so there are no surprises.' },
  { q: 'Q3. Which size is best for Manali to Leh?', a: '12 seater for groups up to 12 people. 16 seater for groups of 13 or more for better comfort across a 2 to 3 day drive. On a 10 hour daily mountain drive the extra space of the 16 seater makes a real difference.' },
  { q: 'Q4. How early should I book a tempo traveller in Manali?', a: '1 to 2 weeks for local trips during peak season. 3 to 4 weeks in advance for Leh and Spiti multi-day packages. Peak season runs May to September and vehicles fill up fast.' },
  { q: 'Q5. Is a luxury tempo traveller available in Manali?', a: 'Yes. Reclining seats, multi-zone AC, air suspension, LCD screens, charging points at every seat. Starting at Rs 8,000 for local sightseeing. Call 9044019511 to check availability.' },
  { q: 'Q6. What is the Manali to Leh tempo traveller fare?', a: 'Starts at Rs 25,000 for a 12 seater. 2 to 3 day package. Fuel, toll, driver allowance, and driver accommodation all included.' },
  { q: 'Q7. What is the Manali to Rohtang Pass tempo traveller fare?', a: 'Starts at Rs 7,000 for a 12 seater. Permit arranged separately at the booking stage by Yatra Travel India.' },
  { q: 'Q8. Does the fare include toll and parking?', a: 'Yes. Every tempo traveller fare at Yatra Travel India includes fuel, toll, parking, and driver allowance. No hidden charges.' },
  { q: 'Q9. Is a tempo traveller safe on Manali mountain roads?', a: 'Yes. Every vehicle is serviced before each trip — tyres, brakes, engine health. Drivers are assigned based on specific mountain route experience. Not first-timers on unfamiliar terrain.' },
  { q: 'Q10. Can I book a tempo traveller for Manali to Spiti Valley?', a: 'Yes. Multi-day Spiti package starts at Rs 20,000 for a 12 seater. Experienced Spiti route driver assigned. One of the most remote and visually dramatic drives in India.' },
  { q: 'Q11. How many people fit in a 20 seater tempo traveller in Manali?', a: 'Comfortably fits 17 to 20 people with luggage, winter gear, and trekking equipment. Best for large groups, wedding parties, and college batch trips. Starting fare Rs 9,000 for local sightseeing.' },
  { q: 'Q12. How do I book a tempo traveller in Manali?', a: 'Call or WhatsApp Yatra Travel India on 9044019511. Share your group size, travel date, and route. Booking confirmed on the same call with vehicle details, driver name, and fixed fare.' },
  { q: 'Q13. How to get a Rohtang Pass permit for tempo traveller in Manali?', a: 'For Rohtang Pass trips the vehicle permit is arranged by Yatra Travel India at the time of booking. For routes entering Spiti or areas near the Indo-Tibetan border, certain zone permits may be required for foreign nationals. Indian nationals travelling to Spiti do not need any additional permits.' },
  { q: 'Q14. What is the difference between 9 seater and 12 seater for Manali trips?', a: 'If your group is between 8 and 12 people always go with the 12 seater in Manali. The extra space for bags, trekking gear, and winter clothing on mountain routes makes a real difference. Nobody wants to spend a 10 hour drive to Leh with their backpack on their lap.' },
]

const POPULAR_ROUTES = [
  'Manali Local Sightseeing Tour', 'Manali to Rohtang Pass Day Trip',
  'Manali to Solang Valley Trip', 'Manali to Sissu Atal Tunnel',
  'Manali to Leh Multi-Day Package', 'Manali to Spiti Valley Package',
  'Manali to Dharamshala Tempo Traveller', 'Manali to Chandigarh Tempo Traveller',
  'Hidimba Temple and Old Manali Tour', 'Vashisht Village Jogini Waterfall',
  'Manali Corporate Retreat Vehicle', 'Destination Wedding Manali Transfer',
  'College Batch Trip Manali', 'Manali to Kasol Kheerganga',
  'Manali to Kullu Naggar Castle', 'Manali to Lahaul Valley Tour',
  '12 Seater Tempo Traveller Manali', '20 Seater Tempo Traveller Manali',
  'Luxury Tempo Traveller Manali', 'Mercedes Tempo Traveller Manali',
]

/* ─── PAGE ─── */
export default function ManaliTempoPage() {
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
          <p>Manali&apos;s Trusted Tempo Traveller — Rohtang Pass, Manali to Leh, Spiti Valley, Solang Valley and Local Tours</p>
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
          <span>Tempo Traveller in Manali</span>
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-heading">Tempo Traveller in Manali — One Vehicle for the Whole Group</h1>
          <p className="hero-sub">Rohtang Pass · Solang Valley · Manali to Leh · Spiti Valley · Atal Tunnel · Dharamshala · Chandigarh</p>
          <div className="hero-badges">
            {['9 to 35 Seater Available', 'Luxury and Mercedes Options', 'Starting Rs 4,000 Local', 'Mountain Route Experienced Drivers'].map(b => (
              <span key={b} className="hero-badge">{b}</span>
            ))}
          </div>
          <div ref={bookingRef}>
            <BookingCard
              onSearch={showToast}
              selectedVehicle={selectedVehicle}
              defaultCity="Manali"
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
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0f6ec8" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>, title: 'Mountain Route Drivers', sub: 'Rohtang, Leh, Spiti experience' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0f6ec8" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>, title: 'On-Time Pickup', sub: 'Vehicle confirmed in advance' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0f6ec8" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg>, title: 'Fixed Fare — No Surprises', sub: 'All inclusive, nothing added after' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0f6ec8" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>, title: 'Serviced Before Every Trip', sub: 'Tyres, brakes, engine checked' },
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
          <p>Yatra Travel India offers <strong>tempo traveller on rent in Manali</strong> for local sightseeing, Rohtang Pass day trips, Solang Valley, Atal Tunnel, and multi-day packages to Leh, Spiti Valley, Dharamshala, and Chandigarh. <strong>9 seater to 35 seater available — including Luxury and Mercedes Tempo Traveller.</strong> Every vehicle is serviced and checked before each mountain trip. Experienced mountain route drivers on every booking. Call <strong>9044019511</strong> to book.</p>
        </div>

        {/* INTRO */}
        <div className="intro-section">
          <h1>Tempo Traveller on Rent in Manali — What to Know Before You Book</h1>
          <p>Manali is not like other destinations. The roads are different. The weather changes fast. A route that was clear in the morning can look completely different by afternoon. And when you are travelling with a group of 10 or 15 people through the Himalayas, the driver sitting behind the wheel matters more than almost anything else about the trip. A tempo traveller with an experienced driver in Manali is not just a convenience. On certain routes it is genuinely the difference between a smooth trip and a dangerous one.</p>
          <p>Manali is not a one-size-fits-all destination. A couple heading to Solang Valley for a day needs something completely different from a 20-person corporate group driving to Leh. A family pilgrimage to Rohtang Pass has different requirements from a trekking group heading deep into Spiti Valley. That is why having the right fleet matters more in Manali than almost anywhere else in India. The vehicle your group travels in directly affects how comfortable, safe, and enjoyable the trip turns out to be.</p>
        </div>

        {/* VEHICLE CARDS */}
        <h2 className="section-title" id="services">Fleet Available on Rent in Manali</h2>
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

        {/* FULL FLEET TABLE */}
        <h2 className="section-title">Which Vehicle Is Right for Your Group in Manali?</h2>
        <div className="vot-wrap">
          <table className="vehicle-options-table">
            <thead>
              <tr>
                <th>Vehicle</th><th>Group Size</th><th>Best For</th><th>Local Fare</th><th>Outstation Rate</th>
              </tr>
            </thead>
            <tbody>
              {FLEET_TABLE.map(row => (
                <tr key={row.vehicle}>
                  <td>{row.vehicle}</td>
                  <td>{row.group}</td>
                  <td>{row.best}</td>
                  <td><span className="fare-value">{row.local}</span></td>
                  <td>{row.outstation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="table-note">* All fares include fuel, toll, parking, driver allowance, and state tax for trips outside Himachal Pradesh. Rohtang Pass permit charged separately — arranged by Yatra Travel India at booking. Driver accommodation included for multi-day Leh and Spiti trips.</p>

        {/* PERFECT FOR */}
        <h2 className="section-title orange">Perfect For</h2>
        <div className="use-tags">
          {USE_TAGS.map(t => <span key={t} className="use-tag">{t}</span>)}
        </div>

        {/* MOST BOOKED PACKAGES */}
        <h2 className="section-title">Most Booked Tempo Traveller Packages from Manali</h2>
        <div className="routes-grid">
          {PACKAGES.map(pkg => (
            <div key={pkg.title} className="route-card">
              <h4>{pkg.title}</h4>
              <div className="route-meta">
                {pkg.meta.map(m => <span key={m}>{m}</span>)}
              </div>
              <p>{pkg.desc}</p>
              <div className="route-fare">
                <span>{pkg.fareLabel}</span>
                <strong>{pkg.fare}</strong>
              </div>
            </div>
          ))}
        </div>

        {/* LUXURY SECTION */}
        <div className="why-tempo-section">
          <h2 className="section-title">Luxury Tempo Traveller in Manali — When Standard Is Not Enough</h2>
          <div className="why-tempo-content">
            <p>Sometimes the standard version is not what the trip calls for. A multi-day Manali to Leh drive, a corporate VIP group, a destination wedding party. These occasions call for something better. A luxury tempo traveller in Manali is a completely different experience — fully reclining leather seats, powerful multi-zone AC, air suspension that handles mountain roads without rattling the group around, LCD entertainment screens, charging points at every seat, and an interior that actually feels premium rather than just functional.</p>
            <p>On a route like Manali to Leh where the group spends 8 to 10 hours a day in the vehicle across two consecutive days, the comfort difference is not a luxury. It is practical. Arriving at each overnight stop feeling rested rather than exhausted makes the whole trip better. When you split the upgrade cost across 10 or 12 people, the per head difference is smaller than most groups expect.</p>
            <p>Popular for corporate retreats in Manali, destination wedding groups, and high-end leisure travel through Himachal Pradesh.</p>
          </div>
        </div>

        {/* LUXURY FARE TABLE */}
        <h2 className="section-title green">Luxury Tempo Traveller Fare in Manali</h2>
        <div className="fare-table-wrap">
          <table className="fare-table">
            <thead>
              <tr>
                <th>Vehicle</th><th>Seating</th><th>Local Fare</th><th>Outstation Rate</th>
              </tr>
            </thead>
            <tbody>
              {LUXURY_TABLE.map((row, i) => (
                <tr key={i}>
                  <td>{row.vehicle}</td>
                  <td>{row.seating}</td>
                  <td><span className="fare-value">{row.local}</span></td>
                  <td>{row.outstation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="table-note">* Every luxury tempo traveller includes: fully reclining leather seats, powerful multi-zone AC, air suspension, LCD entertainment screens, charging points at every seat, large luggage space for trekking gear, and an experienced mountain route driver.</p>

          {/* INCLUSIONS / EXCLUSIONS */}
          <h2 className="section-title">Fare Inclusions and Exclusions</h2>

          <div className="ei-split">
            <div className="ei-box">
              <div className="ei-box-header">
                <span>INCLUDED</span>
              </div>

              <ul>
                {INCLUDED.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="ei-box">
              <div className="ei-box-header">
                <span>EXCLUDED</span>
              </div>

              <ul>
                {EXCLUDED.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

        {/* HOW TO BOOK STEPS */}
        <h2 className="section-title">How to Book a Tempo Traveller in Manali Online</h2>
        <div className="steps-grid">
          {STEPS.map(s => (
            <div key={s.num} className="step-card">
              <div className="step-num">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* FEATURES */}
        <h2 className="section-title">Features Included in All Vehicles</h2>
        <div className="features-grid">
          {FEATURES.map(f => (
            <div key={f.title} className="feature-card">
              <div className="fc-icon">
                <svg viewBox="0 0 24 24" fill="#fff" width="24" height="24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* ATTRACTIONS */}
        <h2 className="section-title orange" id="attractions">Places to Visit in and Around Manali by Tempo Traveller</h2>
        <div className="attractions-grid">
          {ATTRACTIONS.map(a => (
            <div key={a.title} className="attraction-card">
              <h4>{a.title}</h4>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>

        {/* WHY CHOOSE US */}
        <h2 className="section-title">Why Book a Tempo Traveller in Manali with Yatra Travel India</h2>
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
          <p><strong>Peak Season Advance Booking Essential:</strong> Peak season in Manali runs from <strong>May to September.</strong> The 12 seater tempo traveller books up especially fast during this period. Book at least <strong>1 to 2 weeks in advance</strong> for local and Rohtang trips. For <strong>Manali to Leh and Spiti multi-day packages, 3 to 4 weeks in advance is strongly recommended.</strong> Waiting until the last week almost always means unavailability or significantly higher rates.</p>
        </div>

        {/* FAQ */}
        <h2 className="section-title">Frequently Asked Questions — Tempo Traveller in Manali</h2>
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
            <h3>Book Your Manali Group Trip Today</h3>
            <p>Whether your group needs a 9 seater for a quick Solang Valley day trip or a 20 seater for a full Manali to Leh expedition, Yatra Travel India has the vehicle, the driver, and the local knowledge to make it happen properly. Call 9044019511.</p>
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
          <h2 className="section-title">Popular Tempo Traveller Routes from Manali</h2>
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
            <h5>Services in Manali</h5>
            <ul>
              {['9 Seater Tempo Traveller', '12 Seater Tempo Traveller', '16 Seater Tempo Traveller', '20 Seater Tempo Traveller', 'Luxury Tempo Traveller', 'Mercedes Tempo Traveller'].map(s => (
                <li key={s}><a href="#">{s}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Popular Packages</h5>
            <ul>
              {['Manali Local Sightseeing', 'Manali to Rohtang Pass', 'Manali to Leh', 'Manali to Spiti Valley', 'Manali to Dharamshala', 'Manali to Chandigarh'].map(r => (
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
