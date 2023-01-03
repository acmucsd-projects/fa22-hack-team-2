import React, { useState } from "react";
import "./style.css";
import DietaryRestrictionsSearchBar from '../components/DietaryRestrictionsSearchBar';
import MealSizeSelection from '../components/MealSizeSelection';
import PriceSelection from '../components/PriceSelection';

export const Preferences = () => {
    const emptyPreferences = {
        dietaryRestrictions: [String],
        mealSize: "",
        maxBudget: 0,
    };

    const [preferences, updatePreferences] = useState(emptyPreferences);
    
    // const handleChange = (e) => {
    //     updatePreferences({
    //         ...preferences,

    //         [e.target.name]: e.target.value.trim(),
    //     });
    // };

    const handleDietaryRestrictionsCallback = (childData) => {
        preferences.dietaryRestrictions = childData;
        console.log(preferences);
    }

    const handleMealSizeCallback = (childData) => {
        preferences.mealSize = childData;
        console.log(preferences);
    }

    const handleMaxBudgetCallback = (childData) => {
        preferences.maxBudget = childData;
        console.log(preferences);
    }

    return (
        <form>
            <script>
                console.log(preferences);
            </script>
            <DietaryRestrictionsSearchBar parentCallback = {handleDietaryRestrictionsCallback} />
            <br></br>
            <MealSizeSelection parentCallback = {handleMealSizeCallback} />
            <br></br>
            <PriceSelection parentCallback = {handleMaxBudgetCallback} />
        </form>
    )
}