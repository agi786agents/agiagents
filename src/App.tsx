import React from 'react';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { ScrollProgress } from './components/ScrollProgress';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <ScrollProgress />
        <Routes>
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/" element={
            <>
              <Hero />
              <Benefits />
              <Services />
              <Testimonials />
              <CTA />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;