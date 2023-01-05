import {React, useState} from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import API from "../API"

export const DisplayChoice = () => {
    // jump between pages
    let nav = useNavigate();

    //initial state of food recommendation
    const foodInit = {
        // Information from webparser
        food: "foodName",
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

    //send user back to preferences page
    //TODO: Resend user data to preferences component
    const handleNewOrder = () => {
        nav("/preferences");
    }

    return (
        <>
            <div class="container" id="prefbox">
                <h3>We Would Recommend...</h3>

                <br></br>
                <h2>{foodData.food} (${foodData.price})</h2>
                <br></br>

                <table id="nutritionData">
                    <tr>
                        <td><b>Calories: </b></td>
                        <td> {foodData.cal} </td>
                    </tr>
                    <tr>
                        <td><b>Calories from Fat: </b></td>
                        <td> {foodData.calFromFat} </td>
                    </tr>
                    <tr>
                        <td><b>Total Fat: </b></td>
                        <td> {foodData.totFat} (DV: {foodData.totFatDV})</td>
                    </tr>
                    <tr>
                        <td><b>Total Carbs: </b></td>
                        <td> {foodData.totCarb} (DV: {foodData.totCarbDV})</td>
                    </tr>
                    <tr>
                        <td><b>Saturated Fat: </b></td>
                        <td> {foodData.satFat} (DV: {foodData.satFatDV})</td>
                    </tr>
                    <tr>
                        <td><b>Dietary Fiber: </b></td>
                        <td> {foodData.dietaryFiber} (DV: {foodData.dietaryFiberDV})</td>
                    </tr>
                    <tr>
                        <td><b>Trans Fat: </b></td>
                        <td> {foodData.transFat} (DV: {foodData.transFatDV})</td>
                    </tr>
                    <tr>
                        <td><b>Sugars: </b></td>
                        <td> {foodData.sugars} (DV: {foodData.sugarsDV})</td>
                    </tr>
                    <tr>
                        <td><b>Cholesterol: </b></td>
                        <td> {foodData.cholesterol} (DV: {foodData.cholesterolDV})</td>
                    </tr>
                    <tr>
                        <td><b>Protein: </b></td>
                        <td> {foodData.protein} (DV: {foodData.proteinDV})</td>
                    </tr>
                    <tr>
                        <td><b>Sodium: </b></td>
                        <td> {foodData.sodium} (DV: {foodData.sodiumDV})</td>
                    </tr>
                </table>

                <br></br>

                <div>
                <button>Re-Generate a New Recommendation</button>
                <button onClick={handleNewOrder}>Start a New Order</button>

                </div>
            </div>  
        </>
    )
}