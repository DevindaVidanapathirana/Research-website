/**
 * About Us Page – Research Team & Supervisors with real photos and emails
 */

const members = [
  {
    name: 'Wijekoon I S',
    regNo: 'IT22089854',
    role: 'Dropout Risk Assessment',
    roleDetail: 'NLP-based sentiment analysis, SVM & Random Forest classification for student dropout prediction.',
    email: 'imaiwijekoon8@gmail.com',
    photo: '/Wijekoon.jpeg',
  },
  {
    name: 'Udayakumara I G I M',
    regNo: 'IT22623836',
    role: 'Personalised Feedback & Recommender',
    roleDetail: 'VARK-aware hybrid recommender system delivering adaptive learning resources with LIME/SHAP explanations.',
    email: 'imeshmihiranga755@gmail.com',
    photo: '/Udayakumara.jpeg',
  },
  {
    name: 'Sithumi K.T.G.S.',
    regNo: 'IT22903006',
    role: 'Engagement Analytics',
    roleDetail: 'K-Means & DBSCAN clustering for real-time student engagement scoring across LMS activities.',
    email: 'sskariyawasam2002@gmail.com',
    photo: '/Sithumi.jpeg',
  },
  {
    name: 'Vidanapathirana K D',
    regNo: 'IT22312280',
    role: 'Performance Prediction',
    roleDetail: 'XGBoost & Online Random Forest models for grade forecasting with SHAP-based explainability.',
    email: 'devinda.vidanapathirana@gmail.com',
    photo: '/Vidanapathirana.jpeg',
  },
];

const supervisors = [
  {
    name: 'Mr. Deemantha Siriwardana',
    role: 'Supervisor',
    email: 'deemantha.s@sliit.lk',
    photo: '/Deemantha.jpeg',
  },
  {
    name: 'Mr. Indunil Daluwatte',
    role: 'Co-Supervisor',
    email: 'indunil.d@sliit.lk',
    photo: '/Indunil.jpeg',
  },
];

export default function AboutUs() {
  return (
    <section className="section-wrapper" id="about" style={{ background: 'var(--navy)' }}>
      <div className="container">
        <p className="section-subtitle">The Team</p>
        <h2 className="section-title">About Us</h2>
        <div className="gold-divider" />

        {/* Research group banner */}
        <div
          className="mb-5 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(197,160,89,0.08), rgba(197,160,89,0.03))',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
          }}
        >
          <i className="fas fa-university mb-2" style={{ color: 'var(--gold)', fontSize: '2rem' }} />
          <h5 style={{ color: 'var(--white)' }}>AIMS – Autonomous Intelligent Machines and Systems</h5>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: 600, margin: '0.5rem auto 0' }}>
            Sri Lanka Institute of Information Technology (SLIIT) · Specialisation: Information Technology
            · Project ID: 25-26J-236
          </p>
        </div>

        {/* Team members */}
        <h5 className="mb-4" style={{ color: 'var(--gold)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.82rem' }}>
          <i className="fas fa-users me-2" />Research Team
        </h5>

        <div className="row g-4 mb-5">
          {members.map((m, i) => (
            <div key={i} className="col-sm-6 col-xl-3">
              <div className="team-card h-100">
                {/* Avatar */}
                <div className="team-avatar">
                  <img
                    src={m.photo}
                    alt={m.name}
                    style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                  />
                </div>

                <div className="team-name">{m.name}</div>
                <div className="team-reg">{m.regNo}</div>

                <div
                  className="mb-2 d-inline-block"
                  style={{
                    background: 'rgba(197,160,89,0.1)',
                    border: '1px solid rgba(197,160,89,0.3)',
                    borderRadius: '50px',
                    padding: '0.25rem 0.8rem',
                    fontSize: '0.75rem',
                    color: 'var(--gold-light)',
                    fontWeight: 600,
                  }}
                >
                  {m.role}
                </div>

                <p className="team-role">{m.roleDetail}</p>

                <a href={`mailto:${m.email}`} className="team-email">
                  <i className="fas fa-envelope me-1" />
                  {m.email}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Supervisors */}
        <h5 className="mb-4" style={{ color: 'var(--gold)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.82rem' }}>
          <i className="fas fa-chalkboard-teacher me-2" />Supervisors
        </h5>
        <div className="row g-3">
          {supervisors.map((sup, i) => (
            <div key={i} className="col-md-6">
              <div className="supervisor-card">
                <div
                  className="supervisor-icon"
                  style={{ overflow: 'hidden', padding: 0 }}
                >
                  <img
                    src={sup.photo}
                    alt={sup.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                  />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--white)', marginBottom: '0.2rem' }}>{sup.name}</div>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--gold)',
                      fontWeight: 600,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      marginBottom: '0.3rem',
                    }}
                  >
                    {sup.role}
                  </div>
                  <a href={`mailto:${sup.email}`} style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    <i className="fas fa-envelope me-1" />{sup.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
