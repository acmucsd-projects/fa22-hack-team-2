const mongoose = require("mongoose");

const UserDataSchema = new mongoose.Schema(
    {
        "title": "user",
        "required": [
            "_id",
            "username",
            "password",
            "orderHistory"
        ],
        "properties": {
            "_id": { "bsonType": "objectId" },
            "username": {
                "bsonType": "string",
                "expression": "(([a-z])*([A-Z])*([0-9])*)*"
            },
            "password": { "bsonType": "string" },
            "orderHistory": { 
                "bsonType": "array",
                "items": "UserHistorySchema.json",
                "uniqueItems": true
            }
        }
    }
);