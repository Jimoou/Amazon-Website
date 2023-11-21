const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log('Connected to the database');
  } catch (err) {
    console.error(err);
  }
};

connectDB();

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// require apis
const productRoutes = require('./routes/product');

app.use('/api', productRoutes);

// 서버 시작
const startServer = async () => {
  try {
    await app.listen(3000);
    console.log('Listening on PORT', 3000);
  } catch (err) {
    console.error(err);
  }
};

startServer();
