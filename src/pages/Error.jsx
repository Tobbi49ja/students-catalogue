import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Error = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
        background: "radial-gradient(circle at center, #1e3a8a, #0f172a, #000000)",
      }}
    >
      <h1
        style={{
          fontSize: "6rem",
          fontWeight: "800",
          background: "linear-gradient(90deg, #3b82f6, #ffffff, #3b82f6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "glowPulseSubtle 3s ease-in-out infinite, gradientShift 4s linear infinite",
        }}
      >
        404
      </h1>

      <h2
        style={{
          fontSize: "1.5rem",
          marginTop: "10px",
          opacity: 0.8,
        }}
      >
        Oops! The page you're looking for doesn't exist.
      </h2>

      <Link
        to="/"
        style={{
          marginTop: "30px",
          padding: "12px 30px",
          background: "linear-gradient(135deg, #1e3a8a, #3b82f6)",
          color: "white",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "600",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 15px rgba(59, 130, 246, 0.4)",
        }}
      >
        Go Home
      </Link>
    </div>
  );
};

export default Error;
