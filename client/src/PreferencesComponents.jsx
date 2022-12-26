import React from "react";
import "./PreferencesComponents.css";
import MultiSelect from 'multiselect-dropdown-react';
// const { useEffect, useState, useRef } = React;
 

/* Search bar for Dietary Restrictions in Preferences. Automatic drop shows terms with closes correspondence. 
 * Boxes under search bar indicate selected restrictions, and can be clicked to unselect restrictions. 
 * MIRO: https://miro.com/app/board/uXjVPNa6HSs=/?moveToWidget=3458764537011712903&cot=14
 */
const DietaryRestrictionsSearchBar = () => {        // NOTE: Multiselect-react-dropdown is similar in function 
                                                    // https://www.npmjs.com/package/multiselect-react-dropdown
    // Hander for []                                // But does not have the search function
    // function handleChange(e) {
        
    //     // TODO: implement handler
    // }
    
    let state = {
        dietaryRestrictions: 
        [{name: 'Vegan', id: 'V'},
        {name: 'Vegeterian', id: 'VGT'},
        {name: 'Nut Allergy', id: 'NA'},
        {name: 'Lactose Intolerant', id: 'L'},
        {name: 'Gluten Intolerant', id: 'G'},
        {name: 'Keto', id: 'K'}]
    };

    let updateSelection = (selectedList, removedItem) => {
        console.log('onSelect() called');
    }

    let updateRemoval = (selectedList, removedItem) => {
        console.log('onRemove() called');
    }

    return (
        <div className="dietary-restrictions">
            <h1>Dietary Restrictions</h1>
            <MultiSelect
                options={state.dietaryRestrictions}
                onSelect={updateSelection}
                onRemove={updateRemoval}
                displayValue="name" />
        </div>
        
    );
}
export default DietaryRestrictionsSearchBar;

/* Mock list of DietaryRestrictions */
// const dietaryRestrictions = [
//     {label: 'Vegan', value: 'V'},
//     {label: 'Vegeterian', value: 'VGT'},
//     {label: 'Nut Allergy', value: 'NA'}
// ];

// /* Single selection for Meal Size in Preferences. Options are {Meal, Snack, Drink}.
//  * MIRO: https://miro.com/app/board/uXjVPNa6HSs=/?moveToWidget=3458764537012001562&cot=14
//  */
// const MealSizeSelection = () => {
//     return (
//         <div className="meal-size-selection">
//             {/* select one among meal size options */}
//         </div>
//     );
// }