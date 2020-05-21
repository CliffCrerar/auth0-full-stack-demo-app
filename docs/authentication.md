---
title: Authentication
permalink: /authentication
---

# Application Security

The application security is provided by [Auth0](https://auth0.com/). The reason this security framework had been selected is because it provides an easy integration experience and is a industry standard authentication framework. It also has a ***very generous free tier***.

## Angular integration

Auth0 uses google **SSO** out of the box no configuration required in the **GCP cloud console**. Users can also log in using an *email address* and *password*. This is achieved by creating a authentication service in **Angular** that is also used to pull a user's personal detail and display as a logged in user etc.

### Other uses of the authentication service:
- Acquire an authentication token silently.
- Log a user out of the application.
- It is used by the HTTP intercepting service to attach a bearer token authentication header on each HTTP call to the server.
- It use used to stamp in user names when preforming CRUD operations.

![Api Authentication strategy](https://cdn-cloudflare.ga/assets/misc/http-interceptor.jpeg)