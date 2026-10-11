import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Maximize2, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onEnquire: (productName: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onEnquire }) => {
  return (
    <div 
      className="arch-card" 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%',
        borderRadius: '10px',
        overflow: 'hidden'
      }}
    >
      {/* Tile Image Preview */}
      <Link 
        to={`/products/${product.id}`}
        style={{ 
          position: 'relative', 
          overflow: 'hidden', 
          aspectRatio: '4/3', 
          backgroundColor: 'var(--color-warm-ivory)',
          display: 'block'
        }}
        aria-label={`View ${product.name} details`}
      >
        <img
          src={product.image}
          alt={product.name}
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

        {/* Top Badges */}
        <div style={{
          position: 'absolute',
          top: 12,
          left: 12,
          display: 'flex',
          gap: 6,
          flexWrap: 'wrap',
          zIndex: 2
        }}>
          <span className="badge badge-terracotta">{product.finish}</span>
          <span className="badge" style={{ backgroundColor: 'rgba(255,255,255,0.92)' }}>{product.look}</span>
          {product.isNewArrival && <span className="badge badge-dark">New Arrival</span>}
        </div>

        {/* Quick View Hover Icon */}
        <div style={{
          position: 'absolute',
          bottom: 12,
          right: 12,
          zIndex: 2
        }}>
          <span
            style={{
              width: 34,
              height: 34,
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-deep-charcoal)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
              backdropFilter: 'blur(4px)'
            }}
          >
            <Maximize2 size={14} />
          </span>
        </div>
      </Link>

      {/* Card Content Body */}
      <div style={{ padding: '20px 20px 16px', display: 'flex', flexDirection: 'column', flex: 1, textAlign: 'left' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
          <span style={{
            fontSize: '0.75rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontWeight: 600,
            color: 'var(--color-olive)'
          }}>
            {product.category}
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-body)', fontWeight: 600 }}>
            {product.size}
          </span>
        </div>

        <h3 style={{
          fontSize: '1.2rem',
          marginBottom: 8,
          lineHeight: 1.3,
          color: 'var(--color-deep-charcoal)'
        }}>
          <Link to={`/products/${product.id}`} style={{ color: 'inherit' }}>
            {product.name}
          </Link>
        </h3>

        <p style={{
          fontSize: '0.8125rem',
          color: 'var(--color-text-body)',
          lineHeight: 1.5,
          marginBottom: 16,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {product.description}
        </p>

        {/* Spaces Tag List */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 20 }}>
          {product.spaces.slice(0, 2).map((s) => (
            <span
              key={s}
              style={{
                fontSize: '0.6875rem',
                backgroundColor: 'var(--color-warm-ivory)',
                color: 'var(--color-text-body)',
                padding: '3px 8px',
                borderRadius: '4px',
                border: '1px solid var(--color-border-light)'
              }}
            >
              {s}
            </span>
          ))}
          {product.spaces.length > 2 && (
            <span
              style={{
                fontSize: '0.6875rem',
                backgroundColor: 'var(--color-warm-ivory)',
                color: 'var(--color-text-body)',
                padding: '3px 6px',
                borderRadius: '4px'
              }}
            >
              +{product.spaces.length - 2}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div style={{
          marginTop: 'auto',
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: 8,
          paddingTop: 12,
          borderTop: '1px solid var(--color-border-light)'
        }}>
          <Link
            to={`/products/${product.id}`}
            className="btn btn-secondary btn-sm"
            style={{ width: '100%', fontSize: '0.8125rem', padding: '8px 10px', borderRadius: 'var(--radius-md)' }}
          >
            <span>Explore Details</span>
            <ArrowRight size={13} />
          </Link>

          <button
            onClick={() => onEnquire(product.name)}
            className="btn btn-primary btn-sm"
            style={{ width: '100%', fontSize: '0.8125rem', padding: '8px 10px', borderRadius: 'var(--radius-md)' }}
          >
            <span>Enquire</span>
          </button>
        </div>
      </div>
    </div>
  );
};
