import React, { useState, useEffect } from "react";
import "./Nav.css";

export default function Nav({ page, navigate, darkHero }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`nav${scrolled ? " nav--scrolled" : ""}${!scrolled && !darkHero ? " nav--light-hero" : ""}`}>
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => navigate("home")}>
          <span className="nav-logo-main">The Grace Nolan Foundation</span>
        </button>
        <div className={`nav-links${menuOpen ? " open" : ""}`}>
          {links.map(l => (
            <button
              key={l.id}
              className={`nav-link${page === l.id ? " active" : ""}`}
              onClick={() => { navigate(l.id); setMenuOpen(false); }}
            >
              {l.label}
            </button>
          ))}
          <button className="nav-donate btn-primary" onClick={() => navigate("donate")}>Donate</button>
        </div>
        <button className="nav-burger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}