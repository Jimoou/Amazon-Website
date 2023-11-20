const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const User = require('./models/user');

dotenv.config();

const app = express();

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log('Connected to the database'))
  .catch((err) => console.error(err));

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json('Hello amazon clone');
});

app.post('/', (req, res) => {
  const user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;

  user
    .save()
    .then(() => res.json('successfully saved'))
    .catch((err) => res.json(err));
});

app
  .listen()
  .then(() => console.log('Listening on PORT', 3000))
  .catch((err) => console.log(err));
