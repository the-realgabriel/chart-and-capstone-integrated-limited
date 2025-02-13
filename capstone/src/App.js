import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './content/landing';
import About from './content/about';
import Govern from './content/govern';
import './App.css';

function App() {
  return (
    <>
    <Router>
        <Route path="/" element={<Landing/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/govern" element={<Govern/>} />    
    </Router>
    
    </>
  );
}

export default App;
