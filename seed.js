'use strict';

require('dotenv').config('mongoose');
const mongoose = require('mongoose');
mongoose.connect(process.envDB_URL);
const Cars = require('./models.js');

async function seed() {
  let seed00 = await Cars.create({
    make: 'Mazda',
    model: 'RX8',
    year: 2004,
    trim: 'Spirit-R',
    car_img: 'https://www.motortrend.com/uploads/sites/5/2011/10/2012-Mazda-RX-8-SPIRIT-R-front.-2jpg.jpg?w=532'
  });
  console.log(`${seed00.make} ${seed00.model}added`);
  let seed01 = await Cars.create({
    make: 'Acura',
    model: 'Integra',
    year: 1998,
    trim: 'Type-R',
    car_img: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/1995-1998_Honda_Integra_Type_R.JPG'
  });
  console.log(`${seed01.make} ${seed01.model}added`);
  let seed03 = await Cars.create({
    make: 'Nissan',
    model: 'Skyline',
    year: 1998,
    trim: 'R34 GT-R Nur',
    car_img: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Nissan_Skyline_R34_GT-R_N%C3%BCr_001.jpg'
  });
  console.log(`${seed00.make} ${seed00.model}added`);
}

seed();
