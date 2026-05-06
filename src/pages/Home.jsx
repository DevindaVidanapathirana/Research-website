const modules = [
  {
    icon: 'fas fa-chart-line',
    title: 'Engagement Analytics',
    desc: 'K-Means and DBSCAN clustering algorithms deliver real-time engagement scoring across discussion forums, video interactions, and assignment submissions.',
  },
  {
    icon: 'fas fa-brain',
    title: 'Performance Prediction',
    desc: 'XGBoost and Online Random Forest models forecast final grades with ≥85% accuracy, powered by SHAP explainability for transparent insights.',
  },
  {
    icon: 'fas fa-exclamation-triangle',
    title: 'Dropout Risk Assessment',
    desc: 'SVM and Random Forest classifiers combined with BERT sentiment analysis identify at-risk students 2–3 weeks before critical drop-off points.',
  },
  {
    icon: 'fas fa-lightbulb',
    title: 'Personalised Feedback & Recommendations',
    desc: 'VARK-aware hybrid recommender system delivers adaptive learning resources and personalised feedback using LIME/SHAP explanations.',
  },
];

const stats = [
  { num: '≥85%',     label: 'Prediction Accuracy' },
  { num: '2-3wk',    label: 'Early Warning Lead' },
  { num: '4',        label: 'AI Modules' },
  { num: 'Live',     label: 'Real-time Analytics' },
];

export default function Home() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };

  return (
    <section id="home">
      {/* ── Hero ── */}
      <div className="hero-section">
        <div className="container">
          <div className="row align-items-center gy-5">
            {/* Left */}
            <div className="col-lg-6">
              <div className="hero-badge fade-in-up">
                <i className="fas fa-flask me-2" />
                Research Project · 25-26J-236
              </div>

              <h1 className="hero-title fade-in-up delay-1">
                Edu<span className="gold">Predict</span><br />
                AI-Driven Student<br />Performance System
              </h1>

              <p className="hero-tagline fade-in-up delay-2">
                "Real-time AI insights for student success – from engagement to retention."
              </p>

              <p className="hero-desc fade-in-up delay-2">
                Edu Predict bridges the critical gap in traditional Learning Management Systems by
                providing proactive, real-time monitoring of student behaviour, accurate dropout
                prediction, performance forecasting, and personalised learning recommendations—
                empowering educators to intervene early and improving outcomes at scale.
              </p>

              <div className="hero-stats fade-in-up delay-3">
                {stats.map(s => (
                  <div key={s.label} className="hero-stat">
                    <div className="stat-num">{s.num}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="d-flex gap-3 flex-wrap fade-in-up delay-4">
                <button className="btn btn-gold" onClick={() => scrollTo('domain')}>
                  <i className="fas fa-arrow-right me-2" />Learn More
                </button>
                <button className="btn btn-outline-gold" onClick={() => scrollTo('documents')}>
                  <i className="fas fa-file-pdf me-2" />View Documents
                </button>
              </div>
            </div>

            {/* Right – system architecture diagram */}
            <div className="col-lg-6 fade-in-up delay-3">
              <div style={{
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                boxShadow: '0 8px 40px rgba(197,160,89,0.15)',
              }}>
                <img
                  src="/Images/system.jpeg"
                  alt="Edu-Predict System Architecture Diagram"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Module Cards ── */}
      <div style={{ background: 'var(--navy-mid)', padding: '80px 0' }}>
        <div className="container">
          <p className="section-subtitle text-center">Core AI Modules</p>
          <h2 className="section-title text-center">Four Intelligent Components</h2>
          <div className="gold-divider center" />
          <div className="row g-4">
            {modules.map((m, i) => (
              <div key={i} className="col-sm-6 col-xl-3">
                <div className="luxury-card h-100">
                  <i className={`${m.icon} module-icon`} />
                  <h5 style={{ color: 'var(--white)', marginBottom: '0.6rem' }}>{m.title}</h5>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: 0 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Project Info Banner ── */}
      <div style={{ background: 'var(--navy)', padding: '60px 0' }}>
        <div className="container">
          <div className="row g-4 justify-content-center text-center">
            {[
              { icon: 'fas fa-university', label: 'Institution',     val: 'SLIIT' },
              { icon: 'fas fa-robot',      label: 'Research Group',  val: 'AIMS' },
              { icon: 'fas fa-code',       label: 'Specialisation',  val: 'Information Technology' },
              { icon: 'fas fa-hashtag',    label: 'Project ID',      val: '25-26J-236' },
            ].map((item, i) => (
              <div key={i} className="col-6 col-md-3">
                <div style={{
                  background: 'rgba(197,160,89,0.05)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)', padding: '1.5rem 1rem',
                }}>
                  <i className={`${item.icon} mb-2`} style={{ color: 'var(--gold)', fontSize: '1.4rem' }} />
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{item.label}</div>
                  <div style={{ fontWeight: 700, color: 'var(--white)', fontSize: '0.95rem' }}>{item.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
