import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <AboutMe />
      <Footer />
    </>
  );
};

export default App;
