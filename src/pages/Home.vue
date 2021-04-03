<template>
  <div class="page-wrapper">
    <!-- <img id="logo" src="../assets/img/alphaWithTx.png" width="20%" height="20%">
     -->
    <div class="system-description">

      <!-- <div class="warning-container">
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
      </div> -->
      
      <div class="system-description-inner-wrapper">
        <div class="description">
          <h1><b>Twitter Experimentation <br/> at Your Fingertips.</b></h1>
          <br/>
          Run experiments on Twitter users with manipulations on the content they see.
         <br/> 
          <b>Start now.</b>
          <br/> <br/>

          <div 
          class="register-invitation-container"
          v-if="isGuest"
          >
            <RegisterComponent 
              @login-success="googleLoginSuccess"
            />
          </div>
        </div>
        <div>
          <img id="app-img" src="../assets/img/mobile_app_shadow.png" width="41%" >
        </div>
       
      </div>

      <div class="cards-container"> 
          <div class="card-container"> 
            <b-card
              title=""
              tag="article"
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

          <div class="arrow-container"> 
            <img id="logo" src="../assets/img/right-arrow.png" width="50%" >
          </div>

          <div class="card-container"> 
            <b-card
              title=""
              tag="article"
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

          <div class="arrow-container"> 
            <img id="logo" src="../assets/img/right-arrow.png" width="50%" >
          </div>

          <div class="card-container"> 
            <b-card
              title=""
              tag="article"
              id="card-3"
              class="shine-card"
            >
              <img id="logo" src="../assets/img/handshake2_blue.png" width="100%" height="100%">
              <b-card-text>
                <h2>Invite participants <br/> <br/></h2>
              </b-card-text>
            </b-card>
          </div>
          <b-tooltip target="card-3" triggers="hover">
            After activating the experiment, you'll get an experiment code for the participant to enter in Twixper for Participants. We link each participant to a group while maintianing the percentege you chose.         
          </b-tooltip>

          <div class="arrow-container"> 
            <img id="logo" src="../assets/img/right-arrow.png" width="50%" >
          </div>

          <div class="card-container"> 
            <b-card
              title=""
              tag="article"
              id = "card-4"
              class="shine-card"
            >
              <img id="logo" src="../assets/img/report_blue.png" width="100%" height="100%">
              <b-card-text>
                <h2>Download report<br/> <br/></h2>
              </b-card-text>
            </b-card>
          </div>
        <b-tooltip target="card-4" triggers="hover">
          You will be able to download a report with all the data collected in the experiment (contents users saw and their interaction with it).
        </b-tooltip>
      </div>
    </div>
    <br>
    <div class="footer-basic">
      <footer>
          <p class="copyright">Created by Nir Dzouraev, Tal Frimerman and Dekel Levy       </p>
      </footer>
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
  font-size: 1.5rem;
  text-align: center;
}

.cards-container, .warning-container{
  margin: 0 12%;
  @media (max-width: 1500px) {
    margin: 0 6%;
  }
}

.system-description-inner-wrapper{
  position: relative;
  background: rgb(9,6,68);
  background: linear-gradient(90deg, rgba(9,6,68,1) 0%, rgba(9,9,121,1) 51%, rgba(30,58,116,1) 86%);
  
  // position: absolute;
  // left: 0;
  padding: 50px 90px 30px 220px;
  margin: 20px 0;
  // width: 100vw;
  color: white;
  min-height: 370px; 

  display: grid;
  grid-template-columns: 40% 59%;
  grid-gap: 20%;

  .register-invitation-container{
    display: flex;
    justify-content: left;
    align-items: center;
  }
}

.description{
  font-size: 2.2rem;
  h1{
    font-size: 3.7rem;
  }
}

.system-description{
  margin: auto;
  font-size: 1.9rem;
  text-align: left;
}

.arrow-container {
  margin-left: 35%;
  margin-top: 40%;
}



.cards-container{
  display: grid;
  grid-template-columns: repeat(7, 14%);
  justify-content: space-around;
}
</style>

<style lang="scss">

</style>