import React, { useEffect } from "react";
import "../styles.css";

const Loading = () => {
  useEffect(() => {
    // Extract company name from URL params
    const params = new URLSearchParams(window.location.search);
    const company = params.get("company");
    if (company) {
      const companyDisplay = document.getElementById("companyDisplay");
      if (companyDisplay) {
        companyDisplay.textContent = `Company: ${company}`;
      }
    }
  }, []);

  const redirectToMain = () => {
    window.location.href = "/home";
  };

  return (
    <div className="loading-body" onClick={redirectToMain}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-title" style={{ textAlign: "center" }}>
          F.P.I. Financial Private Investigator
        </div>
      </div>

      {/* Emblem */}
      <div>
        <svg viewBox="0 0 1200 1200" className="small-emblem">
          <circle cx="600" cy="600" r="560" fill="#324a81" />
          <circle cx="600" cy="600" r="430" fill="#86a5ed" />
          <text
            x="600"
            y="720"
            textAnchor="middle"
            fontSize="380"
            fill="white"
            fontWeight="bold"
          >
            FPI
          </text>
        </svg>
      </div>

      {/* Dynamic Company Name */}
      <div className="company-name" id="companyDisplay"></div>

      {/* Magnifying Glass */}
      <svg className="magnifying-glass" viewBox="0 0 64 64">
        <circle
          cx="27"
          cy="27"
          r="16"
          stroke="#ffffff"
          strokeWidth="4"
          fill="none"
        />
        <line
          x1="41"
          y1="41"
          x2="60"
          y2="60"
          stroke="#ffffff"
          strokeWidth="4"
        />
      </svg>

      {/* Loading Message */}
      <div className="loading-message">Loading...</div>

      {/* Bottom Bar */}
      <div className="bottom-bar">
        Contact Email: basicemail@gmail.com | Phone Number: 1234567890 |
        Address: 800 W Cambell Road 75800
      </div>
    </div>
  );
};

export default Loading;
