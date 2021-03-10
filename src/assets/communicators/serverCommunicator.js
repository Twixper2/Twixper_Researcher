const config = require('../../config.js')
const isTest = config.isTest

const serverUrl = config.serverUrl
const resPrefix = "/researchers"
const activateNewExpEndpoint = "/activateNewExperiment"
const myExperimentsEndpoint = "/myExperiments"
const createExperimentReportEndpoint = "/createExperimentReport"

const validateSessionEndpoint = "/researcherValidateSession"
const googleLoginEndpoint = "/researcherGoogleLogin"

const axios = require('axios')
axios.defaults.withCredentials=true;

const experimentJson = require("../static_data/experimentsJSON.js").data

// For mocking server delay
function sleep(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sendGetRequestReturnResponse(requestUrl){
    return await axios.get(requestUrl)
        .catch(function (error) {
            if (error.response) { 
                console.log(error.response)
                return error.response
            }
            else{ // This is network error
                console.log(error)
                return {status: 0, data: "Network error, server probably down"}
            }
        });
}

async function sendPostRequestReturnResponse(requestUrl, payload){
    return await axios.post(requestUrl, payload)
        .catch(function (error) {
            if (error.response) { 
                console.log(error.response)
                return error.response
            }
            else{ // This is network error
                console.log(error)
                return {status: 0, data: "Network error, server probably down"}
            }
        });
}

async function validateSession(){
    // Asks the server if I have valid cookie
    // For testing
    if(isTest){
        await sleep(600)
        return {status: 200, data: {hasSession: true}}
    }
    // Else, send the request to the server
    const requestUrl = serverUrl + validateSessionEndpoint
    return await sendPostRequestReturnResponse(requestUrl, {})
}

async function googleLogin(idToken){
    // For testing
    if(isTest){
        await sleep(600)
        return {status: 200, data: {}}
    }
    // Else, send the request to the server
    const requestUrl = serverUrl + googleLoginEndpoint
    const payload = {
        id_token: idToken,
    }
    return await sendPostRequestReturnResponse(requestUrl, payload)
}

async function postActivateNewExperiment(experimentJson){
    // For testing
    if(isTest){
        await sleep(1500)
        return {status: 200, data: {exp_code: "123"}}
    }
    // Else, send the request to the server
    const requestUrl = serverUrl + resPrefix + activateNewExpEndpoint
    return await sendPostRequestReturnResponse(requestUrl, experimentJson)
}

async function getMyExperiments(){
    // For testing
    if(isTest){
        await sleep(500)
        return {status: 200, data: experimentJson}
    }
    // Else, send the request to the server
    const requestUrl = serverUrl + resPrefix + myExperimentsEndpoint
    return await sendGetRequestReturnResponse(requestUrl)
}

async function createExperimentReport(expId){
    const requestUrl = serverUrl + resPrefix + createExperimentReportEndpoint
    const payload = {
        exp_id: expId,
    }
    return await sendPostRequestReturnResponse(requestUrl, payload)
}

module.exports = {
    serverValidateSession: validateSession,
    serverGoogleLogin: googleLogin,
    serverPostActivateNewExperiment: postActivateNewExperiment,
    serverGetMyExperiments: getMyExperiments,
    serverCreateExperimentReport: createExperimentReport
}