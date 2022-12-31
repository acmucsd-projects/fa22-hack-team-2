const mongoose = require("mongoose");

const UserDataSchema = new mongoose.Schema(
    {
        "title": "order",
        "required": [
            "_id",
            "orderName",
            "orderCost",
            "orderDate",
            "userRating"
        ],
        "properties": {
            "_id": { "bsonType": "objectId" },
            "orderName": { 
                "bsonType": "string",
                "expression": ""
            },
            "orderCostCents": { 
                "bsonType": "int",
                "minimum": 0
            },
            "orderDate": { 
                "bsonType": "string", 
                "expression": "date" 
            },
            "userRating": { 
                "bsonType": "int",
                "minimum": 1, 
                "maximum": 5 
            }
        }
    }
);