'use client'

import { useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import BookingCard from '@/components/BookingCard'
import Toast, { ToastHandle } from '@/components/Toast'
import type { CityData } from './cityData'

/* ─── SVG helpers ─── */
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

const TrustIcon = ({ type }: { type: string }) => {
  const s = { viewBox: '0 0 24 24', fill: 'none', stroke: '#0f6ec8', strokeWidth: '2' } as const
  switch (type) {
    case 'clock': return <svg {...s}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
    case 'shield': return <svg {...s}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    case 'card': return <svg {...s}><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>
    case 'person': return <svg {...s}><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
    case 'check': return <svg {...s}><polyline points="20 6 9 17 4 12"/></svg>
    case 'phone': return <svg {...s}><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>
    default: return <svg {...s}><circle cx="12" cy="12" r="10"/></svg>
  }
}


const PhoneSvg = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.11 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
  </svg>
)

export default function CityPage({ city }: { city: CityData }) {
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
          <p>{city.topbarText}</p>
          <div className="topbar-right">
            <a href="https://wa.me/919044019511">WhatsApp Us</a>
            <a href="tel:+919044019511">+91 90440 19511</a>
          </div>
        </div>
      </div>

      <Navbar onBookNowClick={scrollToBooking} />

      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <div className="breadcrumb-inner">
          <Link href="/">Home</Link><span>/</span>
          <Link href="/#services">Services</Link><span>/</span>
          <span>Tempo Traveller in {city.cityName}</span>
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-heading">{city.heroHeading}</h1>
          <p className="hero-sub">{city.heroSub}</p>
          <div className="hero-badges">
            {city.heroBadges.map(b => <span key={b} className="hero-badge">{b}</span>)}
          </div>
          <div ref={bookingRef}>
            <BookingCard
              onSearch={showToast}
              selectedVehicle={selectedVehicle}
              defaultCity={city.defaultCity}
              tabs={city.bookingTabs}
              vehicleOptions={city.vehicleOptions}
            />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        <div className="trust-inner">
          {city.trustItems.map(item => (
            <div key={item.title} className="trust-item">
              <div className="trust-icon"><TrustIcon type={item.iconType} /></div>
              <div className="trust-text"><strong>{item.title}</strong><span>{item.sub}</span></div>
            </div>
          ))}
        </div>
      </div>

      {/* PAGE BODY */}
      <div className="page-body">

        {/* INFO BOX */}
        <div className="info-box">
          <p dangerouslySetInnerHTML={{ __html: city.infoBoxText }} />
        </div>

        {/* INTRO */}
        <div className="intro-section">
          <h1>{city.introH1}</h1>
          {city.introParagraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>

        {/* VEHICLE CARDS */}
        <h2 className="section-title" id="services">{city.sectionServicesTitle}</h2>
        <div className="vehicles-grid">
          {city.vehicles.map(v => (
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
                    <div key={s.sub || s.label} className="vc-spec-item">
                      <strong>{s.label}</strong>{s.sub}
                    </div>
                  ))}
                </div>
                <div className="vc-price-row">
                  <div className="vc-price">{v.price}<span>{v.priceLabel}</span></div>
                  <div className="vc-avail">Available Now</div>
                </div>
                <div className="vc-tags">
                  {v.tags.map(t => <span key={t} className={`vc-tag${v.tagOrange ? ' orange' : ''}`}>{t}</span>)}
                </div>
                <button
                  className={`btn-book-card${v.badgeOrange ? ' orange' : ''}`}
                  onClick={() => handleSelectVehicle(v.selectKey, v.title)}
                >{v.btnLabel}</button>
              </div>
            </div>
          ))}
        </div>

        {/* OPTIONS TABLE */}
        {city.optionsTable && (
          <>
            <h2 className="section-title">Vehicle Options and Seating — Tempo Traveller in {city.cityName}</h2>
            <div className="vot-wrap">
              <table className="vehicle-options-table">
                <thead><tr><th>Vehicle Type</th><th>Seating Capacity</th><th>Air Conditioning</th><th>Ideal For</th></tr></thead>
                <tbody>
                  {city.optionsTable.map(r => (
                    <tr key={r.vehicle}>
                      <td>{r.vehicle}</td><td>{r.cap}</td>
                      <td><span className={`ac-badge${r.ac === 'Premium AC' ? ' climate' : ''}`}>{r.ac}</span></td>
                      <td>{r.ideal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* FLEET TABLE (Manali) */}
        {city.fleetTable && (
          <>
            <h2 className="section-title">Which Vehicle Is Right for Your Group in {city.cityName}?</h2>
            <div className="vot-wrap">
              <table className="vehicle-options-table">
                <thead><tr><th>Vehicle</th><th>Group Size</th><th>Best For</th><th>Local Fare</th><th>Outstation Rate</th></tr></thead>
                <tbody>
                  {city.fleetTable.map(r => (
                    <tr key={r.vehicle}>
                      <td>{r.vehicle}</td><td>{r.group}</td><td>{r.best}</td>
                      <td><span className="fare-value">{r.local}</span></td>
                      <td>{r.outstation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {city.fleetNote && <p className="table-note">{city.fleetNote}</p>}
          </>
        )}

        {/* LOCAL FARE TABLE */}
        {city.localFareTable && city.slug === 'ayodhya' && (
          <>
            <h2 className="section-title green">Tempo Traveller Rental Charges from {city.cityName} Airport</h2>
            <div className="fare-table-wrap">
              <table className="fare-table">
                <thead><tr><th>Tempo Traveller Option</th><th>Airport Pickup Price</th><th>Airport Drop Price</th><th>Outstation Rate</th></tr></thead>
                <tbody>
                  {city.localFareTable.map(r => (
                    <tr key={r.vehicle}>
                      <td>{r.vehicle}</td>
                      <td>{r.seating === 'On Request' ? <a href="tel:+919044019511" className="call-now-btn"><PhoneSvg />&nbsp;Call Now</a> : <span className="fare-value">{r.seating}</span>}</td>
                      <td>{r.fare === 'On Request' ? <a href="tel:+919044019511" className="call-now-btn"><PhoneSvg />&nbsp;Call Now</a> : <span className="fare-value">{r.fare}</span>}</td>
                      <td><a href="tel:+919044019511" className="call-now-btn"><PhoneSvg />&nbsp;Call Now</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {city.localFareNote && <p className="table-note">{city.localFareNote}</p>}
          </>
        )}

        {/* LOCAL FARE TABLE (Bhubaneswar) */}
        {city.localFareTable && city.slug === 'bhubaneswar' && (
          <>
            <h2 className="section-title green">Tempo Traveller Pricing — Local Sightseeing in {city.cityName}</h2>
            <div className="fare-table-wrap">
              <table className="fare-table">
                <thead><tr><th>Vehicle</th><th>Seating</th><th>Local Fare</th><th>Hours</th><th>KM Limit</th></tr></thead>
                <tbody>
                  {city.localFareTable.map(r => (
                    <tr key={r.vehicle}>
                      <td>{r.vehicle}</td><td>{r.seating}</td>
                      <td><span className="fare-value">{r.fare}</span></td>
                      <td>{r.hours}</td><td>{r.km}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {city.localFareNote && <p className="table-note">{city.localFareNote}</p>}
          </>
        )}

        {/* OUTSTATION FARE TABLE (Bhubaneswar) */}
        {city.outstationFareTable && (
          <>
            <h2 className="section-title green">Tempo Traveller Pricing — Outstation Trips from {city.cityName}</h2>
            <div className="fare-table-wrap">
              <table className="fare-table">
                <thead><tr><th>Vehicle</th><th>Seating</th><th>Per KM Rate</th><th>Key Features</th></tr></thead>
                <tbody>
                  {city.outstationFareTable.map(r => (
                    <tr key={r.vehicle}>
                      <td>{r.vehicle}</td><td>{r.seating}</td>
                      <td><span className="fare-value">{r.rate}</span></td>
                      <td>{r.features}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {city.outstationFareNote && <p className="table-note">{city.outstationFareNote}</p>}
          </>
        )}

        {/* KANPUR ROUTES TABLE */}
        {city.localFareTable && city.slug === 'kanpur' && (
          <>
            <h2 className="section-title green">Tempo Traveller Hire in {city.cityName} - Key Routes</h2>
            <div className="fare-table-wrap">
              <table className="fare-table">
                <thead><tr><th>Route</th><th>Distance</th><th>Vehicle</th><th>Fare</th></tr></thead>
                <tbody>
                  {city.localFareTable.map(r => (
                    <tr key={r.vehicle}>
                      <td>{r.vehicle}</td><td>{r.seating}</td><td>12 or 16 Seater</td>
                      <td><a href="tel:+919044019511" className="call-now-btn"><PhoneSvg />&nbsp;Call Now</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* PERFECT FOR TAGS */}
        <h2 className="section-title orange">Perfect For</h2>
        <div className="use-tags">
          {city.useTags.map(t => <span key={t} className="use-tag">{t}</span>)}
        </div>

        {/* WHY TEMPO / CONTENT BLOCK */}
        {city.whyTempoTitle && city.whyTempoParas && (
          <div className="why-tempo-section">
            <h2 className="section-title">{city.whyTempoTitle}</h2>
            <div className="why-tempo-content">
              {city.whyTempoParas.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        )}

        {/* BENEFITS GRID */}
        {city.benefits && (
          <>
            <h2 className="section-title">Why Choose Yatra Travel India for Tempo Traveller Hire in {city.cityName}</h2>
            <div className="benefits-grid">
              {city.benefits.map(b => (
                <div key={b.title} className="benefit-card">
                  <h4>{b.title}</h4><p>{b.desc}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* LUXURY FARE TABLE (Manali) */}
        {city.luxuryTable && (
          <>
            <h2 className="section-title green">Luxury Tempo Traveller Fare in {city.cityName}</h2>
            <div className="fare-table-wrap">
              <table className="fare-table">
                <thead><tr><th>Vehicle</th><th>Seating</th><th>Local Fare</th><th>Outstation Rate</th></tr></thead>
                <tbody>
                  {city.luxuryTable.map((r, i) => (
                    <tr key={i}>
                      <td>{r.vehicle}</td><td>{r.seating}</td>
                      <td><span className="fare-value">{r.local}</span></td>
                      <td>{r.outstation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {city.luxuryNote && <p className="table-note">{city.luxuryNote}</p>}
          </>
        )}

        {/* INCLUSIONS / EXCLUSIONS */}
        <h2 className="section-title">Fare Inclusions and Exclusions</h2>
        <div className="ei-split">
          <div className="ei-box">
            <div className="ei-box-header">
              <span>Included</span>
            </div>
            <ul>{city.ei.included.map(item => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="ei-box">
            <div className="ei-box-header ei-box-header--excl">
              <span>Excluded</span>
            </div>
            <ul>{city.ei.excluded.map(item => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>

        {/* WEDDING SECTION (Bhubaneswar) */}
        {city.wedding && (
          <>
            <h2 className="section-title">Tempo Traveller for Wedding Groups in {city.cityName}</h2>
            <div className="wedding-services">
              <h3>{city.wedding.heading}</h3>
              <p>{city.wedding.intro}</p>
              <p>{city.wedding.detail}</p>
              <div className="wedding-list">
                {city.wedding.list.map(item => (
                  <div key={item} className="wedding-list-item">{item}</div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* HOW TO BOOK STEPS (Manali) */}
        {city.steps && (
          <>
            <h2 className="section-title">How to Book a Tempo Traveller in {city.cityName} Online</h2>
            <div className="steps-grid">
              {city.steps.map(s => (
                <div key={s.num} className="step-card">
                  <div className="step-num">{s.num}</div>
                  <h4>{s.title}</h4><p>{s.desc}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* FEATURES GRID */}
        {city.features && (
          <>
            <h2 className="section-title">Features {city.slug === 'manali' ? 'Included in All Vehicles' : `of Luxury Tempo Traveller in ${city.cityName}`}</h2>
            <div className="features-grid">
              {city.features.map(f => (
                <div key={f.title} className="feature-card">
                  <div className="fc-icon">
                    <svg viewBox="0 0 24 24" fill="#fff" width="24" height="24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <h4>{f.title}</h4><p>{f.desc}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ATTRACTIONS */}
        <h2 className="section-title orange" id="attractions">
          {city.slug === 'manali'
            ? 'Places to Visit in and Around Manali by Tempo Traveller'
            : city.slug === 'bhubaneswar'
            ? 'Places to Visit in and Around Bhubaneswar by Tempo Traveller'
            : city.slug === 'ayodhya'
            ? 'Sacred Places to Visit in Ayodhya by Tempo Traveller'
            : 'Popular Outstation Routes from ' + city.cityName}
        </h2>
        <div className="attractions-grid">
          {city.attractions.map(a => (
            <div key={a.title} className="attraction-card">
              <h4>{a.title}</h4><p>{a.desc}</p>
            </div>
          ))}
        </div>

        {/* ROUTES WITH FARE (Manali packages) */}
        {city.routes && (
          <>
            <h2 className="section-title">Most Booked Tempo Traveller Packages from {city.cityName}</h2>
            <div className="routes-grid">
              {city.routes.map(r => (
                <div key={r.title} className="route-card">
                  <h4>{r.title}</h4>
                  {r.meta && <div className="route-meta">{r.meta.map(m => <span key={m}>{m}</span>)}</div>}
                  <p>{r.desc}</p>
                  {r.fare && (
                    <div className="route-fare">
                      <span>{r.fareLabel}</span><strong>{r.fare}</strong>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {/* SEASON CARDS (Ayodhya) */}
        {city.seasons && (
          <>
            <h2 className="section-title">Best Time to Visit {city.cityName} with Family — Plan Your Trip</h2>
            <div className="season-grid">
              {city.seasons.map(s => (
                <div key={s.title} className="season-card">
                  <h4>{s.title}</h4>
                  {s.paras.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              ))}
            </div>
          </>
        )}

        {/* WHY CHOOSE US */}
        <h2 className="section-title">Why Book a Tempo Traveller with Yatra Travel India in {city.cityName}</h2>
        <div className="why-grid">
          {city.whyCards.map(w => (
            <div key={w.title} className="why-card">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="#0f6ec8"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div><h4>{w.title}</h4><p>{w.desc}</p></div>
            </div>
          ))}
        </div>

        {/* NOTE BOX */}
        <div className="note-box">
          <p dangerouslySetInnerHTML={{ __html: '<strong>Advance Booking Recommended:</strong> ' + city.noteBox }} />
        </div>

        {/* FAQ */}
        <h2 className="section-title">Frequently Asked Questions — Tempo Traveller in {city.cityName}</h2>
        <div className="faq-grid">
          {city.faqs.map(f => (
            <div key={f.q} className="faq-item">
              <strong>{f.q}</strong><p>{f.a}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="cta-banner">
          <div>
            <h3>{city.ctaHeading}</h3>
            <p>{city.ctaDesc}</p>
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
        {city.popularRoutes.length > 0 && (
          <div className="popular-routes-section">
            <h2 className="section-title">Popular Tempo Traveller Routes from {city.cityName}</h2>
            <div className="popular-routes-grid">
              {city.popularRoutes.map(r => (
                <div key={r} className="pr-item"><a href="#">{r}</a></div>
              ))}
            </div>
          </div>
        )}

        {/* NETWORK (Kanpur) */}
        {city.networkLinks && (
          <div className="popular-routes-section">
            <div className="network-section">
              <div className="network-title-row">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                </svg>
                <h2 className="network-title">Our Pan-India Tempo Traveller Network</h2>
              </div>
              <p className="network-sub">Connecting India&apos;s major cities with premium group travel services.</p>
              <div className="network-grid">
                {city.networkLinks.map(n => (
                  <Link key={n.href} href={n.href} className="network-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 3 }}>
                      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
                      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
                    </svg>
                    <div className="network-item-text">
                      <div className="city">{n.city}</div>
                      <div className="type">{n.type}</div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="network-footer">
                <span>© 2026 Yatra Travel India. All rights reserved. Your Safe Travel Partner.</span>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon" style={{ width: 40, height: 40 }}>
                <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
                  <path d="M4 20 L8 10 L14 17 L20 8 L24 20 Z" fill="#fff" stroke="#fff" strokeWidth=".5"/>
                  <circle cx="8" cy="22" r="2.5" fill="#ff6b35"/>
                  <circle cx="20" cy="22" r="2.5" fill="#ff6b35"/>
                  <rect x="6" y="18" width="16" height="5" rx="1" fill="none" stroke="#fff" strokeWidth="1"/>
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
            <h5>Services in {city.cityName}</h5>
            <ul>{city.footerServices.map(s => <li key={s}><a href="#">{s}</a></li>)}</ul>
          </div>
          <div className="footer-col">
            <h5>Popular Routes</h5>
            <ul>{city.footerRoutes.map(r => <li key={r}><a href="#">{r}</a></li>)}</ul>
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
            {['UPI', 'Net Banking', 'Cash', 'Credit Card'].map(p => <span key={p} className="fp">{p}</span>)}
          </div>
        </div>
      </footer>

      {/* FLOATING BUTTONS — Call RIGHT, WhatsApp LEFT */}
      <a href="https://wa.me/919044019511" className="wa-float" target="_blank" rel="noreferrer">
        <svg viewBox="0 0 24 24" fill="#fff" width="28" height="28">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
      <a href="tel:+919044019511" className="call-float">
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" width="26" height="26">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.11 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
        </svg>
      </a>

      <Toast ref={toastRef} />
    </>
  )
}
