const mongoose = require('mongoose');

// Schema to define a previous order
const historySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        meal: {
            type: String,
            required: true,
        },

        date: {
            type: Date,
            default:Date.now,
            required: true,
        },

        //TODO: Get location schema here
        location: {
            type: String,
            required: true,
        }
    }

)

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },

        password: {
            type: String,
            required: true,
        },
        
        //Array of previous orders
        history: {
            type: [historySchema],
            required: false,
        },

        //Nuts, seafood, etc.
        allergens: {
            type: [String],
            required: true,
        },

        //List of dietary restrictions (vegetarian, vegan, etc.)
        restrictions: {
            type: [String],
            required: true,
        }

    }

)

const User = mongoose.model('user', userSchema);

module.exports = User;