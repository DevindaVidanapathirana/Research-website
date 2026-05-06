/**
 * Slides Page – Past Presentations linked to Google Drive
 */
const presentations = [
  {
    icon: 'fas fa-file-powerpoint',
    name: 'Progress Presentation 1',
    date: 'Dec 2025',
    desc: 'Mid-project progress update covering Engagement Analytics and early Performance Prediction results.',
    href: 'https://drive.google.com/file/d/1Cxs3saEorET8Z4Q8X9Z4_rGdPzQAlSo6/view?usp=sharing',
    disabled: false,
  },
  {
    icon: 'fas fa-file-powerpoint',
    name: 'Progress Presentation 2',
    date: 'Feb 2026',
    desc: 'Advanced progress update: Dropout Risk module results, Personalised Feedback prototype, and integrated testing.',
    href: 'https://drive.google.com/file/d/1mNFM8LaE7iHwAUfk4EmKU3ZtY7lG39Lc/view?usp=sharing',
    disabled: false,
  },
  {
    icon: 'fas fa-file-powerpoint',
    name: 'Final Presentation',
    date: 'Apr 2026',
    desc: 'Final project presentation with complete system demonstration and research findings.',
    href: 'https://docs.google.com/presentation/d/1rzyWmw_5V-Y-YLTnwQACMS5eERdStCeu/edit?usp=sharing&ouid=110555045093752228932&rtpof=true&sd=true',
    disabled: false,
  },
];

export default function Slides() {
  return (
    <section className="section-wrapper" id="slides" style={{ background: 'var(--navy-mid)' }}>
      <div className="container">
        <p className="section-subtitle">Past Presentations</p>
        <h2 className="section-title">Presentation Slides</h2>
        <div className="gold-divider" />

        {/* Notice */}
        <div
          className="mb-4 d-flex align-items-center gap-3"
          style={{
            background: 'rgba(197,160,89,0.07)',
            border: '1px solid rgba(197,160,89,0.3)',
            borderRadius: 'var(--radius)',
            padding: '1rem 1.4rem',
          }}
        >
          <i className="fas fa-info-circle" style={{ color: 'var(--gold)', fontSize: '1.2rem' }} />
          <p className="mb-0" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Slide decks are shared via Google Drive. Click <strong style={{ color: 'var(--off-white)' }}>Open Slides</strong> to view each presentation.
          </p>
        </div>

        <div className="row g-4">
          {presentations.map((pres, i) => (
            <div key={i} className="col-md-4">
              <div className="luxury-card h-100 d-flex flex-column">
                {/* Header */}
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div
                    style={{
                      width: 50, height: 50, borderRadius: 'var(--radius)',
                      background: 'rgba(197,160,89,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.4rem',
                      color: 'var(--gold)',
                      flexShrink: 0,
                    }}
                  >
                    <i className={pres.icon} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--white)', fontSize: '0.97rem' }}>{pres.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--gold)', fontWeight: 600 }}>
                      <i className="fas fa-calendar-alt me-1" />{pres.date}
                    </div>
                  </div>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.87rem', flexGrow: 1 }}>{pres.desc}</p>

                {/* Action */}
                <a
                  href={pres.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold btn-sm mt-2 align-self-start"
                >
                  <i className="fas fa-external-link-alt me-1" />
                  Open Slides
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
