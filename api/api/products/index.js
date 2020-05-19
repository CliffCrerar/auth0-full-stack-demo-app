
const 
    Products = require('../db').Products,
    Responder = require('../res'),
    responder = new Responder();

function retrieve_products(req,res) {
    try {
        return Products.allDocs({include_docs: true}).then(docs=>{
            docs.table = 'Products';
            docs.retrieved = new Date();
            responder.ok(docs,req,res);
        })
    } catch(err) {
        return responder.error(500,err,req,res);
    }    
}

function create_products() {
    console.log(Products);
}

function update_products() {

}

function delete_products() {

}

module.exports = {retrieve_products,create_products,update_products,delete_products}