import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faBolt, faCoins, faHouseChimney, faPhoneFlip, faTimes, faUsers } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleLinkClick = () => {
    setShowLinks(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="screen">
      <div className="navbar">
        <div className="logo">
          <img src="sahkodominus-logo.png" alt="Sähkö Dominus Logo" className="sahkodominus-logo" loading='lazy'/>
        </div>
        <div className={`nav-links ${showLinks ? 'show' : ''}`}>
          {/* Use Link component for navigation */}
          <Link to="/" onClick={handleLinkClick}>
            Koti
            <FontAwesomeIcon icon={faHouseChimney} className="fa-icon" />
          </Link>
          <Link to="/Hinnastot" onClick={handleLinkClick}>
            Hinnastot
            <FontAwesomeIcon icon={faCoins} className="fa-icon" />
          </Link>
          <Link to="/Meistä" onClick={handleLinkClick}>
            Meistä
            <FontAwesomeIcon icon={faUsers} className="fa-icon" />
          </Link>
          <Link to="/Yhteystiedot" onClick={handleLinkClick}>
            Yhteystiedot
            <FontAwesomeIcon icon={faPhoneFlip} className="fa-icon" />
          </Link>
        </div>
        <FontAwesomeIcon
          icon={showLinks ? faTimes : faBarsStaggered}
          className={`burger ${showLinks ? 'active' : ''}`}
          onClick={toggleLinks}
        />
      </div>
    </div>
  );
};

export default Navbar;
