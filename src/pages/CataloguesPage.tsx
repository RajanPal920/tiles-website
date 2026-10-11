import React, { useState } from 'react';
import { 
  Download, 
  Eye, 
  CheckCircle, 
  X, 
  Sparkles
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { catalogues, catalogueCategories } from '../data/catalogues';
import { Catalogue } from '../types';
import { BUSINESS_INFO, getWhatsAppUrl } from '../utils/constants';

interface CataloguesPageProps {
  onOpenQuote: (productName?: string) => void;
}

export const CataloguesPage: React.FC<CataloguesPageProps> = ({ onOpenQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Collections');
  const [previewCatalogue, setPreviewCatalogue] = useState<Catalogue | null>(null);

  const filteredCatalogues = selectedCategory === 'All Collections'
    ? catalogues
    : catalogues.filter((c) => c.category === selectedCategory);

  // Generate an authentic downloadable specification summary text/document for the collection
  const handleDownloadSpec = (cat: Catalogue) => {
    const content = `MARATHWADA TILES — ARCHITECTURAL SPECIFICATION SHEET
Collection: ${cat.title}
Category: ${cat.category}
Format: ${cat.format} (${cat.pages} Pages)
Date: ${new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}

ABOUT THIS COLLECTION:
${cat.description}

TECHNICAL FEATURES & RECOMMENDATIONS:
${cat.features.map((f, i) => `${i + 1}. ${f}`).join('\n')}

SHOWROOM & ENQUIRIES:
Business: ${BUSINESS_INFO.name}
Contact Person: ${BUSINESS_INFO.contactPerson}
Phone: ${BUSINESS_INFO.phoneDisplay}
Address: ${BUSINESS_INFO.address.full}
WhatsApp Enquiries: https://wa.me/${BUSINESS_INFO.whatsappNumber}

Note: For printed collection sample binders, batch reservation, or full physical samples, visit our Aurangabad showroom.
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Marathwada_Tiles_${cat.id}_SpecSheet.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ backgroundColor: 'var(--color-warm-ivory)', minHeight: '80vh', paddingBottom: 80 }}>
      {/* Header Banner */}
      <div style={{
        backgroundColor: 'var(--color-white)',
        borderBottom: '1px solid var(--color-border-light)',
        paddingTop: 40,
        paddingBottom: 40
      }}>
        <div className="container">
          <div style={{ maxWidth: 720, textAlign: 'left' }}>
            <span className="section-eyebrow">Digital & Showroom Catalogues</span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: 12, color: 'var(--color-deep-charcoal)' }}>
              Explore Our Catalogues
            </h1>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-body)', lineHeight: 1.6 }}>
              Browse available tile collections and request product information for your project. Inspect digital editions, download architectural specifications, or request physical sample boards.
            </p>
          </div>
        </div>
      </div>

      {/* Main Layout: Sidebar Categories + Main Grid */}
      <div className="container" style={{ paddingTop: 36 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '260px 1fr',
          gap: 36
        }} className="catalogues-layout-grid">
          {/* Left Category Sidebar */}
          <aside style={{
            backgroundColor: 'var(--color-white)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--color-border-light)',
            padding: 24,
            height: 'fit-content'
          }}>
            <div style={{
              fontSize: '0.8125rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 16,
              color: 'var(--color-deep-charcoal)'
            }}>
              Catalogue Series
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {catalogueCategories.map((cat) => {
                const isSelected = selectedCategory === cat;
                const count = cat === 'All Collections' 
                  ? catalogues.length 
                  : catalogues.filter((c) => c.category === cat).length;

                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '10px 12px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: isSelected ? 'var(--color-warm-ivory)' : 'transparent',
                      color: isSelected ? 'var(--color-terracotta)' : 'var(--color-deep-charcoal)',
                      fontWeight: isSelected ? 600 : 400,
                      fontSize: '0.875rem',
                      textAlign: 'left',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <span>{cat}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-body)' }}>({count})</span>
                  </button>
                );
              })}
            </div>

            <div style={{
              marginTop: 32,
              paddingTop: 24,
              borderTop: '1px solid var(--color-border-light)',
              textAlign: 'left'
            }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-deep-charcoal)', marginBottom: 6 }}>
                Need Printed Binders?
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-text-body)', marginBottom: 14, lineHeight: 1.5 }}>
                Architects & interior firms can request physical material sample folders directly from our showroom.
              </p>
              <button
                onClick={() => onOpenQuote('Architectural Catalogue Sample Binder')}
                className="btn btn-secondary btn-sm"
                style={{ width: '100%', fontSize: '0.75rem' }}
              >
                Request Sample Folder
              </button>
            </div>
          </aside>

          {/* Main Area: Catalogue Cards */}
          <main>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: 28
            }}>
              {filteredCatalogues.map((cat) => (
                <div
                  key={cat.id}
                  className="arch-card"
                  style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                >
                  {/* Cover Image */}
                  <div style={{ position: 'relative', height: 260, overflow: 'hidden', backgroundColor: 'var(--color-deep-charcoal)' }}>
                    <img
                      src={cat.coverImage}
                      alt={cat.title}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: 14,
                      left: 14,
                      backgroundColor: 'rgba(38,41,35,0.85)',
                      color: 'var(--color-white)',
                      padding: '4px 10px',
                      borderRadius: 2,
                      fontSize: '0.75rem',
                      fontWeight: 600
                    }}>
                      {cat.category}
                    </div>

                    <div style={{
                      position: 'absolute',
                      bottom: 14,
                      right: 14,
                      backgroundColor: 'rgba(255,255,255,0.92)',
                      color: 'var(--color-deep-charcoal)',
                      padding: '4px 10px',
                      borderRadius: 2,
                      fontSize: '0.75rem',
                      fontWeight: 700
                    }}>
                      {cat.pages} Pages &bull; PDF
                    </div>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', flex: 1, textAlign: 'left' }}>
                    <h3 style={{ fontSize: '1.35rem', marginBottom: 10, color: 'var(--color-deep-charcoal)' }}>
                      {cat.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: 18 }}>
                      {cat.description}
                    </p>

                    {/* Features list */}
                    <div style={{ marginBottom: 20 }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-olive)', marginBottom: 8 }}>
                        Catalogue Contents:
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        {cat.features.slice(0, 3).map((f, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8125rem', color: 'var(--color-text-body)' }}>
                            <CheckCircle size={13} color="var(--color-olive)" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div style={{
                      marginTop: 'auto',
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: 8,
                      paddingTop: 16,
                      borderTop: '1px solid var(--color-border-light)'
                    }}>
                      <button
                        onClick={() => setPreviewCatalogue(cat)}
                        className="btn btn-secondary btn-sm"
                        style={{ width: '100%' }}
                      >
                        <Eye size={14} />
                        <span>View Details</span>
                      </button>

                      <button
                        onClick={() => handleDownloadSpec(cat)}
                        className="btn btn-primary btn-sm"
                        style={{ width: '100%' }}
                      >
                        <Download size={14} />
                        <span>Download Specs</span>
                      </button>
                    </div>

                    <button
                      onClick={() => onOpenQuote(`Catalogue: ${cat.title}`)}
                      style={{
                        marginTop: 10,
                        fontSize: '0.8125rem',
                        color: 'var(--color-terracotta)',
                        fontWeight: 600,
                        textAlign: 'center',
                        padding: '4px 0'
                      }}
                    >
                      Enquire for this collection &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* Detail / Preview Modal for Catalogue */}
      {previewCatalogue && (
        <div className="modal-overlay" onClick={() => setPreviewCatalogue(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: 640, padding: 32 }}
          >
            <button
              onClick={() => setPreviewCatalogue(null)}
              style={{
                position: 'absolute',
                top: 20,
                right: 20,
                padding: 6,
                borderRadius: '50%',
                backgroundColor: 'var(--color-warm-ivory)'
              }}
            >
              <X size={20} />
            </button>

            <div style={{ textAlign: 'left' }}>
              <span className="badge badge-terracotta" style={{ marginBottom: 12 }}>
                {previewCatalogue.category}
              </span>
              <h3 style={{ fontSize: '1.75rem', marginBottom: 10 }}>{previewCatalogue.title}</h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: 20 }}>
                {previewCatalogue.description}
              </p>

              <div style={{ height: 220, borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: 20 }}>
                <img
                  src={previewCatalogue.coverImage}
                  alt={previewCatalogue.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ backgroundColor: 'var(--color-warm-ivory)', padding: 18, borderRadius: 'var(--radius-sm)', marginBottom: 24 }}>
                <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: 8 }}>Included Technical Sections:</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: '0.8125rem' }}>
                  {previewCatalogue.features.map((f, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <CheckCircle size={14} color="var(--color-olive)" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button
                  onClick={() => handleDownloadSpec(previewCatalogue)}
                  className="btn btn-primary"
                >
                  <Download size={16} />
                  <span>Download Spec Sheet (.txt)</span>
                </button>

                <a
                  href={getWhatsAppUrl(`Hello Marathwada Tiles, please share the complete PDF catalogue for ${previewCatalogue.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <WhatsAppIcon size={16} color="#FFFFFF" />
                  <span>Request Full PDF on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Media Query for responsive grid */}
      <style>{`
        @media (max-width: 860px) {
          .catalogues-layout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
