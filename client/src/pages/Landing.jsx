import React from "react";
import "../styles.css"; // Ensure your styles target the correct classNames

const Landing = () => {
  return (
    <div className="landing-container">
      {/* Top Bar */}
      <div className="top-bar-start">F.P.I. Financial Private Investigator</div>

      {/* Main Content */}
      <div className="main-content">
        <div className="emblem">
          <svg viewBox="0 0 300 300" className="emblem-svg">
            {/* Outer circle */}
            <circle cx="150" cy="150" r="140" fill="#324a81" />

            {/* Curved text */}
            <defs>
              <path
                id="curve"
                d="M 150,150 m -120,0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
              />
            </defs>
            <text
              fontSize="16"
              fill="white"
              fontWeight="bold"
              letterSpacing="4"
            >
              <textPath href="#curve" startOffset="50%" textAnchor="middle">
                * F I N A N C I A L * P R I V A T E * I N V E S T I G A T O R *
              </textPath>
            </text>

            {/* Inner circle */}
            <circle cx="150" cy="150" r="110" fill="#86a5ed" />

            {/* FPI Text */}
            <text
              x="150"
              y="190"
              textAnchor="middle"
              fontSize="120"
              fill="white"
              fontWeight="bold"
              fontFamily="'Times New Roman', Times, serif"
            >
              FPI
            </text>
          </svg>
        </div>

        {/* Search Section */}
        <div className="search-section">
          <form action="/loading" method="GET">
            <input type="text" name="company" placeholder="COMPANY" />
            <input type="submit" value="Search" />
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bottom-bar-start">
        Contact Email: basicemail@gmail.com | Phone Number: 1234567890 |
        Address: 800 W Cambell Road 75800
      </div>
    </div>
  );
};

export default Landing;
