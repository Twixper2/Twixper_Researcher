<template>
  <div class="page-wrapper">
    <!-- <PageTitle title="My Experiments" /> textAlign="left" -->
    
    <br>
    <h2>My Experiments</h2>
    <br>
    <div class="toast-container">
      <b-toast 
        body-class="custom-toast-body"
        header-class="custom-toast-header" 
        toast-class="custom-toast"
        title="Note" 
        variant="primary"
        visible static no-auto-hide no-close-button
      >
        This is an Alpha version. Your experiments might be deleted after May 5th.
      </b-toast>
    </div>
    <br>
    <Loader v-if="showLoader" />
    <ExperimentsPreviewList :experimentsData="experimentsData" />
    <div
      class="no-exps-div"
      v-if="!showLoader && !isError && experimentsData.length == 0"
    >
      You have no experiments yet.
      <span @click="navigateToCreateExp()"> Create new experiment</span>
    </div>
    <div
      class="no-exps-div"
      v-if="isError"
    >
    Server error
    </div>

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
      isError: false,
      experimentsData: []
    }
  },
  async created(){
    if(localStorage.getItem("userEntity") == null){
      this.$router.push("Register")
    }
    this.showLoader = true
    const response = await serverGetMyExperiments()
    this.showLoader = false
    if(response.status == 200){
      this.experimentsData = response.data
    }
    else if(response.status == 401){
      this.$root.store.setRegisteredState(false)
      this.$router.push("Register")
    }
    else{
      this.isError = true
    }
  },
  methods:{
    navigateToCreateExp(){
      this.$router.push("newExperiment")
    }
  }
}
</script>

<style lang="scss" scoped>
.page-wrapper{
  text-align: center;
  font-size: 10px;
  margin: 0 8%;
  @media (max-width: 1500px) {
    margin: 0 5%;
  }
}
h2{
  font-size: 2.7em;
}
.toast-container{
  display: flex;
  justify-content: center;
}

.no-exps-div{
  margin-top: 10px;
  font-size: 2.2rem;
  span{
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>