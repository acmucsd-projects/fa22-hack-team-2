const mongoose = require('mongoose');
import orderHistory from orderHistory;

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
            type: [orderHistory],
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