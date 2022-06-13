var config_vue = new Object()


/* For serverCommunicator */
// config.serverUrl = "https://twixper-backend.azurewebsites.net"
// config.serverUrl = ""
// config.serverUrl = "http://localhost:3000"


const fs = require('fs');
const { config } = require('process');


// module.exports = {
//   devServer: {
//       https: {
//         key: fs.readFileSync('C:\\Program Files\\Git\\usr\\bin\\privateKey.pem', 'utf8'),
//         cert: fs.readFileSync('C:\\Program Files\\Git\\usr\\bin\\certificate.pem', 'utf8'),
//       },
//       public: 'https://localhost:8080/'
//   }
// }
// again
// config_vue.key = fs.readFileSync('C:\\Program Files\\Git\\usr\\bin\\privateKey.pem');
// config_vue.cert = fs.readFileSync('C:\\Program Files\\Git\\usr\\bin\\certificate.pem');

// module.exports = {
//   devServer: {
//     open: process.platform === 'darwin',
//     host: '0.0.0.0',
//     port: 443,
//     https: {
//       key: fs.readFileSync('C:\\Program Files\\Git\\usr\\bin\\privateKey.key'),
//       cert: fs.readFileSync('C:\\Program Files\\Git\\usr\\bin\\certificate.crt'),
//     },
//     public: 'https://localhost:8080/',
//     hotOnly: false,
//   },
// };


module.exports = config_vue;