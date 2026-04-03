import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import FadeUp from '../components/FadeUp'

const PORTS = [
  { name: 'Kakinada', lat: 16.9891, lng: 82.2475, home: true },
  { name: 'Visakhapatnam', lat: 17.6868, lng: 83.2185, home: false },
  { name: 'Chennai', lat: 13.0827, lng: 80.2707, home: false },
  { name: 'Kochi', lat: 9.9312, lng: 76.2673, home: false },
  { name: 'Mumbai', lat: 18.9388, lng: 72.8354, home: false },
  { name: 'Kandla', lat: 23.0333, lng: 70.2167, home: false },
  { name: 'Kolkata', lat: 22.5726, lng: 88.3639, home: false },
  { name: 'Paradip', lat: 20.3167, lng: 86.6167, home: false },
  { name: 'Haldia', lat: 22.0667, lng: 88.0833, home: false },
  { name: 'Mangalore', lat: 12.9141, lng: 74.8560, home: false },
  { name: 'Tuticorin', lat: 8.7642, lng: 78.1348, home: false },
  { name: 'Ennore', lat: 13.2167, lng: 80.3333, home: false },
  { name: 'Gangavaram', lat: 17.6200, lng: 83.2300, home: false },
  { name: 'Mormugao', lat: 15.4089, lng: 73.7968, home: false },
  { name: 'JNPT', lat: 18.9492, lng: 72.9528, home: false },
  { name: 'Hazira', lat: 21.1170, lng: 72.6350, home: false },
  { name: 'Krishnapatnam', lat: 14.2500, lng: 80.1333, home: false },
  { name: 'New Mangalore', lat: 12.9141, lng: 74.8560, home: false },
]

const POPUP_STYLE = `
  <style>
    .gr-popup .leaflet-popup-content-wrapper {
      background: #1B2A4A;
      border: 1.5px solid #00C2E0;
      border-radius: 12px;
      color: white;
      font-family: 'DM Sans', sans-serif;
      box-shadow: 0 8px 32px rgba(0,194,224,0.2);
      padding: 0;
    }
    .gr-popup .leaflet-popup-tip { background: #1B2A4A; }
    .gr-popup .leaflet-popup-content { margin: 0; }
    .gr-popup-inner { padding: 14px 16px; min-width: 220px; }
    .gr-popup-title { font-size: 15px; font-weight: 700; color: #00C2E0; margin-bottom: 4px; font-family: 'Barlow Condensed', sans-serif; letter-spacing: 0.05em; }
    .gr-popup-sub { font-size: 12px; color: rgba(255,255,255,0.6); margin-bottom: 8px; }
    .gr-popup-divider { border: none; border-top: 1px solid rgba(0,194,224,0.2); margin: 8px 0; }
    .gr-popup-phone { font-size: 12px; color: #00C2E0; margin-bottom: 10px; }
    .gr-popup-btn { display: block; background: #00C2E0; color: #1B2A4A; font-weight: 700; font-size: 12px; text-align: center; padding: 7px 12px; border-radius: 6px; text-decoration: none; font-family: 'Barlow Condensed', sans-serif; letter-spacing: 0.05em; }
    .gr-popup-btn:hover { background: #4DD9F0; }
  </style>
`

const PULSE_STYLE = `
  <style>
    @keyframes grRipple {
      0% { transform: scale(1); opacity: 0.6; }
      100% { transform: scale(3); opacity: 0; }
    }
    .gr-home-marker { position: relative; display: flex; align-items: center; justify-content: center; }
    .gr-ripple { position: absolute; width: 24px; height: 24px; border-radius: 50%; background: rgba(0,194,224,0.4); animation: grRipple 2s ease-out infinite; }
    .gr-ripple:nth-child(2) { animation-delay: 0.6s; }
    .gr-ripple:nth-child(3) { animation-delay: 1.2s; }
    .gr-home-dot { width: 18px; height: 18px; background: #D4A843; border: 2.5px solid #fff; border-radius: 50%; position: relative; z-index: 2; display: flex; align-items: center; justify-content: center; font-size: 10px; }
  </style>
`

