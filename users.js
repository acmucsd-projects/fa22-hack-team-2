const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        //how do I link schemas like the order history table?
        history: {
            type: String,
            required: false,
        }
    }

)

const Users = mongoose.model('users',usersSchema);

module.exports = Users;