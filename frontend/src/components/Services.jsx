import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCoffee, faLightbulb, faPlug, faTowerCell, faBolt, faCompassDrafting, faSink, faUtensils, faBathtub } from '@fortawesome/free-solid-svg-icons';
import '../styles/Services.css';

const Services = () => {
  const [startIndex, setStartIndex] = useState(0);

  const boxes = [
    { icon: faTowerCell, header: 'Atk- ja antenniasennukset', text: 'Enjoy a cup of coffee with us.' },
    { icon: faBolt, header: 'Sähköasennukset', text: 'Enjoy a cup of coffee with us.' },
    { icon: faPlug, header: 'Pistorasian asennus ja huolto', text: 'Enjoy a cup of coffee with us.' },
    { icon: faLightbulb, header: 'Valaistuksen asennus ja huolto', text: 'Enjoy a cup of coffee with us.' },
    { icon: faCompassDrafting, header: 'Sähköurakointi', text: 'Enjoy a cup of coffee with us.' },
    { icon: faBathtub, header: 'Kylpyhuoneremontti', text: 'Enjoy a cup of coffee with us.' },
    { icon: faUtensils, header: 'Keittiöremontti', text: 'Enjoy a cup of coffee with us.' }
  ];

  const calculateIndex = (step) => (prevIndex) => (prevIndex + step + boxes.length) % boxes.length;

  const handlePrev = () => {
    setStartIndex(calculateIndex(-1));
  };

  const handleNext = () => {
    setStartIndex(calculateIndex(1));
  };

  const getVisibleBoxes = () => [
    boxes[calculateIndex(-1)(startIndex)],
    boxes[startIndex],
    boxes[calculateIndex(1)(startIndex)],
  ];

  const visibleBoxes = getVisibleBoxes();

  return (
    <div className="services">
      <h1 className="header-services">Palvelumme</h1>
      <div className="boxes-container">
        <div className="arrow" onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        {visibleBoxes.map((box, index) => (
          <div
            key={index}
            className={`box ${index === 1 ? 'active' : 'half-faded'}`}
            style={{
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
              borderRadius: '8px',
              transform: index === 1 ? 'scale(1.2)' : 'none',
              transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out', // Added transition property
            }}
          >
            <div className="box-content">
              <FontAwesomeIcon icon={box.icon} className="box-icon" />
              <h3>{box.header}</h3>
              <p>{box.text}</p>
            </div>
          </div>
        ))}
        <div className="arrow" onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
};

export default Services;
