import React, { useState } from 'react';
import Navbar from './Navbar';


const Pricing = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div>
        <div className="pricing">
        <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
        </div>
    </div>
  )};

  export default Pricing;