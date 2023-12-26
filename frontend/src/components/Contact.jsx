// Contact.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight ,faCircle, faBuilding, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import '../styles/Contact.css';

// ... (previous imports)

const Contact = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className='screen'>
      <img src="/sahkodominus-logo.png" alt="Logo" className="second-logo" />
      <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
      <div className="contact">
        <h2>
          Olemme <span className="highlight">24/7</span> valmiina auttamaan sinua milloin vain
        </h2>
        <div className="contact-form">
          <div className="left-inputs">
            <h3>Nimi</h3>
            <input type="text" className="inputName" placeholder="Syötä nimi" />
            <h3>Sähköposti</h3>
            <input type="email" className="inputEmail" placeholder="Syötä sähköposti" />
            <p>VARAA MAKSUTON KARTOITUS!</p>
          </div>

          <div className="right-inputs">
            <h3>Viesti</h3>
            <input type="text" className="inputMessage" placeholder="Syötä viestisi..." />
            <button className='button-contact'>
              <span>Lähetä</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>

        {/* Three templates under the contact form */}
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
      </div>
    </div>
  );
};

export default Contact;

