const
    // express = require('express'),
    pouchdb = require('pouchdb'),
    expressPouchdb = require('express-pouchdb'),
    path = require('path'),
    PouchDefaults = pouchdb.defaults({
        log: {
            "file": path.join(__dirname, 'logs', 'logs.txt')
        },
        prefix: path.join(__dirname, 'data/')
    }),
    fauxtonConsole = expressPouchdb(PouchDefaults);

const Products = new PouchDefaults('products');

module.exports = { fauxtonConsole, Products };

