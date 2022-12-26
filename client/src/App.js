import React from 'react';
import './App.css';
import DietaryRestrictionsSearchBar from './PreferencesComponents';
import { MultiSelect } from 'multiselect-dropdown-react';


function App() {
  return (
    <div className="App">
      <body>
        text above DRSB
        <DietaryRestrictionsSearchBar />
        text below DRSB
      </body>
    </div>
  );
}

export default App;
