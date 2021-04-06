import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import BootstrapVue from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

Vue.config.productionTip = false

(function(a,b) {
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))
    window.location=b})
    (navigator.userAgent||navigator.vendor||window.opera,'http://detectmobilebrowser.com/mobile');


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

import {serverGetReportIfReady} from "./assets/communicators/serverCommunicator"

new Vue({
  router,
  data() {
    return {
      store: shared_data,
    };
  },
  methods: {
    async askReportUntilReady(expId){
      /*
        Asks for the exp's report if ready. 
        checks every 7 seconds, and then every 30 seconds
        after 7 minutes, returns error
      */
      this.store.isWaitingForReport = true
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
              this.showOkMsgBox("Error", "Our server did not send the report. Please try again later.")
              this.store.isWaitingForReport = false
              clearInterval(secondPhaseIntervalFunc);
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
