import React from 'react';
import './App.css';
import DietaryRestrictionsSearchBar from './components/DietaryRestrictionsSearchBar';
import MealSizeSelection from './components/MealSizeSelection';
import PriceSelection from './components/PriceSelection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// TODO: implement page structure

import { Login } from './Login';
import { CreateAccount } from './CreateAccount';
import { Preferences } from './Preferences';

function App() {
  return (
    <Router>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }} className="App">
      <Routes>
        <Route path='/' element={<Login />} exact/>
        <Route path='/preferences' element={<Preferences />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
