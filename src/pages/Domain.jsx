/** Technologies list */
const technologies = [
  'Python', 'scikit-learn', 'TensorFlow', 'spaCy', 'NLTK', 'BERT', 'VADER',
  'XGBoost', 'Random Forest', 'SVM', 'K-Means', 'DBSCAN', 'LIME', 'SHAP',
  'React', 'Bootstrap 5', 'LTI Protocol',
];

/** 7-layer architecture */
const archLayers = [
  { num: '1', title: 'Data Integration',        desc: 'LMS data ingestion via LTI – activity logs, grades, forum posts, video interactions.' },
  { num: '2', title: 'Feature Engineering',     desc: 'Temporal feature extraction, NLP preprocessing, behavioural signal construction.' },
  { num: '3', title: 'Risk & Performance Models', desc: 'Parallel ML pipelines: SVM/RF for dropout; XGBoost/Online RF for performance.' },
  { num: '4', title: 'Visualisation Layer',     desc: 'Real-time dashboards for instructors and students with risk indicators and trends.' },
  { num: '5', title: 'Intervention Engine',     desc: 'Automated alert generation and personalised resource recommendations.' },
  { num: '6', title: 'Explainability Module',   desc: 'LIME and SHAP explanations for every prediction to ensure transparency and trust.' },
  { num: '7', title: 'LMS Integration',         desc: 'Bidirectional LTI integration; feedback loop updates models with new data streams.' },
];

/** Research gap items */
const researchGaps = [
  { icon: 'fas fa-unlink',      title: 'Behavioural-Emotional Disconnect', desc: 'Existing tools analyse activity logs but ignore sentiment and emotional signals from forums.' },
  { icon: 'fas fa-eye-slash',   title: 'Temporal Blindness',               desc: 'Static snapshots miss evolving engagement trends; predictions lack time-series context.' },
  { icon: 'fas fa-lock',        title: 'Static Models',                    desc: 'Pre-trained models degrade over time; no mechanism for online learning from new data.' },
  { icon: 'fas fa-question-circle', title: 'Lack of Explainability',       desc: 'Black-box predictions are not trusted by educators; actionable insights are absent.' },
  { icon: 'fas fa-th-large',    title: 'Inadequate Multi-Domain Assessment', desc: 'Siloed tools address single factors; no integrated framework spanning all risk dimensions.' },
];

