import React from 'react';
import './App.css';
import DietaryRestrictionsSearchBar from './components/DietaryRestrictionsSearchBar';
import MealSizeSelection from './components/MealSizeSelection';
import PriceSelection from './components/PriceSelection';

// TODO: implement page structure

import { Login } from './Login';
import { CreateAccount } from './CreateAccount';

function App() {
  return (
    // <div className="App">
    //   <body>
    //     text above DRSB
    //     <DietaryRestrictionsSearchBar />
    //     text below DRSB
    //     text above MSS
    //     <MealSizeSelection />
    //     text below MSS
    //     text above PS
    //     <PriceSelection />
    //     text below PS
    //   </body>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }} className="App">
      <Login />
    </div>
  );
}

export default App;
