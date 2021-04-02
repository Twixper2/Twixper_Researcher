var config = new Object()

/* For serverCommunicator */
// config.serverUrl = "http://localhost:3000" // Real mode: https://twixper-backend.azurewebsites.net
config.serverUrl = "https://twixper-backend.azurewebsites.net"

config.isTest = false // Real mode: false
config.isTestingErrors = true

module.exports = config;