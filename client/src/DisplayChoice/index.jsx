import {React, useState} from "react";
import "./style.css";
import { useNavigate, useLocation } from "react-router-dom";
import API from "../API"
import { useEffect } from "react";

export const DisplayChoice = () => {
    const firstRender = useDetectFirstRender();
    
    let nav = useNavigate();

    let preferences = useLocation().state.preferences;
    let username = useLocation().state.username;

    
    let diningHalls = ["64Degrees", "CafeVentanas", "CanyonVistaMarketplace", 
        "ClubMed", "Foodworx", "OceanView", "Pines", "RestaurantsatSixthCollege", 
        "Roots", "The Bistro"];

    let [foodCandidates, setFoodCandidates] = useState([]);

    let [preferredFoods, setPreferredFoods] = useState([]);

    useEffect(() => {
        if (firstRender) {

            setPreferredFoods([]);
            
            console.log("preferences (in DisplayChoice): ");
            console.log(preferences);
            console.log(username);

            // Construct query based on preferences to acquire all foods satisfying prefs
            // e.g. /CafeVentanas?name=Avocado%20Toast
            for (let i in diningHalls) {
                let query = "/";
                query += diningHalls[i];
                query += "?";

                // Add restrictions filter
                for (let i = 0; i < preferences.dietaryRestrictions.length - 1; i++) {
                    query += ("r=" + preferences.dietaryRestrictions.at(i));
                    query += "&";
                }
                if (preferences.dietaryRestrictions.length > 0) {
                    query += ("r=" + preferences.dietaryRestrictions
                        .at(preferences.dietaryRestrictions.length - 1));
                }

                console.log(query);

                // Add satisfiable foods for the current dining hall
                API.getFoods(query).then((response) => {
                    console.log("response.data: ");
                    console.log(response.data);
                    for (let i in response.data) {
                        // Create deep copy of object - DOESNT SEEM TO FIX THE REFERENCE AFTER THIS BLOCK
                        preferredFoods.push(JSON.parse(JSON.stringify(response.data.at(i))));
                        console.log(preferredFoods); 
                        console.log(preferredFoods[0]); // FIXME: somehow this is defined in this scope, but undefined at the later log
                        // console.log(preferredFoods[0].food);

                        // hard work-around undefined value bug to generate a single option
                        updateFormData(preferredFoods[0].food);

                    }
                });
                console.log("preferredFoods[0], in loop scope: ");
                console.log(preferredFoods); // This displays all foods corresponding to its array indices, clearly correct
                console.log(preferredFoods[0]); // FIXME: This is somehow undefined
                // console.log(preferredFoods[0].food); // Can't be accessed since the former value is undefined
            }

            //console.log(preferredFoods);
            foodCandidates = preferredFoods;

            console.log("base is ");
            console.log(foodCandidates);
            console.log(typeof foodCandidates);
            console.log("0 is ");
            console.log(foodCandidates[0]);

            console.log("base is ");
            console.log(preferredFoods);
            console.log(typeof preferredFoods);
            console.log("0 is ");
            console.log(preferredFoods[0]);

            console.log("0 food is");
            // console.log(foodCandidates[0].food);
            // updateFormData(foodCandidates[0].food);
        }
    });

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
        nav("/preferences", {state:{username: username}});
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

export function useDetectFirstRender() {
    const [firstRender, setFirstRender] = useState(true);
  
    useEffect(() => {
      setFirstRender(false);
    }, []);
  
    return firstRender;
  }