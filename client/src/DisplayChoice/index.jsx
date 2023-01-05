import {React, useState} from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import API from "../API"

export const DisplayChoice = () => {
    // jump between pages
    let nav = useNavigate();

    //initial state of food recommendation
    const foodInit = {
        // Information from webparser
        food: "",
        cal: 0,
        calFromFat: 0,
        totFat: 0,
        totFatDV: 0,
        totCarb: 0,
        totCarbDV: 0,
        satFat: 0,
        satFatDV: 0,
        dietaryFiber: 0,
        dietaryFiberDV: 0,
        transFat: 0,
        transFatDV: 0,
        sugars: 0,
        sugarsDV: 0,
        cholesterol: 0,
        cholesterolDV: 0,
        protein :0,
        proteinDV: 0,
        sodium: 0,
        sodiumDV: 0,
        restrictions: [],
        price: 0,
    };

    //set initial state for foodData object
    const [foodData, updateFormData] = useState(foodInit);


    return (
        <div class="container">
            <h3>We Would Recommend...</h3>

            <h2>{foodData.food}</h2>

            //TODO: Add table with nutritional information


            

        </div>
    )
}