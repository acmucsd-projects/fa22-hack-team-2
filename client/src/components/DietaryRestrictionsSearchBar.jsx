import React from "react";
import "./Components.css";
// import MultiSelect from 'multiselect-dropdown-react';
import Select from 'react-select'
import { useState } from "react";
// const { useEffect, useState, useRef } = React;
 

/* Multiselect search bar for Dietary Restrictions in Preferences. Automatic drop shows terms with closes correspondence. 
 * Boxes under search bar indicate selected restrictions, and can be clicked to unselect restrictions. 
 * MIRO: https://miro.com/app/board/uXjVPNa6HSs=/?moveToWidget=3458764537011712903&cot=14
 */
const DietaryRestrictionsSearchBar = (props) => {        // NOTE: react-select is almost identical in function 
                                                    // https://react-select.com/home
    
    // TODO: GET dietary restrictions to load into the multiselect, if logged in
    let [selectedOptions, setSelectedOptions] = useState([]);

    // TODO: Replace mock list of dietary restrictions
    const dietaryRestrictions = [{value: 'vegan', label: 'Vegan'},
        {value: 'vegetarian', label: 'Vegetarian'},
        {value: 'contains_dairy', label: 'Contains Dairy'},
        {value: 'tree_nuts_allergy', label: 'Contains Gluten'},
        {value: 'peanut_allergy', label: 'Contains Wheat'},
        {value: 'gluten_intolerant', label: 'Contains TreeNuts'}];

    // Parameter is an array with elements {value: 'vegetarian', label: 'Vegeterian}
    const handleChange = (selectedOptionsOnChange) => { 
        // Locally store selection
        console.log('DSRB handleChange() called');
        console.log(selectedOptionsOnChange)
        selectedOptions = selectedOptionsOnChange
        console.log(selectedOptions)



        props.parentCallback(selectedOptions);
    }

    // TODO: add rounded rectangle outline to component, add width/height scale constraints
    return (
        <div className="container">
            <h1 id="preference_title">Dietary Restrictions</h1>
            <Select
                id="select"
                options={dietaryRestrictions}
                placeholder="Add dietary restrictions"
                isMulti={true}
                onChange={handleChange} />
        </div>
        
    );
}
export default DietaryRestrictionsSearchBar;