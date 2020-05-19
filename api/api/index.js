
/* Server Api */
require('./db');
const
  express = require('express'),
  jwtCheckMiddleWare = require('./auth'),
  app = express(),
  {retrieve_products} = require('./products');

app.all('*/*', (req, res, next) => {
  console.log(res.statusCode,'-','Origin: ',req.hostname,req.path,' QUERY: ',req.query)
  
  next();
});

app.use(jwtCheckMiddleWare);

app.route('/api/products')
  .get(retrieve_products)
  .post((req,res)=>{ // update
    res.status(200).send({method: 'post'})
  })
  .put((req,res)=>{ // create
    res.status(200).send({method: 'put'})
  })
  .delete((req,res)=>{ // delete
    res.status(200).send({method: 'delete'})
  })

module.exports = app;
