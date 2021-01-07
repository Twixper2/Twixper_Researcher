// For testing
const isTest = false
const experimentJson = require("../static_data/experimentsJSON.js").data
// For mocking server delay
function sleep(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms));
}

const serverUrl = "http://127.0.0.1:3000"
const resPrefix = "/researchers"
const activateNewExpEndpoint = "/activateNewExperiment"
const myExperimentsEndpoint = "/myExperiments"
const createExperimentReportEndpoint = "/createExperimentReport"

const axios = require('axios')

async function postActivateNewExperiment(experimentJson){
    const requestUrl = serverUrl + resPrefix + activateNewExpEndpoint
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

async function getMyExperiments(){
    const requestUrl = serverUrl + resPrefix + myExperimentsEndpoint
    // For testing
    if(isTest){
        await sleep(500)
        return {status: 200, data: experimentJson}
    }
    try{
        console.log(requestUrl)
        const response = await axios.get(requestUrl)
        console.log(response)
        return response
    }
    catch(error){
        console.log(error)
        return {status: 0, data: "Network error or server is down"}
    }
}

async function createExperimentReport(expId){
    const requestUrl = serverUrl + resPrefix + createExperimentReportEndpoint
    try{
        console.log(requestUrl)
        const response = await axios.post(requestUrl, {exp_id: expId})
        console.log(response)
        return response
    }
    catch(error){
        console.log(error)
        return {status: 0, data: "Network error or server is down"}
    }
}

module.exports = {
    serverPostActivateNewExperiment: postActivateNewExperiment,
    serverGetMyExperiments: getMyExperiments,
    serverCreateExperimentReport: createExperimentReport
}