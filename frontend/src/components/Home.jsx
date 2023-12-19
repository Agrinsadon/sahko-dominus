import React, { useState } from 'react';
import Navbar from './Navbar';


const Home = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div>
        <div className="home">
        <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
        </div>
    </div>
  )};

  export default Home;