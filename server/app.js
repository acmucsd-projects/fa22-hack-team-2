
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const config = require("./config");
const cors = require("cors");


//const usersRouter = require('./routes/users');
const usersRouter = require('./routes/users');
const FoodRouter = require('./routes/food');
const LocationRouter = require('./routes/location');
const app = express();

app.use(cors());
app.use(express.json())

dotenv.config();

app.use(express.json({limit: '50mb'}));
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
//app.use(express.urlencoded({ limit: '50mb' }));
app.use('/api', LocationRouter)
app.use('/', FoodRouter);
app.use('/users', usersRouter);

app.use('/api', usersRouter);

mongoose.connect(config.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB database');
});

//Getting rid of .listen fixed port in use issue?
app.listen(config.PORT, () => {
  console.log('Server started on Port ' + config.PORT);
});

module.exports = app;

