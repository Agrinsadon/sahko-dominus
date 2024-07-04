import React from 'react';
import '../styles/Pricing.css';

const Pricing = () => {
  return (
      <div className="pricing-background">
    <div className="pricing-container">
      <div className="pricing-frame">
        <h1 className="big-header-pricing">Hinnastot</h1>
        <p className="main-text-pricing">Veloitamme vähintään 2 tunnin työstä, riippumatta työn kestosta. Työaika alkaa, kun aloitamme ajon kohteeseen ja päättyy työn valmistuttua. Pöytäkirjan laadintaan käytetty aika lisätään kokonaiskuluihin. Tavoitteemme on tarjota selkeä ja läpinäkyvä hinnoittelumalli.</p>
        <div className="small-headers-pricing">
          <div className="small-header-pricing">
            <h2>Tuntivelotus</h2>
            <p>55€ alv%0</p>
          </div>
          <div className="small-header-pricing">
            <h2>Kilometrikorvaus per Km</h2>
            <p>0,68€ alv%0</p>
          </div>
          <div className="small-header-pricing">
            <h2>Viikonloppulisä</h2>
            <p>+30€ alv%0 per tunti</p>
          </div>
        </div>
      </div>
    </div>
      </div>
  );
};

export default Pricing;
