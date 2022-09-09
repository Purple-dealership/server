'use strict';

//REQUIRE
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Car = require('./model.js');
const { default: axios } = require('axios');
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

app.get('/api', getApi);

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

async function getApi(req, res, next) {
  try {
    let config = {
      headers: {
        'X-Api-Key': 'BeB7iwBCS4jZGXGcEa0IuA==PaXu6WFTumbMn9Cq',
      },
    };
    let url =
      'https://api.api-ninjas.com/v1/cars?limit=1&model=civic&year=2002&make=honda';
    let result = await axios.get(url, config);
    console.log(req.query);
    console.log(result.data);
    res.status(200).send(result.data);
  } catch (err) {
    next(err);
  }
}

async function putCar(req, res, next) {
  try {
    const id = req.params.id;
    const updatedCar = req.body;
    console.log(updatedCar);
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
