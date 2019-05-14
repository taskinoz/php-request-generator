const fs = require('fs');
const phpReq = require('./index.js');

var test1 = JSON.parse(fs.readFileSync("./config.json","utf8"));
var test2 = fs.readFileSync("./config.json","utf8");
var test3 = {
   name: "form",
   get: ["token","username"],
   post: ["name", "email","url","subject","message"]
 }


console.log("Test Parsed File:\n"+phpReq(test1));
console.log("Test Unparsed File:\n"+phpReq(test2));
console.log("Test Raw JSON:\n"+phpReq(test3));
