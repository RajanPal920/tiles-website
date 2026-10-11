import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Clock, ArrowRight, BookOpen, Calendar, User } from 'lucide-react';
import { blogPosts, blogCategories } from '../data/blog';

export const BlogPage: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('All Articles');
  const navigate = useNavigate();

  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  const filteredPosts = selectedCat === 'All Articles'
    ? otherPosts
    : otherPosts.filter((p) => p.category === selectedCat);

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
          <div style={{ maxWidth: 720, textAlign: 'left' }}>
            <span className="section-eyebrow">Design Trends & Insights</span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: 12, color: 'var(--color-deep-charcoal)' }}>
              Tile Editorial & Design Journal
            </h1>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-body)', lineHeight: 1.6 }}>
              Insights, installation advice, and material explorations for contemporary Indian architecture, curated by Marathwada Tiles.
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: 36 }}>
        {/* Featured Big Card */}
        {selectedCat === 'All Articles' && featuredPost && (
          <div
            onClick={() => navigate(`/blog/${featuredPost.slug}`)}
            className="arch-card"
            style={{
              cursor: 'pointer',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: 36,
              alignItems: 'center',
              padding: 'clamp(20px, 3vw, 36px)',
              marginBottom: 48,
              textAlign: 'left'
            }}
          >
            <div style={{ height: 340, borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <span className="badge badge-terracotta">Featured Story</span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-body)' }}>{featuredPost.readTime}</span>
              </div>

              <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', marginBottom: 14, color: 'var(--color-deep-charcoal)' }}>
                {featuredPost.title}
              </h2>

              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: 20 }}>
                {featuredPost.excerpt}
              </p>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--color-terracotta)', fontWeight: 600 }}>
                Read Full Article <ArrowRight size={16} />
              </div>
            </div>
          </div>
        )}

        {/* Categories Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
          {blogCategories.map((cat) => (
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

        {/* Other Articles Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 28
        }}>
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="arch-card"
              onClick={() => navigate(`/blog/${post.slug}`)}
              style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div style={{ height: 210, overflow: 'hidden' }}>
                <img
                  src={post.image}
                  alt={post.title}
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
                  <span>{post.category}</span>
                  <span style={{ color: 'var(--color-text-body)' }}>{post.readTime}</span>
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: 10, color: 'var(--color-deep-charcoal)' }}>
                  {post.title}
                </h3>

                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: 18 }}>
                  {post.excerpt}
                </p>

                <div style={{
                  marginTop: 'auto',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  color: 'var(--color-terracotta)',
                  fontWeight: 600,
                  fontSize: '0.8125rem'
                }}>
                  Read Story <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
