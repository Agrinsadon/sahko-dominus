import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Navbar from './Navbar';
import { Element } from 'react-scroll';
import '../styles/Home.css';
import Service from './Service';
import Contact from './Contact';
import Pricing from './Pricing';
import AboutUs from './AboutUs';
import Footer from './Footer';

const Home = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showCover, setShowCover] = useState(true);
  const [showLogo, setShowLogo] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/imqge3.jpeg' , '/Home.png'];

  useEffect(() => {
    const coverTimeout = setTimeout(() => {
      setShowCover(false);
    }, 2000);

    const logoTimeout = setTimeout(() => {
      setShowLogo(false);
    }, 1900);

    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 10000);

    return () => {
      clearTimeout(coverTimeout);
      clearTimeout(logoTimeout);
      clearInterval(intervalId);
    };
  }, [images]);

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
          <div className='home-pic-frame' style={{ backgroundImage: `url(${images[currentImage]})` }} loading="lazy" decoding="async">
            <div className='home-main'>
              <h1>Mestari sähköisissä tilanteissa</h1>
              <h2>Varaa maksuton kartoitus!</h2>
              <div className="buttons-container">
              <ScrollLink to="contact-section" smooth={true} duration={500} offset={-180}>
                <button className="cta1-button">Ota yhteyttä</button>
              </ScrollLink>
              <ScrollLink to="pricing-section" smooth={true} duration={500} offset={-240}>
                <button className="cta2-button">Hinnastot</button>
              </ScrollLink>
              </div>
            </div>
          </div>
        </div>
        <Element name="service"> <Service /> </Element>
        <Element name="pricing-section"> <Pricing /> </Element>
        <Element name="Meistä"> <AboutUs /> </Element>
      </div>
      <Element name="contact-section"> <Contact /> </Element>
      <Footer/>
    </div>
  );
};

export default Home;
