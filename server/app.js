const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const usersRouter = require('./routes/users');

const app = express();

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

module.exports = app;

*/
