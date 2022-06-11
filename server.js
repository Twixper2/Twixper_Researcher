var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
const app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);

// console.log(config_vue);

// var credentials = {key: config_vue.key, cert: config_vue.cert};
// var https = require('https');
// const { config } = require('process');
// var httpsServer = https.createServer(credentials, app);
// httpsServer.listen(443, () => {
//   console.log(`Researcher running at https://localhost:443/`);
// });

