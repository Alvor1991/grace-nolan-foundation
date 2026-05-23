import React from "react";
import logo from "../logo.png";
import "./Footer.css";

export default function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">The Grace Nolan Foundation</div>
            <p className="footer-tagline">Raising awareness for HHT.</p>
            <div className="footer-social">
  <a href="https://www.instagram.com/gracenolanfoundation/" target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
  </a>
  <a href="https://www.facebook.com/gracenolanfoundation/" target="_blank" rel="noreferrer" className="social-link" aria-label="Facebook">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  </a>
  <a href="https://www.linkedin.com/in/the-grace-nolan-foundation-11298836a" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
  </a>
</div>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <div className="footer-col-title">Navigate</div>
              <button onClick={() => navigate("home")}>Home</button>
              <button onClick={() => navigate("about")}>About</button>
              <button onClick={() => navigate("contact")}>Contact</button>
              <button onClick={() => navigate("donate")}>Donate</button>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">About HHT</div>
              <a href="https://hhtireland.org/" target="_blank" rel="noreferrer">HHT Ireland</a>
              <a href="https://www.curehht.org" target="_blank" rel="noreferrer">Cure HHT</a>
            </div>
            <div className="footer-col footer-col--logo">
              <img src={logo} alt="Grace Nolan Foundation" className="footer-brand-logo" />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} The Grace Nolan Foundation. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}