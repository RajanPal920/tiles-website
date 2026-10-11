import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, PhoneCall } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_INFO, getWhatsAppUrl } from '../utils/constants';
import { tileCategories } from '../data/products';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProduct = ''
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('Floor Tiles');
  const [productName, setProductName] = useState(initialProduct);
  const [projectType, setProjectType] = useState('Residential Renovation');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (initialProduct) {
      setProductName(initialProduct);
      setMessage(`Hi, I would like to enquire about ${initialProduct} for my project.`);
    }
  }, [initialProduct]);

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

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^[6-9]\d{9}$/.test(phone.replace(/\D/g, '').slice(-10))) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
    }
    if (!message.trim()) newErrors.message = 'Please provide a short description of your project';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate server dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Marathwada Tiles,\n\nName: ${fullName || 'Client'}\nPhone: ${phone}\nProject: ${projectType}\nCategory: ${category}${productName ? `\nProduct: ${productName}` : ''}\n\nEnquiry: ${message || 'Please send tile options and pricing.'}`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '32px 28px' }}
      >
        <button 
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            color: 'var(--color-text-body)',
            padding: 8,
            borderRadius: '50%',
            backgroundColor: 'var(--color-warm-ivory)'
          }}
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <div>
            <div style={{ marginBottom: 24, textAlign: 'left' }}>
              <span className="section-eyebrow">Direct Showroom Enquiry</span>
              <h3 style={{ fontSize: '1.75rem', marginBottom: 8, color: 'var(--color-deep-charcoal)' }}>
                Request a Custom Quote
              </h3>
              <p style={{ fontSize: '0.875rem' }}>
                Share your room specifications or desired tile designs. Our team in Aurangabad will assist with sizes, stock availability, and estimates.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">
                  Full Name <span className="required">*</span>
                </label>
                <input 
                  type="text"
                  className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                  placeholder="e.g. Rahul Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                {errors.fullName && <div className="form-error">{errors.fullName}</div>}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                <div className="form-group">
                  <label className="form-label">
                    Phone Number <span className="required">*</span>
                  </label>
                  <input 
                    type="tel"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    placeholder="e.g. 98220 12345"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {errors.phone && <div className="form-error">{errors.phone}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label">Email (Optional)</label>
                  <input 
                    type="email"
                    className="form-control"
                    placeholder="e.g. rahul@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                <div className="form-group">
                  <label className="form-label">Tile Category</label>
                  <select 
                    className="form-control"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    {tileCategories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Project Type</label>
                  <select 
                    className="form-control"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                  >
                    <option value="Residential Renovation">Residential Renovation</option>
                    <option value="New Bungalow Construction">New Bungalow Construction</option>
                    <option value="Commercial / Office Space">Commercial / Office Space</option>
                    <option value="Architectural / Interior Project">Architect / Interior Project</option>
                    <option value="Bathroom / Kitchen Makeover">Bathroom / Kitchen Makeover</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Specific Tile or Size (Optional)</label>
                <input 
                  type="text"
                  className="form-control"
                  placeholder="e.g. Statuario Oro 1200x1800mm or Honed Travertine"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Project Details / Message <span className="required">*</span>
                </label>
                <textarea 
                  rows={3}
                  className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                  placeholder="Tell us about the approximate area (e.g. 1200 sq ft living hall), space requirements, or timeline..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                {errors.message && <div className="form-error">{errors.message}</div>}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 24 }}>
                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg"
                  disabled={isSubmitting}
                  style={{ width: '100%' }}
                >
                  <Send size={18} />
                  {isSubmitting ? 'Submitting Details...' : 'Submit Quotation Request'}
                </button>

                <div style={{ textAlign: 'center', fontSize: '0.8125rem', color: 'var(--color-text-body)', margin: '4px 0' }}>
                  or connect instantly via:
                </div>

                <button 
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="btn btn-whatsapp"
                  style={{ width: '100%' }}
                >
                  <WhatsAppIcon size={18} color="#FFFFFF" />
                  Send Directly on WhatsApp (+91 88882 44441)
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 10px' }}>
            <CheckCircle size={56} color="var(--color-olive)" style={{ margin: '0 auto 16px' }} />
            <h3 style={{ fontSize: '1.85rem', marginBottom: 12 }}>Enquiry Received</h3>
            <p style={{ marginBottom: 20, fontSize: '0.9375rem', color: 'var(--color-text-body)' }}>
              Thank you, <strong>{fullName}</strong>. Your quotation request has been recorded for Marathwada Tiles (Aurangabad). Aaman Lakhani or our showroom team will reach out at <strong>{phone}</strong>.
            </p>

            <div style={{ background: 'var(--color-warm-ivory)', border: '1px solid var(--color-border-light)', padding: 16, borderRadius: 'var(--radius-sm)', marginBottom: 24, textAlign: 'left', fontSize: '0.875rem' }}>
              <div style={{ fontWeight: 600, color: 'var(--color-deep-charcoal)', marginBottom: 4 }}>Fastest Response Tip:</div>
              <div>Click below to forward your exact requirements directly to our showroom WhatsApp:</div>
            </div>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                type="button" 
                onClick={handleWhatsAppDirect}
                className="btn btn-whatsapp"
              >
                <WhatsAppIcon size={18} color="#FFFFFF" /> Open WhatsApp Chat
              </button>
              <a 
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="btn btn-secondary"
              >
                <PhoneCall size={18} /> Call +91 88882 44441
              </a>
            </div>

            <button 
              type="button" 
              onClick={onClose}
              className="btn btn-secondary"
              style={{ marginTop: 20, border: 'none', textDecoration: 'underline', color: 'var(--color-text-body)' }}
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
