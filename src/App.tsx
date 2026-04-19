import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ChatWidget from './components/ChatWidget';

// Lazy load pages for performance
const HomePage = lazy(() => import('./pages/HomePage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const HIPAA = lazy(() => import('./pages/HIPAA'));

// Loading fallback component
const PageLoader = () => (
  <div style={{ 
    height: '100vh', 
    width: '100vw', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'var(--background)'
  }}>
    <div className="loader"></div>
  </div>
);

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/:id" element={<ServiceDetailPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/hipaa" element={<HIPAA />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}

export default App;
