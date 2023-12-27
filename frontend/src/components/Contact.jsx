import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className='screen'>
      <div className="contact">
        <div className="contact-square">
        <div className="input-group-row">
          <div className="input-group">
            <label htmlFor="name">Nimi</label>
            <input type="text" id="name" placeholder="Syötä nimi" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Sähköposti</label>
            <input type="text" id="email" placeholder="Syötä sähköposti" />
          </div>
          </div>
          <div className="input-group-row">
            <div className="input-group">
              <label htmlFor="phone">Puhelin</label>
              <input type="text" id="phone" placeholder="Syötä puhelinnumero" />
            </div>
            <div className="input-group">
              <label htmlFor="address">Osoite</label>
              <input type="text" id="address" placeholder="Syötä Osoite" />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="message">Viesti</label>
            <textarea type="text" id="message" placeholder="Syötä viesti..." />
          </div>
          <button className='button-contact'>
            <span>Lähetä</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <div className="contact-template">

          <div className="template-box">
            <div className="template-circle">
              <FontAwesomeIcon icon={faEnvelope} className="template-logo" />
            </div>
            <div>
              <h4>Sähköposti</h4>
              <p>tush.tush@gmail.com</p>
            </div>
          </div>

          <div className="template-box">
            <div className="template-circle">
              <FontAwesomeIcon icon={faPhone} className="template-logo" />
            </div>
            <div>
              <h4>Puhelinnumero</h4>
              <p>+123 456 789</p>
            </div>
          </div>

          <div className="template-box">
            <div className="template-circle">
              <FontAwesomeIcon icon={faGlobe} className="template-logo" />
            </div>
            <div className="social-icons-container">
              <a href="https://www.facebook.com/profile.php?id=61554687897698" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              </a>
              <a href="https://www.instagram.com/diaconuri/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
            </div>
          </div>

      </div>
    </div>
  );
};

export default Contact;
