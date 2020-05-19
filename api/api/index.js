/* Server Api */

const
  express = require('express'),
  jwtCheckMiddleWare = require('./auth'),
  app = express(),
  { exPouch } = require('./db');

app.use(jwtCheckMiddleWare);
app.use(exPouch);

app.all('*', (req, res, next) => {
  console.table(req.headers);
  console.table(req.query);
  res.setHeader('Content-Type', 'application/json');
  next();
});

app.get('/authorized', (req, res) => {
  try {
    res.status(200).send({ Secure: 'Resource' });
  } catch (err) {
    res.status(401).send(JSON.stringify({ 'Unauthorized Request': err }));
  }
});

app.route('/products')
  .get((req,res)=>{ // retrieve
    res.status(200).send({method: 'get'})
  })
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
