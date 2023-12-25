import React, { useState } from 'react';
import Navbar from './Navbar';


const AboutUs = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div>
      <img src= '/sahkodominus-logo.png' alt="Logo" className="second-logo" />
      <Navbar showLinks={showLinks} setShowLinks={setShowLinks}/>
        <div className="aboutus">
        </div>
    </div>
  )};

  export default AboutUs;