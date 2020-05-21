
/* Server Api */

const
  express = require('express'),
  app = express(),
  crud = require('./products'),
  bp = require('body-parser').json(),
  auth0MiddleWare = require('./auth'),
  authTest = require('./auth/_test.js'),
  { join } = require('path'),
  { readFile } = require('fs');

app.all('*', (req, res, next) => {
  console.log('API: ', res.statusCode, '-', 'Origin: ', req.hostname, req.path, ' QUERY: ', req.query, ' BODY: ', req.body, ' PARAMS: ', req.params)
  next();
})

const router = express.Router()

app.use('/api', router)

app.use(express.static(join(__dirname, './app')));

app.use('/docs/*', express.static(join(__dirname, './docs')));

app.get('/*', (req, res) => {
  // res.set('Content-Type', 'text/html');
  readFile(join(__dirname, 'app', 'dist', 'products-app', 'index.html'), (err, file) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(file)
    }
  })
})



router.use(bp);
router.use(auth0MiddleWare);
router.use('/test', authTest);
router.route('/api/products')
  .get(crud.retrieve_products)
  .post(crud.create_products)
  .delete(crud.delete_products);

module.exports = app;
