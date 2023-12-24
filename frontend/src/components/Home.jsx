import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Services from './Services';
import '../styles/Home.css';

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
          <Services />
        </div>
      </div>
    </div>
  );
};

export default Home;
