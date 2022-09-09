'use strict';

const { request } = require('express');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

function verifyUser(req, res, next) {
  function valid(err, user) {
    request.user = user;
    next();
  }


  try {
    const token = request.headers.authorization.split(' ')[1];
  } catch (error) {
    next('not authorized');
  }
}

const client = jwksCLient({
  jwksUri: process.env.JWKS_URI,
});

function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

module.exports = verifyUser;
