import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Send, 
  CheckCircle, 
  Navigation,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { BUSINESS_INFO, getWhatsAppUrl } from '../utils/constants';
import { tileCategories } from '../data/products';

export const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('Floor Tiles');
  const [interestedProduct, setInterestedProduct] = useState('');
  const [projectType, setProjectType] = useState('Residential Bunglow');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = 'Full Name is required';
    if (!phoneNumber.trim()) {
      errs.phoneNumber = 'Phone Number is required';
    } else if (!/^[6-9]\d{9}$/.test(phoneNumber.replace(/\D/g, '').slice(-10))) {
      errs.phoneNumber = 'Enter a valid 10-digit Indian phone number';
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!message.trim()) {
      errs.message = 'Please provide details about your project or requirement';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleWhatsAppForward = () => {
    const text = `*New Website Enquiry - Marathwada Tiles*\n\nName: ${fullName}\nPhone: ${phoneNumber}\nEmail: ${email || 'Not provided'}\nCategory: ${category}\nInterested In: ${interestedProduct || 'General Enquiry'}\nProject: ${projectType}\nMessage: ${message}`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <div style={{ backgroundColor: 'var(--color-warm-ivory)', minHeight: '80vh', paddingBottom: 80 }}>
      {/* Contact Hero with Clearly Readable Text */}
      <section style={{
        position: 'relative',
        backgroundColor: '#1c1e19',
        color: 'var(--color-white)',
        padding: 'clamp(64px, 8vw, 96px) 0',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.85
        }} />

        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(20,22,18,0.88) 0%, rgba(20,22,18,0.6) 50%, rgba(20,22,18,0.2) 100%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'left' }}>
          <div style={{ maxWidth: 720 }}>
            <span className="section-eyebrow" style={{ color: 'var(--color-sand)', textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>
              Get in Touch
            </span>
            <h1 style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
              color: 'var(--color-white)',
              lineHeight: 1.15,
              marginBottom: 16,
              textShadow: '0 2px 14px rgba(0,0,0,0.5)'
            }}>
              Contact Marathwada Tiles
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
              color: 'rgba(255, 255, 255, 0.95)',
              lineHeight: 1.6,
              marginBottom: 28,
              textShadow: '0 1px 6px rgba(0,0,0,0.5)'
            }}>
              Whether you are an architect specifying large-format slabs, an interior designer seeking fluted wall concepts, or a homeowner planning a new build in Aurangabad, we are here to assist.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <WhatsAppIcon size={18} color="#FFFFFF" />
                <span>Chat with Aaman Lakhani</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="btn btn-outline-white"
              >
                <Phone size={16} />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2-Column Desktop Layout */}
      <div className="container" style={{ paddingTop: 44 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 40,
          alignItems: 'start'
        }}>
          {/* Column 1: Contact Details & Location Card */}
          <div style={{
            backgroundColor: 'var(--color-white)',
            borderRadius: '12px',
            border: '1px solid var(--color-border-light)',
            padding: 'clamp(24px, 4vw, 40px)',
            textAlign: 'left'
          }}>
            <span className="section-eyebrow">Verified Showroom Information</span>
            <h2 style={{ fontSize: '1.85rem', marginBottom: 20 }}>Showroom & Direct Contact</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 32 }}>
              {/* Business & Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: '6px',
                  backgroundColor: 'var(--color-warm-ivory)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-terracotta)',
                  flexShrink: 0
                }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-deep-charcoal)' }}>
                    {BUSINESS_INFO.name}
                  </div>
                  <div style={{ color: 'var(--color-text-body)', fontSize: '0.9375rem', marginTop: 4, lineHeight: 1.5 }}>
                    {BUSINESS_INFO.address.full}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-olive)', marginTop: 4, fontWeight: 600 }}>
                    Landmark: {BUSINESS_INFO.address.landmark}
                  </div>
                </div>
              </div>

              {/* Phone & Contact Person */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: '6px',
                  backgroundColor: 'var(--color-warm-ivory)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-olive)',
                  flexShrink: 0
                }}>
                  <Phone size={22} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-deep-charcoal)' }}>
                    Direct Telephone Line
                  </div>
                  <div style={{ marginTop: 4 }}>
                    <a 
                      href={`tel:${BUSINESS_INFO.phoneTel}`}
                      style={{ fontSize: '1.05rem', color: 'var(--color-terracotta)', fontWeight: 700 }}
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-body)', marginTop: 2 }}>
                    Contact Person: <strong>{BUSINESS_INFO.contactPerson}</strong>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Chat */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: '6px',
                  backgroundColor: 'rgba(37, 211, 102, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#25D366',
                  flexShrink: 0
                }}>
                  <WhatsAppIcon size={24} color="#25D366" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-deep-charcoal)' }}>
                    WhatsApp Inquiries
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', marginTop: 4 }}>
                    Fastest way to send floor plans, photo references, or tile quantity inquiries.
                  </div>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm"
                    style={{ marginTop: 10 }}
                  >
                    <WhatsAppIcon size={16} color="#FFFFFF" /> Open WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>

            {/* Directions Link */}
            <div style={{
              paddingTop: 24,
              borderTop: '1px solid var(--color-border-light)',
              display: 'flex',
              flexDirection: 'column',
              gap: 12
            }}>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <Navigation size={16} /> Open in Google Maps Directions
              </a>
            </div>
          </div>

          {/* Column 2: Validated Enquiry Form */}
          <div style={{
            backgroundColor: 'var(--color-white)',
            borderRadius: '12px',
            border: '1px solid var(--color-border-light)',
            padding: 'clamp(24px, 4vw, 40px)',
            textAlign: 'left'
          }}>
            {!isSuccess ? (
              <div>
                <span className="section-eyebrow">Project Enquiry Form</span>
                <h2 style={{ fontSize: '1.85rem', marginBottom: 8 }}>Send an Enquiry</h2>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', marginBottom: 24 }}>
                  Fill in your details and requirements. We review project requests promptly and arrange tile samples.
                </p>

                <form onSubmit={handleSubmit} noValidate>
                  {/* Full Name */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                      placeholder="e.g. Anand Deshmukh"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    {errors.fullName && <div className="form-error">{errors.fullName}</div>}
                  </div>

                  {/* Phone & Email Row */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="phoneNumber">
                        Phone Number <span className="required">*</span>
                      </label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                        placeholder="e.g. 98220 12345"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                      {errors.phoneNumber && <div className="form-error">{errors.phoneNumber}</div>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="email">
                        Email Address (Optional)
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="anand@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && <div className="form-error">{errors.email}</div>}
                    </div>
                  </div>

                  {/* Category & Project Type Row */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="category">
                        Product Category
                      </label>
                      <select
                        id="category"
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
                      <label className="form-label" htmlFor="projectType">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        className="form-control"
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                      >
                        <option value="Residential Bunglow">Residential Bunglow</option>
                        <option value="Apartment Renovation">Apartment Renovation</option>
                        <option value="Commercial / Retail Build">Commercial / Retail Build</option>
                        <option value="Architectural Project">Architectural Project</option>
                        <option value="Bathroom / Kitchen Only">Bathroom / Kitchen Only</option>
                      </select>
                    </div>
                  </div>

                  {/* Interested Product */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="interestedProduct">
                      Specific Tile or Size of Interest (Optional)
                    </label>
                    <input
                      id="interestedProduct"
                      type="text"
                      className="form-control"
                      placeholder="e.g. Statuario Oro 1200x1800mm or Fluted Bathroom Tile"
                      value={interestedProduct}
                      onChange={(e) => setInterestedProduct(e.target.value)}
                    />
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">
                      Project Details / Message <span className="required">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                      placeholder="Share your estimated area (in square feet or square meters), timeline, or specific look you desire..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    {errors.message && <div className="form-error">{errors.message}</div>}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={isSubmitting}
                    style={{ width: '100%', marginTop: 8 }}
                  >
                    <Send size={18} />
                    <span>{isSubmitting ? 'Sending Request...' : 'Submit Enquiry'}</span>
                  </button>
                </form>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '32px 16px' }}>
                <CheckCircle size={60} color="var(--color-olive)" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '1.85rem', marginBottom: 12 }}>Enquiry Successfully Recorded</h3>
                <p style={{ color: 'var(--color-text-body)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: 24 }}>
                  Thank you, <strong>{fullName}</strong>. Your enquiry has been received for Marathwada Tiles. Aaman Lakhani will review your requirements and reach out to you at <strong>{phoneNumber}</strong>.
                </p>

                <div style={{
                  backgroundColor: 'var(--color-warm-ivory)',
                  border: '1px solid var(--color-border-light)',
                  padding: 20,
                  borderRadius: '8px',
                  marginBottom: 24,
                  textAlign: 'left'
                }}>
                  <div style={{ fontWeight: 600, color: 'var(--color-deep-charcoal)', marginBottom: 6 }}>
                    Direct WhatsApp Dispatch:
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-body)', marginBottom: 14 }}>
                    To instantly transmit these exact details to our showroom WhatsApp without delay, click below:
                  </div>
                  <button
                    onClick={handleWhatsAppForward}
                    className="btn btn-whatsapp"
                    style={{ width: '100%' }}
                  >
                    <WhatsAppIcon size={18} color="#FFFFFF" /> Forward to WhatsApp (+91 88882 44441)
                  </button>
                </div>

                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setMessage('');
                    setInterestedProduct('');
                  }}
                  className="btn btn-secondary btn-sm"
                >
                  Submit Another Enquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
