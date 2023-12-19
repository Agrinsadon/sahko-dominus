import React, { useState } from 'react';
import Navbar from './Navbar';


const Services = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div>
        <div className="services">
        <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
        </div>
    </div>
  )};

  export default Services;