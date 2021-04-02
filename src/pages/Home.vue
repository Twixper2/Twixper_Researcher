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
              style="max-width: 20rem;"
              id="card-1"
            >
              <img id="logo" src="../assets/img/plus_blue.png" width="100%" height="100%">
              <b-card-text>
                <h2>Create an experiment</h2>
              </b-card-text>
            </b-card>
          </div>
          <b-tooltip target="card-1" triggers="hover">
            After you login, you can create experiments with multiple groups in each.
          </b-tooltip>
          <div class="col-lg-3 mb-4"> 
            <b-card
              title=""
              tag="article"
              style="max-width: 20rem;"
              id= "card-2"
              class="shine-card"
            >
              <img id="logo" src="../assets/img/manipulate_blue.png" width="100%" height="100%">
              <b-card-text>
                <h2>Choose manipulations</h2>
              </b-card-text>
            </b-card>
          </div>
          <b-tooltip target="card-2" triggers="hover">
            For every group, choose the manipulations and the size in percents. 
          </b-tooltip>

          <div class="col-lg-3 mb-4"> 
            <b-card
              title=""
              tag="article"
              style="max-width: 20rem;"
              id="card-3"
              class="shine-card"
            >
              <img id="logo" src="../assets/img/handshake2_blue.png" width="100%" height="100%">
              <b-card-text>
                <h2>Invite participants</h2>
              </b-card-text>
            </b-card>
          </div>
          <b-tooltip target="card-3" triggers="hover">
            After activating the experiment, you'll get an experiment code for the participant to enter in Twixper Participant. We link each participant to a group while maintianing the percentege you chose.         
          </b-tooltip>

          <div class="col-lg-3 mb-4"> 
            <b-card
              title=""
              tag="article"
              style="max-width: 20rem;"
              id = "card-4"
              class="shine-card"
            >
              <img id="logo" src="../assets/img/report_blue.png" width="100%" height="100%">
              <b-card-text>
                <h2>Download report</h2>
              </b-card-text>
            </b-card>
          </div>
        </div>
        <b-tooltip target="card-4" triggers="hover">
          You will be able to download a report with all the data collected in the experiment (content users saw and there interaction with it).
        </b-tooltip>
      </div>

     

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
    },
    getOffset(el) {
      const rect = el.getBoundingClientRect();
      return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    }
}
  },

  
}
</script>

<style lang="scss" scoped>

.page-wrapper{  
  text-align: center;
}
h2{
  font-size: 1.7rem;
  text-align: center;
}
.register-invitation-container, .system-description{
  width: 85%;
  margin: auto;
  font-size: 1.9rem;
  text-align: left;
}
b-tooltip{
  font-size: 5000rem;
}


</style>