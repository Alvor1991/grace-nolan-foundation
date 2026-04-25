import React, { useState } from "react";
import logo from "../logo.png";
import "./Donate.css";

const PRESET_AMOUNTS = [10, 25, 50, 100];

export default function Donate() {
  const [selected, setSelected] = useState(25);
  const [custom, setCustom] = useState("");
  const [useCustom, setUseCustom] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const finalAmount = useCustom ? parseFloat(custom) : selected;

  const handleCustomChange = (e) => {
    const val = e.target.value;
    if (/^\d*\.?\d{0,2}$/.test(val)) {
      setCustom(val);
      setUseCustom(true);
      setSelected(null);
    }
  };

  const handlePreset = (amount) => {
    setSelected(amount);
    setUseCustom(false);
    setCustom("");
    setError("");
  };

  const handleDonate = async () => {
    setError("");
    if (!finalAmount || finalAmount < 1) {
      setError("Please enter a donation amount of at least €1.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/.netlify/functions/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Math.round(finalAmount * 100) }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Unable to connect. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="donate-page">
      {/* Hero */}
      <section className="donate-hero">
        <div className="donate-hero-bg" />
        <div className="container donate-hero-content">
          <div className="section-label fade-up">Support Us</div>
          <h1 className="donate-title fade-up-2">Make a <em>Difference</em></h1>
          <p className="donate-sub fade-up-3">
            Your donation keeps Grace's memory alive and funds vital HHT awareness across Ireland and beyond.
          </p>
        </div>
      </section>

      {/* Donate Card */}
      <section className="donate-section">
        <div className="container donate-container">

          <div className="donate-card">
            <div className="donate-card-header">
              <div className="donate-heart">🎗️</div>
              <h2>Choose an Amount</h2>
              <p>100% of your donation goes directly to HHT awareness and research support.</p>
            </div>

            <div className="donate-presets">
              {PRESET_AMOUNTS.map((amt) => (
                <button
                  key={amt}
                  className={`donate-preset${selected === amt && !useCustom ? " active" : ""}`}
                  onClick={() => handlePreset(amt)}
                >
                  €{amt}
                </button>
              ))}
            </div>

            <div className="donate-custom-wrap">
              <label className="donate-custom-label">Or enter your own amount</label>
              <div className={`donate-custom-input-wrap${useCustom ? " active" : ""}`}>
                <span className="donate-currency">€</span>
                <input
                  type="number"
                  className="donate-custom-input"
                  placeholder="0.00"
                  value={custom}
                  onChange={handleCustomChange}
                  min="1"
                />
              </div>
            </div>

            {error && <div className="donate-error">{error}</div>}

            <button
              className="donate-btn btn-primary"
              onClick={handleDonate}
              disabled={loading || !finalAmount || finalAmount < 1}
            >
              {loading ? (
                <span className="donate-loading">
                  <span className="donate-spinner" />
                  Redirecting to payment…
                </span>
              ) : (
                <>Donate {finalAmount >= 1 ? `€${useCustom ? parseFloat(custom || 0).toFixed(2) : finalAmount}` : ""} Securely</>
              )}
            </button>

            <div className="donate-secure">
              <span>🔒</span>
              <span>Payments processed securely by Stripe. We never store your card details.</span>
            </div>
          </div>

          {/* Impact panel */}
          <div className="donate-impact">
            <div className="donate-logo-wrap">
              <img src={logo} alt="Grace Nolan Foundation" className="donate-logo" />
            </div>
            <h3>Where Your Donation Goes</h3>
            <div className="donate-impact-items">
              <div className="donate-impact-item">
                <div className="donate-impact-amount">🎗️</div>
                <div className="donate-impact-desc">Raising awareness of HHT across Ireland so more families get the answers they deserve</div>
              </div>
              <div className="donate-impact-item">
                <div className="donate-impact-amount">🏥</div>
                <div className="donate-impact-desc">Contributing to HHT research and earlier diagnosis for families across the country</div>
              </div>
              <div className="donate-impact-item">
                <div className="donate-impact-amount">🤝</div>
                <div className="donate-impact-desc">Building a community of support for those affected by HHT and their loved ones</div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}