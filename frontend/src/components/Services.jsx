import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCoffee, faCode, faDesktop } from '@fortawesome/free-solid-svg-icons';
import '../styles/Services.css';

const Services = () => {
  const [startIndex, setStartIndex] = useState(0);

  const boxes = [
    { icon: faCoffee, header: 'Cofwwee Service', text: 'Enjoy a cup of coffee with us.' },
    { icon: faCoffee, header: 'Cofsee Service', text: 'Enjoy a cup of coffee with us.' },
    { icon: faCoffee, header: 'Cofdee Service', text: 'Enjoy a cup of coffee with us.' },
    { icon: faCoffee, header: 'Cofefee Service', text: 'Enjoy a cup of coffee with us.' },
    { icon: faCoffee, header: 'Coeffee Service', text: 'Enjoy a cup of coffee with us.' },
    { icon: faCoffee, header: 'Coffsfe Service', text: 'Enjoy a cup of coffee with us.' },
    { icon: faCoffee, header: 'Coffee Service', text: 'Enjoy a cup of coffee with us.' }
  ];

  const visibleBoxes = boxes.slice(startIndex, startIndex + 3);

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : boxes.length - 3));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex < boxes.length - 3 ? prevIndex + 1 : 0));
  };

  return (
    <div className="services">
      <h1 className="header-services">Palvelumme</h1>
      <div className="boxes-container">
        <div className="arrow" onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        {visibleBoxes.map((box, index) => (
          <div
            key={index + startIndex}
            className={`box ${index === 1 ? 'active' : 'half-faded'}`}
            style={{
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
              borderRadius: '8px',
              transform: index === 1 ? 'scale(1.2)' : 'none',
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
