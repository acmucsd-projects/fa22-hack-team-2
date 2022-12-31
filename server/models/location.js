const mongoose = require("mongoose");
const FoodSchema = require("./dining");

const LocationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        }, 
        food: {
            type: [FoodSchema.schema],
            required: true
        }
    }
)

const Location = mongoose.model("Hall", LocationSchema); 
module.exports = Location;