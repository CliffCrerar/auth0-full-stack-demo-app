/**
 * @description Database per service layer
 */
const
    Products = require('../db').Products,
    Responder = require('../res'),
    responder = new Responder();
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
        }).catch(err => { throw new Error(err) })//.finally(() => close());
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
                    table: 'Product', retrieved: new Date(),
                    rows: [{ id: doc._id, key: doc._id, value: { _rev: doc._rev }, doc }]
                }, req, res);
            })
            .catch(err => {
                if (err.status === 404) { throw responder.error(404, err, req, res) }
                throw responder.error(520, err, req, res);
            })//.finally(() => close());
    } catch (err) {
        return responder.error(500, err, req, res);
    }
}
/**
 * @description Create new or update products (C,U in one function depending on record existence)
 */
function create_products(req, res) {
    // console.log('req.body: ', req.body);
    // res.status(200).send({ method: 'testing' })
    try {
        return Products.get(req.body._id).then(doc => {
            req.body._rev = doc._rev; // record exist update revision code
            Products.put(req.body)
                .then(updateResult => responder.ok(updateResult, req, res))
                .catch(updateError => responder.error(501, updateError, req, res))
                //.finally(() => close())
        })
            .catch(err => {
                if (err.status === 404) Products.put(req.body)
                    .then(insertResult => responder.ok(insertResult, req, res))
                    .catch(insertErr => responder.error(500, insertErr, req, res))
                    // .finally(() => close());
                else throw new Error('Da Fudge!')
            })
            //.finally(() => console.log('CREATE INSERT : UPSERT : FINAL FINALLY'))
    } catch (err) {
        return responder.error(418, err, req, res)
    }
}
/**
 * @description Delete products
 */
function delete_products(req, res) {
    // res.send(req.query)
    Products.get(req.query.id).then(doc => {
        console.log('doc: ', doc);
        return Products.remove(doc).then(result => responder.ok(result, req, res));
    })
        .then(result => {
            console.log('result: ', result);
            responder.ok(result, req, res);
        })
        .catch(err => responder.error(500, err, req, res))
}
/**
 * @description Function is provisioned but unused.
 */
function close() {
    return Products.close()
        .then(() => console.log('->> Closing Pouchdb'))
        .catch((err) => console.error('->< ERROR Closing Pouchdb', err))
}
module.exports = { retrieve_products, create_products, update_products, delete_products }