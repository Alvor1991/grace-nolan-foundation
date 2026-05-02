import React from "react";
import bookCover from "../Book.jpg";
import "./About.css";

export default function About({ navigate }) {
  const timeline = [
    { year: "Dear Grace Letters", text: "Schools across Ireland came together as hundreds of children wrote heartfelt letters to Grace — a simple idea that quickly grew into something deeply meaningful." },
    { year: "The Dear Grace Book", text: "A collection of the most moving letters was published as Dear Grace, sharing these voices with families and supporters while helping raise awareness of HHT." },
    { year: "Community & Fundraising", text: "From golf days and charity trips to the Cork City Marathon, people continue to come together in Grace's name — raising vital funds, spreading awareness, and building a strong, supportive community." },
    { year: "Today", text: "Today, the foundation continues to grow — supporting awareness, research, and families affected by HHT." },
  ];

  return (
    <div className="about">
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <div className="section-label fade-up">Our Story</div>
          <h1 className="fade-up-2">About the Foundation</h1>
          <p className="fade-up-3">The Grace Nolan Foundation was established in Ireland in 2002 by Mike and June Nolan.</p>
        </div>
      </section>

      <section className="grace-story">
        <div className="container">
          <div className="grace-story-inner">
            <div className="grace-story-text">
              <div className="section-label">Grace's Story</div>
              <p>Grace Nolan was nine years old when she passed away from Hereditary Haemorrhagic Telangiectasia (HHT) — a rare genetic condition that affects the formation of blood vessels and is often difficult to diagnose.</p>
              <p>Her symptoms began with frequent nosebleeds and unexplained illness. At the time, it wasn't clear what was causing them. It was only later, after her family began searching for answers, that HHT was identified as the underlying condition. An appointment had been arranged for specialist screening in London, but Grace passed away before she could be seen.</p>
              <p>In the years that followed, her father, Mike Nolan, focused on making sure other families wouldn't face the same uncertainty.</p>
              <p>With the support of his friend Brendan O'Carroll, the idea for the Dear Grace letters began — inviting children across Ireland to write to Grace and share their own lives, thoughts, and experiences.</p>
              <p>What started as a simple idea grew into something much bigger. The letters became books, the books helped raise awareness, and the foundation went on to support research and the development of HHT screening in Ireland.</p>
              <p>Today, Grace's story continues through that work — in greater awareness of HHT, in earlier diagnoses, and in the families who now have access to information and care that once wasn't available.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container">
          <div className="section-label" style={{textAlign: "center"}}>Our Journey</div>
          <h2 className="timeline-title">How We've Grown</h2>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div key={i} className={`timeline-item${i % 2 === 0 ? " left" : " right"}`}>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <p>{item.text}</p>
                </div>
                <div className="timeline-dot" />
              </div>
            ))}
            <div className="timeline-line" />
          </div>
        </div>
      </section>

      <section className="book-section">
        <div className="container">

          {/* Heading and text — always visible */}
          <div className="book-text">
            <h2>The Dear Grace Book</h2>
            <p>5th and 6th class pupils across Ireland were invited to write to Grace, sharing stories of their everyday lives with warmth and imagination.</p>
            <p>These letters were compiled into <em>Dear Grace</em>, a published book that has brought comfort and inspiration to many families. Every copy sold goes directly towards HHT awareness and research.</p>
          </div>

          {/* Desktop — image left, text right with CTA */}
          <div className="book-inner">
            <div className="book-visual">
              <img src={bookCover} alt="Dear Grace Book Cover" className="book-cover-img" />
            </div>
            <div className="book-cta book-cta--desktop">
              <button className="btn-primary" onClick={() => navigate("contact")}>Order Your Copy</button>
              <div className="book-note">All proceeds support the foundation</div>
            </div>
          </div>

          {/* Mobile — image left, CTA right */}
          <div className="book-mobile-bottom">
            <img src={bookCover} alt="Dear Grace Book Cover" className="book-cover-img" />
            <div className="book-mobile-cta">
              <button className="btn-primary" onClick={() => navigate("contact")}>Order Your Copy</button>
              <div className="book-mobile-note">All proceeds support the foundation</div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}