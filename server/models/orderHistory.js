const mongoose = require('mongoose');

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
            required: true,
        },
        //again, how to link schemas with one another?
        location: {
            type: String,
            required: true,
        }
    }

)

const orderHistory = mongoose.model('order-history',historySchema);

module.exports = orderHistory;