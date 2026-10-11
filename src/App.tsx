import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';
import { QuoteModal } from './components/QuoteModal';
import { SearchModal } from './components/SearchModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CataloguesPage } from './pages/CataloguesPage';
import { BlogAndResourcesPage } from './pages/BlogAndResourcesPage';
import { ResourceDetailPage } from './pages/ResourceDetailPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ContactPage } from './pages/ContactPage';
import { VisitUsPage } from './pages/VisitUsPage';
import { PrivacyPolicyPage, TermsPage } from './pages/LegalPages';

// Scroll to top helper on route change (skips when URL contains anchor hash)
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Global Ctrl+K / Cmd+K search listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenQuote = (productName?: string) => {
    setSelectedProductForQuote(productName || '');
    setIsQuoteOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Responsive Header with Mega Menu & Utility Bar */}
        <Header 
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* Main Content Router */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage onOpenQuote={handleOpenQuote} />} />
            <Route path="/about" element={<AboutPage onOpenQuote={() => handleOpenQuote()} />} />
            <Route path="/products" element={<ProductsPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/products/:id" element={<ProductDetailPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/catalogues" element={<CataloguesPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/resources" element={<BlogAndResourcesPage onOpenQuote={() => handleOpenQuote()} />} />
            <Route path="/resources/:slug" element={<ResourceDetailPage onOpenQuote={() => handleOpenQuote()} />} />
            <Route path="/blog" element={<BlogAndResourcesPage onOpenQuote={() => handleOpenQuote()} />} />
            <Route path="/blog/:slug" element={<BlogDetailPage onOpenQuote={() => handleOpenQuote()} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/visit-us" element={<VisitUsPage onOpenQuote={() => handleOpenQuote()} />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route 
              path="*" 
              element={
                <div className="section-padding bg-ivory" style={{ textAlign: 'center', minHeight: '60vh' }}>
                  <div className="container-narrow">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: 16 }}>Page Not Found</h2>
                    <p style={{ color: 'var(--color-text-body)', marginBottom: 28 }}>
                      The surface or resource you are looking for does not exist or has been relocated.
                    </p>
                    <a href="/" className="btn btn-primary">Return to Homepage</a>
                  </div>
                </div>
              } 
            />
          </Routes>
        </main>

        {/* Global Deep-Charcoal Footer */}
        <Footer />

        {/* Floating WhatsApp and Desktop Enquiry Tab */}
        <FloatingWidgets onOpenQuote={() => handleOpenQuote()} />

        {/* Global Modals */}
        <QuoteModal
          isOpen={isQuoteOpen}
          onClose={() => setIsQuoteOpen(false)}
          initialProduct={selectedProductForQuote}
        />

        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
