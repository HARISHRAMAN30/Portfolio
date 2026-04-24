'use client';
import { useEffect, useState, useRef } from 'react';

export default function Hero({ isLoaded }: { isLoaded: boolean }) {
  const [avatarVisible, setAvatarVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<boolean[]>([false, false, false, false, false]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isLoaded && !hasAnimated.current) {
      hasAnimated.current = true;
      // Avatar pops first
      setTimeout(() => setAvatarVisible(true), 200);
      // Then cascade the rest with staggered delays
      const delays = [1100, 1280, 1460, 1640, 1820];
      delays.forEach((delay, i) => {
        setTimeout(() => {
          setVisibleItems(prev => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, delay);
      });
    }
  }, [isLoaded]);

  return (
    <section className="hero section-full">
      <div className={`hero-avatar-wrapper ${avatarVisible ? 'visible' : 'hero-enter-hidden'}`}>
        <div className="hero-avatar">
          <img
            src="/avatar.jpg"
            alt="Harish Raman"
            loading="eager"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              const parent = (e.target as HTMLImageElement).parentElement;
              if (parent) {
                parent.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:3rem;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;font-weight:800;">HR</div>';
              }
            }}
          />
        </div>
        <div className="hero-avatar-ring" />
      </div>

      <div className={`hero-badge ${visibleItems[0] ? 'hero-enter-visible' : 'hero-enter-hidden'}`}>
        <span className="hero-badge-dot" />
        <span>Available for Opportunities</span>
      </div>

      <h1 className={visibleItems[1] ? 'hero-enter-visible' : 'hero-enter-hidden'}>
        Hello, I'm <span className="gradient-text">Harish Raman</span>
        <br />Backend Engineer &amp; Systems Architect
      </h1>

      <p className={`hero-sub ${visibleItems[2] ? 'hero-enter-visible' : 'hero-enter-hidden'}`}>
        Java Backend Engineer specialized in distributed systems, multi-tenant platforms, and
        real-time architectures — currently powering 72+ live client organizations at Annz Technology.
      </p>

      <div className={`hero-tags ${visibleItems[3] ? 'hero-enter-visible' : 'hero-enter-hidden'}`}>
        <span className="hero-tag">☕ Java & Spring Boot</span>
        <span className="hero-tag">🔀 Distributed Systems</span>
        <span className="hero-tag">🏗️ Multi-Tenant SaaS</span>
        <span className="hero-tag">⚡ WebSockets</span>
        <span className="hero-tag">📐 System Design</span>
      </div>

      <div className={`hero-socials ${visibleItems[4] ? 'hero-enter-visible' : 'hero-enter-hidden'}`}>
        <a href="https://www.linkedin.com/in/harishraman30/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a href="mailto:ramanharish30@gmail.com" className="social-btn" aria-label="Email">
          <svg viewBox="0 0 24 24"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
        </a>
        <a href="#projects" className="social-btn" aria-label="Projects">
          <svg viewBox="0 0 24 24"><path d="M12 2L1 7l11 5 9-4.09V17h2V7M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>
        </a>
      </div>
    </section>
  );
}
