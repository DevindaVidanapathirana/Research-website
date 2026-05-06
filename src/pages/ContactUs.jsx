import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

/**
 * ContactUs – uses EmailJS (free tier) to send messages to eraprime30@gmail.com
 *
 * Setup steps (one-time, free):
 * 1. Sign up at https://www.emailjs.com/
 * 2. Add a Gmail service  →  copy the Service ID  →  replace YOUR_SERVICE_ID below
 * 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
 *    Set "To Email" = eraprime30@gmail.com  →  copy Template ID  →  replace YOUR_TEMPLATE_ID below
 * 4. Go to Account → API Keys  →  copy Public Key  →  replace YOUR_PUBLIC_KEY below
 */
const EMAILJS_SERVICE_ID  = 'service_uwkebgk';
const EMAILJS_TEMPLATE_ID = 'template_eunvv2q';
const EMAILJS_PUBLIC_KEY  = 'SoCqA52vCEYe9-WoR';

export default function ContactUs() {
  const formRef = useRef(null);
  const [form, setForm]         = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus]     = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setErrorMsg(err?.text || 'Something went wrong. Please try again.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  return (
    <section className="section-wrapper" id="contact" style={{ background: 'var(--navy-mid)' }}>
      <div className="container">
        <p className="section-subtitle">Get In Touch</p>
        <h2 className="section-title">Contact Us</h2>
        <div className="gold-divider" />

        <div className="row g-5">
          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="luxury-card">
              <h5 className="mb-4" style={{ color: 'var(--gold)' }}>
                <i className="fas fa-paper-plane me-2" />Send a Message
              </h5>

              {/* Success banner */}
              {status === 'success' && (
                <div
                  className="mb-3 d-flex align-items-center gap-2"
                  style={{
                    background: 'rgba(74,222,128,0.1)',
                    border: '1px solid rgba(74,222,128,0.3)',
                    borderRadius: 'var(--radius)',
                    padding: '0.8rem 1rem',
                    color: '#4ade80',
                    fontSize: '0.9rem',
                  }}
                >
                  <i className="fas fa-check-circle" />
                  Message sent successfully! We'll get back to you shortly.
                </div>
              )}

              {/* Error banner */}
              {status === 'error' && (
                <div
                  className="mb-3 d-flex align-items-center gap-2"
                  style={{
                    background: 'rgba(239,68,68,0.1)',
                    border: '1px solid rgba(239,68,68,0.3)',
                    borderRadius: 'var(--radius)',
                    padding: '0.8rem 1rem',
                    color: '#f87171',
                    fontSize: '0.9rem',
                  }}
                >
                  <i className="fas fa-exclamation-circle" />
                  {errorMsg}
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="contact-name">Full Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="from_name"
                      className="form-control"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="contact-email">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="from_email"
                      className="form-control"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="contact-subject">Subject</label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Inquiry about Edu Predict"
                      value={form.subject}
                      onChange={(e) => setForm((p) => ({ ...p, subject: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className="form-control"
                      rows={5}
                      placeholder={`Dear Edu Predict team,\n\nI would like to inquire about…`}
                      value={form.message}
                      onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-gold"
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          />
                          Sending…
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane me-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="col-lg-5">
            {/* Direct email */}
            <div className="luxury-card mb-4">
              <h6 style={{ color: 'var(--gold)', marginBottom: '0.8rem' }}>
                <i className="fas fa-envelope-open-text me-2" />Direct Email
              </h6>
              <div
                style={{
                  background: 'var(--navy)',
                  borderRadius: 'var(--radius)',
                  padding: '1rem',
                  fontSize: '0.83rem',
                  color: 'var(--text-muted)',
                  borderLeft: '3px solid var(--gold-dark)',
                  lineHeight: 1.8,
                }}
              >
                <strong style={{ color: 'var(--off-white)' }}>To:</strong>{' '}
                <a href="mailto:eraprime30@gmail.com" style={{ color: 'var(--gold-light)' }}>
                  eraprime30@gmail.com
                </a>
                <br />
                <strong style={{ color: 'var(--off-white)' }}>Subject:</strong> Inquiry about Edu Predict
                <br /><br />
                Dear Edu Predict team,<br /><br />
                I am writing to inquire about [your question / collaboration interest].
                Please find my details below…<br /><br />
                Best regards,<br />
                [Your Name]
              </div>
            </div>

            {/* Contact details */}
            <div className="luxury-card">
              <h6 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>
                <i className="fas fa-address-card me-2" />Contact Details
              </h6>

              <div className="contact-info-item">
                <i className="fas fa-envelope" />
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.1rem' }}>General Email</div>
                  <a href="mailto:eraprime30@gmail.com" style={{ color: 'var(--off-white)', fontSize: '0.9rem' }}>
                    eraprime30@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <i className="fas fa-map-marker-alt" />
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.1rem' }}>Institution</div>
                  <span style={{ fontSize: '0.9rem' }}>SLIIT, Malabe, Sri Lanka</span>
                </div>
              </div>

              <hr style={{ borderColor: 'var(--border)', margin: '1rem 0' }} />

              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 0 }}>
                <i className="fas fa-clock me-1" style={{ color: 'var(--gold)' }} />
                We typically respond within 2–3 business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
