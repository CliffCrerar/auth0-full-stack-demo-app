
const
    Products = require('../db').Products,
    Responder = require('../res'),
    createError = require('http-errors'),
    responder = new Responder(),
bodyParser = require('body-parser');

/**
 * @description for retrieving all docs or one doc
 */
function retrieve_products(request, response) {
    !request.query.id
        ? retrieveAllProducts(request, response)
        : retrieveOneProduct(request, response)
}
/**
 * @description for retrieving all documents
 */
function retrieveAllProducts(req, res) {
    try {
        return Products.allDocs({ include_docs: true }).then(docs => {
            docs.table = 'Products';
            docs.retrieved = new Date();
            responder.ok(docs, req, res);
        }).catch(err => { throw new Error(err) });
    } catch (err) {
        return responder.error(500, err, req, res);
    }
}
/**
 * @description for retrieving one document only
 */
function retrieveOneProduct(req, res) {
    try {
        return Products.get(req.query.id, { include_docs: true })
            .then(doc => {
                responder.ok({
                    table: 'Product',retrieved: new Date(),
                    rows: [{ id: doc._id, key: doc._id, value: { _rev: doc._rev }, doc }]
                }, req, res);
            })
            .catch(err => {
                if (err.status === 404) {throw responder.error(404, err, req, res)}
                throw responder.error(520, err, req, res);
            })
    } catch (err) {
        return responder.error(500, err, req, res);
    }
}

/**
 * @description Create new products
 */
function create_products(req,res) {
    
    
    console.log('req.body: ', req);
    res.status(200).send({method: 'testing'})

}

/**
 * @description Update product on edit
 */
function update_products(req, res) {
    res.status(200).send({method: put})

}

function delete_products(req, res) {
    res.send(req.query)
    Products.get(req.query.id).then(doc => {
        return Products.remove(doc).then(result => result);
    }).then(result => {
        responder.ok(result, req, res);
    }).catch(err=>responder.error(500,err,req,res))
}

module.exports = { retrieve_products, create_products, update_products, delete_products }