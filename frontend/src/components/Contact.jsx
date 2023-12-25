import React, { useState } from 'react';
import Navbar from './Navbar';
import '../styles/Contact.css'

const Contact = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div>
      <img src= '/sahkodominus-logo.png' alt="Logo" className="second-logo" />
      <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
      <div className="contact">
      </div>
    </div>
  );
};

export default Contact;
