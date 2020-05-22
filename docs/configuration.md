---
title: Configuring
permalink: '/configuration'
---

# Configuring to run

## The Code



```
git clone https://github.com/CliffCrerar/auth0-full-stack-demo-app.git
```

## Structure

1. ```/app``` - the `angular` application
2. ```/api``` - the express server

## Configuring authentication.

Both parts of the app use a common secrets file named `auth.conf.json` that holds the secrets for authentication. Hence this file will not appear in the repository. It has the following structure and must reside in the root of the project where the application will look for it.

```json
{
  "DOMAIN": "",
  "FE_CLIENT_ID": "",
  "API_CLIENT_ID": "",
  "AUDIENCE": "",
  "JWKSURI": "",
  "ISSUER": "",
  "ALGORITHM": [
    "RS256"
  ]
}
```

## Data utilities

The application uses a collection level document database as its data repository and it has been baked into the express server as middel-ware. The data client runs on port `5984` on the same origin as the express server. It uses leveldb and saves the data from its `tables` as files on the host drive inside the project.

## CI/CD

### Containerization

The application builds with a customer container that has globally pre-installed `grunt-cli`, `@angular/cli` and `vuepress`. 

### Testing

This project does not yet have testing running. In production TDD is should be non-negotiable.

### Build process

The build process is handled with `grunt`. See the simple `gruntfile.js` below.

```js
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
```

# Build in GCP Cloud build service

![gcloud-build-image](https://cdn-cloudflare.ga/assets/site-logo/gcloud-build/gcloud-build.jpg)

[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-white.svg)](https://sonarcloud.io/dashboard?id=CliffCrerar_auth0-full-stack-demo-app)

The container is deployed to google cloud build by run of the `npm run gcloud:build`. This uses a the config `cloudbuild.yml`. The command attached to the `npm` script is the same as push command to `docker hub` except that it publishes to a container registry in the private project.

# Deploy with google cloud run