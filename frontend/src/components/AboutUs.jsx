import React, { useState } from 'react';
import Navbar from './Navbar';


const AboutUs = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div>
        <div className="aboutus">
        <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
        </div>
    </div>
  )};

  export default AboutUs;