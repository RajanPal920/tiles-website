import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import { blogPosts } from '../data/blog';
import { resources } from '../data/resources';

interface BlogAndResourcesPageProps {
  onOpenQuote: () => void;
}

export const BlogAndResourcesPage: React.FC<BlogAndResourcesPageProps> = ({ onOpenQuote: _onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Articles' | 'Buying Guides' | 'Maintenance' | 'FAQs'>('All');
  const [highlightedSection, setHighlightedSection] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to section and highlight on hash change or initial URL with hash
  useEffect(() => {
    const rawHash = location.hash.replace('#', '');
    if (rawHash) {
      // Ensure all sections are visible in DOM when navigating via hash
      setActiveTab('All');
      setHighlightedSection(rawHash);

      const scrollTimer = setTimeout(() => {
        const el = document.getElementById(rawHash);
        if (el) {
          const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
        }
      }, 150);

      // Gentle highlight timeout after 5 seconds
      const clearTimer = setTimeout(() => {
        setHighlightedSection(null);
      }, 5000);

      return () => {
        clearTimeout(scrollTimer);
        clearTimeout(clearTimer);
      };
    }
  }, [location.hash]);

  const buyingGuides = resources.filter(r => r.category === 'Tile Buying Guides');
  const maintenanceTips = resources.filter(r => r.category === 'Tile Care and Maintenance');
  const faqs = resources.filter(r => r.category === 'Frequently Asked Questions');

  return (
    <div style={{ backgroundColor: 'var(--color-warm-ivory)', minHeight: '80vh', paddingBottom: 80 }}>
      {/* Editorial Style Hero Section */}
      <section style={{
        position: 'relative',
        backgroundColor: 'var(--color-deep-charcoal)',
        color: 'var(--color-white)',
        padding: 'clamp(64px, 8vw, 96px) 0',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.38
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'left' }}>
          <div style={{ maxWidth: 760 }}>
            <span className="section-eyebrow" style={{ color: 'var(--color-sand)' }}>
              Knowledge &amp; Inspiration Hub
            </span>
            <h1 style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
              color: 'var(--color-white)',
              lineHeight: 1.15,
              marginBottom: 16
            }}>
              Blog &amp; Resources
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              color: 'rgba(246, 243, 236, 0.9)',
              lineHeight: 1.65,
              marginBottom: 28
            }}>
              Explore practical tile buying guides, surface maintenance advice, room layout strategies, and contemporary design trends curated by Marathwada Tiles in Aurangabad.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button 
                onClick={() => { setActiveTab('All'); setHighlightedSection(null); }}
                className={`btn btn-sm ${activeTab === 'All' ? 'btn-primary' : 'btn-outline-white'}`}
              >
                All Insights
              </button>
              <button 
                onClick={() => { setActiveTab('Buying Guides'); setHighlightedSection('tile-buying-guide'); }}
                className={`btn btn-sm ${activeTab === 'Buying Guides' ? 'btn-primary' : 'btn-outline-white'}`}
              >
                Buying Guides
              </button>
              <button 
                onClick={() => { setActiveTab('Articles'); setHighlightedSection('tile-design-ideas'); }}
                className={`btn btn-sm ${activeTab === 'Articles' ? 'btn-primary' : 'btn-outline-white'}`}
              >
                Design Ideas
              </button>
              <button 
                onClick={() => { setActiveTab('Maintenance'); setHighlightedSection('care-maintenance'); }}
                className={`btn btn-sm ${activeTab === 'Maintenance' ? 'btn-primary' : 'btn-outline-white'}`}
              >
                Care &amp; Maintenance
              </button>
              <button 
                onClick={() => { setActiveTab('FAQs'); setHighlightedSection('frequently-asked-questions'); }}
                className={`btn btn-sm ${activeTab === 'FAQs' ? 'btn-primary' : 'btn-outline-white'}`}
              >
                FAQs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container" style={{ paddingTop: 48 }}>
        
        {/* SECTION 1: Tile Buying Guide */}
        {(activeTab === 'All' || activeTab === 'Buying Guides') && (
          <section
            id="tile-buying-guide"
            style={{
              scrollMarginTop: 110,
              marginBottom: 60,
              borderRadius: 'var(--radius-lg)',
              padding: highlightedSection === 'tile-buying-guide' ? '28px 24px' : '8px 0',
              backgroundColor: highlightedSection === 'tile-buying-guide' ? 'rgba(168, 95, 72, 0.05)' : 'transparent',
              border: highlightedSection === 'tile-buying-guide' ? '1.5px solid var(--color-terracotta)' : '1.5px solid transparent',
              boxShadow: highlightedSection === 'tile-buying-guide' ? '0 8px 30px rgba(168, 95, 72, 0.12)' : 'none',
              transition: 'all 0.4s ease'
            }}
          >
            <div style={{ textAlign: 'left', marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
              <div>
                <span className="section-eyebrow">Practical Knowledge</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                  <h2 style={{ fontSize: '1.85rem', margin: 0 }}>Tile Buying Guide</h2>
                  {highlightedSection === 'tile-buying-guide' && (
                    <span className="badge badge-terracotta" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                      <Sparkles size={12} /> Active Selection
                    </span>
                  )}
                </div>
              </div>
              <span style={{ fontSize: '0.875rem', color: 'var(--color-text-body)' }}>
                {buyingGuides.length} Architectural Guides
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 28
            }}>
              {buyingGuides.map((res) => (
                <div
                  key={res.id}
                  className="arch-card"
                  onClick={() => navigate(`/resources/${res.slug}`)}
                  style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ height: 210, overflow: 'hidden' }}>
                    <img src={res.image} alt={res.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: 24, textAlign: 'left', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-olive)', textTransform: 'uppercase', marginBottom: 8 }}>
                      {res.category} &bull; {res.readTime}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: 10 }}>{res.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: 16 }}>
                      {res.summary}
                    </p>
                    <div style={{ marginTop: 'auto', color: 'var(--color-terracotta)', fontWeight: 600, fontSize: '0.8125rem', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      Read Guide <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 2: Tile Design Ideas */}
        {(activeTab === 'All' || activeTab === 'Articles') && (
          <section
            id="tile-design-ideas"
            style={{
              scrollMarginTop: 110,
              marginBottom: 60,
              borderRadius: 'var(--radius-lg)',
              padding: highlightedSection === 'tile-design-ideas' ? '28px 24px' : '8px 0',
              backgroundColor: highlightedSection === 'tile-design-ideas' ? 'rgba(168, 95, 72, 0.05)' : 'transparent',
              border: highlightedSection === 'tile-design-ideas' ? '1.5px solid var(--color-terracotta)' : '1.5px solid transparent',
              boxShadow: highlightedSection === 'tile-design-ideas' ? '0 8px 30px rgba(168, 95, 72, 0.12)' : 'none',
              transition: 'all 0.4s ease'
            }}
          >
            <div style={{ textAlign: 'left', marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
              <div>
                <span className="section-eyebrow">Design Perspectives</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                  <h2 style={{ fontSize: '1.85rem', margin: 0 }}>Tile Design Ideas &amp; Trends</h2>
                  {highlightedSection === 'tile-design-ideas' && (
                    <span className="badge badge-terracotta" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                      <Sparkles size={12} /> Active Selection
                    </span>
                  )}
                </div>
              </div>
              <span style={{ fontSize: '0.875rem', color: 'var(--color-text-body)' }}>
                {blogPosts.length} Design Articles
              </span>
            </div>

            {/* Featured Lead Editorial */}
            {blogPosts[0] && (
              <div
                onClick={() => navigate(`/blog/${blogPosts[0].slug}`)}
                className="arch-card"
                style={{
                  cursor: 'pointer',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                  gap: 36,
                  alignItems: 'center',
                  padding: 'clamp(20px, 3vw, 36px)',
                  marginBottom: 32,
                  textAlign: 'left'
                }}
              >
                <div style={{ height: 300, borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <span className="badge badge-terracotta">Featured Editorial</span>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-body)' }}>{blogPosts[0].readTime}</span>
                  </div>

                  <h3 style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', marginBottom: 14, color: 'var(--color-deep-charcoal)' }}>
                    {blogPosts[0].title}
                  </h3>

                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: 20 }}>
                    {blogPosts[0].excerpt}
                  </p>

                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--color-terracotta)', fontWeight: 600 }}>
                    Read Full Story <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            )}

            {/* Grid of Remaining Design Articles */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 28
            }}>
              {blogPosts.slice(1).map((post) => (
                <div
                  key={post.id}
                  className="arch-card"
                  onClick={() => navigate(`/blog/${post.slug}`)}
                  style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ height: 210, overflow: 'hidden' }}>
                    <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: 24, textAlign: 'left', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-terracotta)', textTransform: 'uppercase', marginBottom: 8 }}>
                      {post.category} &bull; {post.readTime}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: 10 }}>{post.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: 16 }}>
                      {post.excerpt}
                    </p>
                    <div style={{ marginTop: 'auto', color: 'var(--color-deep-charcoal)', fontWeight: 600, fontSize: '0.8125rem', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      Read Article <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 3: Care & Maintenance Tips */}
        {(activeTab === 'All' || activeTab === 'Maintenance') && (
          <section
            id="care-maintenance"
            style={{
              scrollMarginTop: 110,
              marginBottom: 60,
              borderRadius: 'var(--radius-lg)',
              padding: highlightedSection === 'care-maintenance' ? '28px 24px' : '8px 0',
              backgroundColor: highlightedSection === 'care-maintenance' ? 'rgba(168, 95, 72, 0.05)' : 'transparent',
              border: highlightedSection === 'care-maintenance' ? '1.5px solid var(--color-terracotta)' : '1.5px solid transparent',
              boxShadow: highlightedSection === 'care-maintenance' ? '0 8px 30px rgba(168, 95, 72, 0.12)' : 'none',
              transition: 'all 0.4s ease'
            }}
          >
            <div style={{ textAlign: 'left', marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
              <div>
                <span className="section-eyebrow">Surface Longevity</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                  <h2 style={{ fontSize: '1.85rem', margin: 0 }}>Care &amp; Maintenance Tips</h2>
                  {highlightedSection === 'care-maintenance' && (
                    <span className="badge badge-terracotta" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                      <Sparkles size={12} /> Active Selection
                    </span>
                  )}
                </div>
              </div>
              <span style={{ fontSize: '0.875rem', color: 'var(--color-text-body)' }}>
                {maintenanceTips.length} Expert Guides
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 28
            }}>
              {maintenanceTips.map((res) => (
                <div
                  key={res.id}
                  className="arch-card"
                  onClick={() => navigate(`/resources/${res.slug}`)}
                  style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ height: 210, overflow: 'hidden' }}>
                    <img src={res.image} alt={res.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: 24, textAlign: 'left', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-olive)', textTransform: 'uppercase', marginBottom: 8 }}>
                      {res.category} &bull; {res.readTime}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: 10 }}>{res.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: 16 }}>
                      {res.summary}
                    </p>
                    <div style={{ marginTop: 'auto', color: 'var(--color-terracotta)', fontWeight: 600, fontSize: '0.8125rem', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      Read Maintenance Advice <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 4: Frequently Asked Questions */}
        {(activeTab === 'All' || activeTab === 'FAQs') && (
          <section
            id="frequently-asked-questions"
            style={{
              scrollMarginTop: 110,
              marginBottom: 40,
              borderRadius: 'var(--radius-lg)',
              padding: highlightedSection === 'frequently-asked-questions' ? '28px 24px' : '8px 0',
              backgroundColor: highlightedSection === 'frequently-asked-questions' ? 'rgba(168, 95, 72, 0.05)' : 'transparent',
              border: highlightedSection === 'frequently-asked-questions' ? '1.5px solid var(--color-terracotta)' : '1.5px solid transparent',
              boxShadow: highlightedSection === 'frequently-asked-questions' ? '0 8px 30px rgba(168, 95, 72, 0.12)' : 'none',
              transition: 'all 0.4s ease'
            }}
          >
            <div style={{ textAlign: 'left', marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
              <div>
                <span className="section-eyebrow">Technical Support</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                  <h2 style={{ fontSize: '1.85rem', margin: 0 }}>Frequently Asked Questions</h2>
                  {highlightedSection === 'frequently-asked-questions' && (
                    <span className="badge badge-terracotta" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                      <Sparkles size={12} /> Active Selection
                    </span>
                  )}
                </div>
              </div>
              <span style={{ fontSize: '0.875rem', color: 'var(--color-text-body)' }}>
                Installation &amp; Sizing Answers
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 28
            }}>
              {faqs.map((res) => (
                <div
                  key={res.id}
                  className="arch-card"
                  onClick={() => navigate(`/resources/${res.slug}`)}
                  style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ height: 210, overflow: 'hidden' }}>
                    <img src={res.image} alt={res.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: 24, textAlign: 'left', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-terracotta)', textTransform: 'uppercase', marginBottom: 8 }}>
                      {res.category} &bull; {res.readTime}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: 10 }}>{res.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: 16 }}>
                      {res.summary}
                    </p>
                    <div style={{ marginTop: 'auto', color: 'var(--color-terracotta)', fontWeight: 600, fontSize: '0.8125rem', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      Read Technical Answers <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
};
