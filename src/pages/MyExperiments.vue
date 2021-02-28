<template>
  <div class="page-wrapper">
    <!-- <PageTitle title="My Experiments" /> textAlign="left" -->
    
    <h2>My Experiments</h2>
    <br>
    <div class="toast-container">
      <b-toast 
        body-class="custom-toast-body"
        header-class="custom-toast-header" 
        toast-class="custom-toast"
        title="Note" 
        variant="success"
        visible static no-auto-hide no-close-button
      >
        This is an Alpha version. Your experiments might be deleted after March 31st.
      </b-toast>
    </div>
    <br>
    <Loader v-if="showLoader" />
    <ExperimentsPreviewList :experimentsData="experimentsData" />
    
  </div>
</template>


<script>
import {serverGetMyExperiments} from "../assets/communicators/serverCommunicator.js"

import ExperimentsPreviewList from "../components/experiment_preview/ExperimentPreviewList"
import Loader from "../components/Loader"

export default {
  components:{
    ExperimentsPreviewList,
    Loader
  },
  data(){
    return{
      showLoader: false,
      experimentsData: []
    }
  },
  async created(){
    this.showLoader = true
    const response = await serverGetMyExperiments()
    this.showLoader = false
    if(response.status == 200){
      this.experimentsData = response.data
    }
  }
}
</script>

<style lang="scss" scoped>
.page-wrapper{
  text-align: center;
  font-size: 10px;
}
h2{
  font-size: 2.7em;
}
.toast-container{
  display: flex;
  justify-content: center;
}
</style>