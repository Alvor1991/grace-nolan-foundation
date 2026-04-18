import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "general", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const subjects = [
    { value: "general", label: "General Enquiry" },
    { value: "donate", label: "I'd like to Donate" },
    { value: "book", label: "Order a Dear Grace Book" },
    { value: "marathon", label: "Cork City Marathon" },
    { value: "golf", label: "Golf Day / Charity Trip" },
    { value: "hht", label: "HHT Information" },
  ];

  const ways = [
    { emoji: "📖", title: "Buy a Dear Grace Book", desc: "Purchase a copy of our Dear Grace letter book. All proceeds support the foundation.", action: "Order a Copy", subject: "book" },
    { emoji: "🏃", title: "Run With Us", desc: "Join our team for the Cork City Marathon every June. Every step counts.", action: "Join the Team", subject: "marathon" },
    { emoji: "⛳", title: "Golf Days & Trips", desc: "Take part in our charity golf days or join one of our fundraising trips.", action: "Get Involved", subject: "golf" },
    { emoji: "💛", title: "Make a Donation", desc: "Any donation, big or small, makes a real difference to our work and HHT awareness.", action: "Donate Now", subject: "donate" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("form-name", "contact");
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("subject", form.subject);
    formData.append("message", form.message);

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then(() => setSubmitted(true))
      .catch(() => alert("Something went wrong. Please try again."));
  };

  return (
    <div className="contact">

      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <div className="section-label fade-up">Get In Touch</div>
          <h1 className="fade-up-2">Contact Us</h1>
          <p className="fade-up-3">Whether you want to donate, get involved, order a Dear Grace book, or simply learn more — we'd love to hear from you.</p>
        </div>
      </section>

      <section className="ways-section">
        <div className="container">
          <div className="section-label" style={{textAlign:"center"}}>Support Grace's Legacy</div>
          <h2 className="ways-title">Ways to Get Involved</h2>
          <div className="ways-grid">
            {ways.map((w, i) => (
              <div key={i} className="way-card" onClick={() => setForm(f => ({...f, subject: w.subject}))}>
                <div className="way-emoji">{w.emoji}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
                <div className="way-action">{w.action} →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="form-section">
        <div className="container">
          <div className="form-inner">
            <div className="form-info">
              <div className="section-label">Reach Out</div>
              <h2>Send Us a<br />Message</h2>
              <p>We're a small, passionate team. Every message is read personally. Whether you have a question about HHT, want to order a book, or are interested in our events — please don't hesitate to reach out.</p>
              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-detail-icon">📍</div>
                  <div>
                    <div className="contact-detail-label">Based In</div>
                    <div className="contact-detail-value">Cork, Ireland</div>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">📱</div>
                  <div>
                    <div className="contact-detail-label">Follow Us</div>
                    <div className="contact-detail-value">
                      <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                      {" · "}
                      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
                    </div>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">🏃</div>
                  <div>
                    <div className="contact-detail-label">Annual Event</div>
                    <div className="contact-detail-value">Cork City Marathon — June</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-wrap">
              {submitted ? (
                <div className="form-success">
                  <div className="form-success-icon">🕊️</div>
                  <h3>Thank You</h3>
                  <p>We've received your message and will be in touch soon. Your support means the world to us and to Grace's memory.</p>
                  <button className="btn-outline" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "general", message: "" }); }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="contact-form"
                >
                  {/* Required hidden input for Netlify Forms */}
                  <input type="hidden" name="form-name" value="contact" />

                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" name="name" placeholder="e.g. John Murphy" value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))} required />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" name="email" placeholder="your@email.com" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} required />
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <select name="subject" value={form.subject} onChange={e => setForm(f => ({...f, subject: e.target.value}))}>
                      {subjects.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea name="message" placeholder="Tell us how you'd like to get involved, or ask us anything..." value={form.message} onChange={e => setForm(f => ({...f, message: e.target.value}))} required />
                  </div>
                  <button type="submit" className="btn-primary" style={{width: "100%", padding: "16px"}}>Send Message</button>
                  <p className="form-note">We aim to respond within 2–3 business days.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}