const mongoose = require("mongoose");

const DiningSchema = new mongoose.Schema(
    {
        // Information from webparser
        food: {
            type: String,
            required: [true, "Food name is required"]
        },

        cal: {
            type: Number,
            required: [false, "Food calories is required"]
        },

        calFromFat: {
            type: Number,
            required: [false, "calories from fat is required"]
        },

        totFat: {
            type: Number,
            required: [false, "total fats is required"]
        },

        totFatDV: {
            type: Number,
            required: [false, "total fat daily value is required"]
        },

        totCarb: {
            type: Number,
            required: [false, "total carbs is required"]
        },

        totCarbDV: {
            type: Number,
            required: [false, "total carb daily value is required"]
        },

        satFat: {
            type: Number,
            required: [false, "satured fat is required"]
        },

        satFatDV: {
            type: Number,
            required: [false, "saturated fat daily value is required"]
        },

        dietaryFiber: {
            type: Number,
            required: [false, "dietary fiber is required "]
        },

        dietaryFiberDV: {
            type: Number,
            required: [false, "dietary fiber daily value is required"]
        },

        transFat: {
            type: Number,
            required: [false, "trans fat is required"]
        },

        transFatDV: {
            type: Number,
            required: [false, "trans fat daily value is required"]
        },

        sugars: {
            type: Number,
            required: [false, "sugars is required"]
        },

        sugarsDV: {
            type: Number,
            required: [false, "sugars daily value is required"]
        },

        cholesterol: {
            type: Number,
            required: [false, "cholesterol is required"]
        },

        cholesterolDV: {
            type: Number,
            required: [false, "cholesterol daily value is required"]
        },

        protein: {
            type: Number,
            required: [false, "protein is required"]
        },

        proteinDV: {
            type: Number,
            required: [false, "protein daily value is required"]
        },

        sodium: {
            type: Number,
            required: [false, "sodium is required"]
        },

        sodiumDV: {
            type: Number,
            required: [false, "sodium daily value is required"]
        },

        restrictions: {
            type: [String],
            required: [false, "restrictions are required"]
        },
        // implement price if possible
        price: {
            type: Number,
            required: false
        },
    }
);

const Food = mongoose.model("Food", DiningSchema);
module.exports = Food;