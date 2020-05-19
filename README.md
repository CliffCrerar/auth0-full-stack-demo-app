# Authorisation Example

> Application uses `Auth0` as auth provider. Auth0 authenticates from end and provides token to API calls to server. server only accepts valid calls as token is passed with every call by means of HTTP interceptor built into front end application. Server checks every call for token if token is invalid, returns a 401 to front end. 

## Auth config

> Application uses an auth config with `auth.conf.json` with the following JSON format.

```json
{
  "DOMAIN": "",
  "CLIENT_ID": "",
  "AUDIENCE": "",
  "JWKSURI": "",
  "ISSUER": "",
  "ALGORITHM": [ ]
}
```

- Values are provided by `Auth0` and have been omitted from the repo for obvious reasons.
- Application will not run without this configuration.
- `auth.conf.json` must be created in the root of the repository.