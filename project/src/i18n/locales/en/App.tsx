import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import Experience from './Experience';
import About from './About';
import Service from './Service';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;