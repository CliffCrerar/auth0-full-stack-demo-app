const
    express = require('express'),
    pouchdb = require('pouchdb'),
    expressPouchdb = require('express-pouchdb'),
    path = require('path'),
    PouchDefaults = pouchdb.defaults({
        log: {
            "file": path.join(__dirname, 'logs', 'logs.txt')
        },
        prefix: path.join(__dirname, 'data/')
    }),
    exPouch = expressPouchdb(PouchDefaults);

const Products = new PouchDefaults('products');

module.exports = { exPouch, Products };

express().use(exPouch).listen(5984, () => console.log('DevDbOn'));