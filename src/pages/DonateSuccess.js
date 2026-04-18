import React from "react";

export default function DonateSuccess({ navigate }) {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#fff9f5",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 20px",
      textAlign: "center",
      flexDirection: "column",
    }}>
      <div style={{ fontSize: "4rem", marginBottom: "24px" }}>🎗️</div>
      <h1 style={{
        fontFamily: "'Quicksand', sans-serif",
        fontSize: "2.2rem",
        fontWeight: 700,
        color: "#2a1a2e",
        marginBottom: "16px",
      }}>
        Thank You So Much
      </h1>
      <p style={{
        fontFamily: "'Nunito', sans-serif",
        fontSize: "1.1rem",
        color: "#5a4a62",
        maxWidth: "480px",
        lineHeight: 1.7,
        marginBottom: "36px",
      }}>
        Your generous donation means the world to us and helps keep Grace's memory alive. 
        Every contribution brings us closer to a world that understands HHT.
      </p>
      <button
        className="btn-primary"
        onClick={() => navigate("home")}
        style={{ padding: "14px 36px", fontSize: "1rem" }}
      >
        Back to Home
      </button>
    </div>
  );
}