'use strict';

//REQUIRE
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Car = require('./model.js');
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
  res.send('test received. all systems go');
});
app.get('/cars', getCars);
app.post('/cars', postCar);
app.delete('/cars/:id', deleteCar);
app.put('/cars/:id', putCar);

// HANDLER
async function getCars(req, res, next) {
  try {
    let results = await Car.find();
    res.status(200).send(results);
  } catch (err) {
    next(err);
  }
}

async function postCar(req, res, next) {
  try {
    let results = await Car.create(req.body);
    res.status(200).send(results);
  } catch (err) {
    next(err);
  }
}

async function deleteCar(req, res, next) {
  try {
    const id = req.params.id;
    let results = await Car.findByIdAndDelete(id);
    res.status(200).send(results);
  } catch (err) {
    next(err);
  }
}

async function putCar(req, res, next) {
  try {
    const id = req.params.id;
    const updatedCar = req.body;
    let results = await Car.findByIdAndUpdate(id, updatedCar, {
      new: true,
      overwrite: true,
    });
    res.status(200).send(results);
    res.status(200).send('put');
  } catch (err) {
    next(err);
  }
}

//CLASSES

//ERRORS
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.get('*', (wreck, rez) => {
  rez.send("404. you're out of gas.");
});

//LISTEN
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
