import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Element } from 'react-scroll';
import '../styles/Home.css';
import Service from './Service';
import Contact from './Contact';
import Pricing from './Pricing';

const Home = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showCover, setShowCover] = useState(true);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const coverTimeout = setTimeout(() => {
      setShowCover(false);
    }, 2000);

    const logoTimeout = setTimeout(() => {
      setShowLogo(false);
    }, 1900);

    return () => {
      clearTimeout(coverTimeout);
      clearTimeout(logoTimeout);
    };
  }, []);

  return (
    <div>
      <div className='screen'>
        <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
        <div className="cover" style={{ height: showCover ? '100vh' : '0' }}>
          <img src="/sahkodominus-logo.png" alt="Logo" className="logo-cover" style={{ opacity: showLogo ? 1 : 0 }} />
        </div>
        <div className="cover-small" style={{ height: showCover ? '100vh' : '0' }}>
          <img src="/sahkodominus-logo.png" alt="Logo" className="logo-cover-small" style={{ opacity: showLogo ? 1 : 1 }} />
        </div>
        <div className="home">
          <div className='home-pic-frame' style={{ backgroundImage: `url(/Home.png)` }} loading="lazy" decoding="async">
            <div className='home-main'>
              <h1>Mestari sähköisissä tilanteissa</h1>
              <p>Varaa maksuton kartoitus!</p>
              <div className="buttons-container">
                <button className="cta1-button">Ota yhteyttä</button>
                <button className="cta2-button">Hinnastot</button>
              </div>
            </div>
          </div>
        </div>
        <Element name="service"> <Service /> </Element>
        <Element name="pricing-section"> <Pricing /> </Element>
      </div>
      <Element name="contact-section"> <Contact /> </Element>
    </div>
  );
};

export default Home;
