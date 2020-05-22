/* AUTHENTICATION MIDDLEWARE */



const
  auth0MiddleWare = require('express').Router(),
  jwt = require('express-jwt'),
  { SecretCallbackLong } = require('express-jwt'),
  { expressJwtSecret } = require('jwks-rsa'),
  path = require('path'),
  fs = require('fs'),
  env = require('../../../auth.conf.json');

// Builder pattern class
class JwtCheckBuilder {
  constructor() {
    this.cache = true;
    this.rateLimit = true;
    this.jwksRequestsPerMinute = 5;
    this.jwksUri = env.JWKSURI;
    this.audience = env.AUDIENCE;
    this.issuer = env.ISSUER;
    this.algorithms = env.ALGORITHM;
    this.secret = this._exSecret({
      cache: this.cache,
      rateLimit: this.rateLimit,
      jwksRequestsPerMinute: this.jwksRequestsPerMinute,
      jwksUri: this.jwksUri
    });
    this.jwtCheckParam = {
      secret: this.secret,
      audience: this.audience,
      issuer: this.issuer,
      algorithms: this.algorithms
    };
  }

  _exSecret(param) { return expressJwtSecret(param); }
  jwt(param) { return jwt(param); }
  jwtCheck() { return this.jwt(this.jwtCheckParam); }
}

auth0MiddleWare.use(new JwtCheckBuilder().jwtCheck())

module.exports = auth0MiddleWare