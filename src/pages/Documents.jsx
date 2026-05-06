/**
 * Documents Page – linked to Google Drive
 */
const documents = [
  {
    icon: 'fas fa-file-contract',
    name: 'Project Charter',
    type: 'PDF Document',
    href: 'https://drive.google.com/file/d/1K8KYrh_WUFWBp8Hyd5soBBXat3_VSUc5/view?usp=sharing',
  },
  {
    icon: 'fas fa-file-alt',
    name: 'Proposal Document',
    type: 'PDF Document',
    href: 'https://drive.google.com/file/d/1ovCDvnYxP2eEFGtpXTGwfzXmehYqdz9_/view?usp=sharing',
  },
  {
    icon: 'fas fa-tasks',
    name: 'Check List Documents',
    type: 'PDF / Spreadsheet',
    href: 'https://drive.google.com/drive/folders/1_nLCZt59U6UaiNzqAeuXEHwj0r2mR599?usp=sharing',
  },
  {
    icon: 'fas fa-book',
    name: 'Final Reports (Thesis)',
    type: 'Google Drive Folder',
    href: 'https://drive.google.com/drive/folders/1pKveJ1O6rrmEPlJIZqDMDK-J4Ad2ig9f?usp=sharing',
  },
];

export default function Documents() {
  return (
    <section className="section-wrapper" id="documents" style={{ background: 'var(--navy)' }}>
      <div className="container">
        <p className="section-subtitle">Research Output</p>
        <h2 className="section-title">Documents</h2>
        <div className="gold-divider" />

        <div className="row">
          <div className="col-lg-8">
            {documents.map((doc, i) => (
              <div key={i} className="doc-card">
                {/* Icon + info */}
                <div className="d-flex align-items-center gap-3 flex-grow-1">
                  <i className={`${doc.icon} doc-icon`} />
                  <div>
                    <div className="doc-name">{doc.name}</div>
                    <div className="doc-type">
                      <i className="fas fa-tag me-1" />
                      {doc.type}
                    </div>
                  </div>
                </div>
                {/* Open button */}
                <a
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-gold btn-sm flex-shrink-0"
                >
                  <i className="fas fa-external-link-alt me-1" />
                  Open
                </a>
              </div>
            ))}
          </div>

          {/* Sidebar info */}
          <div className="col-lg-4">
            <div className="luxury-card" style={{ position: 'sticky', top: '100px' }}>
              <div className="icon-circle" style={{ margin: '0 0 1rem' }}>
                <i className="fas fa-folder-open" />
              </div>
              <h5 style={{ color: 'var(--white)', marginBottom: '0.6rem' }}>Document Repository</h5>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.87rem' }}>
                All project documents are organised and hosted on Google Drive. Click any Open button
                to access the file directly in your browser.
              </p>
              <hr style={{ borderColor: 'var(--border)' }} />
              <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: 0 }}>
                <i className="fas fa-shield-alt me-1" style={{ color: 'var(--gold)' }} />
                Documents are read-only shared links. No Google account required to view.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
