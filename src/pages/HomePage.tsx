import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Phone, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Compass, 
  BookOpen
} from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { ScrollReveal } from '../components/ScrollReveal';
import { products } from '../data/products';
import { blogPosts } from '../data/blog';
import { BUSINESS_INFO, getWhatsAppUrl } from '../utils/constants';

interface HomePageProps {
  onOpenQuote: (productName?: string) => void;
}

const HERO_SLIDES = [
  {
    eyebrow: 'SPACES THAT FEEL LIKE HOME',
    headline: 'Beautiful Surfaces. Better Living.',
    description: 'Explore thoughtfully selected floor, wall, and vitrified tile designs for Aurangabad homes, workspaces, and architectural builds.',
    image: '/images/hero-luxury-living.jpg',
    ctaPrimary: 'Explore Collections',
    ctaLink: '/products',
    badge: 'Curated Indian & Italian Formats'
  },
  {
    eyebrow: 'THE BATH SANCTUARY',
    headline: 'Tactile Warmth & Refined Textures.',
    description: 'From sculpted fluted ceramic wall tiles to honed anti-skid porcelain, discover balanced surfaces crafted for everyday calm.',
    image: '/images/space-bathroom.jpg',
    ctaPrimary: 'Shop Bathroom Tiles',
    ctaLink: '/products?space=Bathroom',
    badge: 'Moisture-Grade & R10 Safe'
  },
  {
    eyebrow: 'CULINARY ELEGANCE',
    headline: 'Modern Architecture. Everyday Performance.',
    description: 'Large-format concrete and marble porcelain slabs that resist stains, hot cookware, and high footfall with effortless grace.',
    image: '/images/space-kitchen.jpg',
    ctaPrimary: 'Discover Kitchen Surfaces',
    ctaLink: '/products?space=Kitchen',
    badge: 'Stain-Resistant & Heat-Stable'
  },
  {
    eyebrow: 'EXTERIOR & VERANDA LIVING',
    headline: 'Built for Weather. Designed for Grace.',
    description: 'Heavy-duty 12mm exterior pavers engineered to endure Maharashtra summers and monsoon rains with zero fading.',
    image: '/images/space-outdoor.jpg',
    ctaPrimary: 'Explore Outdoor Pavers',
    ctaLink: '/products?space=Outdoor+and+Terrace',
    badge: 'Anti-Skid & Thermal Stable'
  }
];

const ROOM_CATEGORIES = [
  {
    name: 'Living Room',
    query: 'Living Room',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    desc: 'Grand-format polished vitrified slabs that expand your family hall with continuous veining.',
    count: '20 Designs'
  },
  {
    name: 'Bathroom & En-Suite',
    query: 'Bathroom',
    image: '/images/space-bathroom.jpg',
    desc: 'Tactile fluted wall relief paired with R10 matte anti-skid floor pavers for wellness.',
    count: '14 Designs'
  },
  {
    name: 'Kitchen & Dining',
    query: 'Kitchen',
    image: '/images/space-kitchen.jpg',
    desc: 'Stain-resistant micro-cement & honed Calacatta porcelain engineered for culinary spaces.',
    count: '11 Designs'
  },
  {
    name: 'Master Bedroom',
    query: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    desc: 'Warm oak plank tiles and soft neutral travertine textures creating comforting rest.',
    count: '12 Designs'
  },
  {
    name: 'Balcony & Veranda',
    query: 'Balcony',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    desc: 'Weatherproof terracotta and stone porcelain that embrace natural daylight.',
    count: '11 Designs'
  },
  {
    name: 'Outdoor & Terrace',
    query: 'Outdoor and Terrace',
    image: '/images/space-outdoor.jpg',
    desc: 'Thickened 12–16mm exterior pavers with high-grip textures built for monsoons.',
    count: '7 Designs'
  },
  {
    name: 'Commercial & Office',
    query: 'Commercial Spaces',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    desc: 'High-traffic technical vitrified surfaces for corporate lobbies, retail, and boardrooms.',
    count: '13 Designs'
  },
  {
    name: 'Staircases & Steps',
    query: 'Staircases',
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80',
    desc: 'Factory bullnose treads with carved anti-slip grooves and matching risers.',
    count: '8 Designs'
  },
  {
    name: 'Entrance & Foyer',
    query: 'Entrance and Foyer',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    desc: 'Striking onyx, Statuario, and terrazzo slabs making an unforgettable entrance.',
    count: '14 Designs'
  },
  {
    name: 'Parking & Utility Areas',
    query: 'Parking and Utility Areas',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
    desc: 'Industrial chequered and corundum heavy pavers resistant to vehicular loads.',
    count: '6 Designs'
  },
  {
    name: 'Pooja Room & Sacred Spaces',
    query: 'Entrance and Foyer',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    desc: 'Carved Statuario marble backdrops and intricate brass-inlay ceramic panels.',
    count: '8 Designs'
  },
  {
    name: 'Courtyard & Lightwells',
    query: 'Outdoor and Terrace',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    desc: 'Open-to-sky natural stone and honed Kota porcelain resisting weathering.',
    count: '7 Designs'
  }
];

