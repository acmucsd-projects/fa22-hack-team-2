const mongoose = require("mongoose");

const DiningSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Food name is required"]
        },

        description: {
            type: String,
            required: [true, "Food description is required"]
        },

        calories: {
            type: Number,
            required: [true, "Food calories is required"]
        },

        protein: {
            type: Number,
            required: [true, "Food proteins is required"]
        },

        fat: {
            type: Number,
            required: [true, "Food fats is required"]
        },

        carb: {
            type: Number,
            required: [true, "Food carbs is required"]
        },

        vegetarian: {
            type: Boolean,
            required: [true, "Food vegetarian is required"]
        },

        vegan: {
            type: Boolean,
            required: [true, "Food vegan is required"]
        },

        location: {
            type: [LocationSchema],
            required: [true, "Food location is required"]
        },

        phase: {
            type: String,
            required: [true, "Food phase is required"]
        },

        price: {
            type: Number,
            required: [true, "Food price is required"]
        }
    }
);

const Food = mongoose.model("Food", DiningSchema);
module.exports = Food;