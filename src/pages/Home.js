import logo from "../logo.png";
import grace1 from "../grace1.jpg";
import grace2 from "../grace2.jpg";
import grace3 from "../grace3.jpg";
import React from "react";
import "./Home.css";

export default function Home({ navigate }) {

  return (
    <div className="home">

      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content container">
          <div className="hero-inner">
            <div className="hero-text">
              <h1 className="hero-title fade-up-2">
                Raising awareness<br />
                <em>for HHT</em>
              </h1>
              <p className="hero-sub fade-up-3">
                A family-founded charity dedicated to making a real difference.
              </p>
              <div className="hero-actions fade-up-4">
                <button className="btn-primary" onClick={() => navigate("about")}>Our Story</button>
                <button className="btn-outline" style={{borderColor: "#e8407a", color: "#e8407a"}} onClick={() => navigate("contact")}>Contact Us</button>
              </div>
            </div>
            <img src={logo} alt="Grace Nolan Foundation" className="hero-logo fade-up" />
          </div>
        </div>
      </section>

      {/* IN MEMORY OF GRACE SECTION */}
      <section className="grace-memory-section">
        <div className="container">
          <p className="grace-memory-desc">
            Inspired by the life of Grace Nolan.
          </p>
          <div className="grace-photos">
            <div className="grace-photo-wrap">
              <img src={grace1} alt="Grace Nolan" />
            </div>
            <div className="grace-photo-wrap grace-photo-wrap--tall">
              <img src={grace2} alt="Grace Nolan" />
            </div>
            <div className="grace-photo-wrap">
              <img src={grace3} alt="Grace Nolan" />
            </div>
          </div>
          <div className="grace-cta">
            <button className="btn-primary" onClick={() => navigate("about")}>
              Read Our Story
            </button>
          </div>
        </div>
      </section>

      <section className="hht-section">
        <div className="container">
          <div className="hht-inner">
            <div className="hht-text">
              <div className="section-label">About HHT</div>
              <h2>What is HHT?</h2>
              <p>Hereditary Haemorrhagic Telangiectasia (HHT) is a rare genetic disorder that affects blood vessel formation. It causes abnormal connections between arteries and veins — called AVMs — which can occur in the brain, lungs, liver and digestive tract.</p>
              <p>HHT affects approximately 1 in 5,000 people worldwide, yet many go undiagnosed for years. Symptoms can include frequent nosebleeds, visible red spots on the skin, and in more serious cases, internal bleeding and organ complications.</p>
              <p>Early diagnosis saves lives. The Grace Nolan Foundation is dedicated to raising awareness so that families receive the answers and support they deserve.</p>
            </div>
            <div className="hht-card">
              <div className="hht-stat">
                <div className="hht-stat-num">1 in 5,000</div>
                <div className="hht-stat-label">People worldwide are affected by HHT</div>
              </div>
              <div className="hht-divider" />
              <div className="hht-stat">
                <div className="hht-stat-num">50%</div>
                <div className="hht-stat-label">Chance a child will inherit the disorder if one parent has it</div>
              </div>
              <div className="hht-divider" />
              <div className="hht-stat">
                <div className="hht-stat-num">95%</div>
                <div className="hht-stat-label">Percentage of people with the gene who will show symptoms by age 40</div>
              </div>
              <div className="hht-divider" />
              <div className="hht-stat">
                <div className="hht-stat-num">10%</div>
                <div className="hht-stat-label">Estimated percentage of HHT patients who receive a formal diagnosis</div>
              </div>
            </div>
          </div>
          {/* Trusted Resources — outside the grid so it always sits at the bottom */}
          <div className="hht-resources">
            <div className="section-label">Trusted Resources</div>
            <div className="hht-links">
              <a className="btn-outline" style={{ borderColor: "#e8407a", color: "#e8407a" }} href="https://hhtireland.org/" target="_blank" rel="noreferrer">HHT Ireland</a>
              <a className="btn-outline" style={{ borderColor: "#e8407a", color: "#e8407a" }} href="https://www.curehht.org" target="_blank" rel="noreferrer">Cure HHT</a>
            </div>
          </div>
        </div>
      </section>

      <section className="fundraisers-section">
  <div className="container">
    <div className="section-label" style={{textAlign: "center"}}>How We Fundraise</div>
    <div className="fundraiser-single-card">
      <p>From charity golf days and marathon runs to the beloved Dear Grace book — our events bring communities together, raise vital funds, and keep the conversation about HHT alive across Ireland.</p>
      <button className="btn-primary" onClick={() => navigate("about")}>
        Learn More About Our Events →
      </button>
    </div>
  </div>
</section>

    </div>
  );
}