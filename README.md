# php-request-generator

Generate PHP GET and POST request endpoints from JSON.

## Install

```
$ npm install php-request-generator
```

## Usage

With the name set

```js
const phpReq = require("php-request-generator");

var configJSON = {
   name: "form",
   get: ["token","username"],
   post: ["name", "email","url","subject","message"]
 }

phpReq(configJSON);
// Creates the file "form.php" with all the request variables set
```

With no name set

```js
const phpReq = require("php-request-generator");

var configJSON = {
   get: ["token","username"],
   post: ["name", "email","url","subject","message"]
 }

phpReq(configJSON);
// Returns raw PHP with all the request variables set
```
