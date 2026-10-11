import React, { useState } from 'react';
import { Phone, FileText } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_INFO, getWhatsAppUrl } from '../utils/constants';

interface FloatingWidgetsProps {
  onOpenQuote: () => void;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({ onOpenQuote }) => {
  const [showTooltip, setShowTooltip] = useState<'whatsapp' | 'call' | null>(null);

  return (
    <>
      {/* Desktop Fixed Side Enquiry Tab */}
      <button
        onClick={onOpenQuote}
        className="desktop-enquiry-tab"
        aria-label="Request a Custom Quote"
        style={{ display: 'flex', alignItems: 'center', gap: 6 }}
      >
        <FileText size={14} />
        <span>Enquire Now</span>
      </button>

      {/* Floating Action Controls (WhatsApp + Direct Call) */}
      <div className="floating-widgets-group">
        {/* Direct Call Button */}
        <div style={{ position: 'relative' }}>
          {showTooltip === 'call' && (
            <div
              style={{
                position: 'absolute',
                bottom: 12,
                right: 56,
                backgroundColor: 'var(--color-deep-charcoal)',
                color: 'var(--color-white)',
                padding: '6px 12px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.75rem',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                pointerEvents: 'none'
              }}
            >
              Call Aaman Lakhani (+91 88882 44441)
            </div>
          )}
          <a
            href={`tel:${BUSINESS_INFO.phoneTel}`}
            className="floating-call-btn"
            aria-label="Call Marathwada Tiles"
            onMouseEnter={() => setShowTooltip('call')}
            onMouseLeave={() => setShowTooltip(null)}
            style={{
              width: 46,
              height: 46,
              borderRadius: '50%',
              backgroundColor: 'var(--color-deep-charcoal)',
              color: 'var(--color-white)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(37, 37, 37, 0.3)',
              transition: 'transform var(--transition-fast), background-color var(--transition-fast)'
            }}
          >
            <Phone size={20} />
          </a>
        </div>

        {/* Official WhatsApp Floating Button */}
        <div style={{ position: 'relative' }}>
          {showTooltip === 'whatsapp' && (
            <div
              style={{
                position: 'absolute',
                bottom: 14,
                right: 62,
                backgroundColor: 'var(--color-deep-charcoal)',
                color: 'var(--color-white)',
                padding: '6px 14px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.75rem',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                pointerEvents: 'none'
              }}
            >
              Chat on WhatsApp with Aaman Lakhani
            </div>
          )}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-whatsapp"
            aria-label="Chat on WhatsApp with Marathwada Tiles"
            onMouseEnter={() => setShowTooltip('whatsapp')}
            onMouseLeave={() => setShowTooltip(null)}
            style={{
              width: 52,
              height: 52,
              borderRadius: '50%',
              backgroundColor: '#25D366',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
              transition: 'transform var(--transition-fast)'
            }}
          >
            <WhatsAppIcon size={28} color="#FFFFFF" />
          </a>
        </div>
      </div>
    </>
  );
};
