import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope, faPhone, faGlobe, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/Contact.css';

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    postcode: '',
    city: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    fetch('https://sahkodominus-tdqe.onrender.com/email/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setFormData({
            name: '',
            email: '',
            phone: '',
            address: '',
            postcode: '',
            city: '',
            message: '',
          });
          setIsMessageSent(true);
          setTimeout(() => {
            setIsMessageSent(false);
          }, 4000);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsSending(false);
        });
  };

  return (
      <div className="contact-background">
        <h1 className="contact-header">Ota yhteyttä!</h1>
        <p className="contact-text">Meille voit kirjoittaa milloin tahansa! <br/> Saat vastauksen 24 tunnin sisällä.</p>
        <div className="contact">
          <div className="contact-square">
            <div className="input-group-row">
              <div className="input-group">
                <label htmlFor="name">Nimi</label>
                <input type="text" id="name" placeholder="Syötä nimi" value={formData.name}
                       onChange={handleInputChange}/>
              </div>
              <div className="input-group">
                <label htmlFor="email">Sähköposti</label>
                <input type="text" id="email" placeholder="Syötä sähköposti" value={formData.email}
                       onChange={handleInputChange}/>
              </div>
            </div>

            <div className="input-group-row">
              <div className="input-group">
                <label htmlFor="phone">Puhelin</label>
                <input type="text" id="phone" placeholder="Syötä puhelinnumero" value={formData.phone}
                       onChange={handleInputChange}/>
              </div>
              <div className="input-group">
                <label htmlFor="address">Osoite</label>
                <input type="text" id="address" placeholder="Syötä Osoite" value={formData.address}
                       onChange={handleInputChange}/>
              </div>
            </div>

            <div className="input-group-row">
              <div className="input-group">
                <label htmlFor="postcode">Postinumero</label>
                <input type="text" id="postcode" placeholder="Syötä postinumero" value={formData.postcode}
                       onChange={handleInputChange}/>
              </div>
              <div className="input-group">
                <label htmlFor="city">Kaupunki</label>
                <input type="text" id="city" placeholder="Syötä kaupunki" value={formData.city}
                       onChange={handleInputChange}/>
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="message">Viesti</label>
              <textarea type="text" id="message" placeholder="Syötä viesti..." value={formData.message}
                        onChange={handleInputChange}/>
            </div>

            <button className={`button-contact ${isSending ? 'sending' : ''}`} onClick={handleSubmit}>
              <span>{isSending ? 'Lähetetään...' : isMessageSent ? 'Lähetetty' : 'Lähetä'}</span>
              {isMessageSent && <FontAwesomeIcon icon={faCheckCircle} className="message-icon"/>}
            </button>

          </div>
        </div>
        <div className="contact-template">
          <div className="template-box">
            <div className="template-circle">
              <a href="mailto:Diako@sahkodominus.info">
                <FontAwesomeIcon icon={faEnvelope} className="template-logo" />
              </a>
            </div>
            <div>
              <h4>Sähköposti</h4>
              <p>Diako@sahkodominus.info</p>
            </div>
          </div>

          <div className="template-box">
            <div className="template-circle">
              <a href="tel:+358505402222">
                <FontAwesomeIcon icon={faPhone} className="template-logo" />
              </a>
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
              <a href="https://www.facebook.com/profile.php?id=61554477816227" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              </a>
              <a href="https://www.instagram.com/sahkodominus/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contact;
