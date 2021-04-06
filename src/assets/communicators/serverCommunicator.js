const config = require('../../config.js')
const isTest = config.isTest
const isTestingErrors = config.isTestingErrors
const isProduction = config.isProduction

const serverUrl = config.serverUrl
const resPrefix = "/researchers"
const activateNewExpEndpoint = "/activateNewExperiment"
const myExperimentsEndpoint = "/myExperiments"
const requestExperimentReportEndpoint = "/requestExperimentReport"
const getReportIfReadyEndpoint = "/getReportIfReady"
const getExpReportEndpoint = "/getExpReport"

const validateSessionEndpoint = "/researcherValidateSession"
const googleLoginEndpoint = "/researcherGoogleLogin"

const axios = require('axios')
axios.defaults.withCredentials=true;

const experimentJson = require("../static_data/experimentsJSON.js").data

// For mocking server delay
function sleep(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Create auth header object
function createAuthHeaderObj(){
    let headerObj = {}
    if(localStorage.getItem("researcher_id_enc") != null){
        headerObj["Researcher-Id-Enc"] = localStorage.getItem("researcher_id_enc")
    }
    return headerObj
}

async function sendGetRequestReturnResponse(requestUrl, options = {}){
    options.headers = createAuthHeaderObj()
    return await axios.get(requestUrl, options)
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

async function sendPostRequestReturnResponse(requestUrl, payload, options = {}){
    options.headers = createAuthHeaderObj()
    return await axios.post(requestUrl, payload, options)
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
    const response = await sendPostRequestReturnResponse(requestUrl, payload)
    if(response.status == 200){
         // Set "researcher_id_enc" in LS from the response header
        localStorage.setItem("researcher_id_enc", response.headers["researcher-id-enc"]) 
    }
    return response
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

async function requestExperimentReport(expId){
    if(isTest){
        await sleep(500)
        return {status: 202, data: {}}
    }
    const requestUrl = serverUrl + resPrefix + requestExperimentReportEndpoint
    const payload = {
        exp_id: expId,
    }
    // Returns 202 for success
    return await sendPostRequestReturnResponse(requestUrl, payload)
}

async function getReportIfReady(expId){
    if(isTest){
        if(isTestingErrors){
            await sleep(500)
            return {status: 500, data: {}}
        }
        else{
            await sleep(500)
            return {status: 200, data: {}}
        }
    }
    const requestUrl = serverUrl + resPrefix + getReportIfReadyEndpoint + "?expId=" + expId
    const options = {
        responseType:'blob'
    }
    // Returns 102 if there is no respons (report not ready)
    return await sendGetRequestReturnResponse(requestUrl, options)
}

// Get the exp report from azure. Use this in production only. 
async function getExpReport(expId){
    if(!isProduction){
        throw "'getExpReport' only supported in production"
    }
    const requestUrl = serverUrl + resPrefix + getExpReportEndpoint + "?expId=" + expId
    const options = {
        responseType:'blob'
    }
    return await sendGetRequestReturnResponse(requestUrl, options)
}

module.exports = {
    serverValidateSession: validateSession,
    serverGoogleLogin: googleLogin,
    serverPostActivateNewExperiment: postActivateNewExperiment,
    serverGetMyExperiments: getMyExperiments,
    serverRequestExperimentReport: requestExperimentReport,
    serverGetReportIfReady: getReportIfReady,
    serverGetExpReport: getExpReport
}