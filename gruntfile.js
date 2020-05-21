
const grunt = require('grunt');
const path = require('path');

function options(p = '') {
    return { execOptions: { cwd: path.join(__dirname, p) } }
}

grunt.initConfig({
    shell: {
        options: { stderr: false },
        installApi: {
            command: 'npm install',
            options: options('api'),
        },
        buildApp: {
            command: 'npm install; npm run build',
            options: options('app'),
        },
        buildDocs: {
            command: 'npm install; npm run docs:build',
            options: options(),
        },
        copyApp: {
            command: 'mv ./app/dist/products-app ./api/src/app',
            options: options(),
        },
        copyDocs: {
            command: 'mv ./docs/.vuepress/dist ./api/src/docs',
            options: options(),
        }
    }
});

grunt.loadNpmTasks('grunt-shell');
grunt.registerTask('default', ['shell']);