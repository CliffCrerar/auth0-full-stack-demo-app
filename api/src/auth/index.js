/* AUTHENTICATION MIDDLEWARE */



const
  auth0MiddleWare = require('express').Router(),
  jwt = require('express-jwt'),
  { SecretCallbackLong } = require('express-jwt'),
  { expressJwtSecret } = require('jwks-rsa'),
  path = require('path'),
  fs = require('fs');

let conf;
conf = require('../../../auth.conf.json')
if (fs.existsSync(path.join(__dirname, '../../../','auth.conf.json'))) {
  conf = require('../../../auth.conf.json')
} else {
  const ALGORITHM = ['RS256']
  const { AUDIENCE, JWKSURI, ISSUER } = process.env
  conf = { AUDIENCE, JWKSURI, ISSUER, ALGORITHM }
}
// Builder pattern class
class JwtCheckBuilder {
  constructor() {
    this.cache = true;
    this.rateLimit = true;
    this.jwksRequestsPerMinute = 5;
    this.jwksUri = conf.JWKSURI;
    this.audience = conf.AUDIENCE;
    this.issuer = conf.ISSUER;
    this.algorithms = conf.ALGORITHM;
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


