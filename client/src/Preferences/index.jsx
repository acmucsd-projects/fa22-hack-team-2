import React from "react";
import "./style.css";
import DietaryRestrictionsSearchBar from '../components/DietaryRestrictionsSearchBar';
import MealSizeSelection from '../components/MealSizeSelection';
import PriceSelection from '../components/PriceSelection';

export const Preferences = () => {
    return (
        <form>
            text above DRSB
            <DietaryRestrictionsSearchBar />
            text below DRSB
            text above MSS
            <MealSizeSelection />
            text below MSS
            text above PS
            <PriceSelection />
            text below PS
        </form>
    )
}