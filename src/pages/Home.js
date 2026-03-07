import logo from "../logo.png";
import React from "react";
import "./Home.css";

export default function Home({ navigate }) {
  const fundraisers = [
    { emoji: "⛳", title: "Golf Days", desc: "Annual charity golf days bringing together friends, families and the community in Grace's honour. A day of fun, competition and fundraising." },
    { emoji: "🏃", title: "Cork City Marathon", desc: "Every June, our team laces up for the Cork City Marathon, running in Grace's memory and raising vital funds for HHT awareness." },
    { emoji: "📖", title: "Dear Grace Book", desc: "Primary school pupils wrote heartfelt letters to Grace in heaven. The most touching letters were compiled into a beautiful book — still available to purchase." },
  ];

  return (
    <div className="home">

      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content container">
          <div className="hero-inner">
            <div className="hero-text">
              <div className="section-label fade-up">The Grace Nolan Foundation</div>
              <h1 className="hero-title fade-up-2">
                In Loving Memory<br />
                <em>of Grace Nolan</em>
              </h1>
              <p className="hero-sub fade-up-3">
                Raising awareness for HHT — a rare hereditary blood vessel disorder —
                through community, fundraising, and the enduring spirit of Grace.
              </p>
              <div className="hero-actions fade-up-4">
                <button className="btn-primary" onClick={() => navigate("about")}>Our Story</button>
                <button className="btn-outline" style={{borderColor: "#e8407a", color: "#e8407a"}} onClick={() => navigate("contact")}>Support Us</button>
              </div>
            </div>
            <img src={logo} alt="Grace Nolan Foundation" className="hero-logo fade-up" />
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
              <a href="https://www.hht.org" target="_blank" rel="noreferrer" className="btn-outline" style={{marginTop: 8}}>Learn More About HHT</a>
            </div>
            <div className="hht-card">
              <div className="hht-stat">
                <div className="hht-stat-num">1 in 5,000</div>
                <div className="hht-stat-label">People affected by HHT worldwide</div>
              </div>
              <div className="hht-divider" />
              <div className="hht-stat">
                <div className="hht-stat-num">~200,000</div>
                <div className="hht-stat-label">People in the USA living with HHT</div>
              </div>
              <div className="hht-divider" />
              <div className="hht-stat">
                <div className="hht-stat-num">Often years</div>
                <div className="hht-stat-label">Average time to correct diagnosis</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fundraisers-section">
        <div className="container">
          <div className="section-label" style={{textAlign: "center"}}>How We Fundraise</div>
          <h2 className="fundraisers-title">Ways We Honour Grace</h2>
          <p className="fundraisers-sub">Every event, every step, every letter written — all in Grace's name, all to make a difference.</p>
          <div className="fundraisers-grid">
            {fundraisers.map((f, i) => (
              <div key={i} className="fundraiser-card">
                <div className="fundraiser-emoji">{f.emoji}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dear-grace-section">
        <div className="container">
          <div className="dear-grace-inner">
            <div className="dear-grace-quote">
              <div className="quote-mark">"</div>
              <blockquote>Dear Grace, even though I never met you, I feel like I know you through the love your family carries every single day.</blockquote>
              <cite>— From a letter in <em>Dear Grace</em></cite>
            </div>
            <div className="dear-grace-info">
              <div className="section-label">Dear Grace</div>
              <h2>A Book Born From<br />Young Hearts</h2>
              <p>For several years, 5th and 6th class pupils across Ireland were invited to write a letter to Grace in heaven. The most moving and beautiful letters were carefully selected and compiled into a book called <em>Dear Grace</em> — a testament to how one life can touch so many others.</p>
              <p>Copies of <em>Dear Grace</em> are still available to purchase, with all proceeds going directly to the foundation.</p>
              <button className="btn-primary" onClick={() => navigate("contact")}>Get Your Copy</button>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-inner">
            <h2>Join Us in Making<br /><em>a Difference</em></h2>
            <p>Whether you run, golf, donate or simply share — every act of kindness keeps Grace's memory alive and brings us closer to a world that understands HHT.</p>
            <div className="cta-actions">
              <button className="btn-primary" onClick={() => navigate("contact")}>Get Involved</button>
              <button className="btn-outline" style={{borderColor: "#fff", color: "#fff"}} onClick={() => navigate("about")}>Read Our Story</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}