const INSPIRATION_ITEMS = [
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    title: '1200x1800mm Vitrified Slab Living Hall',
    desc: 'Grand bookmatched surface reflection with continuous veining'
  },
  {
    image: '/images/space-bathroom.jpg',
    title: 'Vertical Fluted Ceramic & Honed Vanity',
    desc: 'Tactile 3D wall relief with moisture-grade R10 matte floor'
  },
  {
    image: '/images/space-kitchen.jpg',
    title: 'Grigio Honed Concrete Porcelain Island',
    desc: 'High-density micro-cement porcelain resistant to culinary heat'
  },
  {
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
    title: 'Warm Scandinavian Oak Porcelain Planks',
    desc: '200x1200mm authentic timber texture without wood warping'
  },
  {
    image: '/images/space-outdoor.jpg',
    title: 'Weatherproof Veranda & Balcony Pavers',
    desc: '12mm full-body exterior pavers engineered for monsoons'
  },
  {
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
    title: 'Statuario Oro Polished Executive Foyer',
    desc: 'Refined Italian marble symmetry with diamond-rectified joints'
  }
];

// Requirement 5: Material Aesthetic — Exactly 8 balanced cards
const MATERIAL_AESTHETICS = [
  {
    title: 'Marble-Inspired Designs',
    look: 'Marble Look',
    desc: 'Statuario, Calacatta, and Nero Marquina slabs with authentic crystalline depth and fine veining.',
    image: '/images/tile-marble-statuary.jpg'
  },
  {
    title: 'Natural Stone Looks',
    look: 'Stone Look',
    desc: 'Travertine, slate, and basaltina textures with gentle tactile mineral clefts.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Warm Wood Textures',
    look: 'Wood Look',
    desc: 'Authentic Scandinavian oak and teak grain porcelain planks without wood maintenance.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Contemporary Concrete Looks',
    look: 'Concrete Look',
    desc: 'Minimalist micro-cement tones for modern open-plan spaces and industrial lofts.',
    image: '/images/space-kitchen.jpg'
  },
  {
    title: 'Terrazzo Effect',
    look: 'Terrazzo Effect',
    desc: 'Venetian aggregates of quartz and marble flecks suspended in durable porcelain.',
    image: 'https://images.unsplash.com/photo-1590402494587-44b71d7772f6?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Minimal Designs',
    look: 'Minimal Designs',
    desc: 'Calm, architectural zero-pattern surfaces that let proportion and daylight speak.',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Neutral Tones',
    look: 'Neutral Tones',
    desc: 'Warm ivory, sand beige, and taupe hues that harmonise seamlessly with Indian interiors.',
    image: '/images/hero-luxury-living.jpg'
  },
  {
    title: 'Decorative Surfaces',
    look: 'Decorative Tiles',
    desc: 'Artisanal Moroccan geometries, fluted wall relief, and Florentine medallions.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
  }
];

