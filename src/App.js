// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Programs from './components/Programs';
import Contact from './components/Contact';
import AwardsPage from './components/AwardsPage';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/About" element={<About/>}/>
          <Route path="/AwardsPage" element={<AwardsPage/>}/>
          <Route path="/gallery" element={<Gallery />} /> {/* Gallery route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
