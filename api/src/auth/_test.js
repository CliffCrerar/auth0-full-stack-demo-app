const express = require('express');
const router = express.Router();
const auth0MiddleWare = require('./index.js')

router.get('/test', auth0MiddleWare,(req, res) => {
    res.status(200).send('Request Authorized')
})

module.exports = router