const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema(
    {
        Number: {
            type: String,
            required: [false, 'idk']
        },
        Color: {
            type: String,
            required: [false, 'idk as well']
        }
    }
);

const Test = mongoose.model('tests', TestSchema);
module.exports = Test;