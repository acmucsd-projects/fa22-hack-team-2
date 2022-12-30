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
            required: [true, "Food calories is required"]
        },

        calFromFat: {
            type: Number,
            required: [true, "calories from fat is required"]
        },

        totFat: {
            type: Number,
            required: [true, "total fats is required"]
        },

        totFatDV: {
            type: Number,
            required: [true, "total fat daily value is required"]
        },

        totCarb: {
            type: Number,
            required: [true, "total carbs is required"]
        },

        totCarbDV: {
            type: Number,
            required: [true, "total carb daily value is required"]
        },

        satFat: {
            type: Number,
            required: [true, "satured fat is required"]
        },

        satFatDV: {
            type: Number,
            required: [true, "saturated fat daily value is required"]
        },

        dietaryFiber: {
            type: Number,
            required: [true, "dietary fiber is required "]
        },

        dietaryFiberDV: {
            type: Number,
            required: [true, "dietary fiber daily value is required"]
        },

        transFat: {
            type: Number,
            required: [true, "trans fat is required"]
        },

        transFatDV: {
            type: Number,
            required: [true, "trans fat daily value is required"]
        },

        sugars: {
            type: Number,
            required: [true, "sugars is required"]
        },

        sugarsDV: {
            type: Number,
            required: [true, "sugars daily value is required"]
        },

        cholesterol: {
            type: Number,
            required: [true, "cholesterol is required"]
        },

        cholesterolDV: {
            type: Number,
            required: [true, "cholesterol daily value is required"]
        },

        protein: {
            type: Number,
            required: [true, "protein is required"]
        },

        proteinDV: {
            type: Number,
            required: [true, "protein daily value is required"]
        },

        sodium: {
            type: Number,
            required: [true, "sodium is required"]
        },

        sodiumDV: {
            type: Number,
            required: [true, "sodium daily value is required"]
        },

        allergens: {
            type: [String],
            required: [true, "allergens is required"]
        },
        restrictions: {
            type: [String],
            required: [true, "restrictions are required"]
        }
        // implement price if possible
        price: {
            type: Number,
            required: false
        },
    }
);

const Food = mongoose.model("Food", DiningSchema);
module.exports = Food;