import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const ways = [
    { emoji: "📖", title: "Buy a Dear Grace Book", desc: "Purchase a copy of our Dear Grace letter book. All proceeds support the foundation.", action: "Order a Copy" },
    { emoji: "🏃", title: "Run With Us", desc: "Join our team for the Cork City Marathon every June. Every step counts.", action: "Join the Team" },
    { emoji: "⛳", title: "Golf Days & Trips", desc: "Take part in our charity golf days or join one of our fundraising trips.", action: "Get Involved" },
    { emoji: "💛", title: "Make a Donation", desc: "Any donation, big or small, makes a real difference to our work and HHT awareness.", action: "Donate Now" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("form-name", "contact");
    formData.append("name", form.name);
    formData.append("email", form.email);
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
          <p className="fade-up-3">Whether you want to donate, get involved, or simply learn more — we'd love to hear from you.</p>
        </div>
      </section>

      <section className="form-section">
        <div className="container">
          <div className="form-inner">
            <div className="form-info">
              <h2>Send Us a Message</h2>
            </div>
            <div className="form-wrap">
              {submitted ? (
                <div className="form-success">
                  <div className="form-success-icon">🕊️</div>
                  <h3>Thank You</h3>
                  <p>We've received your message and will be in touch soon. Your support means the world to us and to Grace's memory.</p>
                  <button className="btn-outline" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}>
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