export default function PortsMap() {
  const mapRef = useRef(null)
  const mapInstance = useRef(null)

  useEffect(() => {
    if (mapInstance.current) return

    // Inject styles
    const styleEl = document.createElement('div')
    styleEl.innerHTML = POPUP_STYLE + PULSE_STYLE
    document.head.appendChild(styleEl)

    import('leaflet').then(L => {
      const map = L.map(mapRef.current, {
        center: [20.5937, 78.9629],
        zoom: 5,
        minZoom: 4,
        maxZoom: 10,
        zoomControl: true,
        scrollWheelZoom: false,
      })
      mapInstance.current = map

      // Dark tile layer
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map)

      // India GeoJSON overlay
      fetch('https://raw.githubusercontent.com/geohacker/india/master/state/india_state.geojson')
        .then(r => r.json())
        .then(data => {
          L.geoJSON(data, {
            style: {
              fillColor: '#00C2E0',
              fillOpacity: 0.04,
              color: '#00C2E0',
              opacity: 0.3,
              weight: 1.5,
            },
          }).addTo(map)
        })
        .catch(() => {})

      // Port markers
      PORTS.forEach(port => {
        let marker

        if (port.home) {
          const homeIcon = L.divIcon({
            className: '',
            html: `<div class="gr-home-marker">
              <div class="gr-ripple"></div>
              <div class="gr-ripple"></div>
              <div class="gr-ripple"></div>
              <div class="gr-home-dot">⭐</div>
            </div>`,
            iconSize: [40, 40],
            iconAnchor: [20, 20],
            popupAnchor: [0, -22],
          })
          marker = L.marker([port.lat, port.lng], { icon: homeIcon })
        } else {
          const dotIcon = L.divIcon({
            className: '',
            html: `<div style="width:14px;height:14px;background:#00C2E0;border:2px solid #fff;border-radius:50%;box-shadow:0 0 8px rgba(0,194,224,0.6);transition:all 0.2s;cursor:pointer;"></div>`,
            iconSize: [14, 14],
            iconAnchor: [7, 7],
            popupAnchor: [0, -10],
          })
          marker = L.marker([port.lat, port.lng], { icon: dotIcon })
        }

        const popupContent = `
          <div class="gr-popup-inner">
            <div class="gr-popup-title">🚢 ${port.name.toUpperCase()}${port.home ? ' ⭐' : ''}</div>
            <div class="gr-popup-sub">GR Shipping operates here 24×7</div>
            <div class="gr-popup-sub">All Ship Supply & Repair Services Available</div>
            <hr class="gr-popup-divider"/>
            <div class="gr-popup-phone">📞 +91 96522 22993</div>
            <a class="gr-popup-btn" href="/contact">Request Supply at This Port →</a>
          </div>
        `

        marker.bindPopup(popupContent, { className: 'gr-popup', maxWidth: 260 })
        marker.addTo(map)
      })
    })

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove()
        mapInstance.current = null
      }
    }
  }, [])

  const chips = ['⭐ Kakinada', 'Vizag', 'Chennai', 'Mumbai', 'Kandla', 'Kochi', 'Kolkata', 'Paradip', 'Haldia', 'Tuticorin', 'JNPT', 'Mormugao', 'Ennore', 'Gangavaram', 'Hazira', 'Krishnapatnam']

  return (
    <section className="section-pad bg-navy-dark">
      <div className="container-max">
        <FadeUp className="text-center mb-12">
          <span className="font-mono text-xs text-cyan tracking-widest uppercase">Coverage</span>
          <h2 className="font-display text-5xl md:text-6xl text-white mt-2">PORTS WE SERVE ACROSS INDIA</h2>
          <p className="font-body text-white/50 mt-3">Home Port: Kakinada ⭐ | Serving All Major Indian Ports 24×7</p>
        </FadeUp>

        {/* Map */}
        <FadeUp>
          <div className="rounded-2xl overflow-hidden border border-cyan/20 shadow-2xl shadow-cyan/5" style={{ height: '600px' }}>
            <div ref={mapRef} style={{ height: '100%', width: '100%' }} />
          </div>
        </FadeUp>

        {/* Stats bar */}
        <FadeUp delay={100}>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[['18+', 'Ports Covered'], ['East Coast', '✓ Fully Served'], ['West Coast', '✓ Fully Served'], ['All Anchorages', '✓ Available']].map(([val, label]) => (
              <div key={val} className="bg-navy border border-cyan/10 rounded-xl px-4 py-3 text-center">
                <div className="font-display text-2xl text-cyan">{val}</div>
                <div className="font-heading text-xs text-white/40 tracking-wide mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Port chips */}
        <FadeUp delay={150}>
          <div className="mt-6 flex flex-wrap gap-2">
            {chips.map(chip => (
              <span key={chip} className={`font-heading text-xs px-3 py-1.5 rounded-full border ${chip.startsWith('⭐') ? 'bg-gold/10 border-gold/30 text-gold' : 'bg-cyan/5 border-cyan/20 text-cyan/70'}`}>
                {chip}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