export default function Domain() {
  return (
    <section className="section-wrapper" id="domain" style={{ background: 'var(--navy-mid)' }}>
      <div className="container">
        {/* Header */}
        <p className="section-subtitle">Research Domain</p>
        <h2 className="section-title">Domain Overview</h2>
        <div className="gold-divider" />

        {/* ── Literature Survey ── */}
        <div className="luxury-card mb-5">
          <h4 className="mb-3">
            <i className="fas fa-book-open me-2" style={{ color: 'var(--gold)' }} />
            Literature Survey
          </h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            The foundation of Edu Predict rests on a comprehensive review of the field.
            <strong style={{ color: 'var(--off-white)' }}> Macfadyen &amp; Dawson (2010)</strong> demonstrated
            that LMS interaction data—particularly discussion-post frequency and mail messages—are strong
            predictors of final grades, establishing the viability of data-driven dropout detection.
            Subsequent work introduced NLP: <strong style={{ color: 'var(--off-white)' }}>Bakliwal et al. (2022)</strong> applied
            sentiment analysis to online-course forums, showing that negative sentiment clusters precede
            disengagement.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.8rem' }}>
            Multimodal risk assessment frameworks (combining clickstream, video-watch, and assessment data)
            have shown improved precision over single-modality approaches. The explainable AI (XAI)
            imperative was formalised by <strong style={{ color: 'var(--off-white)' }}>Holstein et al.</strong>, who
            argued that educator trust requires predictions to be accompanied by human-readable rationales—a
            gap that LIME and SHAP now partially address. Despite these advances, no existing system
            unifies all dimensions (engagement, performance, sentiment, explainability) into a single
            deployable platform.
          </p>
        </div>

        {/* ── Research Gap ── */}
        <div className="mb-5">
          <h4 className="mb-4">
            <i className="fas fa-search-minus me-2" style={{ color: 'var(--gold)' }} />
            Research Gap
          </h4>
          {researchGaps.map((g, i) => (
            <div key={i} className="gap-item">
              <i className={g.icon} style={{ color: 'var(--gold)', marginTop: 3 }} />
              <div>
                <strong style={{ color: 'var(--off-white)' }}>{g.title}:</strong>{' '}
                <span style={{ color: 'var(--text-muted)', fontSize: '0.93rem' }}>{g.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Research Problem ── */}
        <div className="luxury-card mb-5">
          <h4 className="mb-3">
            <i className="fas fa-exclamation-circle me-2" style={{ color: 'var(--gold)' }} />
            Research Problem
          </h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Traditional Learning Management Systems deliver <em>static, reactive analytics</em>—dashboards
            that report what has already happened rather than predicting what will happen. Educators receive
            no early-warning signals, personalised intervention suggestions are absent, and predictive models
            are neither explainable nor continuously updated. This reactive posture means at-risk students
            are identified too late for meaningful intervention, leading to unnecessary dropouts and poor
            learning outcomes.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.8rem' }}>
            Edu Predict addresses this by building an <strong style={{ color: 'var(--gold-light)' }}>intelligent,
            proactive system</strong> that monitors student behaviour in real time, predicts outcomes weeks in
            advance, explains its reasoning, and recommends personalised interventions—all integrated
            seamlessly into existing LMS workflows.
          </p>
        </div>

        {/* ── Research Objectives ── */}
        <div className="mb-5">
          <h4 className="mb-4">
            <i className="fas fa-bullseye me-2" style={{ color: 'var(--gold)' }} />
            Research Objectives
          </h4>
          <div
            className="luxury-card mb-3"
            style={{ borderLeft: '4px solid var(--gold)', borderRadius: '0 var(--radius) var(--radius) 0' }}
          >
            <strong style={{ color: 'var(--gold-light)' }}>Main Objective:</strong>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.5rem', marginBottom: 0 }}>
              Develop an integrated machine-learning framework for real-time student performance monitoring,
              predictive analytics, and personalised support within online learning platforms.
            </p>
          </div>

          {[
            'Build four specialised AI modules (Engagement Analytics, Performance Prediction, Dropout Risk, Personalised Feedback) that operate concurrently on live LMS data.',
            'Achieve ≥ 85% prediction accuracy for both grade outcomes and dropout risk across heterogeneous student populations.',
            'Provide explainable insights using LIME and SHAP so that educators can interpret and trust every prediction.',
            'Enable a 2–3 week early-warning lead time for at-risk students, allowing timely, targeted intervention.',
          ].map((obj, i) => (
            <div key={i} className="objective-item">
              <div className="obj-num">{i + 1}</div>
              <span style={{ color: 'var(--text-muted)' }}>{obj}</span>
            </div>
          ))}
        </div>

        {/* ── Methodology ── */}
        <div className="mb-5">
          <h4 className="mb-4">
            <i className="fas fa-cogs me-2" style={{ color: 'var(--gold)' }} />
            Methodology – 7-Layer Architecture
          </h4>
          <div className="row g-3">
            {archLayers.map((layer) => (
              <div key={layer.num} className="col-md-6">
                <div className="arch-layer">
                  <div className="arch-layer-num">{layer.num}</div>
                  <div>
                    <strong style={{ color: 'var(--off-white)', display: 'block', fontSize: '0.93rem' }}>
                      {layer.title}
                    </strong>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{layer.desc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Technologies ── */}
        <div>
          <h4 className="mb-4">
            <i className="fas fa-microchip me-2" style={{ color: 'var(--gold)' }} />
            Technologies Used
          </h4>
          <div>
            {technologies.map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
