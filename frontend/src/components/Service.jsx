// Test.js
import React from 'react';
import '../styles/Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Assuming you are using FontAwesome icons
import { faLightbulb, faPlug, faTowerCell, faBolt, faCompassDrafting, faBathtub, faUtensils } from '@fortawesome/free-solid-svg-icons';


const boxes = [
  { icon: faTowerCell, header: 'Atk- ja antenniasennukset', text: 'Enjoy a cup of coffee with us.' },
  { icon: faBolt, header: 'Sähköasennukset', text: 'Enjoy a cup of coffee with us.' },
  { icon: faPlug, header: 'Pistorasian asennus ja huolto', text: 'Enjoy a cup of coffee with us.' },
  { icon: faLightbulb, header: 'Valaistuksen asennus ja huolto', text: 'Enjoy a cup of coffee with us.' },
  { icon: faCompassDrafting, header: 'Sähköurakointi', text: 'Enjoy a cup of coffee with us.' },
  { icon: faBathtub, header: 'Kylpyhuoneremontti', text: 'Enjoy a cup of coffee with us.' },
  { icon: faUtensils, header: 'Keittiöremontti', text: 'Enjoy a cup of coffee with us.' },
];

const Test = () => {
    return (
    <div className='service-header' >
        <h2> Tutustu meidän palveluihin</h2>
      <div className="container">
        {boxes.map((box, index) => (
          <div className="box" key={index}>
            <FontAwesomeIcon icon={box.icon} size="2x" />
            <h3>{box.header}</h3>
            <p>{box.text}</p>
          </div>
        ))}
        </div>
      </div>
    );
  };

export default Test;
