const app = require('./src');
const { fauxtonConsole } = require('./src/db');

const port = process.env.PORT || 3000
const fauxtonPouchConf = 5984


app.listen(port, () => console.log('API Running on port: ', port));
fauxtonConsole.listen(fauxtonPouchConf, () => console.log('PouchDb Fauxton running on port: ', fauxtonPouchConf));
