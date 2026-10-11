import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  wavePosition?: 'center' | 'left' | 'right';
  style?: React.CSSProperties;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  stagger,
  delay,
  direction: _direction = 'up',
  wavePosition,
  style = {}
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check if IntersectionObserver is available
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once revealed, keep visible permanently without jitter or resetting
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -25px 0px'
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Compute staggered delay based on wave sequence: Center (0ms) -> Left (110ms) -> Right (210ms)
  let computedDelay = delay;
  if (wavePosition && computedDelay === undefined) {
    if (wavePosition === 'center') {
      computedDelay = 0;
    } else if (wavePosition === 'left') {
      computedDelay = 110;
    } else if (wavePosition === 'right') {
      computedDelay = 210;
    }
  }

  const staggerClass = stagger ? `scroll-stagger-${Math.min(stagger, 6)}` : '';
  const waveClass = wavePosition ? `scroll-wave-card wave-${wavePosition}` : '';

  const combinedStyle: React.CSSProperties = {
    ...style,
    ...(computedDelay !== undefined ? { transitionDelay: `${computedDelay}ms` } : {})
  };

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${waveClass} ${isVisible ? 'is-visible' : ''} ${staggerClass} ${className}`.trim()}
      style={combinedStyle}
    >
      {children}
    </div>
  );
};
