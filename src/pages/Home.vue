<template>
  <div class="page-wrapper">
    <!-- <img id="logo" src="../assets/img/alphaWithTx.png" width="20%" height="20%">
     -->
    <br>
    <div class="system-description">
      <b-card
        border-variant="warning"
        header="⚠  This is an alpha version"
        header-bg-variant="transparent"
        header-text-variant="primary"
        align="center"
      >
        <b-card-text>
          It is meant only for getting a feeling of the experience using Twixper. 
        </b-card-text>
      </b-card>
      <br>
      <div class="container"> 
        <div class="row"> 
          <div class="col-lg-3 mb-4"> 
            <b-card
              title=""
              tag="article"
              style="max-width: 25rem;"
              class="mb-2"
              id="tooltip-target-1"
            >
              <img id="logo" src="../assets/img/plus.png" width="100%" height="100%">
              <b-card-text>
                <h2>Create an experiment</h2>
              </b-card-text>
            </b-card>
            <b-tooltip target="tooltip-target-1" triggers="hover">
              After you login you can create experiments with multiple groups in each.
            </b-tooltip>
          </div>

          <div class="col-lg-3 mb-4"> 
            <b-card
              title=""
              tag="article"
              style="max-width: 25rem;"
            >
              <img id="logo" src="../assets/img/manipulate.png" width="100%" height="100%">
              <b-card-text>
                <h2>Choose manipulations</h2>
              </b-card-text>
            </b-card>
          </div>

          <div class="col-lg-3 mb-4"> 
            <b-card
              title=""
              tag="article"
              style="max-width: 25rem;"
            >
              <img id="logo" src="../assets/img/handshake2.png" width="100%" height="100%">
              <b-card-text>
                <h2>Invite participants</h2>
              </b-card-text>
            </b-card>
          </div>

          <div class="col-lg-3 mb-4"> 
            <b-card
              title=""
              tag="article"
              style="max-width: 25rem;"
            >
              <img id="logo" src="../assets/img/report.png" width="100%" height="100%">
              <b-card-text>
                <h2>Download report</h2>
              </b-card-text>
            </b-card>
          </div>


        </div>
      </div>

      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          - For every group, choose the manipulations and the size in percents. <br>
          - After you activate the experiment, you'll get an experiment code for the participant to enter in Twixper Participant.  <br>
          - We link each participant to a group randomaly, while making sure the percentage you chose for each group is maintained. <br> 
          - You will be able to download a report with all the data collected in the experiment <br>        
        </b-card>
      </b-collapse>
      

    </div>
    <br><br>
    <div 
      class="register-invitation-container"
      v-if="isGuest"
    >
      <br>
      <RegisterComponent 
        @login-success="googleLoginSuccess"
      />
    </div>
  </div>
</template>


<script>
import RegisterComponent from "../components/RegisterComponent"

export default {
  components:{
    RegisterComponent
  },
  data() {
    return {
      isGuest: localStorage.getItem("userEntity") == null
    }
  },
  methods:{
    googleLoginSuccess(){
      this.isGuest = false
    }
  }
  
}
</script>

<style lang="scss" scoped>

body{
  background-color: black !important;
}
.page-wrapper{  
  text-align: center;
}
h1{
  font-size: 3.5rem;
}
.register-invitation-container, .system-description{
  width: 85%;
  margin: auto;
  font-size: 1.9rem;
  text-align: left;
  
}


</style>