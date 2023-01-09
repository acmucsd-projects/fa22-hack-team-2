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
    }

)

const Users = mongoose.model('users',usersSchema);

module.exports = Users;