// Requirement 7: Exactly 8 Surface Finishes, Looks & Textures
const SURFACE_FINISHES = [
  {
    title: 'Wood Look',
    type: 'look',
    param: 'Wood Look',
    badge: 'Look',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
    desc: 'Warm grain porcelain planks immune to water, termites, and warping.'
  },
  {
    title: 'Stone Look',
    type: 'look',
    param: 'Stone Look',
    badge: 'Look',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    desc: 'Sedimentary travertine, basalt, and quartzite stone aesthetics.'
  },
  {
    title: 'Glossy Finish',
    type: 'finish',
    param: 'Glossy',
    badge: 'Finish',
    image: '/images/tile-marble-statuary.jpg',
    desc: 'Mirror-reflectivity nano glaze that illuminates spacious living halls.'
  },
  {
    title: 'Satin Finish',
    type: 'finish',
    param: 'Satin',
    badge: 'Finish',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=600&q=80',
    desc: 'Silky, soft-touch low-sheen glaze that eliminates harsh light glare.'
  },
  {
    title: 'Textured Finish',
    type: 'finish',
    param: 'Textured',
    badge: 'Finish',
    image: '/images/space-outdoor.jpg',
    desc: 'R11 & R12 anti-skid tactile relief engineered for safety in wet zones.'
  },
  {
    title: 'Decorative Tiles',
    type: 'look',
    param: 'Decorative Tiles',
    badge: 'Look',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
    desc: 'Sculptural fluted relief, encaustic stars, and tactile feature walls.'
  },
  {
    title: 'Minimal Designs',
    type: 'look',
    param: 'Minimal Designs',
    badge: 'Look',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
    desc: 'Monochrome, micro-powder finishes designed for uncluttered spaces.'
  },
  {
    title: 'Neutral Tones',
    type: 'look',
    param: 'Neutral Tones',
    badge: 'Look',
    image: '/images/hero-luxury-living.jpg',
    desc: 'Botticino, taupe, and raw linen palettes tailored for family living.'
  }
];

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuote }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [activeProductTab, setActiveProductTab] = useState<'All' | 'Living' | 'Bath' | 'Outdoor' | 'Commercial'>('All');
  const navigate = useNavigate();

  // Slide autoplay with refined 5s interval and pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swiped left -> next slide
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
      } else {
        // Swiped right -> prev slide
        setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
      }
    }
    setTouchStartX(null);
  };

  const slide = HERO_SLIDES[currentSlide];

  const featuredList = products.filter((p) => {
    if (activeProductTab === 'Living') return p.spaces.includes('Living Room');
    if (activeProductTab === 'Bath') return p.spaces.includes('Bathroom');
    if (activeProductTab === 'Outdoor') return p.spaces.includes('Outdoor and Terrace') || p.spaces.includes('Balcony');
    if (activeProductTab === 'Commercial') return p.spaces.includes('Commercial Spaces');
    return p.isFeatured;
  }).slice(0, 8);

  return (
    <div style={{ width: '100%' }}>
      {/* SECTION A: HERO — 85–95vh IMMERSIVE FULL-SCREEN EXPERIENCE */}
      <section 
        className="hero-slider-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          position: 'relative',
          minHeight: 'clamp(620px, 88vh, 880px)',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#1c1e19',
          color: 'var(--color-white)',
          overflow: 'hidden'
        }}
      >
        {/* Layered High-Resolution Slides with Smooth Cross-Fade */}
        {HERO_SLIDES.map((s, idx) => (
          <div
            key={idx}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${s.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: idx === currentSlide ? 1 : 0,
              transform: idx === currentSlide ? 'scale(1.02)' : 'scale(1)',
              transition: 'opacity 0.42s cubic-bezier(0.16, 1, 0.3, 1), transform 4.5s ease-out',
              willChange: 'opacity, transform',
              pointerEvents: 'none'
            }}
          />
        ))}

        {/* Localized Left-Hand Gradient Only — Preserves Image Clarity */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(20,22,18,0.85) 0%, rgba(20,22,18,0.55) 42%, rgba(20,22,18,0.1) 75%, transparent 100%)',
          pointerEvents: 'none'
        }} />

        {/* Hero Content Container */}
        <div className="container" style={{ position: 'relative', zIndex: 10, padding: '70px 24px' }}>
          <div style={{ maxWidth: 650, textAlign: 'left' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <span 
                className="badge badge-terracotta" 
                style={{ 
                  color: 'var(--color-white)', 
                  backgroundColor: 'var(--color-terracotta)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.25)'
                }}
              >
                {slide.badge}
              </span>
            </div>

            <div style={{
              fontSize: '0.875rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--color-sand)',
              fontWeight: 600,
              marginBottom: 12,
              textShadow: '0 1px 4px rgba(0,0,0,0.6)'
            }}>
              {slide.eyebrow}
            </div>

            <h1 style={{
              color: 'var(--color-white)',
              fontSize: 'clamp(2.5rem, 5.2vw, 4.2rem)',
              lineHeight: 1.1,
              marginBottom: 20,
              fontWeight: 600,
              textShadow: '0 2px 14px rgba(0,0,0,0.5)'
            }}>
              {slide.headline}
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              color: 'rgba(255, 255, 255, 0.95)',
              lineHeight: 1.6,
              marginBottom: 36,
              maxWidth: 580,
              textShadow: '0 1px 8px rgba(0,0,0,0.6)'
            }}>
              {slide.description}
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link to={slide.ctaLink} className="btn btn-primary btn-lg">
                <span>{slide.ctaPrimary}</span>
                <ArrowRight size={18} />
              </Link>

              <button 
                onClick={() => onOpenQuote()} 
                className="btn btn-outline-white btn-lg"
              >
                <span>Enquire Now</span>
              </button>
            </div>
          </div>
        </div>

        {/* Slide Controls & Pagination — Shifted toward left aligned with hero content */}
        <div style={{
          position: 'absolute',
          bottom: 'clamp(24px, 3.8vw, 34px)',
          left: 'clamp(24px, 5.5vw, 76px)',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          zIndex: 20
        }}>
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
            aria-label="Previous hero slide"
            style={{
              width: 42,
              height: 42,
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'rgba(24,26,22,0.78)',
              color: 'var(--color-white)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.25)',
              cursor: 'pointer',
              backdropFilter: 'blur(6px)',
              transition: 'background-color var(--transition-fast)'
            }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots Indicator */}
          <div style={{ display: 'flex', gap: 8 }}>
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                style={{
                  width: idx === currentSlide ? 28 : 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: idx === currentSlide ? 'var(--color-terracotta)' : 'rgba(255,255,255,0.45)',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
            aria-label="Next hero slide"
            style={{
              width: 42,
              height: 42,
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'rgba(24,26,22,0.78)',
              color: 'var(--color-white)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.25)',
              cursor: 'pointer',
              backdropFilter: 'blur(6px)',
              transition: 'background-color var(--transition-fast)'
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* SECTION B: SHOP BY SPACE (10 COMPLETE ROOM CATEGORIES) */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Architectural Applications</span>
            <h2 className="section-title">Tiles for Every Space</h2>
            <p className="section-desc">
              Every room has a distinct moisture profile, footfall level, and lighting atmosphere. Explore our curated collections for each living zone.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24
          }}>
            {ROOM_CATEGORIES.map((space, idx) => {
              const wavePos: 'center' | 'left' | 'right' = (idx % 3 === 1) ? 'center' : (idx % 3 === 0 ? 'left' : 'right');
              return (
                <ScrollReveal 
                  key={space.name} 
                  wavePosition={wavePos}
                  style={{ height: '100%' }}
                >
                <div
                  onClick={() => navigate(`/products?space=${encodeURIComponent(space.query)}`)}
                  className="arch-card"
                  style={{
                    position: 'relative',
                    height: 320,
                    cursor: 'pointer',
                    overflow: 'hidden',
                    borderRadius: '10px'
                  }}
                >
                  <img
                    src={space.image}
                    alt={space.name}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  
                  {/* Clean Bottom Gradient */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(30,32,27,0.92) 0%, rgba(30,32,27,0.4) 50%, rgba(30,32,27,0.05) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: 22,
                    textAlign: 'left'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                      <h3 style={{ color: 'var(--color-white)', fontSize: '1.35rem' }}>
                        {space.name}
                      </h3>
                      <span style={{ fontSize: '0.6875rem', color: 'var(--color-sand)', backgroundColor: 'rgba(255,255,255,0.15)', padding: '2px 8px', borderRadius: '4px' }}>
                        {space.count}
                      </span>
                    </div>
                    <p style={{ color: 'rgba(246, 243, 236, 0.85)', fontSize: '0.8125rem', marginBottom: 10, lineHeight: 1.4 }}>
                      {space.desc}
                    </p>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      color: 'var(--color-sand)',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em'
                    }}>
                      Explore Collection <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
          </div>
        </div>
      </section>

      {/* SECTION C: MATERIAL AESTHETIC (REQUIREMENT 5: EXACTLY 8 CARDS) */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Material Aesthetics</span>
            <h2 className="section-title">Find Your Signature Style</h2>
            <p className="section-desc">
              Whether you are drawn to the luminous elegance of Italian marble, raw cleft quartzite, warm Nordic timber, or architectural micro-cement.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24
          }}>
            {MATERIAL_AESTHETICS.map((col, idx) => (
              <ScrollReveal key={col.title} stagger={(idx % 4) + 1} style={{ height: '100%' }}>
                <div
                  onClick={() => navigate(`/products?look=${encodeURIComponent(col.look)}`)}
                  className="arch-card"
                  style={{
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    borderRadius: '10px'
                  }}
                >
                <div style={{ height: 210, overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={col.image}
                    alt={col.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 12,
                    left: 12,
                    backgroundColor: 'rgba(37,37,37,0.88)',
                    color: 'var(--color-white)',
                    fontSize: '0.6875rem',
                    padding: '3px 8px',
                    borderRadius: 3,
                    fontWeight: 600
                  }}>
                    {col.look}
                  </div>
                </div>

                <div style={{ padding: '20px', textAlign: 'left', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: 8, color: 'var(--color-deep-charcoal)' }}>
                    {col.title}
                  </h3>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-body)', lineHeight: 1.5, marginBottom: 16 }}>
                    {col.desc}
                  </p>
                  <div style={{
                    marginTop: 'auto',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    color: 'var(--color-terracotta)',
                    fontSize: '0.8125rem',
                    fontWeight: 600
                  }}>
                    Discover Finish <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION D: FEATURED PRODUCTS */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 36
          }}>
            <span className="section-eyebrow">Curated Catalogue</span>
            <h2 className="section-title">Selected for Your Space</h2>
            <p className="section-desc" style={{ maxWidth: 640, textAlign: 'center', marginBottom: 24 }}>
              Representative selections from our Aurangabad showroom inventory. Contact us for custom format dimensions and layout calculations.
            </p>

            {/* Filter Tabs */}
            <div style={{
              display: 'inline-flex',
              padding: 4,
              backgroundColor: 'var(--color-white)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border-light)',
              gap: 4,
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              {(['All', 'Living', 'Bath', 'Outdoor', 'Commercial'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveProductTab(tab)}
                  style={{
                    padding: '8px 18px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: activeProductTab === tab ? 'var(--color-deep-charcoal)' : 'transparent',
                    color: activeProductTab === tab ? 'var(--color-white)' : 'var(--color-text-body)',
                    transition: 'all var(--transition-fast)',
                    cursor: 'pointer'
                  }}
                >
                  {tab === 'All' ? 'All Featured' : tab}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
            marginBottom: 44
          }}>
            {featuredList.map((product, idx) => (
              <ScrollReveal key={product.id} stagger={(idx % 4) + 1} style={{ height: '100%' }}>
                <ProductCard
                  product={product}
                  onEnquire={(name) => onOpenQuote(name)}
                />
              </ScrollReveal>
            ))}
          </div>

          {/* View Complete Catalogue Link */}
          <div style={{ textAlign: 'center' }}>
            <Link to="/products" className="btn btn-secondary btn-lg">
              <span>View All 54 Tile Designs</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION E: DESIGN INSPIRATION IN REAL SPACES (CONTINUOUS HORIZONTAL MARQUEE) */}
      <section className="section-padding bg-charcoal" style={{ overflow: 'hidden' }}>
        <div className="container" style={{ marginBottom: 36 }}>
          <div className="section-header" style={{ marginBottom: 0 }}>
            <span className="section-eyebrow" style={{ color: 'var(--color-sand)' }}>In Situ Spaces</span>
            <h2 className="section-title" style={{ color: 'var(--color-white)' }}>Design Inspiration in Real Spaces</h2>
            <p className="section-desc" style={{ color: 'rgba(246, 243, 236, 0.75)' }}>
              Observe how natural daylight, joint spacing, and tile proportion harmonise across contemporary Indian residential architecture.
            </p>
          </div>
        </div>

        {/* Seamless Continuous Marquee Track - Right to Left */}
        <div className="marquee-container">
          <div className="marquee-track">
            {/* Primary Track Group */}
            <div className="marquee-group">
              {INSPIRATION_ITEMS.map((item, idx) => (
                <div 
                  key={`orig-${idx}`} 
                  className="marquee-card"
                  style={{ 
                    position: 'relative', 
                    borderRadius: '10px', 
                    overflow: 'hidden', 
                    width: 'clamp(300px, 28vw, 380px)', 
                    height: 320, 
                    flexShrink: 0 
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(20,22,18,0.92) 0%, rgba(20,22,18,0.4) 45%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: 20,
                    textAlign: 'left'
                  }}>
                    <div style={{
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: 'var(--color-white)',
                      marginBottom: 4
                    }}>
                      {item.title}
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: 'var(--color-sand)',
                      lineHeight: 1.4
                    }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Seamless Duplicate Group for Infinite Right-to-Left Loop */}
            <div className="marquee-group" aria-hidden="true">
              {INSPIRATION_ITEMS.map((item, idx) => (
                <div 
                  key={`dup-${idx}`} 
                  className="marquee-card"
                  style={{ 
                    position: 'relative', 
                    borderRadius: '10px', 
                    overflow: 'hidden', 
                    width: 'clamp(300px, 28vw, 380px)', 
                    height: 320, 
                    flexShrink: 0 
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(20,22,18,0.92) 0%, rgba(20,22,18,0.4) 45%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: 20,
                    textAlign: 'left'
                  }}>
                    <div style={{
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: 'var(--color-white)',
                      marginBottom: 4
                    }}>
                      {item.title}
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: 'var(--color-sand)',
                      lineHeight: 1.4
                    }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F: WHY MARATHWADA TILES */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Local Showroom Commitment</span>
            <h2 className="section-title">The Marathwada Tiles Experience</h2>
            <p className="section-desc">
              We help homeowners, architects, and builders in Aurangabad find surface materials that balance lasting durability with understated visual elegance.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 28
          }}>
            <div style={{
              padding: '28px 24px',
              backgroundColor: 'var(--color-warm-ivory)',
              borderRadius: '10px',
              border: '1px solid var(--color-border-light)',
              textAlign: 'left'
            }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '6px',
                backgroundColor: 'var(--color-terracotta)',
                color: 'var(--color-white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20
              }}>
                <Layers size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: 10 }}>A Range of Tile Styles</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', lineHeight: 1.6 }}>
                Carefully selected vitrified, ceramic, and exterior porcelain options spanning continuous slabs, natural stone looks, and artisanal wall relief.
              </p>
            </div>

            <div style={{
              padding: '28px 24px',
              backgroundColor: 'var(--color-warm-ivory)',
              borderRadius: '10px',
              border: '1px solid var(--color-border-light)',
              textAlign: 'left'
            }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '6px',
                backgroundColor: 'var(--color-olive)',
                color: 'var(--color-white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20
              }}>
                <Compass size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: 10 }}>Help With Design Selection</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', lineHeight: 1.6 }}>
                Guidance on coordinating wall-and-floor pairings, evaluating daylight reflections, and choosing the right finish for each specific room.
              </p>
            </div>

            <div style={{
              padding: '28px 24px',
              backgroundColor: 'var(--color-warm-ivory)',
              borderRadius: '10px',
              border: '1px solid var(--color-border-light)',
              textAlign: 'left'
            }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '6px',
                backgroundColor: 'var(--color-deep-charcoal)',
                color: 'var(--color-white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20
              }}>
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: 10 }}>Options for Different Spaces</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', lineHeight: 1.6 }}>
                From anti-skid bathroom and terrace tiles to high-traffic commercial lobby floors and step-riser configurations.
              </p>
            </div>

            <div style={{
              padding: '28px 24px',
              backgroundColor: 'var(--color-warm-ivory)',
              borderRadius: '10px',
              border: '1px solid var(--color-border-light)',
              textAlign: 'left'
            }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '6px',
                backgroundColor: 'var(--color-sand)',
                color: 'var(--color-deep-charcoal)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20
              }}>
                <Sparkles size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: 10 }}>Personalised Assistance</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', lineHeight: 1.6 }}>
                Direct consultation with Aaman Lakhani to calculate project quantities, discuss batch availability, and arrange showroom viewings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION G: COMPLETE SURFACE FINISHES, LOOKS & TEXTURES (REQUIREMENT 7: EXACTLY 8 CATEGORIES) */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Surface Finishes & Textures</span>
            <h2 className="section-title">Find Tiles by Finish, Look & Texture</h2>
            <p className="section-desc">
              Explore 8 distinct tactile categories across physical glazes, surface reliefs, and aesthetic character.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 20
          }}>
            {SURFACE_FINISHES.map((item, idx) => (
              <ScrollReveal key={item.title} stagger={(idx % 4) + 1} style={{ height: '100%' }}>
                <div
                  onClick={() => navigate(`/products?${item.type}=${encodeURIComponent(item.param)}`)}
                  className="arch-card"
                  style={{
                    cursor: 'pointer',
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                  }}
                >
                  <div style={{ height: 160, overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    <span style={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      backgroundColor: 'rgba(37,37,37,0.85)',
                      color: '#fff',
                      padding: '2px 8px',
                      borderRadius: '3px'
                    }}>
                      {item.badge}
                    </span>
                  </div>

                  <div style={{ padding: '16px', textAlign: 'left', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h4 style={{ fontSize: '1.15rem', marginBottom: 6, color: 'var(--color-deep-charcoal)' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-body)', lineHeight: 1.45, marginBottom: 12 }}>
                      {item.desc}
                    </p>
                    <div style={{
                      marginTop: 'auto',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: 'var(--color-terracotta)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 4
                    }}>
                      Explore Collection <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION H: INSPIRATION AND RESOURCES (CONSOLIDATED) */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Editorial & Guides</span>
            <h2 className="section-title">Ideas for Your Next Project</h2>
            <p className="section-desc">
              Practical design guides and maintenance tips to help you make informed surface decisions.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 22,
            marginBottom: 36
          }}>
            {blogPosts.slice(0, 4).map((post, idx) => (
              <ScrollReveal key={post.id} stagger={(idx % 4) + 1} style={{ height: '100%' }}>
                <div 
                  className="arch-card"
                  onClick={() => navigate(`/blog/${post.slug}`)}
                  style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', borderRadius: '10px', height: '100%' }}
                >
                  <div style={{ height: 210, overflow: 'hidden' }}>
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, textAlign: 'left' }}>
                    <div style={{
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      fontWeight: 700,
                      color: 'var(--color-terracotta)',
                      marginBottom: 8
                    }}>
                      {post.category} &bull; {post.readTime}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: 10, color: 'var(--color-deep-charcoal)' }}>
                      {post.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: 16 }}>
                      {post.excerpt}
                    </p>
                    <div style={{
                      marginTop: 'auto',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: 'var(--color-deep-charcoal)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6
                    }}>
                      Read Article <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/resources" className="btn btn-secondary">
              <BookOpen size={16} />
              <span>Explore All Guides & Articles</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION I: VISIT US */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 40,
            alignItems: 'center',
            backgroundColor: 'var(--color-white)',
            borderRadius: '12px',
            border: '1px solid var(--color-border-light)',
            padding: 'clamp(28px, 5vw, 56px)'
          }}>
            <div style={{ textAlign: 'left' }}>
              <span className="section-eyebrow">Aurangabad Showroom</span>
              <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.5rem)', marginBottom: 16 }}>
                Experience Tile Finishes in Person
              </h2>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: 24 }}>
                Tile surfaces have tactile depths, micro-sheens, and light reflections that are best appreciated first-hand. Visit our Aurangabad location to review full-scale sample displays with our team.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28, fontSize: '0.9375rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <MapPin size={20} color="var(--color-terracotta)" style={{ marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <strong>Marathwada Tiles</strong>
                    <div style={{ color: 'var(--color-text-body)', marginTop: 2 }}>
                      {BUSINESS_INFO.address.full}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Phone size={20} color="var(--color-olive)" style={{ flexShrink: 0 }} />
                  <div>
                    Contact: <strong>{BUSINESS_INFO.contactPerson}</strong> &bull;{' '}
                    <a href={`tel:${BUSINESS_INFO.phoneTel}`} style={{ color: 'var(--color-terracotta)', fontWeight: 600 }}>
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <MapPin size={16} />
                  <span>Google Maps Directions</span>
                </a>

                <a
                  href={getWhatsAppUrl('Hello Marathwada Tiles, I would like to visit your showroom in Aurangabad. Please share suitable timings.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <WhatsAppIcon size={18} color="#FFFFFF" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Showroom Visual Card */}
            <div style={{ borderRadius: '10px', overflow: 'hidden', height: 380, position: 'relative' }}>
              <img
                src="/images/hero-luxury-living.jpg"
                alt="Marathwada Tiles Showroom Aurangabad"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(37,37,37,0.85) 0%, transparent 60%)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: 24
              }}>
                <div style={{ color: 'var(--color-white)', textAlign: 'left' }}>
                  <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Ranchoddas Girni, Rengtipura</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-sand)' }}>Opposite Jincy Police Station, Aurangabad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION J: CLOSING CTA */}
      <section style={{
        backgroundColor: 'var(--color-deep-charcoal)',
        color: 'var(--color-white)',
        padding: '80px 24px',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div className="container-narrow">
          <span className="section-eyebrow" style={{ color: 'var(--color-sand)' }}>
            Start Your Project
          </span>
          <h2 style={{
            color: 'var(--color-white)',
            fontSize: 'clamp(2.1rem, 4vw, 3rem)',
            marginBottom: 16
          }}>
            Let's Find the Right Tiles for You
          </h2>
          <p style={{
            fontSize: '1.0625rem',
            color: 'rgba(246, 243, 236, 0.85)',
            marginBottom: 36,
            maxWidth: 600,
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Tell us about your space and the tile styles you are looking for. We provide straightforward guidance, size recommendations, and quotes for Aurangabad projects.
          </p>

          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenQuote()}
              className="btn btn-primary btn-lg"
            >
              <Sparkles size={18} />
              <span>Request a Quote</span>
            </button>

            <a
              href={getWhatsAppUrl('Hello Marathwada Tiles, I would like to request product information and quote for my upcoming project.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <WhatsAppIcon size={20} color="#FFFFFF" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
