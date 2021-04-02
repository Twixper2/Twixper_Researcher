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
          <h1>Welcome to Twixper!</h1>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim in earum, perspiciatis
          incidunt reprehenderit quaerat quos expedita dolores velit veniam?
         <br>
          Lorem ipsum, it. Enim in earum, perspiciatis
          incidunt reprehendolor sit amet consectetur adipisicing elos expedita dolores velit veniam?
        </div>

        <div 
          class="register-invitation-container"
          v-if="isGuest"
        >
          <RegisterComponent 
            @login-success="googleLoginSuccess"
          />
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

          <div class="card-container"> 
            <b-card
              title=""
              tag="article"
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

          <div class="card-container"> 
            <b-card
              title=""
              tag="article"
              id = "card-4"
              class="shine-card"
            >
              <img id="logo" src="../assets/img/report_blue.png" width="100%" height="100%">
              <b-card-text>
                <h2>Download report</h2>
              </b-card-text>
            </b-card>
          </div>
        <b-tooltip target="card-4" triggers="hover">
          You will be able to download a report with all the data collected in the experiment (contents users saw and their interaction with it).
        </b-tooltip>
      </div>


    </div>
    <br>
    
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
  padding: 20px 60px 20px 60px;
  margin: 20px 0;
  // width: 100vw;
  color: white;
  min-height: 370px; 

  display: grid;
  grid-template-columns: 60% 40%;
  .register-invitation-container{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.description{
  font-size: 2.2rem;
  h1{
    font-size: 3.5rem;
  }
}

.system-description{
  margin: auto;
  font-size: 1.9rem;
  text-align: left;
}



.cards-container{
  display: grid;
  grid-template-columns: repeat(4, 18%);
  justify-content: space-around;
}
</style>

<style lang="scss">

</style>