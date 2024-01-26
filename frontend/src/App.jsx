import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import AboutUs from './components/AboutUs';

const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Hinnastot" element={<Pricing />} />
          <Route path="/Meistä" element={<AboutUs />} />
          <Route path="/Yhteystiedot" element={<Contact />} />
        </Routes>
      </Router>
    );
  };
  /*H>Ell*/
export default App;
