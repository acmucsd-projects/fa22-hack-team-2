
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const usersRouter = require('./routes/users');
const FoodRouter = require('./routes/food');
const TestRouter = require('./routes/routerTest');
const MoreTestsRouter = require('./routes/routermoreTests');
const LocationRouter = require('./routes/location');
const app = express();

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log('Server started on port ' + process.env.PORT);
})

console.log(process.env.DB_URL);

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true }).then(() => {
console.log('Connected to MongoDB database');
});

app.use(express.json({limit: '50mb'}));
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use('/api', LocationRouter)
app.use('/', MoreTestsRouter);
app.use('/',TestRouter);
app.use('/', FoodRouter);
app.use('/users', usersRouter);

module.exports = app;

