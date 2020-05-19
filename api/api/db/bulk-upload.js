
const productsOrigin = 'https://gist.githubusercontent.com/bradygaster/3d1fcf43d1d1e73ea5d6c1b5aab40130/raw/e0bced80b7672a15e57383c2df61690db037db2c/products.json',
const interval = 43200000;

const http = require('https');

function getData(origin, callback) {

    const req = http.request(origin, res => {

        const data = '';

        req.end();

        res.on('data', chunk => data += chunk);

        res.on('end', () => callback(data));

        return;
    })

}

function activateRefreshData(dataObj, dataOrigin) {

    setInterval(() => {
        getData(dataOrigin, data => {
            console.log('data: ', data);

        })
    }, interval)

}

module.exports = activateRefreshData;