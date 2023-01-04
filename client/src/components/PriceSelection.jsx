import React from "react";
import "./Components.css";
import CurrencyInput from 'react-currency-input-field';
import { useState } from "react";
import { Link } from "react-router-dom"

const DEFAULT_MAX_BUDGET = 0;

/* Single selection for Meal Size in Preferences. Options are {Meal, Snack, Drink}.
 * MIRO: https://miro.com/app/board/uXjVPNa6HSs=/?moveToWidget=3458764537012001562&cot=14
 */
const PriceSelection = (props) => {
    
    // Capture user-specified dietary restrictions, initially none
    // TODO: load initial elements from user data, if extant
    const [maxBudget, setMaxBudget] = useState(DEFAULT_MAX_BUDGET);
    // let state = {
    //     maxBudget: DEFAULT_MAX_BUDGET,
    // }

    const handleChange = (value) => { 
        console.log('PS handleChange() called');
        console.log(value);
        setMaxBudget(value);
        console.log(maxBudget);   // Contains state preceding rerender
  
        console.log(this.props);
        props.parentCallback(maxBudget);
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
            {/* <Link to="/"><button> to home! </button></Link> */}
        </div>
    );
}
export default PriceSelection;