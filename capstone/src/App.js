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
      <Switch>
        <Route path="/" element={<Landing/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Govern" element={<Govern/>} />    
      </Switch>
    </Router>
    </>
  );
}

export default App;
