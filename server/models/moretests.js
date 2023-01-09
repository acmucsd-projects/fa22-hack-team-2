const mongoose = require('mongoose');
const TestSchema = require("./test");

const moreTestsSchema = new mongoose.Schema(
    {
        Number: {
            type: String,
            required: [false, 'idk']
        },
        Color: {
            type: String,
            required: [false, 'idk as well']
        },
        Link: {
            type: TestSchema.schema,
            required: [false, 'idk either']
        },
        Ref: {
            type: String,
            required: [false, 'what goes here?']
        }
    }
);

const moreTests = mongoose.model('moretests', moreTestsSchema);
module.exports = moreTests;