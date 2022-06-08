var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);


// configure Https
var fs = require('fs');
var privateKey  = fs.readFileSync('C:\\Program Files\\Git\\usr\\bin\\privateKey.key', 'utf8');
var certificate = fs.readFileSync('C:\\Program Files\\Git\\usr\\bin\\certificate.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};
var https = require('https');
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(443, () => {
  console.log(`Server running at https://localhost:443/`);
});