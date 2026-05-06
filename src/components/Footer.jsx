/** Smooth-scroll helper shared by Footer links */
const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
};

const footerLinks = [
  { id: 'home',       label: 'Home' },
  { id: 'domain',     label: 'Domain' },
  { id: 'milestones', label: 'Milestones' },
  { id: 'documents',  label: 'Documents' },
  { id: 'slides',     label: 'Slides' },
  { id: 'about',      label: 'About Us' },
  { id: 'contact',    label: 'Contact Us' },
];

export default function Footer() {
  return (
    <footer className="ep-footer">
      <div className="container">
        {/* Top row */}
        <div className="row align-items-center mb-3">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="footer-brand">Edu<span>Predict</span></div>
            <p className="mt-1 mb-0" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              AI-Driven Student Performance Monitoring &amp; Prediction System
            </p>
          </div>
          <div className="col-md-4 text-md-center mb-3 mb-md-0">
            <div className="footer-links">
              {footerLinks.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="border-0 bg-transparent"
                  style={{ color: 'var(--text-muted)', margin: '0 0.5rem', fontSize: '0.83rem', cursor: 'pointer', transition: 'color 0.3s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="col-md-4 text-md-end">
            <p className="mb-0" style={{ fontSize: '0.8rem' }}>
              <i className="fas fa-envelope me-1" style={{ color: 'var(--gold)' }} />
              edupredict@research.lk
            </p>
            <p className="mt-1 mb-0" style={{ fontSize: '0.8rem' }}>
              <i className="fas fa-university me-1" style={{ color: 'var(--gold)' }} />
              SLIIT – Sri Lanka Institute of IT
            </p>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Bottom row */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <span>© 2025 Edu Predict Research Group – SLIIT. All rights reserved.</span>
          <span>
            Project ID:&nbsp;
            <span style={{ color: 'var(--gold)', fontWeight: 600 }}>25-26J-236</span>
            &nbsp;| Research Group:&nbsp;
            <span style={{ color: 'var(--gold)', fontWeight: 600 }}>AIMS</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
