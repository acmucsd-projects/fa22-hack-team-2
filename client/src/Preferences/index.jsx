import React, { useState } from "react";
import "./style.css";
import DietaryRestrictionsSearchBar from '../components/DietaryRestrictionsSearchBar';
import MealSizeSelection from '../components/MealSizeSelection';
import PriceSelection from '../components/PriceSelection';
import { Link } from "react-router-dom"
import API from "../API"

export const Preferences = () => {
    let loggedIn = false;       // TODO: initialize, link login or guest state
    let loggedInUsername = "";  // TODO: initialize
    
    const emptyPreferences = {
        dietaryRestrictions: [String],
        mealSize: "",
        maxBudget: 0,
    };

    const [preferences, updatePreferences] = useState(emptyPreferences);

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

    const handleClick = async(e) => {
        const payload = {
            username: loggedInUsername,
            dietaryRestrictions: preferences.dietaryRestrictions,
            mealSize: preferences.mealSize,
            maxBudget: preferences.maxBudget
        }
        console.log("api call");
        await API.updatePreferences(payload);
        console.log("successfully updated preferences for " + loggedInUsername + " (in handleClick body)");
        // DB update if loggedIn
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
            <Link to="/choice"><button onClick={handleClick}> Generate choice </button></Link>
        </form>
    )
}