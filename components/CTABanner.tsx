'use client';
import { memo } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

function CTABanner() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div className="cta-banner reveal" ref={revealRef}>
      <h3>Ready to Build Something Amazing?</h3>
      <p>Let's combine our expertise to create intelligent solutions that make a real difference. Every great project starts with a conversation.</p>
      <div className="cta-actions">
        <a href="mailto:harishraman30@gmail.com" className="cta-btn cta-btn-white">Start a Conversation</a>
        <a href="https://www.linkedin.com/in/harishraman30/" target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn-outline">Connect on LinkedIn</a>
      </div>
    </div>
  );
}

export default memo(CTABanner);
