import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import OurStory from './pages/OurStory';
import Events from './pages/Events';
import Donations from './pages/Donations';
import Contact from './pages/Contact';
import GetInvolved from './pages/GetInvolved';
import Impact from './pages/Impact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/story" element={<OurStory />} />
            <Route path="/events" element={<Events />} />
            <Route path="/donate" element={<Donations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/impact" element={<Impact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;