import React from 'react';
import './App.css';
import DietaryRestrictionsSearchBar from './components/DietaryRestrictionsSearchBar';
import MealSizeSelection from './components/MealSizeSelection';
import PriceSelection from './components/PriceSelection';

// TODO: implement page structure

function App() {
  return (
    <div className="App">
      <body>
        text above DRSB
        <DietaryRestrictionsSearchBar />
        text below DRSB
        text above MSS
        <MealSizeSelection />
        text below MSS
        text above PS
        <PriceSelection />
        text below PS
      </body>
    </div>
  );
}

export default App;
