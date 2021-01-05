const serverUrl = "http://127.0.0.1:3000"
const activateNewExpEndpoint = ""

const axios = require('axios')

async function postActivateNewExperiment(experimentJson){
    const requestUrl = serverUrl + activateNewExpEndpoint
    try{
        console.log(requestUrl)
        const response = await axios.post(requestUrl, experimentJson)
        console.log(response)
        return response
    }
    catch(error){
        console.log(error)
        return {status: 0, data: "Network error or server is down"}
    }
}

module.exports = {
    serverPostActivateNewExperiment: postActivateNewExperiment
}