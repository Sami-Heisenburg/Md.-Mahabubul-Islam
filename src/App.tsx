import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ScrollIndicator } from './components/ScrollIndicator';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Services } from './pages/Services';
import { WebDev } from './pages/WebDev';
import { FacebookAds } from './pages/FacebookAds';
import { Projects } from './pages/Projects';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';

import { ThemeProvider } from './context/ThemeContext';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <CustomCursor />
        <ScrollIndicator />
        <Header />
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web-development" element={<WebDev />} />
            <Route path="/services/digital-marketing" element={<WebDev />} />
            <Route path="/services/facebook-ads" element={<FacebookAds />} />
            <Route path="/services/saas-products" element={<WebDev />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
