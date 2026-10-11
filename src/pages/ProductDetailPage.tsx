import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Sparkles, 
  MapPin, 
  ArrowLeft,
  Layers
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { getProductWhatsAppUrl } from '../utils/constants';

interface ProductDetailPageProps {
  onOpenQuote: (productName?: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ onOpenQuote }) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  const [activeImageIndex, setActiveImageIndex] = useState<0 | 1>(0);

  if (!product) {
    return (
      <div className="section-padding bg-ivory" style={{ minHeight: '60vh', textAlign: 'center' }}>
        <div className="container-narrow">
          <Layers size={56} color="var(--color-sand)" style={{ margin: '0 auto 16px' }} />
          <h2 style={{ fontSize: '2.2rem', marginBottom: 12 }}>Product Not Found</h2>
          <p style={{ color: 'var(--color-text-body)', marginBottom: 28 }}>
            The requested tile specification could not be located in our current catalogue index.
          </p>
          <Link to="/products" className="btn btn-primary">
            <ArrowLeft size={16} /> Return to Products Catalogue
          </Link>
        </div>
      </div>
    );
  }

  const galleryImages = [
    { src: product.image, label: 'Tile Surface Slab' },
    { src: product.roomImage, label: 'In-Situ Room Architecture' }
  ];

  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.spaces.some((s) => product.spaces.includes(s))))
    .slice(0, 3);

  return (
    <div style={{ backgroundColor: 'var(--color-warm-ivory)', minHeight: '80vh', paddingBottom: 80 }}>
      {/* Breadcrumb Navigation */}
      <div style={{ backgroundColor: 'var(--color-white)', borderBottom: '1px solid var(--color-border-light)' }}>
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <ol className="breadcrumb-list">
              <li><Link to="/">Home</Link></li>
              <li className="breadcrumb-separator"><ChevronRight size={12} /></li>
              <li><Link to="/products">Products</Link></li>
              <li className="breadcrumb-separator"><ChevronRight size={12} /></li>
              <li><Link to={`/products?category=${encodeURIComponent(product.category)}`}>{product.category}</Link></li>
              <li className="breadcrumb-separator"><ChevronRight size={12} /></li>
              <li style={{ color: 'var(--color-deep-charcoal)', fontWeight: 600 }}>{product.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Product Showcase Section */}
      <div className="container" style={{ paddingTop: 36 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: 48,
          alignItems: 'start',
          backgroundColor: 'var(--color-white)',
          padding: 'clamp(24px, 4vw, 44px)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border-light)',
          marginBottom: 48
        }}>
          {/* Left Column: Image Viewer */}
          <div>
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-sm)',
              overflow: 'hidden',
              aspectRatio: '4/3',
              backgroundColor: 'var(--color-warm-ivory)',
              border: '1px solid var(--color-border-light)',
              marginBottom: 16
            }}>
              <img
                src={galleryImages[activeImageIndex].src}
                alt={`${product.name} - ${galleryImages[activeImageIndex].label}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              <div style={{
                position: 'absolute',
                top: 14,
                left: 14,
                display: 'flex',
                gap: 8
              }}>
                <span className="badge badge-terracotta">{product.finish}</span>
                <span className="badge badge-olive">{product.look}</span>
              </div>
            </div>

            {/* Thumbnail View Switcher */}
            <div style={{ display: 'flex', gap: 12 }}>
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx as 0 | 1)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '8px 14px',
                    borderRadius: 'var(--radius-sm)',
                    border: activeImageIndex === idx ? '2px solid var(--color-terracotta)' : '1px solid var(--color-border-light)',
                    backgroundColor: activeImageIndex === idx ? 'var(--color-warm-ivory)' : 'var(--color-white)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: 'var(--color-deep-charcoal)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <img src={img.src} alt="" style={{ width: 28, height: 28, objectFit: 'cover', borderRadius: 2 }} />
                  <span>{img.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Information, Specs & Actions */}
          <div style={{ textAlign: 'left' }}>
            <div style={{
              fontSize: '0.8125rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: 'var(--color-terracotta)',
              marginBottom: 8
            }}>
              {product.category} &bull; Marathwada Tiles
            </div>

            <h1 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              marginBottom: 14,
              color: 'var(--color-deep-charcoal)',
              lineHeight: 1.15
            }}>
              {product.name}
            </h1>

            <p style={{
              fontSize: '1rem',
              color: 'var(--color-text-body)',
              lineHeight: 1.65,
              marginBottom: 24
            }}>
              {product.description}
            </p>

            {/* Quick Metrics Bar */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: 12,
              padding: 16,
              backgroundColor: 'var(--color-warm-ivory)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--color-border-light)',
              marginBottom: 24
            }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-body)', textTransform: 'uppercase' }}>Dimensions</div>
                <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-deep-charcoal)' }}>{product.size}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-body)', textTransform: 'uppercase' }}>Surface Finish</div>
                <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-deep-charcoal)' }}>{product.finish}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-body)', textTransform: 'uppercase' }}>Thickness</div>
                <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-deep-charcoal)' }}>{product.thickness}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-body)', textTransform: 'uppercase' }}>Color Tone</div>
                <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-deep-charcoal)' }}>{product.color}</div>
              </div>
            </div>

            {/* Recommended Space Applications */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>
                Recommended Spaces:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {product.spaces.map((space) => (
                  <span
                    key={space}
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      backgroundColor: 'var(--color-white)',
                      border: '1px solid var(--color-border-light)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--color-deep-charcoal)'
                    }}
                  >
                    {space}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
              <button
                onClick={() => onOpenQuote(product.name)}
                className="btn btn-primary btn-lg"
                style={{ width: '100%' }}
              >
                <Sparkles size={18} />
                <span>Enquire About This Product</span>
              </button>

              <a
                href={getProductWhatsAppUrl(product.name, product.size, product.finish)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
                style={{ width: '100%' }}
              >
                <WhatsAppIcon size={18} color="#FFFFFF" />
                <span>Chat on WhatsApp for Pricing & Availability</span>
              </a>
            </div>

            {/* Showroom Verification Note */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '12px 16px',
              borderLeft: '3px solid var(--color-olive)',
              backgroundColor: 'var(--color-warm-ivory)',
              fontSize: '0.8125rem'
            }}>
              <MapPin size={18} color="var(--color-olive)" style={{ flexShrink: 0 }} />
              <div>
                Physical samples available for inspection at <strong>Marathwada Tiles</strong> showroom, Rengtipura, Aurangabad.
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications Table */}
        <div style={{
          backgroundColor: 'var(--color-white)',
          padding: 'clamp(24px, 4vw, 36px)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border-light)',
          marginBottom: 48,
          textAlign: 'left'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: 20 }}>Technical & Architectural Specifications</h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20
          }}>
            <div style={{ padding: 16, backgroundColor: 'var(--color-warm-ivory)', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-body)', marginBottom: 4 }}>Edge Finishing</div>
              <div style={{ fontWeight: 600 }}>{product.specifications.edge}</div>
            </div>

            <div style={{ padding: 16, backgroundColor: 'var(--color-warm-ivory)', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-body)', marginBottom: 4 }}>Water Absorption (Impervious)</div>
              <div style={{ fontWeight: 600 }}>{product.specifications.waterAbsorption}</div>
            </div>

            <div style={{ padding: 16, backgroundColor: 'var(--color-warm-ivory)', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-body)', marginBottom: 4 }}>Slip Resistance Rating</div>
              <div style={{ fontWeight: 600 }}>{product.specifications.slipResistance}</div>
            </div>

            <div style={{ padding: 16, backgroundColor: 'var(--color-warm-ivory)', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-body)', marginBottom: 4 }}>Standard Box Packaging</div>
              <div style={{ fontWeight: 600 }}>{product.specifications.coveragePerBox || 'Box pack verified upon enquiry'}</div>
            </div>
          </div>

          <div style={{ marginTop: 24, fontSize: '0.875rem', color: 'var(--color-text-body)' }}>
            <strong>Suitable Architectural Applications:</strong> {product.specifications.suitability.join(' &bull; ')}
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div>
            <div style={{ textAlign: 'left', marginBottom: 24 }}>
              <span className="section-eyebrow">Complementary Surfaces</span>
              <h3 style={{ fontSize: '1.85rem' }}>Related Tile Options</h3>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 24
            }}>
              {relatedProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onEnquire={(name) => onOpenQuote(name)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
