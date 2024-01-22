import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
      <div className="logo">
        <img src="sahkodominus-logo.png" alt="Your Logo" className='logo-footer' loading='lazy' />
        <p>Mestari sähköisissä tilanteissa</p>
        </div>
        <div className="contact-container">
          <h2>Ota yhteyttä</h2>
          <p>Diako@sahkodominus.info</p>
          <p>0505402222</p>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Sähkö Dominus. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
