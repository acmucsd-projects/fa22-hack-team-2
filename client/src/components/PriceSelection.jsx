import React from "react";
import "./Components.css";
import CurrencyInput from 'react-currency-input-field';
import { useState } from "react";
 
/* Single selection for Meal Size in Preferences. Options are {Meal, Snack, Drink}.
 * MIRO: https://miro.com/app/board/uXjVPNa6HSs=/?moveToWidget=3458764537012001562&cot=14
 */
const PriceSelection = () => {
    
    // Capture user-specified dietary restrictions, initially none
    // TODO: load initial elements from user data, if extant
    const [selectedOption, setselectedOption] = useState([]);
    let state = {
        selectedOption: []
    }

    // Parameter is an array with elements {value: 'vegetarian', label: 'Vegeterian}
    let handleChange = (selectedOptionOnChange) => { 
        console.log('PS handleChange() called');
        console.log(selectedOptionOnChange);
        setselectedOption(selectedOptionOnChange);
        console.log('PS state: ');
        console.log(selectedOption);   // Contains state before the update at this point
  
    }

    return (
        <div className="container">
            <h1 id="preference_title">Budget</h1>
            <CurrencyInput
                id="currency_input"
                placeholder="Specify maximum cost"
                allowNegativeValue={false}
                prefix="$"
                step={1}
                onValueChange={handleChange}
                />
        </div>
    );
}
export default PriceSelection;