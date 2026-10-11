import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_INFO, getWhatsAppUrl } from '../utils/constants';

export const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--color-deep-charcoal)',
      color: 'var(--color-warm-ivory)',
      paddingTop: 72,
      paddingBottom: 36,
      borderTop: '1px solid #333'
    }}>
      <div className="container">
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 44,
          marginBottom: 56
        }}>
          {/* Column 1: Brand & Contact Info */}
          <div style={{ textAlign: 'left' }}>
            {/* Official Brand Logo */}
            <Link to="/" style={{ display: 'inline-block', marginBottom: 22 }} aria-label="Marathwada Tiles Home">
              <div style={{
                backgroundColor: '#FFFFFF',
                padding: '12px 22px',
                borderRadius: 'var(--radius-md)',
                display: 'inline-flex',
                alignItems: 'center',
                boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <img
                  src="/images/marathwada-tiles-logo.png"
                  alt="Marathwada Tiles - Aurangabad Surfaces"
                  style={{
                    height: '62px',
                    width: 'auto',
                    maxWidth: '280px',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
              </div>
            </Link>

            <p style={{
              fontSize: '0.875rem',
              color: 'rgba(246, 243, 236, 0.75)',
              lineHeight: 1.6,
              marginBottom: 20
            }}>
              Premier destination for floor tiles, wall tiles, vitrified slabs, and porcelain surfaces in Aurangabad. Thoughtfully curated collections for distinctive residential and commercial architecture.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <MapPin size={16} color="var(--color-sand)" style={{ marginTop: 4, flexShrink: 0 }} />
                <span style={{ color: 'rgba(246, 243, 236, 0.85)', lineHeight: 1.5 }}>
                  {BUSINESS_INFO.address.full}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Phone size={16} color="var(--color-terracotta)" style={{ flexShrink: 0 }} />
                <a 
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  style={{ color: 'var(--color-warm-ivory)', fontWeight: 600 }}
                >
                  {BUSINESS_INFO.phoneDisplay} ({BUSINESS_INFO.contactPerson})
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 4 }}>
                <WhatsAppIcon size={18} color="#25D366" />
                <a 
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#25D366', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 4 }}
                >
                  Chat on WhatsApp <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Tile Categories */}
          <div style={{ textAlign: 'left' }}>
            <h4 style={{
              color: 'var(--color-white)',
              fontSize: '1rem',
              letterSpacing: '0.04em',
              marginBottom: 18,
              fontFamily: 'var(--font-body)',
              fontWeight: 600
            }}>
              Tile Collections
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9, fontSize: '0.875rem' }}>
              {[
                { name: 'Floor Tiles', to: '/products?category=Floor+Tiles' },
                { name: 'Wall Tiles', to: '/products?category=Wall+Tiles' },
                { name: 'Vitrified Slabs', to: '/products?category=Vitrified+Tiles' },
                { name: 'Ceramic Tiles', to: '/products?category=Ceramic+Tiles' },
                { name: 'Porcelain Surfaces', to: '/products?category=Porcelain+Tiles' },
                { name: 'Outdoor Pavers', to: '/products?category=Outdoor+Tiles' },
                { name: 'Decorative & Fluted', to: '/products?category=Decorative+Tiles' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.to}
                    style={{ color: 'rgba(246, 243, 236, 0.75)', transition: 'color var(--transition-fast)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-terracotta)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(246, 243, 236, 0.75)')}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Spaces & Applications */}
          <div style={{ textAlign: 'left' }}>
            <h4 style={{
              color: 'var(--color-white)',
              fontSize: '1rem',
              letterSpacing: '0.04em',
              marginBottom: 18,
              fontFamily: 'var(--font-body)',
              fontWeight: 600
            }}>
              By Space
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9, fontSize: '0.875rem' }}>
              {[
                { name: 'Living Room Flooring', to: '/products?space=Living+Room' },
                { name: 'Bathroom & Sanctuary', to: '/products?space=Bathroom' },
                { name: 'Modern Kitchen & Dining', to: '/products?space=Kitchen' },
                { name: 'Bedroom Warmth', to: '/products?space=Bedroom' },
                { name: 'Balcony & Veranda', to: '/products?space=Balcony' },
                { name: 'Commercial Spaces', to: '/products?space=Commercial+Spaces' },
                { name: 'Staircase Steps & Risers', to: '/products?space=Staircases' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.to}
                    style={{ color: 'rgba(246, 243, 236, 0.75)', transition: 'color var(--transition-fast)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-sand)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(246, 243, 236, 0.75)')}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company & Consolidated Blog/Resources */}
          <div style={{ textAlign: 'left' }}>
            <h4 style={{
              color: 'var(--color-white)',
              fontSize: '1rem',
              letterSpacing: '0.04em',
              marginBottom: 18,
              fontFamily: 'var(--font-body)',
              fontWeight: 600
            }}>
              Company & Guides
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9, fontSize: '0.875rem' }}>
              <li>
                <Link 
                  to="/about"
                  style={{ color: 'rgba(246, 243, 236, 0.75)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-terracotta)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(246, 243, 236, 0.75)')}
                >
                  About Marathwada Tiles
                </Link>
              </li>
              <li>
                <Link 
                  to="/catalogues"
                  style={{ color: 'rgba(246, 243, 236, 0.75)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-terracotta)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(246, 243, 236, 0.75)')}
                >
                  Catalogues (6 Editions)
                </Link>
              </li>
              <li>
                <Link 
                  to="/resources"
                  style={{ color: 'rgba(246, 243, 236, 0.75)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-terracotta)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(246, 243, 236, 0.75)')}
                >
                  Blog & Resources
                </Link>
              </li>
              <li>
                <Link 
                  to="/visit-us"
                  style={{ color: 'rgba(246, 243, 236, 0.75)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-terracotta)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(246, 243, 236, 0.75)')}
                >
                  Where to Buy / Visit Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact"
                  style={{ color: 'rgba(246, 243, 236, 0.75)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-terracotta)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(246, 243, 236, 0.75)')}
                >
                  Contact Showroom
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div style={{
          borderTop: '1px solid rgba(227, 222, 213, 0.12)',
          paddingTop: 24,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          fontSize: '0.8125rem',
          color: 'rgba(246, 243, 236, 0.55)'
        }}>
          <div>
            &copy; {new Date().getFullYear()} Marathwada Tiles. All rights reserved. Showroom at Aurangabad, Maharashtra.
          </div>

          <div style={{ display: 'flex', gap: 24 }}>
            <Link 
              to="/privacy" 
              style={{ color: 'rgba(246, 243, 236, 0.7)', transition: 'color var(--transition-fast)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-sand)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(246, 243, 236, 0.7)')}
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              style={{ color: 'rgba(246, 243, 236, 0.7)', transition: 'color var(--transition-fast)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-sand)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(246, 243, 236, 0.7)')}
            >
              Terms & Conditions
            </Link>
            <Link 
              to="/visit-us" 
              style={{ color: 'rgba(246, 243, 236, 0.7)', transition: 'color var(--transition-fast)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-sand)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(246, 243, 236, 0.7)')}
            >
              Showroom Directions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
