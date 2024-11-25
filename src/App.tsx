import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Timeline />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
