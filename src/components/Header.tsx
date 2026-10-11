import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
  Search,
  MapPin,
  Phone,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Layers,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { BUSINESS_INFO } from '../utils/constants';

interface HeaderProps {
  onOpenSearch?: () => void;
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch, onOpenQuote }) => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isBlogResourcesOpen, setIsBlogResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const megaMenuTimeout = useRef<any>(null);
  const blogMenuTimeout = useRef<any>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    setIsBlogResourcesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnterMega = () => {
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeaveMega = () => {
    megaMenuTimeout.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 150);
  };

  const handleMouseEnterBlog = () => {
    if (blogMenuTimeout.current) clearTimeout(blogMenuTimeout.current);
    setIsBlogResourcesOpen(true);
  };

  const handleMouseLeaveBlog = () => {
    blogMenuTimeout.current = setTimeout(() => {
      setIsBlogResourcesOpen(false);
    }, 150);
  };

  const handleFilterNavigate = (type: 'category' | 'space' | 'finish' | 'look', value: string) => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
    navigate(`/products?${type}=${encodeURIComponent(value)}`);
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 850,
      backgroundColor: 'var(--color-white)',
      transition: 'box-shadow var(--transition-fast), border-color var(--transition-fast)',
      borderBottom: isScrolled ? '1px solid var(--color-border-light)' : '1px solid rgba(227, 222, 213, 0.7)',
      boxShadow: isScrolled ? '0 2px 12px rgba(37,37,37,0.06)' : 'none'
    }}>
      {/* Top Utility Bar */}
      <div style={{
        backgroundColor: 'var(--color-deep-charcoal)',
        color: 'var(--color-warm-ivory)',
        fontSize: '0.8125rem',
        padding: '6px 0',
        borderBottom: '1px solid #333'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 8
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <MapPin size={13} color="var(--color-sand)" />
              <span>Rengtipura, Opposite Jincy Police Station, Aurangabad</span>
            </span>
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--color-warm-ivory)' }}
            >
              <Phone size={13} color="var(--color-terracotta)" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Link
              to="/visit-us"
              style={{ color: 'var(--color-sand)', fontSize: '0.75rem', letterSpacing: '0.04em', textTransform: 'uppercase', fontWeight: 600 }}
            >
              Showroom Directions
            </Link>
            <span style={{ opacity: 0.4 }}>|</span>
            <span style={{ fontSize: '0.75rem', color: 'rgba(246, 243, 236, 0.75)' }}>
              Consultations: {BUSINESS_INFO.contactPerson}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '82px',
        position: 'relative'
      }}>
        {/* Brand Logo - Official Provided Asset (Enlarged & Prominent) */}
        <Link
          to="/"
          style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}
          aria-label="Marathwada Tiles Homepage"
        >
          <img
            src="/images/marathwada-tiles-logo.png"
            alt="Marathwada Tiles - Aurangabad Surfaces"
            style={{
              height: 'clamp(50px, 4.4vw, 192px)',
              width: 'auto',
              maxWidth: '320px',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(14px, 1.8vw, 30px)',
          height: '100%',
          flex: '1 1 auto',
          margin: '0 20px'
        }} className="desktop-nav">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              display: 'inline-flex',
              alignItems: 'center',
              height: '100%',
              padding: '0 4px',
              fontWeight: isActive ? 600 : 500,
              color: isActive ? 'var(--color-terracotta)' : 'var(--color-deep-charcoal)',
              fontSize: '0.9375rem',
              borderBottom: isActive ? '2px solid var(--color-terracotta)' : '2px solid transparent',
              transition: 'color var(--transition-fast), border-color var(--transition-fast)'
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            style={({ isActive }) => ({
              display: 'inline-flex',
              alignItems: 'center',
              height: '100%',
              padding: '0 4px',
              fontWeight: isActive ? 600 : 500,
              color: isActive ? 'var(--color-terracotta)' : 'var(--color-deep-charcoal)',
              fontSize: '0.9375rem',
              borderBottom: isActive ? '2px solid var(--color-terracotta)' : '2px solid transparent',
              transition: 'color var(--transition-fast), border-color var(--transition-fast)'
            })}
          >
            About Us
          </NavLink>

          {/* Products Mega Menu Trigger */}
          <div
            style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
            onMouseEnter={handleMouseEnterMega}
            onMouseLeave={handleMouseLeaveMega}
          >
            <NavLink
              to="/products"
              style={({ isActive }) => ({
                display: 'inline-flex',
                alignItems: 'center',
                height: '100%',
                padding: '0 4px',
                gap: 4,
                fontWeight: isActive ? 600 : 500,
                color: isActive ? 'var(--color-terracotta)' : 'var(--color-deep-charcoal)',
                fontSize: '0.9375rem',
                borderBottom: isActive ? '2px solid var(--color-terracotta)' : '2px solid transparent',
                transition: 'color var(--transition-fast), border-color var(--transition-fast)'
              })}
            >
              <span>Products</span>
              <ChevronDown size={14} style={{
                transform: isMegaMenuOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform var(--transition-fast)'
              }} />
            </NavLink>

            {/* Desktop Products Mega Menu Dropdown */}
            {isMegaMenuOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: -220,
                  width: 940,
                  backgroundColor: 'var(--color-white)',
                  boxShadow: 'var(--shadow-modal)',
                  border: '1px solid var(--color-border-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: '30px 34px',
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1.2fr 1.2fr 1.4fr',
                  gap: 28,
                  zIndex: 999,
                  animation: 'fadeIn 0.2s ease-out'
                }}
                onMouseEnter={handleMouseEnterMega}
                onMouseLeave={handleMouseLeaveMega}
              >
                {/* Col 1: Categories */}
                <div style={{ textAlign: 'left' }}>
                  <div style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: 'var(--color-terracotta)',
                    marginBottom: 14,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6
                  }}>
                    <Layers size={13} />
                    Tile Categories
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
                    {[
                      'Floor Tiles',
                      'Wall Tiles',
                      'Vitrified Tiles',
                      'Ceramic Tiles',
                      'Porcelain Tiles',
                      'Decorative Tiles',
                      'Outdoor Tiles'
                    ].map((cat) => (
                      <li key={cat}>
                        <button
                          onClick={() => handleFilterNavigate('category', cat)}
                          style={{
                            fontSize: '0.875rem',
                            color: 'var(--color-deep-charcoal)',
                            transition: 'color var(--transition-fast)',
                            textAlign: 'left',
                            padding: '2px 0'
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-terracotta)')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-deep-charcoal)')}
                        >
                          {cat}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Col 2: Spaces */}
                <div style={{ textAlign: 'left' }}>
                  <div style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: 'var(--color-olive)',
                    marginBottom: 14
                  }}>
                    By Space
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
                    {[
                      'Living Room',
                      'Bedroom',
                      'Bathroom',
                      'Kitchen',
                      'Balcony',
                      'Outdoor and Terrace',
                      'Commercial Spaces',
                      'Staircases'
                    ].map((space) => (
                      <li key={space}>
                        <button
                          onClick={() => handleFilterNavigate('space', space)}
                          style={{
                            fontSize: '0.875rem',
                            color: 'var(--color-deep-charcoal)',
                            transition: 'color var(--transition-fast)',
                            textAlign: 'left',
                            padding: '2px 0'
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-olive)')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-deep-charcoal)')}
                        >
                          {space}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Col 3: Finishes & Looks */}
                <div style={{ textAlign: 'left' }}>
                  <div style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: 'var(--color-deep-charcoal)',
                    marginBottom: 14
                  }}>
                    Looks & Finishes
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
                    {[
                      { type: 'look', label: 'Marble Look' },
                      { type: 'look', label: 'Stone Look' },
                      { type: 'look', label: 'Wood Look' },
                      { type: 'look', label: 'Concrete Look' },
                      { type: 'look', label: 'Terrazzo Effect' },
                      { type: 'finish', label: 'Glossy Finish' },
                      { type: 'finish', label: 'Matte Finish' },
                      { type: 'finish', label: 'Textured Finish' }
                    ].map((item) => (
                      <li key={item.label}>
                        <button
                          onClick={() => handleFilterNavigate(item.type as any, item.label.replace(' Finish', ''))}
                          style={{
                            fontSize: '0.875rem',
                            color: 'var(--color-deep-charcoal)',
                            transition: 'color var(--transition-fast)',
                            textAlign: 'left',
                            padding: '2px 0'
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-terracotta)')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-deep-charcoal)')}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Col 4: Featured Preview Card */}
                <div style={{
                  backgroundColor: 'var(--color-warm-ivory)',
                  borderRadius: 'var(--radius-sm)',
                  padding: 16,
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid var(--color-border-light)',
                  textAlign: 'left'
                }}>
                  <div style={{
                    position: 'relative',
                    height: 130,
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    marginBottom: 12
                  }}>
                    <img
                      src="/images/tile-marble-statuary.jpg"
                      alt="Featured Statuario Slab"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: 8,
                      left: 8,
                      backgroundColor: 'rgba(38,41,35,0.85)',
                      color: '#fff',
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      padding: '3px 8px',
                      borderRadius: 2
                    }}>
                      FEATURED SLAB
                    </div>
                  </div>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: 4 }}>Statuario Oro Polished</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-body)', marginBottom: 12 }}>
                    Continuous 1200x1800mm Italian vitrified slabs for luxury Aurangabad residences.
                  </p>
                  <Link
                    to="/products/statuario-oro-vitrified"
                    onClick={() => setIsMegaMenuOpen(false)}
                    style={{
                      marginTop: 'auto',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: 'var(--color-terracotta)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 4
                    }}
                  >
                    View Slab Details <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <NavLink
            to="/catalogues"
            style={({ isActive }) => ({
              display: 'inline-flex',
              alignItems: 'center',
              height: '100%',
              padding: '0 4px',
              fontWeight: isActive ? 600 : 500,
              color: isActive ? 'var(--color-terracotta)' : 'var(--color-deep-charcoal)',
              fontSize: '0.9375rem',
              borderBottom: isActive ? '2px solid var(--color-terracotta)' : '2px solid transparent',
              transition: 'color var(--transition-fast), border-color var(--transition-fast)'
            })}
          >
            Catalogues
          </NavLink>

          {/* Consolidated Blog & Resources Item */}
          <div
            style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
            onMouseEnter={handleMouseEnterBlog}
            onMouseLeave={handleMouseLeaveBlog}
          >
            <NavLink
              to="/resources"
              style={({ isActive }) => ({
                display: 'inline-flex',
                alignItems: 'center',
                height: '100%',
                padding: '0 4px',
                gap: 4,
                fontWeight: isActive ? 600 : 500,
                color: isActive ? 'var(--color-terracotta)' : 'var(--color-deep-charcoal)',
                fontSize: '0.9375rem',
                borderBottom: isActive ? '2px solid var(--color-terracotta)' : '2px solid transparent',
                transition: 'color var(--transition-fast), border-color var(--transition-fast)'
              })}
            >
              <span>Blog & Resources</span>
              <ChevronDown size={14} style={{
                transform: isBlogResourcesOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform var(--transition-fast)'
              }} />
            </NavLink>

            {isBlogResourcesOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: -60,
                  width: 300,
                  backgroundColor: 'var(--color-white)',
                  boxShadow: 'var(--shadow-card)',
                  border: '1px solid var(--color-border-light)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                  zIndex: 999,
                  textAlign: 'left',
                  animation: 'fadeIn 0.2s ease-out'
                }}
                onMouseEnter={handleMouseEnterBlog}
                onMouseLeave={handleMouseLeaveBlog}
              >
                <Link
                  to="/resources"
                  onClick={() => setIsBlogResourcesOpen(false)}
                  style={{
                    padding: '8px 10px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--color-terracotta)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>All Guides & Articles</span>
                  <ArrowRight size={14} />
                </Link>

                <div style={{ height: 1, backgroundColor: 'var(--color-border-light)', margin: '4px 0' }} />

                {[
                  { label: 'Tile Buying Guides', to: '/resources#tile-buying-guide' },
                  { label: 'Tile Design Ideas', to: '/resources#tile-design-ideas' },
                  { label: 'Care & Maintenance Tips', to: '/resources#care-maintenance' },
                  { label: 'Frequently Asked Questions', to: '/resources#frequently-asked-questions' }
                ].map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setIsBlogResourcesOpen(false)}
                    style={{
                      padding: '8px 12px',
                      fontSize: '0.8125rem',
                      color: 'var(--color-deep-charcoal)',
                      borderRadius: 'var(--radius-sm)',
                      transition: 'background var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-warm-ivory)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              display: 'inline-flex',
              alignItems: 'center',
              height: '100%',
              padding: '0 4px',
              fontWeight: isActive ? 600 : 500,
              color: isActive ? 'var(--color-terracotta)' : 'var(--color-deep-charcoal)',
              fontSize: '0.9375rem',
              borderBottom: isActive ? '2px solid var(--color-terracotta)' : '2px solid transparent',
              transition: 'color var(--transition-fast), border-color var(--transition-fast)'
            })}
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
          {/* Get a Quote Button */}
          <button
            onClick={onOpenQuote}
            className="btn btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 42,
              padding: '0 20px',
              gap: 8,
              fontSize: '0.875rem',
              fontWeight: 600,
              backgroundColor: 'var(--color-terracotta)',
              color: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-terracotta)',
              boxShadow: '0 2px 8px rgba(168, 95, 72, 0.25)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all var(--transition-fast)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-terracotta-dark)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-terracotta)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <Phone size={15} color="#FFFFFF" strokeWidth={2.2} />
            <span>Get a Quote</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile navigation"
            style={{
              padding: 8,
              color: 'var(--color-deep-charcoal)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            className="mobile-hamburger-btn"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '112px',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'var(--color-white)',
          zIndex: 840,
          overflowY: 'auto',
          padding: '24px 20px 40px',
          borderTop: '1px solid var(--color-border-light)',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          {/* Official Logo at top of drawer */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingBottom: 16,
            marginBottom: 16,
            borderBottom: '1px solid var(--color-border-light)'
          }}>
            <img
              src="/images/marathwada-tiles-logo.png"
              alt="Marathwada Tiles"
              style={{ height: '46px', width: 'auto', maxWidth: '220px', objectFit: 'contain' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--color-deep-charcoal)', padding: '6px 0', textAlign: 'left' }}
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--color-deep-charcoal)', padding: '6px 0', textAlign: 'left' }}
            >
              About Us
            </Link>

            {/* Expandable Products Accordion */}
            <div>
              <div
                onClick={() => setMobileAccordion(mobileAccordion === 'products' ? null : 'products')}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  color: 'var(--color-deep-charcoal)',
                  padding: '6px 0',
                  cursor: 'pointer'
                }}
              >
                <span>Products & Categories</span>
                <ChevronDown size={18} style={{
                  transform: mobileAccordion === 'products' ? 'rotate(180deg)' : 'none',
                  transition: 'transform var(--transition-fast)'
                }} />
              </div>

              {mobileAccordion === 'products' && (
                <div style={{
                  padding: '12px 0 12px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  borderLeft: '2px solid var(--color-sand)',
                  textAlign: 'left'
                }}>
                  <Link
                    to="/products"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ fontWeight: 600, color: 'var(--color-terracotta)', fontSize: '0.9375rem' }}
                  >
                    View All Products &rarr;
                  </Link>

                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-body)', marginTop: 4 }}>
                    By Category:
                  </div>
                  {['Floor Tiles', 'Wall Tiles', 'Vitrified Tiles', 'Ceramic Tiles', 'Porcelain Tiles', 'Outdoor Tiles'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleFilterNavigate('category', cat)}
                      style={{ textAlign: 'left', fontSize: '0.875rem', color: 'var(--color-deep-charcoal)' }}
                    >
                      {cat}
                    </button>
                  ))}

                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-body)', marginTop: 8 }}>
                    By Space:
                  </div>
                  {['Living Room', 'Bedroom', 'Bathroom', 'Kitchen', 'Balcony', 'Outdoor and Terrace'].map((space) => (
                    <button
                      key={space}
                      onClick={() => handleFilterNavigate('space', space)}
                      style={{ textAlign: 'left', fontSize: '0.875rem', color: 'var(--color-deep-charcoal)' }}
                    >
                      {space}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/catalogues"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--color-deep-charcoal)', padding: '6px 0', textAlign: 'left' }}
            >
              Catalogues (6 Editions)
            </Link>

            {/* Expandable Blog & Resources Accordion */}
            <div>
              <div
                onClick={() => setMobileAccordion(mobileAccordion === 'resources' ? null : 'resources')}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  color: 'var(--color-deep-charcoal)',
                  padding: '6px 0',
                  cursor: 'pointer'
                }}
              >
                <span>Blog & Resources</span>
                <ChevronDown size={18} style={{
                  transform: mobileAccordion === 'resources' ? 'rotate(180deg)' : 'none',
                  transition: 'transform var(--transition-fast)'
                }} />
              </div>

              {mobileAccordion === 'resources' && (
                <div style={{
                  padding: '12px 0 12px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  borderLeft: '2px solid var(--color-sand)',
                  textAlign: 'left'
                }}>
                  <Link
                    to="/resources"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ fontWeight: 600, color: 'var(--color-terracotta)', fontSize: '0.9375rem' }}
                  >
                    View All Resources &rarr;
                  </Link>

                  {[
                    { label: 'Tile Buying Guides', to: '/resources#tile-buying-guide' },
                    { label: 'Tile Design Ideas', to: '/resources#tile-design-ideas' },
                    { label: 'Care & Maintenance Tips', to: '/resources#care-maintenance' },
                    { label: 'Frequently Asked Questions', to: '/resources#frequently-asked-questions' }
                  ].map((res) => (
                    <Link
                      key={res.label}
                      to={res.to}
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{ textAlign: 'left', fontSize: '0.875rem', color: 'var(--color-deep-charcoal)', textDecoration: 'none' }}
                    >
                      {res.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/visit-us"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--color-deep-charcoal)', padding: '6px 0', textAlign: 'left' }}
            >
              Where to Buy / Visit Us
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--color-deep-charcoal)', padding: '6px 0', textAlign: 'left' }}
            >
              Contact Us
            </Link>

            <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid var(--color-border-light)', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="btn btn-primary"
                style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
              >
                <Phone size={16} color="#FFFFFF" />
                <span>Get a Quote</span>
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="btn btn-secondary"
                style={{ width: '100%' }}
              >
                <Phone size={16} /> Call {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Responsive media query styling */}
      <style>{`
        .desktop-nav a {
          white-space: nowrap !important;
        }
        @media (min-width: 1080px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-hamburger-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
