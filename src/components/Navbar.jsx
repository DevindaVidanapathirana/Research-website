import { useState, useEffect, useCallback } from 'react';

const navLinks = [
  { id: 'home',       label: 'Home' },
  { id: 'domain',     label: 'Domain' },
  { id: 'milestones', label: 'Milestones' },
  { id: 'documents',  label: 'Documents' },
  { id: 'slides',     label: 'Slides' },
  { id: 'about',      label: 'About Us' },
  { id: 'contact',    label: 'Contact Us' },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [expanded,  setExpanded]  = useState(false);
  const [activeId,  setActiveId]  = useState('home');

  /* ── Scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── IntersectionObserver → highlight active section ── */
  useEffect(() => {
    const observers = [];
    const threshold = 0.35; // section must be ≥35% visible

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { threshold, rootMargin: '-80px 0px 0px 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  /* ── Smooth-scroll helper ── */
  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 72; // navbar height
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
    setExpanded(false);
  }, []);

  return (
    <nav className={`ep-navbar navbar navbar-expand-lg${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        {/* Brand */}
        <button
          className="navbar-brand border-0 bg-transparent"
          style={{ cursor: 'pointer' }}
          onClick={() => scrollTo('home')}
          aria-label="Go to top"
        >
          Edu<span>Predict</span>
        </button>

        {/* Mobile toggler */}
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={expanded}
          onClick={() => setExpanded(prev => !prev)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Links */}
        <div className={`collapse navbar-collapse${expanded ? ' show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            {navLinks.map(({ id, label }) => (
              <li key={id} className="nav-item">
                <button
                  className={`nav-link border-0 bg-transparent${activeId === id ? ' active' : ''}`}
                  onClick={() => scrollTo(id)}
                  aria-current={activeId === id ? 'true' : undefined}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
