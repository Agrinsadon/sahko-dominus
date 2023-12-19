import React, { useState } from 'react';
import Navbar from './Navbar';


const Contact = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div>
        <div className="contact">
        <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
        </div>
    </div>
  )};

  export default Contact;