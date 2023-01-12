import React, { useState } from "react";
import "./style.css";
import DietaryRestrictionsSearchBar from '../components/DietaryRestrictionsSearchBar';
import MealSizeSelection from '../components/MealSizeSelection';
import PriceSelection from '../components/PriceSelection';
import { Link, useLocation, useNavigate } from "react-router-dom"
import API from "../API"

const MOCK_USER = "mockuser";

export const Preferences = () => {
    let nav = useNavigate();
    
    let loggedInUsername = useLocation().state.username;
    let loggedIn = (loggedInUsername != "");
    
    const emptyPreferences = {
        dietaryRestrictions: [String],
        mealSize: "",
        maxBudget: 0,
    };

    // FIXME: preferences is updated only the value of the last change rather than
    // the current state caused by changing a component
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

    const handleClick = async(e) => {
        const payload = {
            username: loggedInUsername,
            dietaryRestrictions: preferences.dietaryRestrictions,
            mealSize: preferences.mealSize,
            maxBudget: preferences.maxBudget
        }
        console.log("loggedIn: " + loggedIn);
        console.log("loggedInUsername: " + loggedInUsername);
        console.log("preferences: " );
        console.log(preferences);
        if (loggedIn) {
            await API.updatePreferences(payload);
            console.log("successfully updated preferences");
        }
        // nav("/display-choice", {state:{preferences: preferences, username: loggedInUsername}});
    }

    // TODO: load preferences if user is logged in
    return (
        <form>
            <DietaryRestrictionsSearchBar 
                parentCallback={handleDietaryRestrictionsCallback} 
                data={[{loggedInUsername: loggedInUsername}, {loggedIn: loggedIn}]}/>
            <br></br>
            <MealSizeSelection 
                parentCallback={handleMealSizeCallback} 
                data={[{loggedInUsername: loggedInUsername}, {loggedIn: loggedIn}]} />
            <br></br>
            <PriceSelection 
                parentCallback={handleMaxBudgetCallback} 
                data={[{loggedInUsername: loggedInUsername}, {loggedIn: loggedIn}]} />
            <Link to="/display-choice" state={{preferences: preferences, username: loggedInUsername}}><button onClick={handleClick}> Generate choice </button></Link>
            {/* <button onClick={handleClick}> Generate choice </button> */}
        </form>
    )
}