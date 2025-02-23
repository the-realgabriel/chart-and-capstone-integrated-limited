import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './content/landing';
import About from './content/about';
import Govern from './content/govern';
import Contact from './content/contact';

import './App.css';

function App() {
  return (
    <>
    <Router>
      <Routes>

         <Route path="/" element={<Landing/>} />
         <Route path="/about" element={<About/>} />
          <Route path="/govern" element={<Govern/>} />  
        <Route path="/" element={<Landing/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Govern" element={<Govern/>} /> 
        <Route path="/contact" element={<Contact/>} />   
      </Routes>
  

    </Router>
    
    </>
  );
}

export default App;
