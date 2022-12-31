const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const config = require("./config");
const cors = require("cors");


//const usersRouter = require('./routes/users');
const usersRouter = require('./routes/users');

const app = express();
app.use(cors());
app.use(express.json())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', usersRouter);

mongoose.connect(config.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true }).then(() => {
    console.log("hello");
  console.log('Connected to MongoDB database');
});

app.listen(config.PORT, () => {
  console.log("server start");
});

module.exports = app;

