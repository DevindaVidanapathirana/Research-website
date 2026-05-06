const milestones = [
  { date: '15 Jan 2025', label: 'Topic Approval',                        status: 'done' },
  { date: '25 Aug 2025', label: 'Proposal Submission',                   status: 'done' },
  { date: '15 Oct 2025', label: 'Engagement Analytics Module Complete',  status: 'done' },
  { date: '30 Oct 2025', label: 'Performance Prediction Module Complete', status: 'done' },
  { date: '15 Nov 2025', label: 'Dropout Risk Module Complete',          status: 'done' },
  { date: '30 Nov 2025', label: 'Personalised Feedback Module Complete', status: 'done' },
  { date: '10 Dec 2025', label: 'Progress Presentation 1',               status: 'done' },
  { date: '15 Feb 2026', label: 'Progress Presentation 2',               status: 'done' },
  { date: '30 Mar 2026', label: 'Final Report Submission',               status: 'done' },
  { date: '15 Apr 2026', label: 'Final Presentation',                    status: 'upcoming' },
];

const statusStyle = {
  done:     { bg: 'rgba(74,222,128,0.12)', dot: '#4ade80', badge: '#4ade80', text: 'Completed' },
  active:   { bg: 'rgba(197,160,89,0.12)', dot: 'var(--gold)', badge: 'var(--gold)', text: 'In Progress' },
  upcoming: { bg: 'rgba(255,255,255,0.04)', dot: 'var(--text-muted)', badge: 'var(--text-muted)', text: 'Upcoming' },
};

export default function Milestones() {
  return (
    <section className="section-wrapper" id="milestones">
      <div className="container">
        <p className="section-subtitle">Project Timeline</p>
        <h2 className="section-title">Milestones</h2>
        <div className="gold-divider" />

        <div className="row">
          {/* Timeline column */}
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="timeline">
              {milestones.map((m, i) => {
                const s = statusStyle[m.status];
                return (
                  <div key={i} className="timeline-item" style={{ '--dot-color': s.dot }}>
                    {/* Custom dot colour via inline style trick */}
                    <style>{`.timeline-item:nth-child(${i+1})::before{background:${s.dot};}`}</style>
                    <div
                      style={{
                        background: s.bg,
                        border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: 'var(--radius)',
                        padding: '0.9rem 1.2rem',
                      }}
                    >
                      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                        <div>
                          <div className="timeline-date">{m.date}</div>
                          <div className="timeline-label">{m.label}</div>
                        </div>
                        <span
                          style={{
                            fontSize: '0.72rem',
                            color: s.badge,
                            border: `1px solid ${s.badge}`,
                            borderRadius: '50px',
                            padding: '0.2rem 0.7rem',
                            whiteSpace: 'nowrap',
                            opacity: 0.9,
                          }}
                        >
                          {s.text}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Summary table column */}
          <div className="col-lg-5">
            <div className="luxury-card" style={{ position: 'sticky', top: '100px' }}>
              <h5 className="mb-3" style={{ color: 'var(--gold)' }}>
                <i className="fas fa-table me-2" />
                Milestone Summary
              </h5>
              <div style={{ overflowX: 'auto' }}>
                <table className="table table-borderless mb-0" style={{ color: 'var(--off-white)', fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--border)' }}>
                      <th style={{ color: 'var(--gold)', fontWeight: 600, paddingLeft: 0 }}>#</th>
                      <th style={{ color: 'var(--gold)', fontWeight: 600 }}>Date</th>
                      <th style={{ color: 'var(--gold)', fontWeight: 600 }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {milestones.map((m, i) => {
                      const s = statusStyle[m.status];
                      return (
                        <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                          <td style={{ paddingLeft: 0, color: 'var(--text-muted)' }}>{i + 1}</td>
                          <td style={{ whiteSpace: 'nowrap', color: 'var(--text-muted)' }}>{m.date}</td>
                          <td>
                            <span style={{ color: s.badge, fontSize: '0.75rem', fontWeight: 600 }}>
                              ● {s.text}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Legend */}
              <div className="d-flex gap-3 mt-3 flex-wrap">
                {Object.entries(statusStyle).map(([k, v]) => (
                  <span key={k} style={{ fontSize: '0.75rem', color: v.badge }}>
                    ● {v.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
