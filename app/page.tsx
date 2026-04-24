'use client';

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Journey from '../components/Journey';
import Contact from '../components/Contact';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Overlay */}
      <div className={`page-loader ${!loading ? 'hidden' : ''}`}>
        <div className="loader-spinner" />
        <div className="loader-text">Loading</div>
      </div>

      {/* Static Background Gradients - no animation, no canvas */}
      <div className="bg-gradient" aria-hidden="true" />

      {/* Navigation */}
      <Navbar />

      {/* Page Content */}
      <Hero isLoaded={!loading} />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
      <CTABanner />
      <Footer />
    </>
  );
}
