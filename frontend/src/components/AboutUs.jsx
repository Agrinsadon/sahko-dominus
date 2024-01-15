import React from 'react';
import '../styles/AboutUs.css'; // Import your CSS file

const AboutUs = () => {
  return (
    <div>
      {/* First About Us Container */}
      <div className="about-us-container">
        <div className="left-section">
          <h2>About Us</h2>
          <p>dawdljnwadjwandkwjadwadnwadawnawdjawndjawndawjkdn.</p>
        </div>
        <div className="right-section">
          <div className="right-content-wrapper">
            {/* Additional Content for the First About Us Container */}
          </div>
        </div>
      </div>

      {/* Second About Us Container */}
      <div className="about-us-container">
        <div className="right-section-second">
          <div className="right-content-wrapper">
            {/* Additional Content for the Second About Us Container */}
          </div>
        </div>
        <div className="left-section-second">
          <h2>Our Team</h2>
          <p>jdanwjdnawdojanwdoawndawondadw.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
