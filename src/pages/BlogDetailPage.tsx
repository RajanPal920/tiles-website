import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Clock, ArrowLeft, Lightbulb, MessageSquare, Sparkles, User, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blog';
import { getWhatsAppUrl } from '../utils/constants';

interface BlogDetailPageProps {
  onOpenQuote: () => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ onOpenQuote }) => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="section-padding bg-ivory" style={{ minHeight: '60vh', textAlign: 'center' }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: '2rem', marginBottom: 12 }}>Article Not Found</h2>
          <p style={{ color: 'var(--color-text-body)', marginBottom: 24 }}>
            The requested design journal article could not be located.
          </p>
          <Link to="/blog" className="btn btn-primary">
            <ArrowLeft size={16} /> Return to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'var(--color-warm-ivory)', minHeight: '80vh', paddingBottom: 80 }}>
      {/* Breadcrumb Navigation */}
      <div style={{ backgroundColor: 'var(--color-white)', borderBottom: '1px solid var(--color-border-light)' }}>
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <ol className="breadcrumb-list">
              <li><Link to="/">Home</Link></li>
              <li className="breadcrumb-separator"><ChevronRight size={12} /></li>
              <li><Link to="/blog">Blog</Link></li>
              <li className="breadcrumb-separator"><ChevronRight size={12} /></li>
              <li style={{ color: 'var(--color-deep-charcoal)', fontWeight: 600 }}>{post.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Container */}
      <div className="container-narrow" style={{ paddingTop: 40, textAlign: 'left' }}>
        <div style={{
          backgroundColor: 'var(--color-white)',
          padding: 'clamp(28px, 5vw, 56px)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border-light)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <span className="badge badge-terracotta">{post.category}</span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-body)' }}>{post.readTime}</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.1rem, 4vw, 3rem)',
            lineHeight: 1.2,
            marginBottom: 20,
            color: 'var(--color-deep-charcoal)'
          }}>
            {post.title}
          </h1>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            paddingBottom: 24,
            marginBottom: 28,
            borderBottom: '1px solid var(--color-border-light)',
            fontSize: '0.875rem',
            color: 'var(--color-text-body)'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <User size={15} color="var(--color-olive)" /> {post.author}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Calendar size={15} color="var(--color-sand)" /> {post.publishedDate}
            </span>
          </div>

          {/* Featured Image */}
          <div style={{
            borderRadius: 'var(--radius-sm)',
            overflow: 'hidden',
            maxHeight: 460,
            marginBottom: 36
          }}>
            <img
              src={post.image}
              alt={post.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Body Paragraphs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40, fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-deep-charcoal)' }}>
            {post.content.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Practical Design Tips Box */}
          <div style={{
            backgroundColor: 'var(--color-warm-ivory)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--color-border-light)',
            padding: '24px 28px',
            marginBottom: 40
          }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: 14, color: 'var(--color-deep-charcoal)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Lightbulb size={20} color="var(--color-terracotta)" /> Key Architectural Takeaways:
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {post.tips.map((tip, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-terracotta)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    marginTop: 3,
                    flexShrink: 0
                  }}>
                    {idx + 1}
                  </span>
                  <span style={{ fontSize: '0.9375rem', color: 'var(--color-deep-charcoal)' }}>{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Enquiry CTA */}
          <div style={{
            borderTop: '1px solid var(--color-border-light)',
            paddingTop: 32,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 16
          }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--color-deep-charcoal)' }}>
                Planning surfaces for a new build or renovation?
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--color-text-body)' }}>
                Review sample boards and get quantity estimates at Marathwada Tiles.
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={onOpenQuote} className="btn btn-primary">
                <Sparkles size={16} /> Get a Quote
              </button>
              <a
                href={getWhatsAppUrl(`Hello Marathwada Tiles, I read your article "${post.title}" and would like to enquire about suitable tiles.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageSquare size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
