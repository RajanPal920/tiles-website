import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Clock, ArrowLeft, CheckCircle, Sparkles, MessageSquare, BookOpen } from 'lucide-react';
import { resources } from '../data/resources';
import { getWhatsAppUrl } from '../utils/constants';

interface ResourceDetailPageProps {
  onOpenQuote: () => void;
}

export const ResourceDetailPage: React.FC<ResourceDetailPageProps> = ({ onOpenQuote }) => {
  const { slug } = useParams<{ slug: string }>();
  const resource = resources.find((r) => r.slug === slug);

  if (!resource) {
    return (
      <div className="section-padding bg-ivory" style={{ minHeight: '60vh', textAlign: 'center' }}>
        <div className="container-narrow">
          <BookOpen size={56} color="var(--color-sand)" style={{ margin: '0 auto 16px' }} />
          <h2 style={{ fontSize: '2rem', marginBottom: 12 }}>Resource Not Found</h2>
          <p style={{ color: 'var(--color-text-body)', marginBottom: 24 }}>
            The requested architectural guide could not be located.
          </p>
          <Link to="/resources" className="btn btn-primary">
            <ArrowLeft size={16} /> Return to Resources
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
              <li><Link to="/resources">Resources</Link></li>
              <li className="breadcrumb-separator"><ChevronRight size={12} /></li>
              <li style={{ color: 'var(--color-deep-charcoal)', fontWeight: 600 }}>{resource.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Article Container */}
      <div className="container-narrow" style={{ paddingTop: 40, textAlign: 'left' }}>
        <div style={{
          backgroundColor: 'var(--color-white)',
          padding: 'clamp(28px, 5vw, 56px)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border-light)'
        }}>
          {/* Header Metadata */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <span className="badge badge-olive">{resource.category}</span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-body)', display: 'flex', alignItems: 'center', gap: 4 }}>
              <Clock size={13} /> {resource.readTime}
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.1rem, 4vw, 3rem)',
            lineHeight: 1.2,
            marginBottom: 20,
            color: 'var(--color-deep-charcoal)'
          }}>
            {resource.title}
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: 'var(--color-text-body)',
            lineHeight: 1.6,
            marginBottom: 32,
            fontStyle: 'italic',
            borderLeft: '3px solid var(--color-terracotta)',
            paddingLeft: 16
          }}>
            {resource.summary}
          </p>

          {/* Featured Image */}
          <div style={{
            borderRadius: 'var(--radius-sm)',
            overflow: 'hidden',
            maxHeight: 440,
            marginBottom: 36
          }}>
            <img
              src={resource.image}
              alt={resource.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Article Paragraphs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40, fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-deep-charcoal)' }}>
            {resource.content.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Key Takeaways Box */}
          <div style={{
            backgroundColor: 'var(--color-warm-ivory)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--color-border-light)',
            padding: '24px 28px',
            marginBottom: 40
          }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: 14, color: 'var(--color-deep-charcoal)' }}>
              Summary & Recommendations:
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {resource.keyTakeaways.map((point, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <CheckCircle size={18} color="var(--color-olive)" style={{ marginTop: 3, flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9375rem', color: 'var(--color-deep-charcoal)' }}>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
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
                Have questions about your floor or wall layout?
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--color-text-body)' }}>
                Consult with our Aurangabad showroom team for project estimates.
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={onOpenQuote} className="btn btn-primary">
                <Sparkles size={16} /> Get a Quote
              </button>
              <a
                href={getWhatsAppUrl(`Hi Marathwada Tiles, I was reading your guide "${resource.title}" and would like to enquire.`)}
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
