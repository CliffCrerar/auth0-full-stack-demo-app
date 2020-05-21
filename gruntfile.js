
const grunt = require('grunt');
const path = require('path');



grunt.initConfig({
    shell: {
        options: {stderr: false},
        buildApp: {
            command: 'npm install; npm run build',
            options: {execOptions: {cwd: path.join(__dirname, 'app')}},
        },
        buildDocs: {
            command: 'npm install; npm run docs:build',
            options: {
                options: {
                    execOptions: {
                        cwd: path.join(__dirname)
                    }
                }
            }
        },
        copyApp: {
            command: 'mv ./app/dist/products-app ./api/src/app',
            options: {
                options: {
                    execOptions: {
                        cwd: path.join(__dirname)
                    }
                }
            }
        },
        copyDocs: {
            command: 'mv ./docs/.vuepress/dist ./api/src/docs',
            options: {
                options: {
                    execOptions: {
                        cwd: path.join(__dirname)
                    }
                }
            }
        }
    }
});

grunt.loadNpmTasks('grunt-shell');
grunt.registerTask('default', ['shell']);