import React, { useState } from 'react';
import Navbar from './Navbar';


const AboutUs = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div>
      <img src= '/sahkodominus-logo.png' alt="Logo" className="second-logo" />
      <Navbar showLinks={showLinks} setShowLinks={setShowLinks}/>
        <div className="aboutus">
        </div>
          <div className="contact-template">
          {/* Template 1: Logo on the left */}
          <div className="template-box">
            <FontAwesomeIcon icon={faBuilding} className="template-logo" />
            <div>
              <h4>Phone Number</h4>
              <p>+123 456 789</p>
            </div>
          </div>

          {/* Template 2: Phone number header on the left */}
          <div className="template-box">
            <FontAwesomeIcon icon={faBuilding} className="template-logo" />
            <div>
              <h4>Phone Number</h4>
              <p>+123 456 789</p>
            </div>
          </div>

          {/* Template 3: Logo and phone number side by side */}
          <div className="template-box">
            <FontAwesomeIcon icon={faEnvelope} className="template-logo" />
            <div>
              <p>+123 456 789</p>
            </div>
          </div>
          </div>
          <button className='button-contact'>
              <span>Lähetä</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
    </div>
  )};

  export default AboutUs;