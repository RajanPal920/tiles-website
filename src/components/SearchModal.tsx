import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, BookOpen, Layers, Compass } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { blogPosts } from '../data/blog';
import { catalogues } from '../data/catalogues';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const filteredProducts = trimmed
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(trimmed) ||
          p.category.toLowerCase().includes(trimmed) ||
          p.look.toLowerCase().includes(trimmed) ||
          p.finish.toLowerCase().includes(trimmed) ||
          p.size.toLowerCase().includes(trimmed) ||
          p.spaces.some((s) => s.toLowerCase().includes(trimmed))
      )
    : [];

  const filteredPosts = trimmed
    ? blogPosts.filter(
        (b) =>
          b.title.toLowerCase().includes(trimmed) ||
          b.category.toLowerCase().includes(trimmed) ||
          b.excerpt.toLowerCase().includes(trimmed)
      )
    : [];

  const filteredCatalogues = trimmed
    ? catalogues.filter(
        (c) =>
          c.title.toLowerCase().includes(trimmed) ||
          c.category.toLowerCase().includes(trimmed) ||
          c.description.toLowerCase().includes(trimmed)
      )
    : [];

  const totalResults = filteredProducts.length + filteredPosts.length + filteredCatalogues.length;

  const handleSelectProduct = (id: string) => {
    onClose();
    navigate(`/products/${id}`);
  };

  const handleSelectPost = (slug: string) => {
    onClose();
    navigate(`/blog/${slug}`);
  };

  const handleSelectCatalogue = () => {
    onClose();
    navigate('/catalogues');
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: 680, padding: 0, overflow: 'hidden' }}
      >
        {/* Search Input Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '18px 24px',
          borderBottom: '1px solid var(--color-border-light)',
          background: 'var(--color-warm-ivory)'
        }}>
          <Search size={22} color="var(--color-terracotta)" style={{ marginRight: 12, flexShrink: 0 }} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search tiles by name, space, finish (e.g. Marble, Matte, Bathroom)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              border: 'none',
              background: 'transparent',
              fontSize: '1.05rem',
              color: 'var(--color-deep-charcoal)',
              outline: 'none'
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{ padding: 6, color: 'var(--color-text-body)', marginRight: 4 }}
              aria-label="Clear query"
            >
              <X size={18} />
            </button>
          )}
          <button
            onClick={onClose}
            aria-label="Close search"
            style={{
              padding: '6px 12px',
              fontSize: '0.8125rem',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--color-sand)',
              color: 'var(--color-deep-charcoal)',
              fontWeight: 600
            }}
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div style={{ maxHeight: '60vh', overflowY: 'auto', padding: '16px 24px' }}>
          {!trimmed ? (
            <div style={{ padding: '24px 0', textAlign: 'center' }}>
              <div style={{ color: 'var(--color-text-body)', fontSize: '0.9375rem', marginBottom: 16 }}>
                Popular searches for Aurangabad projects:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
                {['Statuario', '1200 x 1800 mm', 'Fluted Tile', 'Bathroom', 'Living Room', 'Matte Finish', 'Outdoor Pavers'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setQuery(item)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--color-warm-ivory)',
                      border: '1px solid var(--color-border-light)',
                      fontSize: '0.8125rem',
                      color: 'var(--color-deep-charcoal)'
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div style={{ padding: '40px 16px', textAlign: 'center' }}>
              <Compass size={40} color="var(--color-sand)" style={{ margin: '0 auto 12px' }} />
              <h4 style={{ marginBottom: 6 }}>No matches found for "{query}"</h4>
              <p style={{ fontSize: '0.875rem' }}>
                Try searching by tile finish (Matte, Glossy), space (Kitchen, Bathroom), or size (600x1200mm).
              </p>
            </div>
          ) : (
            <div>
              {/* Product Results */}
              {filteredProducts.length > 0 && (
                <div style={{ marginBottom: 20 }}>
                  <div style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: 700,
                    color: 'var(--color-terracotta)',
                    marginBottom: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6
                  }}>
                    <Layers size={14} /> Tile Products ({filteredProducts.length})
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {filteredProducts.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => handleSelectProduct(p.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 14,
                          padding: '10px 12px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--color-border-light)',
                          background: 'var(--color-white)',
                          cursor: 'pointer',
                          transition: 'background var(--transition-fast)'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-warm-ivory)')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-white)')}
                      >
                        <img
                          src={p.image}
                          alt={p.name}
                          style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 4 }}
                        />
                        <div style={{ flex: 1, textAlign: 'left' }}>
                          <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-deep-charcoal)' }}>
                            {p.name}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-body)' }}>
                            {p.category} &bull; {p.size} &bull; {p.finish}
                          </div>
                        </div>
                        <ArrowRight size={16} color="var(--color-sand)" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Blog Articles */}
              {filteredPosts.length > 0 && (
                <div style={{ marginBottom: 20 }}>
                  <div style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: 700,
                    color: 'var(--color-olive)',
                    marginBottom: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6
                  }}>
                    <BookOpen size={14} /> Guides & Articles ({filteredPosts.length})
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {filteredPosts.map((post) => (
                      <div
                        key={post.id}
                        onClick={() => handleSelectPost(post.slug)}
                        style={{
                          padding: '10px 14px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--color-border-light)',
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-warm-ivory)')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                      >
                        <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{post.title}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-body)' }}>
                          {post.category} &bull; {post.readTime}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Catalogues */}
              {filteredCatalogues.length > 0 && (
                <div>
                  <div style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: 700,
                    color: 'var(--color-deep-charcoal)',
                    marginBottom: 10
                  }}>
                    Catalogues ({filteredCatalogues.length})
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {filteredCatalogues.map((cat) => (
                      <div
                        key={cat.id}
                        onClick={handleSelectCatalogue}
                        style={{
                          padding: '10px 14px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--color-border-light)',
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-warm-ivory)')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                      >
                        <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{cat.title}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-body)' }}>
                          {cat.category} &bull; {cat.pages} Pages
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
