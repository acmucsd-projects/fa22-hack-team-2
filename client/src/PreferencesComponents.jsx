import React from "react";
import ReactDOM from "react-dom";
import "./PreferencesComponents.css";
import { MultiSelect } from 'multiselect-dropdown-react';
const { useEffect, useState, useRef } = React;
 

/* Search bar for Dietary Restrictions in Preferences. Automatic drop shows terms with closes correspondence. 
 * Boxes under search bar indicate selected restrictions, and can be clicked to unselect restrictions. 
 * MIRO: https://miro.com/app/board/uXjVPNa6HSs=/?moveToWidget=3458764537011712903&cot=14
 */
const DietaryRestrictionsSearchBar = () => {        // NOTE: Multiselect-react-dropdown is similar in function 
                                                    // https://www.npmjs.com/package/multiselect-react-dropdown
    // Hander for []                                // But does not have the search function
    function handleChange(e) {
        
        // TODO: implement handler
    }
    
    {/*render() {
        <div className="dietaryRestrictions">
            return (        
                <Multiselect options={dietaryRestrictions} />
            );
        </div>
    }*/}


    return (
        <div className="dietary-restrictions">
            <h1>Dietary Restrictions</h1>
            <MultiSelect display="chip" value={dietaryRestrictions} options={dietaryRestrictions}>multiselect</MultiSelect>
            {/* 
            <div className="search">
                <TextField
                    id="outlined-basic"
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    label="Dietary restrictions"
                />
            </div>
            */}
            {/*// TODO: need to implement the data structure for storing dietary restriction options*/}
        </div>
        
    );
}
export default DietaryRestrictionsSearchBar;

/* Mock list of DietaryRestrictions */
const dietaryRestrictions = [
    {label: 'Vegan', value: 'V'},
    {label: 'Vegeterian', value: 'VGT'},
    {label: 'Nut Allergy', value: 'NA'}
];

/* Single selection for Meal Size in Preferences. Options are {Meal, Snack, Drink}.
 * MIRO: https://miro.com/app/board/uXjVPNa6HSs=/?moveToWidget=3458764537012001562&cot=14
 */
const MealSizeSelection = () => {
    return (
        <div className="meal-size-selection">
            // select one among meal size options
        </div>
    );
}

