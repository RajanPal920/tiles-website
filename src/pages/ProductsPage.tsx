import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Filter, 
  X, 
  Search, 
  SlidersHorizontal, 
  ArrowUpDown, 
  RotateCcw,
  Layers,
  ChevronRight
} from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { 
  products, 
  tileCategories, 
  tileSpaces, 
  tileFinishes, 
  tileLooks 
} from '../data/products';

interface ProductsPageProps {
  onOpenQuote: (productName?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenQuote }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read URL query params
  const categoryParam = searchParams.get('category') || '';
  const spaceParam = searchParams.get('space') || '';
  const finishParam = searchParams.get('finish') || '';
  const lookParam = searchParams.get('look') || '';
  const searchParam = searchParams.get('search') || '';

  // Local state initialized from URL
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam);
  const [selectedSpace, setSelectedSpace] = useState<string>(spaceParam);
  const [selectedFinish, setSelectedFinish] = useState<string>(finishParam);
  const [selectedLook, setSelectedLook] = useState<string>(lookParam);
  const [searchQuery, setSearchQuery] = useState<string>(searchParam);
  const [sortBy, setSortBy] = useState<'featured' | 'name-asc' | 'name-desc'>('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Sync state if URL changes externally
  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || '');
    setSelectedSpace(searchParams.get('space') || '');
    setSelectedFinish(searchParams.get('finish') || '');
    setSelectedLook(searchParams.get('look') || '');
    setSearchQuery(searchParams.get('search') || '');
  }, [searchParams]);

  // Update URL params when filters change
  const updateUrlParam = (key: string, val: string) => {
    const params = new URLSearchParams(searchParams);
    if (val) {
      params.set(key, val);
    } else {
      params.delete(key);
    }
    setSearchParams(params, { replace: true });
  };

  const handleCategoryChange = (val: string) => {
    setSelectedCategory(val);
    updateUrlParam('category', val);
  };

  const handleSpaceChange = (val: string) => {
    setSelectedSpace(val);
    updateUrlParam('space', val);
  };

  const handleFinishChange = (val: string) => {
    setSelectedFinish(val);
    updateUrlParam('finish', val);
  };

  const handleLookChange = (val: string) => {
    setSelectedLook(val);
    updateUrlParam('look', val);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    updateUrlParam('search', val);
  };

  const handleClearFilters = () => {
    setSelectedCategory('');
    setSelectedSpace('');
    setSelectedFinish('');
    setSelectedLook('');
    setSearchQuery('');
    setSearchParams({}, { replace: true });
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (selectedCategory && p.category !== selectedCategory) return false;
      if (selectedSpace && !p.spaces.includes(selectedSpace as any)) return false;
      if (selectedLook && p.look !== selectedLook) return false;
      if (selectedFinish) {
        if (selectedFinish === 'Glossy' && p.finish !== 'Glossy' && p.finish !== 'Polished') return false;
        else if (selectedFinish === 'Matte' && p.finish !== 'Matte' && p.finish !== 'Honed') return false;
        else if (selectedFinish === 'Polished' && p.finish !== 'Polished' && p.finish !== 'Glossy') return false;
        else if (selectedFinish === 'Honed' && p.finish !== 'Honed' && p.finish !== 'Matte') return false;
        else if (selectedFinish === 'Anti-skid' && p.finish !== 'Anti-skid' && p.finish !== 'Textured' && !p.specifications.slipResistance.toLowerCase().includes('anti-skid') && !p.specifications.slipResistance.includes('R10') && !p.specifications.slipResistance.includes('R11')) return false;
        else if (selectedFinish !== 'Glossy' && selectedFinish !== 'Matte' && selectedFinish !== 'Polished' && selectedFinish !== 'Honed' && selectedFinish !== 'Anti-skid' && p.finish !== selectedFinish) return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesCat = p.category.toLowerCase().includes(query);
        const matchesLook = p.look.toLowerCase().includes(query);
        const matchesSpace = p.spaces.some((s) => s.toLowerCase().includes(query));
        if (!matchesName && !matchesCat && !matchesLook && !matchesSpace) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      // featured default
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCategory, selectedSpace, selectedFinish, selectedLook, searchQuery, sortBy]);

  const hasActiveFilters = Boolean(
    selectedCategory || selectedSpace || selectedFinish || selectedLook || searchQuery
  );

  return (
    <div style={{ backgroundColor: 'var(--color-warm-ivory)', minHeight: '80vh', paddingBottom: 80 }}>
      {/* Top Header & Breadcrumbs */}
      <div style={{
        backgroundColor: 'var(--color-white)',
        borderBottom: '1px solid var(--color-border-light)',
        paddingTop: 32,
        paddingBottom: 36
      }}>
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <ol className="breadcrumb-list">
              <li><Link to="/">Home</Link></li>
              <li className="breadcrumb-separator"><ChevronRight size={12} /></li>
              <li style={{ color: 'var(--color-deep-charcoal)', fontWeight: 600 }}>Products</li>
              {selectedCategory && (
                <>
                  <li className="breadcrumb-separator"><ChevronRight size={12} /></li>
                  <li style={{ color: 'var(--color-terracotta)', fontWeight: 600 }}>{selectedCategory}</li>
                </>
              )}
            </ol>
          </nav>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 20
          }}>
            <div>
              <span className="section-eyebrow">Catalogue & Formats</span>
              <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: 8, color: 'var(--color-deep-charcoal)' }}>
                Explore Our Tiles
              </h1>
              <p style={{ maxWidth: 640, fontSize: '0.9375rem' }}>
                Browse verified tile categories, surface finishes, and architectural looks available through Marathwada Tiles in Aurangabad.
              </p>
            </div>

            <div style={{
              fontSize: '0.875rem',
              color: 'var(--color-text-body)',
              backgroundColor: 'var(--color-warm-ivory)',
              padding: '6px 14px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--color-border-light)',
              fontWeight: 600
            }}>
              Showing {filteredProducts.length} of {products.length} tile designs
            </div>
          </div>
        </div>
      </div>

      {/* Main Filter & Catalogue Layout */}
      <div className="container" style={{ paddingTop: 36 }}>
        {/* Search & Sort Tool Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
          marginBottom: 28,
          backgroundColor: 'var(--color-white)',
          padding: '14px 20px',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--color-border-light)'
        }}>
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="btn btn-secondary btn-sm mobile-filter-btn"
            style={{ display: 'none' }}
          >
            <Filter size={16} />
            <span>Filters {hasActiveFilters && `(Active)`}</span>
          </button>

          {/* Quick Search inside catalogue */}
          <div style={{ position: 'relative', flex: 1, minWidth: 220, maxWidth: 400 }}>
            <Search size={16} color="var(--color-text-body)" style={{ position: 'absolute', left: 12, top: 12 }} />
            <input
              type="text"
              placeholder="Search by name or finish..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="form-control"
              style={{ paddingLeft: 36, paddingRight: 32, fontSize: '0.875rem' }}
            />
            {searchQuery && (
              <button
                onClick={() => handleSearchChange('')}
                style={{ position: 'absolute', right: 10, top: 10, color: 'var(--color-text-body)' }}
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginLeft: 'auto' }}>
            <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-body)', whiteSpace: 'nowrap' }}>
              Sort by:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="form-control"
              style={{ padding: '8px 12px', fontSize: '0.8125rem', width: 'auto' }}
            >
              <option value="featured">Featured First</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>

        {/* 2-Column Grid: Filter Sidebar + Product Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 32 }} className="products-layout-grid">
          {/* Desktop Filter Sidebar */}
          <aside className="desktop-filter-sidebar" style={{
            backgroundColor: 'var(--color-white)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--color-border-light)',
            padding: 24,
            height: 'fit-content'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 20,
              paddingBottom: 12,
              borderBottom: '1px solid var(--color-border-light)'
            }}>
              <span style={{ fontWeight: 700, fontSize: '0.9375rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                <SlidersHorizontal size={16} /> Filters
              </span>
              {hasActiveFilters && (
                <button
                  onClick={handleClearFilters}
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--color-terracotta)',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4
                  }}
                >
                  <RotateCcw size={12} /> Clear All
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10, color: 'var(--color-deep-charcoal)' }}>
                Tile Category
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <button
                  onClick={() => handleCategoryChange('')}
                  style={{
                    textAlign: 'left',
                    fontSize: '0.875rem',
                    padding: '4px 8px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: !selectedCategory ? 'var(--color-warm-ivory)' : 'transparent',
                    color: !selectedCategory ? 'var(--color-terracotta)' : 'var(--color-deep-charcoal)',
                    fontWeight: !selectedCategory ? 600 : 400
                  }}
                >
                  All Categories ({products.length})
                </button>
                {tileCategories.map((cat) => {
                  const count = products.filter((p) => p.category === cat).length;
                  return (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      style={{
                        textAlign: 'left',
                        fontSize: '0.875rem',
                        padding: '4px 8px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: selectedCategory === cat ? 'var(--color-warm-ivory)' : 'transparent',
                        color: selectedCategory === cat ? 'var(--color-terracotta)' : 'var(--color-deep-charcoal)',
                        fontWeight: selectedCategory === cat ? 600 : 400,
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span>{cat}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-body)' }}>({count})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Application / Space Filter */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10, color: 'var(--color-deep-charcoal)' }}>
                By Space
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <button
                  onClick={() => handleSpaceChange('')}
                  style={{
                    textAlign: 'left',
                    fontSize: '0.875rem',
                    padding: '4px 8px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: !selectedSpace ? 'var(--color-warm-ivory)' : 'transparent',
                    color: !selectedSpace ? 'var(--color-olive)' : 'var(--color-deep-charcoal)',
                    fontWeight: !selectedSpace ? 600 : 400
                  }}
                >
                  All Spaces
                </button>
                {tileSpaces.map((space) => (
                  <button
                    key={space}
                    onClick={() => handleSpaceChange(space)}
                    style={{
                      textAlign: 'left',
                      fontSize: '0.875rem',
                      padding: '4px 8px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: selectedSpace === space ? 'var(--color-warm-ivory)' : 'transparent',
                      color: selectedSpace === space ? 'var(--color-olive)' : 'var(--color-deep-charcoal)',
                      fontWeight: selectedSpace === space ? 600 : 400
                    }}
                  >
                    {space}
                  </button>
                ))}
              </div>
            </div>

            {/* Finish Filter */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10, color: 'var(--color-deep-charcoal)' }}>
                Surface Finish
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                <button
                  onClick={() => handleFinishChange('')}
                  className={`badge ${!selectedFinish ? 'badge-dark' : ''}`}
                  style={{ cursor: 'pointer' }}
                >
                  All
                </button>
                {tileFinishes.map((f) => (
                  <button
                    key={f}
                    onClick={() => handleFinishChange(f)}
                    className={`badge ${selectedFinish === f ? 'badge-terracotta' : ''}`}
                    style={{ cursor: 'pointer' }}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Look Filter */}
            <div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10, color: 'var(--color-deep-charcoal)' }}>
                Look & Texture
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                <button
                  onClick={() => handleLookChange('')}
                  className={`badge ${!selectedLook ? 'badge-dark' : ''}`}
                  style={{ cursor: 'pointer' }}
                >
                  All
                </button>
                {tileLooks.map((look) => (
                  <button
                    key={look}
                    onClick={() => handleLookChange(look)}
                    className={`badge ${selectedLook === look ? 'badge-olive' : ''}`}
                    style={{ cursor: 'pointer' }}
                  >
                    {look}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid / Empty State */}
          <main>
            {/* Active filters chips strip */}
            {hasActiveFilters && (
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-body)', fontWeight: 600 }}>Active Filters:</span>
                {selectedCategory && (
                  <span className="badge badge-terracotta" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    {selectedCategory}
                    <X size={12} style={{ cursor: 'pointer' }} onClick={() => handleCategoryChange('')} />
                  </span>
                )}
                {selectedSpace && (
                  <span className="badge badge-olive" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    {selectedSpace}
                    <X size={12} style={{ cursor: 'pointer' }} onClick={() => handleSpaceChange('')} />
                  </span>
                )}
                {selectedFinish && (
                  <span className="badge" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    {selectedFinish}
                    <X size={12} style={{ cursor: 'pointer' }} onClick={() => handleFinishChange('')} />
                  </span>
                )}
                {selectedLook && (
                  <span className="badge" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    {selectedLook}
                    <X size={12} style={{ cursor: 'pointer' }} onClick={() => handleLookChange('')} />
                  </span>
                )}
                {searchQuery && (
                  <span className="badge" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    "{searchQuery}"
                    <X size={12} style={{ cursor: 'pointer' }} onClick={() => handleSearchChange('')} />
                  </span>
                )}
              </div>
            )}

            {filteredProducts.length === 0 ? (
              <div style={{
                backgroundColor: 'var(--color-white)',
                padding: '60px 24px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border-light)',
                textAlign: 'center'
              }}>
                <Layers size={48} color="var(--color-sand)" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: 8 }}>No matching tiles found</h3>
                <p style={{ color: 'var(--color-text-body)', maxWidth: 440, margin: '0 auto 20px', fontSize: '0.9375rem' }}>
                  No tiles currently match all your selected filters. Try broadening your criteria or reset filters to see all available designs.
                </p>
                <button onClick={handleClearFilters} className="btn btn-primary">
                  <RotateCcw size={16} /> Reset All Filters
                </button>
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: 24
              }}>
                {filteredProducts.map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    onEnquire={(name) => onOpenQuote(name)}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filter Drawer Overlay */}
      {isMobileFilterOpen && (
        <div className="modal-overlay" onClick={() => setIsMobileFilterOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: 420, padding: 24, maxHeight: '85vh' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h3 style={{ fontSize: '1.3rem' }}>Filter Tiles</h3>
              <button onClick={() => setIsMobileFilterOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Category Select */}
            <div className="form-group">
              <label className="form-label">Category</label>
              <select
                className="form-control"
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
              >
                <option value="">All Categories</option>
                {tileCategories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Space Select */}
            <div className="form-group">
              <label className="form-label">Space</label>
              <select
                className="form-control"
                value={selectedSpace}
                onChange={(e) => handleSpaceChange(e.target.value)}
              >
                <option value="">All Spaces</option>
                {tileSpaces.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Finish Select */}
            <div className="form-group">
              <label className="form-label">Finish</label>
              <select
                className="form-control"
                value={selectedFinish}
                onChange={(e) => handleFinishChange(e.target.value)}
              >
                <option value="">All Finishes</option>
                {tileFinishes.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>

            {/* Look Select */}
            <div className="form-group">
              <label className="form-label">Look</label>
              <select
                className="form-control"
                value={selectedLook}
                onChange={(e) => handleLookChange(e.target.value)}
              >
                <option value="">All Looks</option>
                {tileLooks.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              <button
                onClick={() => {
                  handleClearFilters();
                  setIsMobileFilterOpen(false);
                }}
                className="btn btn-secondary"
                style={{ flex: 1 }}
              >
                Clear
              </button>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Responsive Breakpoints */}
      <style>{`
        @media (max-width: 900px) {
          .products-layout-grid {
            grid-template-columns: 1fr !important;
          }
          .desktop-filter-sidebar {
            display: none !important;
          }
          .mobile-filter-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </div>
  );
};
