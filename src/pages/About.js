import React from "react";
import "./About.css";

export default function About({ navigate }) {
  const timeline = [
    { year: "The Beginning", text: "The Grace Nolan Foundation was established by Grace's family and friends to honour her memory and ensure that HHT — the rare condition she lived with — would never be forgotten." },
    { year: "Dear Grace", text: "We launched our Dear Grace letter-writing initiative, inviting 5th and 6th class pupils across Ireland to write a letter to Grace in heaven. The response was overwhelming — hundreds of heartfelt letters poured in." },
    { year: "The Book", text: "The most moving letters were compiled into a beautiful published book called Dear Grace. Copies were distributed to schools, families and supporters, with proceeds going to the foundation." },
    { year: "Community Events", text: "Our annual golf days and charity trips became cornerstones of the foundation — bringing together the community, raising vital funds and keeping Grace's spirit alive in every event." },
    { year: "Cork Marathon", text: "Every June, our team runs the Cork City Marathon in Grace's name. Rain or shine, we lace up and run — for Grace, for HHT awareness, and for every family touched by this disease." },
    { year: "Today", text: "The foundation continues to grow. We raise funds, spread awareness, and remind the world that even the rarest conditions deserve attention, compassion and hope." },
  ];

  return (
    <div className="about">

      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <div className="section-label fade-up">Our Story</div>
          <h1 className="fade-up-2">About the Foundation</h1>
          <p className="fade-up-3">Born from love and loss, the Grace Nolan Foundation has grown into a community united by compassion, awareness and hope.</p>
        </div>
      </section>

      <section className="grace-story">
        <div className="container">
          <div className="grace-story-inner">
            <div className="grace-story-text">
              <div className="section-label">Grace's Story</div>
              <h2>A Life That Touched<br />So Many</h2>
              <p>Grace Nolan was someone whose warmth, spirit and love left an indelible mark on everyone she met. Though HHT — Hereditary Haemorrhagic Telangiectasia — shaped her journey, it never defined her. She faced her condition with quiet bravery and a joy for life that inspired all around her.</p>
              <p>When Grace passed, her family refused to let her story end. They created this foundation in her honour — not out of grief alone, but out of a fierce determination that her life would mean something beyond her years. That her name would open doors for others living with HHT who needed answers, support and hope.</p>
              <p>Today, every marathon run, every golf ball driven, every letter written by a child — all of it carries Grace's name forward. She is remembered not just by those who knew her, but by a community that grew because of her.</p>
            </div>
            <div className="grace-story-aside">
              <div className="grace-card">
                <div className="grace-card-icon">🕊️</div>
                <div className="grace-card-quote">"Her name opens hearts. Her story opens minds."</div>
              </div>
              <div className="foundation-values">
                <div className="value-item">
                  <div className="value-icon">💛</div>
                  <div>
                    <div className="value-title">Awareness</div>
                    <div className="value-text">Shining a light on HHT so no family waits years for a diagnosis.</div>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">🤝</div>
                  <div>
                    <div className="value-title">Community</div>
                    <div className="value-text">Bringing people together through sport, creativity and shared purpose.</div>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">🌱</div>
                  <div>
                    <div className="value-title">Hope</div>
                    <div className="value-text">Funding research and support for those living with HHT today.</div>
                  </div>
                </div>
              </div>
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
          <div className="book-inner">
            <div className="book-visual">
              <div className="book-cover">
                <div className="book-cover-title">Dear Grace</div>
                <div className="book-cover-sub">Letters from young hearts</div>
                <div className="book-cover-deco">✦</div>
              </div>
              <div className="book-shadow" />
            </div>
            <div className="book-info">
              <div className="section-label">The Dear Grace Book</div>
              <h2>A Book Born<br />From Young Hearts</h2>
              <p>For several years, we invited primary school children across Ireland to put pen to paper and write a letter to Grace. The results were extraordinary — children who had never met Grace wrote with such empathy, innocence and love that it moved everyone who read them.</p>
              <p>These letters were compiled into <em>Dear Grace</em>, a published book that has brought comfort and inspiration to many families. Every copy sold goes directly towards HHT awareness and research.</p>
              <div className="book-cta">
                <button className="btn-primary" onClick={() => navigate("contact")}>Order Your Copy</button>
                <div className="book-note">All proceeds support the foundation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}