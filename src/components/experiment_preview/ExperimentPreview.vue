<template>
    <div 
        ref="expPreviewWrapper"
        class="exp-preview-wrapper" 
        :class="status"
    >
        <div class="preview-header">
            <div class="status-container">
                <span class="field-value status" :class="status">
                    <i v-if="status == 'active'" class="fas fa-circle"></i>
                    {{status}}
                </span>
                 <b-button 
                    class="end-exp-btn"
                    v-if="status == 'active'"
                    variant="danger"
                    title="End experiment"
                >
                    END
                </b-button>
            </div>
            <div class="links-container">
                <div v-if="status == 'active'">
                    <TooltipIcon 
                        iconClass="far fa-file-alt"
                        text="Experiment page (coming soon)"
                        :disabled="true"
                    />
                </div>
                <div v-if="status == 'active'">
                    <TooltipIcon 
                        iconClass="fas fa-file-download"
                        text="Download report"
                        @clicked-icon="clickedDownload()"
                    />
                </div>
            </div>
        </div> <!-- End of header -->
        <div class="preview-body">
            <div class="title">
                {{title}}
            </div>
            <div class="description">
                {{description}}
            </div>
        </div> <!-- End of body -->
        <div class="footer">
            <div class="date-participants-container">
                <div class="date">
                    {{startDate}}
                </div>
                <div class="participants">
                    {{numParticipants}}
                    <i 
                        class="fas fa-users"
                        :title="numParticipants + ' Participants'"
                    >
                    </i>
                </div>
            </div>
            <div class="code-container" v-if="status == 'active'">
                <span class="code-title">Invitation Code: </span>
                <span class="code-value">{{expCode}}</span>
                <b-button 
                    class="copy-code-btn"
                    variant="outline-info"
                    @click="copyCodeToClipboard()"
                >
                    <TooltipIcon 
                        iconClass="far fa-clipboard"
                        text="Copy code to clipboard"
                        :isInfo="true"
                    />
                </b-button>
            </div>
        </div>
    </div>
</template>

<script>
// import {formatDateFunc} from "../../assets/globalFunctions"
import {serverRequestExperimentReport} from "../../assets/communicators/serverCommunicator"

import TooltipIcon from "../../components/TooltipIcon"

export default {
    components:{
        TooltipIcon
    },
    props:{
        experimentData:{
            type: Object,
            required: true
        }
    },
    data(){
        return{
            expId: "",
            title: "",
            description: "",
            status: "",
            startDate: null,
            numParticipants: -1,
            expCode: -1,
            dateFormation: "D/M/YYYY HH:mm:ss"
        }
    },
    created(){
        this.expId = this.experimentData.exp_id
        this.title = this.experimentData.title
        this.description = this.experimentData.description
        this.status = this.experimentData.status
        if(this.status == "active" || this.status == "closed"){
            this.startDate = this.experimentData.start_date
            this.numParticipants = this.experimentData.num_of_participants
            this.expCode = this.experimentData.exp_code
        }
    },
    mounted(){
        setTimeout( () => {
            this.$nextTick( () => {this.$refs.expPreviewWrapper.classList.add("show")})
        }, 10)
    },
    methods:{
        async clickedDownload(){
            console.log("Download report")
            // Check if there is already pending report request
            if(this.$root.store.isWaitingForReport){
                this.$root.showOkMsgBox("Already processing report"
                ,"We are already processing an experiment report." +
                "<br>Please wait for the file to download and then ask for another report."
                ,"Ok")
                return
            }

            // Ask the server for experiment request
            const response = await serverRequestExperimentReport(this.expId)
            console.log(response)
            const responseStatus = response.status
            if(responseStatus == 400){ // There is already report request exists
                this.$root.showOkMsgBox("Server already processing report"
                ,"Our server claims it is already processing the report for this experiment." +
                "<br>Please wait a moment and then try again."
                ,"Ok")
                return
            }
            else if(responseStatus == 500){ // Internal error
                this.$root.showOkMsgBox("Server error"
                ,"Sorry, there was a server error. Please try again later."
                ,"Ok")
                return
            }
            else if(responseStatus == 401){ // Unauthorized
                alert("You are not authorized to ask for experimnets reports before signing in")
                this.$root.store.setRegisteredState(false)
                this.$router.push("Register")
                return
            }
            else if(responseStatus == 202){ // Success
                this.$root.showOkMsgBox("Experiment's report is in process"
                ,"The experiment's report will be downloaded shortly." + 
                "<br>This could take a few minutes, please wait."
                )
                this.$root.askReportUntilReady(this.expId)
            }
        },
        copyCodeToClipboard(){
            const success =  copyTextToClipboard(this.expCode)
            if(success){
                this.$root.toast("Copied", "Experiment code copied to clipboard", "success");
            }
            return success
        }
    }
}

function copyTextToClipboard(text){
     var textArea = document.createElement("textarea");

        textArea.style.position = 'fixed';
        textArea.style.top = 0;
        textArea.style.left = 0;

        // Ensure it has a small width and height. Setting to 1px / 1em
        // doesn't work as this gives a negative w/h on some browsers.
        textArea.style.width = '2em';
        textArea.style.height = '2em';

        // We don't need padding, reducing the size if it does flash render.
        textArea.style.padding = 0;

        // Clean up any borders.
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';

        // Avoid flash of the white box if rendered for any reason.
        textArea.style.background = 'transparent';

        textArea.value = text;

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        let successful = false;
        try {
            successful = document.execCommand('copy');
        } catch (err) {
            console.log(err)
        }

        document.body.removeChild(textArea);
        return successful
}
</script>

<style lang="scss" src="../../assets/css/ExperimentPreview.scss" scoped>

</style>