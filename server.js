'use strict';

//REQUIRE
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Cars = require('./model.js');
require('dotenv').config();
const PORT = process.env.PORT || 3002;
mongoose.connect(process.env.DB_URL);

//USE
const app = express();
app.use(cors());
app.use(express.json());

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

//ROUTES 
app.get('/test', (req, res) => {
  res.send('test received. all systems go')
});


//CLASSES

//ERRORS
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.get('*', (wreck, rez) => {
  rez.send('404. you\'re out of gas.')
});

//LISTEN
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
