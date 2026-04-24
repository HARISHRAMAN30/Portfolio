'use client';
import { useEffect, useState, useCallback, memo } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Active section tracking
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      sections.forEach((s) => {
        const el = s as HTMLElement;
        if (scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
          setActiveSection(el.id);
        }
      });
    };

    // Throttle scroll handler
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  const closeMenu = useCallback(() => setIsOpen(false), []);
  const toggleTheme = useCallback(() => setIsDark(prev => !prev), []);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#journey', label: 'Journey' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav id="navbar">
      <div className="nav-logo">Harish Raman</div>
      
      <ul className={`nav-center ${isOpen ? 'open' : ''}`} id="nav-menu">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={activeSection === href.slice(1) ? 'active' : ''}
              onClick={closeMenu}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <button
          className="dark-toggle"
          id="dark-toggle"
          aria-label="Toggle theme"
          onClick={toggleTheme}
        >
          {isDark ? '☀️' : '🌙'}
        </button>
        <a
          href="https://www.linkedin.com/in/harishraman30/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          Connect
        </a>
        <button
          className={`hamburger ${isOpen ? 'open' : ''}`}
          id="hamburger"
          onClick={() => setIsOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}

export default memo(Navbar);
