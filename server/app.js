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
app.use(express.json());

app.use(express.urlencoded({extended: true}));

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log('Server started on port ' + process.env.PORT);
})
app.use('/users', usersRouter);

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true }).then(() => {
console.log('Connected to MongoDB database');
});

/*

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.use('/routes', usersRouter);

app.listen(config.PORT, () => {
  console.log("server start");
});

mongoose.connect(config.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB database');
});

module.exports = app;

*/
