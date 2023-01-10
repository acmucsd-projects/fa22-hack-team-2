const mongoose = require('mongoose');

<<<<<<< HEAD
const userSchema = new mongoose.Schema(
=======
const usersSchema = new mongoose.Schema(
>>>>>>> origin/api-routes
    {
        username: {
            type: String,
            required: true,
        },
<<<<<<< HEAD

=======
>>>>>>> origin/api-routes
        password: {
            type: String,
            required: true,
        },
<<<<<<< HEAD

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
=======
>>>>>>> origin/api-routes
    }

)

<<<<<<< HEAD
const User = mongoose.model('user', userSchema);

module.exports = User;
=======
const Users = mongoose.model('users',usersSchema);

module.exports = Users;
>>>>>>> origin/api-routes
