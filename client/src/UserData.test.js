import request from "supertest";
import { expect } from "chai";
import dotenv from "dotenv";
dotenv.config();

import App from "../../App.js";
import UserData from "../../models/userData.model.js"

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true }).then(() => {
        console.log('Connected to MongoDB database');
    }
);

mongoose.connection
    .once('open', () => console.log('Connected."'))
    .on('error', (error) => {
        console.warn('Error : ', error);
    });

    beforeEach((done) => {
        mongoose.connection.collections.users.drop(() => {
            done();
    });
});

describe("Add user", () => {
    
});