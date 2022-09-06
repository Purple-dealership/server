'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const carSchema = new Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  car_img: { type: String, required: false },
  cylinders: { type: Number, required: false },
  highway_mpg: { type: Number, required: false },
  city_mpg: { type: Number, required: false },
  combination_mpg: { type: Number, required: false },
  drive: { type: String, required: false },
  transmission: { type: String, required: false },
  class: { type: String, required: false },
  trim: { type: String, required: false },
  displacement: { type: Number, required: false },
  fuel_type: { type: String, required: false },
});

const CarModel = mongoose.model('Cars', carSchema);

module.exports = CarModel; 
