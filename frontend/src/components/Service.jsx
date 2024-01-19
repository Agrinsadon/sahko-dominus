// Test.js
import React from 'react';
import '../styles/Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Assuming you are using FontAwesome icons
import { faLightbulb, faPlug, faTowerCell, faBolt, faBathtub, faUtensils, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';


const boxes = [
  { icon: faBolt, header: 'Sähköasennukset', text: 'Turvalliset kodin ja yrityksen sähköjärjestelmät' },
  { icon: faScrewdriverWrench, header: 'Sähköurakointi', text: 'Luotettavaa ja ammattitaitoista työtä jokaiseen projektiin' },
  { icon: faUtensils, header: 'Keittiöremontti', text: 'Toimiva kokonaisuus ja tyylikäs uudistus arkeesti' },
  { icon: faBathtub, header: 'Kylpyhuoneremontti', text: 'Tunnelmaa ja käytännölisyyttä tiloihisi' },
  { icon: faPlug, header: 'Pistorasian lisäys ja huolto', text: 'Laadukkaat pistorasiahuollot ja -asennukset' },
  { icon: faLightbulb, header: 'Valaistuksen asennus ja huolto', text: 'Valaise tilasi ammattitaidolla' },
  { icon: faTowerCell, header: 'Atk- ja antenniasennukset', text: 'Vahva yhteys ja sujuva tietotekniikka' },
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
