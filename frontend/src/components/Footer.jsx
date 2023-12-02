import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
      <div className="logo">
        <img src="sahko-dominus.png" alt="Your Logo" className='logo-footer' loading='lazy' />
        <p>Mestari sähköisissä tilanteissa.</p>
        </div>
        <div className="links-container">
          <h2>Linkit</h2>
          <ul className="links">
            <li><a href="/">Koti</a></li>
            <li><a href="/Palvelut">Palvelut</a></li>
            <li><a href="/Hinnastot">Hinnastot</a></li>
            <li><a href="/Yhteystiedot">Yhteystiedot</a></li>
          </ul>
        </div>
        <div className="contact-container">
          <h2>Ota yhteyttä</h2>
          <p>Diaco@SähköDominus.com</p>
          <p>+358 (0) 40 202 220</p>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Diacon Sähkö. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
