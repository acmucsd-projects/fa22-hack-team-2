import React, { useState } from "react";
import "./style.css";
import DietaryRestrictionsSearchBar from '../components/DietaryRestrictionsSearchBar';
import MealSizeSelection from '../components/MealSizeSelection';
import PriceSelection from '../components/PriceSelection';
import { Link, useLocation } from "react-router-dom"
import API from "../API"

const MOCK_USER = "mockuser";

export const Preferences = () => {
    let loggedInUsername = useLocation().state.username;  // TODO: initialize
    let loggedIn = (loggedInUsername != "");       // TODO: initialize, link login or guest state
    

    const emptyPreferences = {
        dietaryRestrictions: [String],
        mealSize: "",
        maxBudget: 0,
    };

    const [preferences, updatePreferences] = useState(emptyPreferences);

    const handleDietaryRestrictionsCallback = (childData) => {
        preferences.dietaryRestrictions = childData.map(pair => pair.label);
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

    // FIXME: preferences is updated only the value of the last change rather than
    // the current state caused by changing a component
    const handleClick = async(e) => {
        const payload = {
            username: loggedInUsername,
            dietaryRestrictions: preferences.dietaryRestrictions,
            mealSize: preferences.mealSize,
            maxBudget: preferences.maxBudget
        }
        console.log("logged in: " + loggedIn);
        console.log("api call with username: " + loggedInUsername);
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