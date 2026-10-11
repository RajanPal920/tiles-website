import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { resources, resourceCategories } from '../data/resources';

interface ResourcesPageProps {
  onOpenQuote: () => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onOpenQuote }) => {
  const [selectedCat, setSelectedCat] = useState<string>('All Resources');
  const navigate = useNavigate();

  const filteredResources = selectedCat === 'All Resources'
    ? resources
    : resources.filter((r) => r.category === selectedCat);

  return (
    <div style={{ backgroundColor: 'var(--color-warm-ivory)', minHeight: '80vh', paddingBottom: 80 }}>
      {/* Header */}
      <div style={{
        backgroundColor: 'var(--color-white)',
        borderBottom: '1px solid var(--color-border-light)',
        paddingTop: 40,
        paddingBottom: 40
      }}>
        <div className="container">
          <div style={{ maxWidth: 740, textAlign: 'left' }}>
            <span className="section-eyebrow">Architectural Guidance</span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: 12, color: 'var(--color-deep-charcoal)' }}>
              Resources & Tile Knowledge
            </h1>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-body)', lineHeight: 1.6 }}>
              Explore comprehensive tile buying guides, care advice, slip resistance standards, and layout planning tips prepared for Indian residential conditions.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container" style={{ paddingTop: 36 }}>
        {/* Category Filter Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 }}>
          {resourceCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.875rem',
                fontWeight: 600,
                backgroundColor: selectedCat === cat ? 'var(--color-deep-charcoal)' : 'var(--color-white)',
                color: selectedCat === cat ? 'var(--color-white)' : 'var(--color-deep-charcoal)',
                border: '1px solid var(--color-border-light)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 28
        }}>
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="arch-card"
              onClick={() => navigate(`/resources/${res.slug}`)}
              style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div style={{ height: 220, overflow: 'hidden' }}>
                <img
                  src={res.image}
                  alt={res.title}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1, textAlign: 'left' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 10,
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontWeight: 700,
                  color: 'var(--color-olive)'
                }}>
                  <span>{res.category}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--color-text-body)' }}>
                    <Clock size={12} /> {res.readTime}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', marginBottom: 10, color: 'var(--color-deep-charcoal)' }}>
                  {res.title}
                </h3>

                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: 20 }}>
                  {res.summary}
                </p>

                <div style={{
                  marginTop: 'auto',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  color: 'var(--color-terracotta)',
                  fontWeight: 600,
                  fontSize: '0.875rem'
                }}>
                  Read Full Guide <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
