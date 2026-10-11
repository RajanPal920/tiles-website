import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/constants';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'var(--color-warm-ivory)', minHeight: '80vh', paddingBottom: 80 }}>
      <div style={{ backgroundColor: 'var(--color-white)', borderBottom: '1px solid var(--color-border-light)' }}>
        <div className="container">
          <nav className="breadcrumb-nav">
            <ol className="breadcrumb-list">
              <li><Link to="/">Home</Link></li>
              <li className="breadcrumb-separator"><ChevronRight size={12} /></li>
              <li style={{ color: 'var(--color-deep-charcoal)', fontWeight: 600 }}>Privacy Policy</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-narrow" style={{ paddingTop: 40, textAlign: 'left' }}>
        <div style={{
          backgroundColor: 'var(--color-white)',
          padding: 'clamp(28px, 5vw, 56px)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border-light)'
        }}>
          <h1 style={{ fontSize: '2.4rem', marginBottom: 16 }}>Privacy Policy</h1>
          <p style={{ color: 'var(--color-text-body)', marginBottom: 28 }}>
            Effective Date: October 2026 &bull; {BUSINESS_INFO.name}, Aurangabad, Maharashtra
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--color-text-body)' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-deep-charcoal)', marginTop: 8 }}>1. Information We Collect</h3>
            <p>
              When you submit an enquiry, request a quotation, or contact us through WhatsApp or phone, Marathwada Tiles collects personal information including your full name, phone number, optional email address, and project requirements.
            </p>

            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-deep-charcoal)', marginTop: 8 }}>2. How We Use Your Information</h3>
            <p>
              The information you provide is used strictly to respond to your product inquiries, provide tile quotations, calculate required quantities, and coordinate showroom visits. We do not sell, rent, or trade your contact information to third-party advertisers.
            </p>

            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-deep-charcoal)', marginTop: 8 }}>3. Communications & WhatsApp</h3>
            <p>
              If you communicate with us via WhatsApp or telephone, your communications are subject to your provider's terms. We only use your phone number to discuss your specific tile order, quotation, or project inquiry.
            </p>

            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-deep-charcoal)', marginTop: 8 }}>4. Contact Us Regarding Your Data</h3>
            <p>
              If you have any questions about this privacy policy, you may reach out directly to Aaman Lakhani at {BUSINESS_INFO.phoneDisplay} or visit our showroom at {BUSINESS_INFO.address.full}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TermsPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'var(--color-warm-ivory)', minHeight: '80vh', paddingBottom: 80 }}>
      <div style={{ backgroundColor: 'var(--color-white)', borderBottom: '1px solid var(--color-border-light)' }}>
        <div className="container">
          <nav className="breadcrumb-nav">
            <ol className="breadcrumb-list">
              <li><Link to="/">Home</Link></li>
              <li className="breadcrumb-separator"><ChevronRight size={12} /></li>
              <li style={{ color: 'var(--color-deep-charcoal)', fontWeight: 600 }}>Terms & Conditions</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-narrow" style={{ paddingTop: 40, textAlign: 'left' }}>
        <div style={{
          backgroundColor: 'var(--color-white)',
          padding: 'clamp(28px, 5vw, 56px)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border-light)'
        }}>
          <h1 style={{ fontSize: '2.4rem', marginBottom: 16 }}>Terms & Conditions</h1>
          <p style={{ color: 'var(--color-text-body)', marginBottom: 28 }}>
            Effective Date: October 2026 &bull; {BUSINESS_INFO.name}, Aurangabad, Maharashtra
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--color-text-body)' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-deep-charcoal)', marginTop: 8 }}>1. Product Representations & Digital Displays</h3>
            <p>
              Tile colors, veining patterns, and surface finishes displayed on this website are digital representations. Ceramic and vitrified tiles are natural mineral products subject to slight shade and caliber variations across manufacturing batches. We strongly encourage inspecting physical showroom samples in Aurangabad prior to final installation.
            </p>

            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-deep-charcoal)', marginTop: 8 }}>2. Quotations & Pricing</h3>
            <p>
              Quotations provided through enquiry forms, telephone calls, or WhatsApp messages are estimates based on client-provided square footage and current stock availability. Final billing is confirmed based on actual box quantities and applicable taxes.
            </p>

            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-deep-charcoal)', marginTop: 8 }}>3. Inspection Prior to Laying</h3>
            <p>
              It is the purchaser's and mason's responsibility to inspect tiles for shade, size, and quantity before setting them in adhesive. No claims can be accepted once tiles are installed on mortar or adhesive.
            </p>

            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-deep-charcoal)', marginTop: 8 }}>4. Governing Law</h3>
            <p>
              Any disputes or transactions relating to Marathwada Tiles are governed by the laws of India and subject to the exclusive jurisdiction of the courts in Aurangabad, Maharashtra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
