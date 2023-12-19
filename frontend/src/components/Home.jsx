import React, { useState } from 'react';
import Navbar from './Navbar';
import Services from './Services';


const Home = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className='screen'>
        <div className="home">
        <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
        <Services />
        </div>
    </div>
  )};

  export default Home;