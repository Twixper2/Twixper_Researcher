import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import BootstrapVue from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

Vue.config.productionTip = false



let shared_data = {
  registeredUser: false,
  userEntity: null,
  isWaitingForReport: false,
  
  setRegisteredState(newState){
    this.registeredUser = newState
    if(newState){
      this.userEntity = JSON.parse(localStorage.getItem('userEntity'))
    }
    else{
      localStorage.removeItem('userEntity')
      this.userEntity = null
    }
  }
};

import {serverGetReportIfReady, serverGetExpReport} from "./assets/communicators/serverCommunicator"
const config = require('./config.js')
const isProduction = config.isProduction 

new Vue({
  router,
  data() {
    return {
      store: shared_data,
    };
  },
  methods: {
    async askReportUntilReady(expId){
      this.store.isWaitingForReport = true
      if(isProduction){
        // Directly request and get the report
        const response = await serverGetExpReport(expId)
        const responseStatus = response.status
        if(responseStatus == 200){ // Success, the file is downloading
          this.downloadZipFromResponse(response)
          this.store.isWaitingForReport = false
        }
        else{
          // An error. 
          this.store.isWaitingForReport = false
          this.showOkMsgBox("Error " + responseStatus, "There was an error. Please try again later")
        }
        return
      }

      /*
        Asks for the exp's report if ready. 
        checks every 7 seconds, and then every 30 seconds
        after 7 minutes, returns error
      */
      let isReportDownloaded = false
      let isError = false
      const maxWaitTimeMs = 7 * 60 * 1000 // 7 minutes
      const firstPhaseInterval = 7 * 1000 // 7 seconds
      const firstPhaseNumRequests = 3
      const secondPhaseInterval = 20 * 1000 // 30 seconds 
      let totalWaitTimeMs = 0 

      // Checks every 7 seconds three times
      const firstPhaseIntervalFunc = setInterval( async () => {
        console.log("Checking on report " + totalWaitTimeMs)
        const response = await serverGetReportIfReady(expId)
        const responseStatus = response.status
        if(responseStatus == 200){ // Success, the file is downloading
          isReportDownloaded = true
          this.downloadZipFromResponse(response)
        }
        else if (responseStatus != 102){ // An error. 102 means the processing is not finished
          this.showOkMsgBox("Error " + responseStatus, "There was an error. Please try again later")
          isError = true
        }
        totalWaitTimeMs += firstPhaseInterval
        if(isReportDownloaded || isError || totalWaitTimeMs >= firstPhaseInterval * firstPhaseNumRequests){
          this.store.isWaitingForReport = false
          clearInterval(firstPhaseIntervalFunc);
        }
      }, firstPhaseInterval)

      // After (3 * 7) seconds, ask the server every 30 seconds intil we reach total of 7 minutes
      setTimeout( () => {
        if(!isReportDownloaded && !isError){
          // Ask the server every 30 seconds intil we reach total of 7 minutes
          const secondPhaseIntervalFunc = setInterval( async () => {
            console.log("Checking on report " + totalWaitTimeMs)
            const response = await serverGetReportIfReady(expId)
            const responseStatus = response.status
            if(responseStatus == 200){ // Success, the file is downloading
              isReportDownloaded = true
              this.downloadZipFromResponse(response)
            }
            else if (responseStatus != 102){ // An error. 102 means the processing is not finished
              this.showOkMsgBox("Error " + responseStatus, "There was an error. Please try again later.")
              isError = true
            }
            totalWaitTimeMs += secondPhaseInterval
            if(isReportDownloaded == true || isError || totalWaitTimeMs >= maxWaitTimeMs){
              this.store.isWaitingForReport = false
              clearInterval(secondPhaseIntervalFunc);
              if(!isReportDownloaded){
                this.showOkMsgBox("Error", "Our server did not send the report. Please try again later.")
              }
            }
          }, secondPhaseInterval)
        }
      }, firstPhaseNumRequests * firstPhaseInterval)
    },
    downloadZipFromResponse(response){
      console.log(response)
      let fileUrl = window.URL.createObjectURL(new Blob([response.data], {type: "application/zip"}));
      let fileLink = document.createElement("a");
      fileLink.href = fileUrl;
      fileLink.setAttribute("download", "Experiment Report.zip");
      document.body.appendChild(fileLink);
      fileLink.click();
      // TODO: Remove the file link in production
    },
    toast(title, content, variant = null, append = false) {
      this.$bvToast.toast(`${content}`, {
        title: `${title}`,
        toaster: "b-toaster-top-center",
        variant: variant,
        solid: true,
        appendToast: append,
        toastClass: "toast-popup-custom",
        autoHideDelay: 2000
      });
    },
    showOkMsgBox(title, content, okTitle="Got it"){
      const h = this.$createElement
      const contentVNode = h('div', { domProps: { innerHTML: content } })
      let modalC = ['modal-custom']
      let headerC = ['modal-header-custom']
      this.$bvModal.msgBoxOk([contentVNode], {
        title: title,
        size: 'md',
        buttonSize: 'lg',
        okVariant: "success",
        okTitle: okTitle,
        centered: true,
        modalClass: modalC,
        headerClass: headerC,
        footerClass: "msgbox-footer-custom"
      })
      .then(value => {
        
      })
      .catch(err => {
        // An error occurred
        console.log(err)
      })
    }
  },
  render: h => h(App)
}).$mount('#app')
