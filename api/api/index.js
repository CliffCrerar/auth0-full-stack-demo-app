
/* Server Api */
require('./db');
const
  express = require('express'),
  jwtCheckMiddleWare = require('./auth'),
  app = express(),
  { retrieve_products, delete_products, create_products} = require('./products');

app.all('*/*', (req, res, next) => {
  console.log(res.statusCode, '-', 'Origin: ', req.hostname, req.path, ' QUERY: ', req.query, ' BODY: ', req.body, ' PARAMS: ',req.params)
  next();
});

app.use(jwtCheckMiddleWare);

app.route('/api/products')
  .get(retrieve_products)
  .post(create_products)
  .put((req, res) => res.status(200).send({ method: 'put' }))
  .delete(delete_products)

module.exports = app;
