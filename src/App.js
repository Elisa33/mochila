import React from 'react';
import './App.css';
import Nabvar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nabvar/>
      
    </Router>
  );
}

export default App;
