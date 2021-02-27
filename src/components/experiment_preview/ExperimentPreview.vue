<template>
    <div class="exp-preview-wrapper">
        <div class="links-container">
            <div v-if="status = 'active'">
                <TooltipIcon 
                    iconClass="far fa-file-alt"
                    text="Experiment page (coming soon)"
                    :disabled="true"
                />
            </div>
            <div v-if="status = 'active'">
                <TooltipIcon 
                    iconClass="fas fa-file-download"
                    text="Download report"
                    @clicked-icon="clickedDownload()"
                />
            </div>
        </div>
        <div class="details-container">
            <span class="field-title">Experiment id: </span>
            <span class="field-value">{{expId}}</span>
            <br>

            <span class="field-title">Title: </span>
            <span class="field-value">{{title}}</span>
            <br>

            <span class="field-title">Description: </span>
            <span class="field-value">{{description}}</span>
            <br>

            <span class="field-title">Status: </span>
            <span class="field-value status" :class="status">{{status}}</span>
                <b-button 
                    class="end-exp-btn"
                    v-if="status == 'active'"
                    variant="outline-danger"
                    title="End experiment"
                >
                    <!-- <i class="fas fa-stop"></i> -->
                    <TooltipIcon 
                        iconClass="fas fa-stop"
                        text="End experiment"
                        :isInfo="true"
                    />
                </b-button>
            <br>

            <div v-if="status == 'active'">
                <span class="field-title">Start date: </span>
                <span class="field-value">{{startDate}}</span>
                <br>

                <span class="field-title">Number of participants: </span>
                <span class="field-value">{{numParticipants}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import {formatDateFunc} from "../../assets/globalFunctions"
import {serverCreateExperimentReport} from "../../assets/communicators/serverCommunicator"

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
            dateFormation: "D/M/YYYY HH:mm:ss"
        }
    },
    created(){
        this.expId = this.experimentData.exp_id
        this.title = this.experimentData.title
        this.description = this.experimentData.description
        this.status = this.experimentData.status
        if(this.status == "active"){
            this.startDate = formatDateFunc(this.experimentData.start_date, this.dateFormation)
            this.numParticipants = this.experimentData.num_of_participants
        }
    },
    methods:{
        async clickedDownload(){
            console.log("Download report")
            /*const response = await serverCreateExperimentReport(this.expId)
            const responseStatus = response.status
            if(responseStatus == 200 || responseStatus == 201){
                alert("Experiment report created successfuly")
            }
            else{
                alert("Problem in creating the report. Please try again later")
            }*/
        }
    }
}
</script>

<style lang="scss" src="../../assets/css/ExperimentPreview.scss" scoped>

</style>