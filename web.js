const web =require('http');
const route = require('H:\\node\\route.js');
console .log(route.sometex)
const connect =web.createServer(route.Hander);
connect.listen(3002);