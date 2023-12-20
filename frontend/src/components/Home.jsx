import React, { useState } from 'react';
import Navbar from './Navbar';
import Services from './Services';
import '../styles/Home.css'; // Import the CSS file for styling

const Home = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className='screen'>
      <div className="home">
        <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
        <div className='home-pic-frame' style={{ backgroundImage: `url(/Home.png)`}} loading="lazy" decoding="async">
        <div className='home-main'>
          <h1>Mestari sähköisissä tilanteissa</h1>
          <p>Varaa maksuton kartoitus!</p>
          <div className="buttons-container">
              <button className="cta-button">Ota yhteyttä</button>
              <button className="cta-button">Hinnastot</button>
          </div>
        </div>
        </div>
        </div>
        <Services />
      </div>
  );
};

export default Home;
