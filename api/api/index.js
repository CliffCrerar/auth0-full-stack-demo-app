
/* Server Api */

const
  bp = require('body-parser').json(),
  express = require('express'),
  jwtCheckMiddleWare = require('./auth'),
  { retrieve_products, delete_products, create_products } = require('./products'),
  app = express();

app.use(bp);
app.all('*/*', (req, res, next) => {
  console.log(res.statusCode, '-', 'Origin: ', req.hostname, req.path, ' QUERY: ', req.query, ' BODY: ', req.body, ' PARAMS: ', req.params)
  next();
});

app.use('/api', jwtCheckMiddleWare);

app.use(require('./auth/_test.js'));

app.use(express.static('../app'));

app.use('/docs', express.static('../docs'));

app.route('/api/products')
  .get(retrieve_products)
  .post(create_products)
  // .put((req, res) => res.status(200).send({ method: 'put' }))
  .delete(delete_products)

module.exports = () => app.listen(3000, () => console.log('API Running'));
