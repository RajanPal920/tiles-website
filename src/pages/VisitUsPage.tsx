import React from 'react';
import { 
  MapPin, 
  Phone, 
  Navigation, 
  CheckCircle,
  Building,
  Compass
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { BUSINESS_INFO, getWhatsAppUrl } from '../utils/constants';

interface VisitUsPageProps {
  onOpenQuote: () => void;
}

export const VisitUsPage: React.FC<VisitUsPageProps> = ({ onOpenQuote }) => {
  return (
    <div style={{ backgroundColor: 'var(--color-warm-ivory)', minHeight: '80vh', paddingBottom: 80 }}>
      {/* Location Hero */}
      <section style={{
        position: 'relative',
        backgroundColor: '#1c1e19',
        color: 'var(--color-white)',
        padding: 'clamp(64px, 8vw, 96px) 0',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.85
        }} />

        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(20,22,18,0.88) 0%, rgba(20,22,18,0.6) 50%, rgba(20,22,18,0.2) 100%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'left' }}>
          <div style={{ maxWidth: 740 }}>
            <span className="section-eyebrow" style={{ color: 'var(--color-sand)', textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>
              Showroom Location & Guidance
            </span>
            <h1 style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
              color: 'var(--color-white)',
              lineHeight: 1.15,
              marginBottom: 16,
              textShadow: '0 2px 14px rgba(0,0,0,0.5)'
            }}>
              Visit Our Aurangabad Showroom
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
              color: 'rgba(255, 255, 255, 0.95)',
              lineHeight: 1.6,
              marginBottom: 28,
              textShadow: '0 1px 6px rgba(0,0,0,0.5)'
            }}>
              Inspect physical surface textures, natural lighting reflections, and full-scale slab mockups at our central showroom opposite Jincy Police Station.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Navigation size={16} /> Open in Google Maps
              </a>

              <a
                href={getWhatsAppUrl('Hello Aaman Lakhani, I am planning to visit the Marathwada Tiles showroom in Aurangabad.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <WhatsAppIcon size={18} color="#FFFFFF" />
                <span>Confirm Visit on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container" style={{ paddingTop: 44 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 40,
          alignItems: 'start'
        }}>
          {/* Left Column: Address, Navigation & Landmarks */}
          <div style={{
            backgroundColor: 'var(--color-white)',
            borderRadius: '12px',
            border: '1px solid var(--color-border-light)',
            padding: 'clamp(24px, 4vw, 40px)',
            textAlign: 'left'
          }}>
            <span className="section-eyebrow">Showroom Location</span>
            <h2 style={{ fontSize: '1.85rem', marginBottom: 20 }}>Marathwada Tiles</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 32 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <MapPin size={22} color="var(--color-terracotta)" style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--color-deep-charcoal)' }}>
                    Complete Address:
                  </div>
                  <div style={{ color: 'var(--color-text-body)', fontSize: '0.9375rem', marginTop: 4, lineHeight: 1.6 }}>
                    {BUSINESS_INFO.address.street},<br />
                    {BUSINESS_INFO.address.landmark},<br />
                    {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.pincode}, {BUSINESS_INFO.address.country}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <Phone size={22} color="var(--color-olive)" style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--color-deep-charcoal)' }}>
                    Contact & Direct Showroom Inquiries:
                  </div>
                  <div style={{ color: 'var(--color-text-body)', fontSize: '0.9375rem', marginTop: 4 }}>
                    Contact Person: <strong>{BUSINESS_INFO.contactPerson}</strong>
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneTel}`}
                    style={{ fontSize: '1.1rem', color: 'var(--color-terracotta)', fontWeight: 700, display: 'inline-block', marginTop: 4 }}
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <Navigation size={22} color="var(--color-deep-charcoal)" style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--color-deep-charcoal)' }}>
                    Landmark Guide:
                  </div>
                  <div style={{ color: 'var(--color-text-body)', fontSize: '0.9375rem', marginTop: 4, lineHeight: 1.5 }}>
                    Situated at Ranchoddas Girni, Rengtipura area, directly opposite Jincy Police Station in Aurangabad.
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                style={{ width: '100%' }}
              >
                <Navigation size={18} /> Open Google Maps Directions
              </a>

              <a
                href={getWhatsAppUrl('Hello Aaman Lakhani, I am planning to visit the Marathwada Tiles showroom in Aurangabad. Please guide me on timings and arrival.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%' }}
              >
                <WhatsAppIcon size={18} color="#FFFFFF" /> Confirm Visit on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Visual Guide & What to Expect */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Showroom Photo Card */}
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              height: 320,
              position: 'relative',
              border: '1px solid var(--color-border-light)'
            }}>
              <img
                src="/images/hero-luxury-living.jpg"
                alt="Marathwada Tiles Aurangabad Showroom"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(20,22,18,0.85) 0%, transparent 60%)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: 24
              }}>
                <div style={{ color: 'var(--color-white)', textAlign: 'left' }}>
                  <div style={{ fontWeight: 700, fontSize: '1.2rem' }}>Experience Tiles in Ambient Light</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-sand)', marginTop: 2 }}>
                    Full-format 1200x1800mm and 800x1600mm displays on view.
                  </div>
                </div>
              </div>
            </div>

            {/* What to Bring / Preparation */}
            <div style={{
              backgroundColor: 'var(--color-white)',
              borderRadius: '12px',
              border: '1px solid var(--color-border-light)',
              padding: '28px',
              textAlign: 'left'
            }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: 14 }}>Tips for Your Showroom Visit</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: '0.875rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <CheckCircle size={18} color="var(--color-olive)" style={{ marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <strong>Bring Room Dimensions or Floor Plans:</strong> Even approximate measurements allow us to estimate box quantities and wastage accurately.
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <CheckCircle size={18} color="var(--color-olive)" style={{ marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <strong>Cabinetry & Paint Swatches:</strong> If you have cabinet laminates, wall paint swatches, or countertop samples, bring them along to test under daylight.
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <CheckCircle size={18} color="var(--color-olive)" style={{ marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <strong>Direct Guidance with Aaman Lakhani:</strong> Discuss batch reservation and logistics directly with our team.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
