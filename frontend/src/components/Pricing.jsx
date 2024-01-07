import React from 'react';
import '../styles/Pricing.css'; // Import the CSS file

const Pricing = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-frame">
        <h1 className="big-header-pricing">Hinnastot</h1>
        <p className="main-text-pricing">Main Text goes here...</p>
        <div className="small-headers-pricing">
          <div className="small-header-pricing">
            <h2>Header 1</h2>
            <p>Small text 1</p>
          </div>
          <div className="small-header-pricing">
            <h2>Header 2</h2>
            <p>Small text 2</p>
          </div>
          <div className="small-header-pricing">
            <h2>Header 3</h2>
            <p>Small text 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
