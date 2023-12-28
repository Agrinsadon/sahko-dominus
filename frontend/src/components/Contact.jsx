import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const apiUrl = process.env.REACT_APP_API_URL_EMAI;

  const handleSubmit = () => {
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className='screen'>
      <div className="contact">
        <div className="contact-square">
          <div className="input-group-row">
            <div className="input-group">
              <label htmlFor="name">Nimi</label>
              <input type="text" id="name" placeholder="Syötä nimi" value={formData.name} onChange={handleInputChange} />
            </div>
            <div className="input-group">
              <label htmlFor="email">Sähköposti</label>
              <input type="text" id="email" placeholder="Syötä sähköposti" value={formData.email} onChange={handleInputChange} />
            </div>
          </div>
          <div className="input-group-row">
            <div className="input-group">
              <label htmlFor="phone">Puhelin</label>
              <input type="text" id="phone" placeholder="Syötä puhelinnumero" value={formData.phone} onChange={handleInputChange} />
            </div>
            <div className="input-group">
              <label htmlFor="address">Osoite</label>
              <input type="text" id="address" placeholder="Syötä Osoite" value={formData.address} onChange={handleInputChange} />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="message">Viesti</label>
            <textarea type="text" id="message" placeholder="Syötä viesti..." value={formData.message} onChange={handleInputChange} />
          </div>
          <button className='button-contact' onClick={handleSubmit}>
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
            <p>Diako@sahkodominus.info</p>
          </div>
        </div>

        <div className="template-box">
          <div className="template-circle">
            <FontAwesomeIcon icon={faPhone} className="template-logo" />
          </div>
          <div>
            <h4>Puhelinnumero</h4>
            <p>0505402222</p>
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
