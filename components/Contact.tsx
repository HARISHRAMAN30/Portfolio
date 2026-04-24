'use client';
import { useState, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const revealRef = useScrollReveal<HTMLDivElement>();

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  }, []);

  return (
    <section id="contact">
      <div className="reveal" ref={revealRef}>
        <div className="section-label">Let's Connect</div>
        <div className="contact-grid">
          <div>
            <h2 className="section-title">Open to <span className="gradient-underline">Collaborations</span></h2>
            <p style={{ color: 'var(--text2)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Whether you have a challenging backend system to build, a distributed architecture to design, or an opportunity to discuss — I'd love to hear from you.
            </p>
            <div className="avail-badge">
              <span className="hero-badge-dot" style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', animation: 'pulse 2s infinite' }} />
              <span>Currently Available — Open to Opportunities</span>
            </div>
            <div className="contact-cards">
              <a href="https://www.linkedin.com/in/harishraman30/" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </div>
                <div>
                  <div className="contact-card-label">LinkedIn</div>
                  <div className="contact-card-value">linkedin.com/in/harishraman30</div>
                </div>
              </a>
              <a href="mailto:ramanharish30@gmail.com" className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                </div>
                <div>
                  <div className="contact-card-label">Email</div>
                  <div className="contact-card-value">ramanharish30@gmail.com</div>
                </div>
              </a>
              <div className="contact-card" style={{ cursor: 'default' }}>
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>
                </div>
                <div>
                  <div className="contact-card-label">Location</div>
                  <div className="contact-card-value">Chennai, Tamil Nadu, India</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="Collaboration / Opportunity / Other" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Tell me about your project or opportunity..." />
              </div>
              <button
                type="submit"
                className="form-submit"
                style={submitted ? { background: 'var(--gradient2)' } : {}}
              >
                {submitted ? '✓ Message Sent!' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
