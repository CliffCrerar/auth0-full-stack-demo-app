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