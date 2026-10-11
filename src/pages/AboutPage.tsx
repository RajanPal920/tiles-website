import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  CheckCircle, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Compass,
  Layers,
  Eye,
  CheckCircle2,
  Users,
  Award
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { ScrollReveal } from '../components/ScrollReveal';
import { BUSINESS_INFO, getWhatsAppUrl } from '../utils/constants';

interface AboutPageProps {
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuote }) => {
  return (
    <div style={{ backgroundColor: 'var(--color-warm-ivory)', minHeight: '80vh', paddingBottom: 80 }}>
      {/* 1. PREMIUM COMPANY INTRODUCTION HERO */}
      <section style={{
        position: 'relative',
        backgroundColor: '#1c1e19',
        color: 'var(--color-white)',
        padding: 'clamp(70px, 9vw, 110px) 0',
        overflow: 'hidden'
      }}>
        {/* Sharp High-Res Image with Localized Text Contrast */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.85
        }} />

        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(20,22,18,0.88) 0%, rgba(20,22,18,0.55) 50%, rgba(20,22,18,0.2) 100%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'left' }}>
          <div style={{ maxWidth: 760 }}>
            <span className="section-eyebrow" style={{ color: 'var(--color-sand)', textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>
              About Marathwada Tiles
            </span>
            <h1 style={{
              fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
              color: 'var(--color-white)',
              lineHeight: 1.15,
              marginBottom: 20,
              textShadow: '0 2px 14px rgba(0,0,0,0.5)'
            }}>
              Thoughtful Tile Choices for Everyday Spaces
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
              color: 'rgba(255, 255, 255, 0.95)',
              lineHeight: 1.65,
              marginBottom: 32,
              textShadow: '0 1px 6px rgba(0,0,0,0.5)'
            }}>
              Based in Aurangabad, Maharashtra, Marathwada Tiles is dedicated to helping homeowners, architects, interior designers, and builders discover tile surfaces that bring balance, tactile character, and lasting performance to contemporary living.
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <button onClick={onOpenQuote} className="btn btn-primary btn-lg">
                <Sparkles size={18} />
                <span>Request a Consultation</span>
              </button>
              <Link to="/visit-us" className="btn btn-outline-white btn-lg">
                <MapPin size={18} />
                <span>Visit Showroom</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPANY OVERVIEW */}
      <section className="section-padding bg-white">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 48,
            alignItems: 'center'
          }}>
            <div style={{ textAlign: 'left' }}>
              <span className="section-eyebrow">Company Overview</span>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', marginBottom: 20 }}>
                A Dedicated Tile Partner for Aurangabad
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.7, marginBottom: 16 }}>
                Marathwada Tiles operates as an established tile supplier and showroom destination situated in Rengtipura, Aurangabad. We serve as a dependable bridge between leading ceramic manufacturers and local clients, ensuring projects receive verified, first-quality surface materials.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.7 }}>
                Under the direct leadership of Aaman Lakhani, our showroom provides transparent guidance, helping clients navigate the complexities of tile thickness, wear ratings, slip resistance, and aesthetic pairings for both residential bungalows and commercial builds.
              </p>
            </div>

            <div style={{ borderRadius: '12px', overflow: 'hidden', height: 380, position: 'relative' }}>
              <img
                src="/images/space-kitchen.jpg"
                alt="Marathwada Tiles showroom curated kitchen display"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                bottom: 16,
                left: 16,
                right: 16,
                backgroundColor: 'rgba(37,37,37,0.85)',
                color: '#fff',
                padding: '12px 18px',
                borderRadius: '6px',
                fontSize: '0.8125rem'
              }}>
                Curated surfaces for regional lifestyle & climate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR STORY & BUSINESS BACKGROUND */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 48,
            alignItems: 'center'
          }}>
            <div style={{ order: 2, textAlign: 'left' }}>
              <span className="section-eyebrow">Business Background</span>
              <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.5rem)', marginBottom: 20 }}>
                Built on Honest Relationships & Material Focus
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.7, marginBottom: 16 }}>
                The tile industry has expanded dramatically over recent years, shifting from conventional small-format ceramics to massive continuous vitrified slabs and precision-rectified porcelain. While choices multiplied, so did confusion about suitability, joint spacing, and caliber consistency.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.7 }}>
                Marathwada Tiles was established to bring clarity and curation to this process. Rather than overwhelming customers with repetitive stock, we curate distinct collections where every surface has purpose, verified specifications, and transparent stock support.
              </p>
            </div>

            <div style={{ order: 1, borderRadius: '12px', overflow: 'hidden', height: 380 }}>
              <img
                src="/images/hero-luxury-living.jpg"
                alt="Architectural living room with polished porcelain slabs"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR VISION AND MISSION */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Guiding Purpose</span>
            <h2 className="section-title">Vision & Mission</h2>
            <p className="section-desc">
              Guiding every consultation, recommendation, and project relationship with integrity and architectural care.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 32
          }}>
            <ScrollReveal wavePosition="left" delay={80} style={{ height: '100%' }}>
              <div style={{
                height: '100%',
                padding: '36px 30px',
                backgroundColor: 'var(--color-warm-ivory)',
                borderRadius: '12px',
                border: '1px solid var(--color-border-light)',
                textAlign: 'left'
              }}>
                <div style={{ color: 'var(--color-terracotta)', marginBottom: 16 }}>
                  <Compass size={36} />
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: 12 }}>Our Vision</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-body)', lineHeight: 1.7 }}>
                  To become the most trusted architectural surface supplier in the Marathwada region, recognized for thoughtfully selected designs, technical honesty, and uncompromised customer service.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal wavePosition="right" delay={180} style={{ height: '100%' }}>
              <div style={{
                height: '100%',
                padding: '36px 30px',
                backgroundColor: 'var(--color-warm-ivory)',
                borderRadius: '12px',
                border: '1px solid var(--color-border-light)',
                textAlign: 'left'
              }}>
                <div style={{ color: 'var(--color-olive)', marginBottom: 16 }}>
                  <ShieldCheck size={36} />
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: 12 }}>Our Mission</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-body)', lineHeight: 1.7 }}>
                  To empower homeowners, builders, and designers to select tiles that balance enduring durability, ease of maintenance, and understated visual elegance, ensuring complete peace of mind through every phase.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. OUR APPROACH TO TILE QUALITY AND DESIGN */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 48,
            alignItems: 'center'
          }}>
            <div style={{ textAlign: 'left' }}>
              <span className="section-eyebrow">Design Standard</span>
              <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.5rem)', marginBottom: 20 }}>
                Our Approach to Tile Quality & Design
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.7, marginBottom: 20 }}>
                We believe a tile should be judged not merely in the showroom, but in how it performs after ten years of daily footfall, cleaning cycles, and sunlight exposure.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  {
                    title: 'Precision Edge Rectification',
                    desc: 'Diamond-ground 90-degree edges allowing hairline grout spacing (1.5mm to 2mm) for seamless stone continuity.'
                  },
                  {
                    title: 'Impervious Vitrification',
                    desc: 'Fully vitrified porcelain bodies with water absorption <0.05%, ensuring complete stain and moisture resistance.'
                  },
                  {
                    title: 'Realistic Surface Printing',
                    desc: 'High-definition digital glaze application that avoids repetitive patterns and mimics natural marble veins authentically.'
                  }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <CheckCircle2 size={20} color="var(--color-olive)" style={{ marginTop: 2, flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: 'var(--color-deep-charcoal)' }}>{item.title}:</strong>
                      <div style={{ color: 'var(--color-text-body)', fontSize: '0.875rem', marginTop: 2 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderRadius: '12px', overflow: 'hidden', height: 420 }}>
              <img
                src="/images/tile-marble-statuary.jpg"
                alt="Polished porcelain slab detail at Marathwada Tiles"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRODUCT RANGE AND APPLICATIONS */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Comprehensive Catalogue</span>
            <h2 className="section-title">Product Range & Applications</h2>
            <p className="section-desc">
              Tailored collections for residential bungalows, modern apartments, commercial offices, and exterior landscapes.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 24
          }}>
            {[
              {
                title: 'Large-Format Slabs',
                desc: '1200x1800mm and 800x1600mm continuous vitrified slabs for living halls, executive foyers, and feature backdrops.',
                icon: Layers
              },
              {
                title: 'Sanctuary Bath Tiles',
                desc: 'Sculptural fluted wall tiles and R10 anti-skid porcelain floor tiles for tranquil bathrooms and powder rooms.',
                icon: Sparkles
              },
              {
                title: 'Wood & Stone Looks',
                desc: '200x1200mm oak timber planks and honed travertine surfaces combining organic warmth with zero maintenance.',
                icon: Compass
              },
              {
                title: 'Exterior & Heavy Duty',
                desc: '12mm to 16mm thick exterior pavers, industrial parking tiles, and bullnosed step treads for safety in all weathers.',
                icon: ShieldCheck
              }
            ].map((cat, i) => {
              const IconComp = cat.icon;
              const wavePos: 'center' | 'left' | 'right' = (i === 1 || i === 2) ? 'center' : (i === 0 ? 'left' : 'right');
              const waveDelay = (i === 1) ? 0 : (i === 2 ? 60 : (i === 0 ? 120 : 220));
              return (
                <ScrollReveal 
                  key={cat.title} 
                  wavePosition={wavePos} 
                  delay={waveDelay}
                  style={{ height: '100%' }}
                >
                  <div style={{
                    height: '100%',
                    padding: '28px 24px',
                    backgroundColor: 'var(--color-warm-ivory)',
                    borderRadius: '10px',
                    border: '1px solid var(--color-border-light)',
                    textAlign: 'left'
                  }}>
                    <div style={{ color: 'var(--color-terracotta)', marginBottom: 14 }}>
                      <IconComp size={28} />
                    </div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: 8 }}>{cat.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', lineHeight: 1.6 }}>{cat.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. SOURCING & QUALITY SELECTION PROCESS */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 48,
            alignItems: 'center'
          }}>
            <div style={{ order: 2, textAlign: 'left' }}>
              <span className="section-eyebrow">Rigorous Curation</span>
              <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.5rem)', marginBottom: 20 }}>
                Our Sourcing & Selection Process
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.7, marginBottom: 16 }}>
                As an independent tile business, we maintain the freedom to curate only the finest production batches from leading tile hubs. Every collection in our showroom is selected after inspecting physical sample boards for edge precision, glaze depth, and surface flatness.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.7 }}>
                We verify that matching shade codes and single-caliber boxes are delivered to your project site, preventing unpleasant surprises during masonry laying.
              </p>
            </div>

            <div style={{ order: 1, borderRadius: '12px', overflow: 'hidden', height: 380 }}>
              <img
                src="/images/space-outdoor.jpg"
                alt="Heavy-duty exterior porcelain display at Marathwada Tiles"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE MARATHWADA TILES */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Showroom Advantage</span>
            <h2 className="section-title">Why Choose Marathwada Tiles</h2>
            <p className="section-desc">
              What sets our customer experience apart for clients across Aurangabad and neighboring districts.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 28
          }}>
            {[
              {
                title: 'Physical Texture Inspection',
                desc: 'See and touch full-scale mockups under natural daylight. Experience how light plays across matte, satin, and glossy surfaces before deciding.'
              },
              {
                title: 'Accurate Quantity Estimations',
                desc: 'We assist with detailed room area calculations and advise on appropriate cutting tolerances (8-10%) so you never run short of dye lots.'
              },
              {
                title: 'Direct Personal Attention',
                desc: 'Work directly with Aaman Lakhani and our knowledgeable showroom staff for individualized advice on aesthetics, grout tones, and adhesives.'
              }
            ].map((reason, i) => {
              const wavePos: 'center' | 'left' | 'right' = (i === 1) ? 'center' : (i === 0 ? 'left' : 'right');
              const waveDelay = (i === 1) ? 0 : (i === 0 ? 110 : 210);
              return (
                <ScrollReveal
                  key={reason.title}
                  wavePosition={wavePos}
                  delay={waveDelay}
                  style={{ height: '100%' }}
                >
                  <div style={{
                    height: '100%',
                    padding: '32px 26px',
                    backgroundColor: 'var(--color-warm-ivory)',
                    borderRadius: '10px',
                    border: '1px solid var(--color-border-light)',
                    textAlign: 'left'
                  }}>
                    <div style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-deep-charcoal)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      marginBottom: 16
                    }}>
                      0{i + 1}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: 10 }}>{reason.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', lineHeight: 1.6 }}>{reason.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. CUSTOMER SERVICE & SELECTION ASSISTANCE */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div style={{
            backgroundColor: 'var(--color-white)',
            borderRadius: '12px',
            border: '1px solid var(--color-border-light)',
            padding: 'clamp(32px, 5vw, 56px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 40,
            alignItems: 'center',
            textAlign: 'left'
          }}>
            <div>
              <span className="section-eyebrow">Selection Assistance</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', marginBottom: 16 }}>
                Collaborating with Architects & Homeowners
              </h2>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-body)', lineHeight: 1.7, marginBottom: 20 }}>
                Whether you bring architectural blueprints, interior 3D renders, or simple room measurements, we help coordinate wall-and-floor harmonies that fulfill your aesthetic vision without compromising budget.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button onClick={onOpenQuote} className="btn btn-primary">
                  <Sparkles size={16} /> Request Quote & Quantity Help
                </button>
                <a
                  href={getWhatsAppUrl('Hello Aaman Lakhani, I would like guidance on tile selection for my project.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <WhatsAppIcon size={16} color="#FFFFFF" /> Message on WhatsApp
                </a>
              </div>
            </div>

            <div style={{ borderRadius: '10px', overflow: 'hidden', height: 280 }}>
              <img
                src="/images/space-bathroom.jpg"
                alt="Fluted bathroom wall tile layout"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 10. GALLERY OF FEATURED TILE SPACES (CONTINUOUS HORIZONTAL MARQUEE) */}
      <section className="section-padding bg-white" style={{ overflow: 'hidden' }}>
        <div className="container" style={{ marginBottom: 32 }}>
          <div className="section-header" style={{ marginBottom: 0 }}>
            <span className="section-eyebrow">In Situ Impressions</span>
            <h2 className="section-title">Gallery of Inspired Spaces</h2>
            <p className="section-desc">
              Visualise our tile finishes across real living rooms, kitchens, verandas, and bathrooms.
            </p>
          </div>
        </div>

        {/* Continuous Gallery Marquee Track - Right to Left */}
        <div className="marquee-container">
          <div className="marquee-track">
            {/* Primary Track Group */}
            <div className="marquee-group">
              {[
                { img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80', title: 'Grand Living Hall Slabs', desc: '1200x1800mm Vitrified' },
                { img: '/images/space-bathroom.jpg', title: 'Fluted Ceramic Vanity Backdrop', desc: 'Tactile 3D Relief' },
                { img: '/images/space-kitchen.jpg', title: 'Honed Micro-Cement Kitchen Island', desc: 'Stain-Proof Porcelain' },
                { img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80', title: 'Warm Oak Herringbone Master Suite', desc: 'Authentic Wood Planks' },
                { img: '/images/space-outdoor.jpg', title: 'Textured Veranda Pavers', desc: '12mm Exterior Porcelain' },
                { img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80', title: 'Statuario Executive Foyer', desc: 'Polished Calacatta Gold' }
              ].map((g, i) => (
                <div 
                  key={`orig-${i}`} 
                  className="marquee-card"
                  style={{ 
                    position: 'relative', 
                    height: 290, 
                    width: 'clamp(280px, 25vw, 360px)', 
                    borderRadius: '10px', 
                    overflow: 'hidden', 
                    flexShrink: 0 
                  }}
                >
                  <img src={g.img} alt={g.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(20,22,18,0.85) 0%, rgba(20,22,18,0.3) 50%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: 18,
                    textAlign: 'left'
                  }}>
                    <span style={{ color: '#fff', fontSize: '0.9375rem', fontWeight: 600, marginBottom: 2 }}>{g.title}</span>
                    <span style={{ color: 'var(--color-sand)', fontSize: '0.75rem' }}>{g.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Seamless Duplicate Group for Infinite Loop */}
            <div className="marquee-group" aria-hidden="true">
              {[
                { img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80', title: 'Grand Living Hall Slabs', desc: '1200x1800mm Vitrified' },
                { img: '/images/space-bathroom.jpg', title: 'Fluted Ceramic Vanity Backdrop', desc: 'Tactile 3D Relief' },
                { img: '/images/space-kitchen.jpg', title: 'Honed Micro-Cement Kitchen Island', desc: 'Stain-Proof Porcelain' },
                { img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80', title: 'Warm Oak Herringbone Master Suite', desc: 'Authentic Wood Planks' },
                { img: '/images/space-outdoor.jpg', title: 'Textured Veranda Pavers', desc: '12mm Exterior Porcelain' },
                { img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80', title: 'Statuario Executive Foyer', desc: 'Polished Calacatta Gold' }
              ].map((g, i) => (
                <div 
                  key={`dup-${i}`} 
                  className="marquee-card"
                  style={{ 
                    position: 'relative', 
                    height: 290, 
                    width: 'clamp(280px, 25vw, 360px)', 
                    borderRadius: '10px', 
                    overflow: 'hidden', 
                    flexShrink: 0 
                  }}
                >
                  <img src={g.img} alt={g.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(20,22,18,0.85) 0%, rgba(20,22,18,0.3) 50%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: 18,
                    textAlign: 'left'
                  }}>
                    <span style={{ color: '#fff', fontSize: '0.9375rem', fontWeight: 600, marginBottom: 2 }}>{g.title}</span>
                    <span style={{ color: 'var(--color-sand)', fontSize: '0.75rem' }}>{g.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. STRONG CONTACT / ENQUIRY CTA */}
      <section className="container" style={{ marginTop: 20 }}>
        <div style={{
          backgroundColor: 'var(--color-deep-charcoal)',
          color: 'var(--color-white)',
          padding: 'clamp(40px, 6vw, 64px) 32px',
          borderRadius: '14px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 36,
          alignItems: 'center',
          textAlign: 'left'
        }}>
          <div>
            <span className="section-eyebrow" style={{ color: 'var(--color-sand)' }}>
              Visit Our Showroom
            </span>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', color: '#fff', marginBottom: 12 }}>
              Plan Your Visit to Marathwada Tiles
            </h2>
            <p style={{ fontSize: '0.9375rem', color: 'rgba(246, 243, 236, 0.85)', lineHeight: 1.6, marginBottom: 20 }}>
              Conveniently located at Ranchoddas Girni, Rengtipura, directly opposite Jincy Police Station in Aurangabad. Speak directly with Aaman Lakhani for samples and estimates.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: '0.875rem', color: 'var(--color-sand)' }}>
              <div>{BUSINESS_INFO.address.full}</div>
              <div>Phone: {BUSINESS_INFO.phoneDisplay}</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              style={{ width: '100%' }}
            >
              <MapPin size={18} />
              <span>Get Showroom Directions</span>
            </a>

            <a
              href={getWhatsAppUrl('Hello Aaman Lakhani, I would like to schedule a visit to the Marathwada Tiles showroom in Aurangabad.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              style={{ width: '100%' }}
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
