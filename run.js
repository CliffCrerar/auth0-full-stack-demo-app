const { exec } = require('child_process')
const { join, resolve } = require('path');
const cwd = __dirname;

const conf = (cwd) => ({ cwd, stdio: 'inherit' });

exec('npm start', {cwd: join(__dirname,'api')},function(err,stdout,stderr) {
    if (err) {
        throw err
    }
    stdout.on('message', msg => console.log(msg));
    stdout.on('error', err => console.error(err));
    console.log(stderr);
})

