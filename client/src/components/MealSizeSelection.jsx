import React from "react";
import "./Components.css";
import Select from 'react-select'
import { useState } from "react";
 
/* Single selection for Meal Size in Preferences. Options are {Meal, Snack, Drink}.
 * MIRO: https://miro.com/app/board/uXjVPNa6HSs=/?moveToWidget=3458764537012001562&cot=14
 */
const MealSizeSelection = (props) => {

    // TODO: load initial elements from user data, if extant
    const [selectedOption, setselectedOption] = useState([]);

    // Mock list of meal size options
    const mealSizeOptions = [{value: 'large_meal', label: 'Large Meal'},
        {value: 'small_meal', label: 'Small Meal'},
        {value: 'snack', label: 'Snack'},
        {value: 'beverage', label: 'Beverage'}];

    // Parameter is an array with elements {value: 'vegetarian', label: 'Vegeterian}
    const handleChange = (selectedOptionOnChange) => { 
        console.log('MSS handleChange() called');
        console.log(selectedOptionOnChange);
        setselectedOption(selectedOptionOnChange);
        console.log(selectedOption);   // Contains state preceding rerender
    
        props.parentCallback(selectedOption);
    }

    return (
        <div className="container">
            <h1 id="preference_title">Meal Size</h1>
            {/* select one among meal size options */}
            <Select
                id="select"
                options={mealSizeOptions}
                placeholder="Specify meal size"
                isMulti={false}
                onChange={handleChange} />
        </div>
    );
}
export default MealSizeSelection;