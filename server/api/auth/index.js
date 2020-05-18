/* AUTHENTICATION MIDDLEWARE */

const
  jwt = require('express-jwt'),
  { SecretCallbackLong } = require('express-jwt'),
  { expressJwtSecret } = require('jwks-rsa'),
  conf = require('../../../products-app/src/auth.conf.json');

// tslint:disable-next-line:class-name
// interface iJwtCheckParam {
//   secret: SecretCallbackLong;
//   audience: string;
//   issuer: string;
//   algorithms: string[];
// }

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

module.exports = new JwtCheckBuilder().jwtCheck();
