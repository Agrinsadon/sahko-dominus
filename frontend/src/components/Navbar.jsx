// Navbar.js

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faCoins, faHouseChimney, faPhoneFlip, faTimes, faUsers } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';
import { faServicestack } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      smooth: true,
      duration: 500,
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});

    scrollSpy.update();

    return () => {
      window.removeEventListener('resize', handleResize);
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  return (
    <div className="screen">
      <div className="navbar">
        <div className="logo" onClick={scrollToTop}>
          <ScrollLink to="home" smooth={true} duration={500}>
            <img src="sahkodominus-logo.png" alt="Sähkö Dominus Logo" className="sahkodominus-logo" loading="lazy" />
          </ScrollLink>
        </div>

        <div className={`nav-links ${showLinks ? 'show' : ''}`}>
          <ScrollLink
            to="service"
            smooth={true}
            duration={500}
            onClick={() => setShowLinks(false)}
            activeClass={activeSection === 'service' ? 'active' : ''}
            spy={true}
            onSetActive={handleSetActive}
            offset={screenWidth < 992 ? -130 : -150}
          >
            Palvelut
            <FontAwesomeIcon icon={faServicestack} className="fa-icon" />
          </ScrollLink>

          <ScrollLink
            to="pricing-section"
            smooth={true}
            duration={500}
            onClick={() => setShowLinks(false)}
            activeClass={activeSection === 'pricing-section' ? 'active' : ''}
            spy={true}
            onSetActive={handleSetActive}
            offset={screenWidth < 768 ? -100 : -240}
          >
            Hinnastot
            <FontAwesomeIcon icon={faCoins} className="fa-icon" />
          </ScrollLink>

          <ScrollLink
            to="Meistä"
            smooth={true}
            duration={500}
            onClick={() => setShowLinks(false)}
            activeClass={activeSection === 'Meistä' ? 'active' : ''}
            spy={true}
            onSetActive={handleSetActive}
            offset={screenWidth < 768 ? -10 : -240}
          >
            Meistä
            <FontAwesomeIcon icon={faUsers} className="fa-icon" />
          </ScrollLink>

          <ScrollLink
            to="contact-section"
            smooth={true}
            duration={500}
            onClick={() => setShowLinks(false)}
            activeClass={activeSection === 'contact-section' ? 'active' : ''}
            spy={true}
            onSetActive={handleSetActive}
            offset={screenWidth < 768 ? 0 : -160}
          >
            Yhteystiedot
            <FontAwesomeIcon icon={faPhoneFlip} className="fa-icon" />
          </ScrollLink>
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
