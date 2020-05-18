# Authorisation Example

> Application uses `Auth0` as auth provider. Auth0 authenticates from end and provides token to API calls to server. server only accepts valid calls as token is passed with every call by means of HTTP interceptor built into front end application. Server checks every call for token if token is invalid, returns a 401 to front end. 
