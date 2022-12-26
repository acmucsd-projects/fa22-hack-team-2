import React from "react";
import "./PreferencesComponents.css";
// import MultiSelect from 'multiselect-dropdown-react';
import Select from 'react-select'
// const { useEffect, useState, useRef } = React;
 

/* Search bar for Dietary Restrictions in Preferences. Automatic drop shows terms with closes correspondence. 
 * Boxes under search bar indicate selected restrictions, and can be clicked to unselect restrictions. 
 * MIRO: https://miro.com/app/board/uXjVPNa6HSs=/?moveToWidget=3458764537011712903&cot=14
 */
const DietaryRestrictionsSearchBar = () => {        // NOTE: react-select is almost identical in function 
                                                    // https://react-select.com/home
    
    // Mock list of dietary restrictions
    let dietaryRestrictions = [{value: 'vegan', label: 'Vegan'},
        {value: 'vegetarian', label: 'Vegeterian'},
        {value: 'nut_allergy', label: 'Nut Allergy'},
        {value: 'lactose_intolerant', label: 'Lactose Intolerant'},
        {value: 'gluten_intolerant', label: 'Gluent Intolerant'},
        {value: 'Keto', label: 'Keto'}];

    /*let updateSelection = (selectedList, removedItem) => {
        console.log('onSelect() called');
    }

    let updateRemoval = (selectedList, removedItem) => {
        console.log('onRemove() called');
    }*/

    return (
        <div className="dietary-restrictions">
            <h1>Dietary Restrictions</h1>
            <Select
                options={dietaryRestrictions}
                isMulti={true} />
        </div>
        
    );
}
export default DietaryRestrictionsSearchBar;

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
// export default MealSizeSelection;