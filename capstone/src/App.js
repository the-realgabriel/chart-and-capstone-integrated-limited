import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './content/landing';
import About from './content/about';
import Govern from './content/govern';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Routes>

         <Route path="/" element={<Landing/>} />
         <Route path="/about" element={<About/>} />
          <Route path="/govern" element={<Govern/>} />  
      </Routes>
  

    </Router>
    
    </>
  );
}

export default App;
