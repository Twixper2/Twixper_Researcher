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
        <div class="description" ref="descriptionDiv">
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
          <div 
            class="create-exp-btn-container"
            v-else
          >
            <b-button 
              variant="info" 
              class="shadow-none"
              @click="navigateToCreateExp()"
            >
            Create New Experiment
            </b-button>
          </div>
        </div>
        <div class="app-img-container" >
          <img 
            @load="appImgLoaded()"
            ref="appImg"
            id="app-img" 
            src="../assets/img/mobile_app_shadow.png" >
        </div>
       
      </div>

      <div class="cards-container" ref="cardsContainer"> 
          <div class="card-container" id="card-1"> 
            <div class="card-img-container">
              <img class="home-explaination-img" src="../assets/img/plus_blue.png" >
            </div>
            <div class="card-text-container">
              <h2>Create an experiment</h2>
            </div>
          </div>
          <b-tooltip target="card-1" triggers="hover">
            After you login, you can create experiments with multiple groups in each.
          </b-tooltip>

          <div class="arrow-container"> 
            <img class="home-explaination-img" src="../assets/img/right-arrow.png" >
          </div>

          <div class="card-container" id="card-2"> 
            <div class="card-img-container">
              <img class="home-explaination-img" src="../assets/img/manipulate_blue.png" >
            </div>
            <div class="card-text-container">
              <h2>Choose manipulations</h2>
            </div>
          </div>
          <b-tooltip target="card-2" triggers="hover">
            For every group, choose the manipulations and the size in percents. 
          </b-tooltip>

          <div class="arrow-container"> 
            <img class="home-explaination-img" src="../assets/img/right-arrow.png" >
          </div>

          <div class="card-container" id="card-3"> 
            <div class="card-img-container">
              <img class="home-explaination-img" src="../assets/img/handshake2_blue.png" >
            </div>
            <div class="card-text-container">
              <h2>Invite participants</h2>
            </div>
          </div>
          <b-tooltip target="card-3" triggers="hover">
            After activating the experiment, you'll get an experiment code for the participant to enter in Twixper for Participants. We link each participant to a group while maintianing the percentege you chose.         
          </b-tooltip>

          <div class="arrow-container"> 
            <img class="home-explaination-img" src="../assets/img/right-arrow.png"  >
          </div>

          <div class="card-container" id="card-4"> 
            <div class="card-img-container">
              <img class="home-explaination-img" src="../assets/img/report_blue.png" >
            </div>
            <div class="card-text-container">
                <h2>Download report</h2>
            </div>
          </div>
        <b-tooltip target="card-4" triggers="hover">
          You will be able to download a report with all the data collected in the experiment (contents users saw and their interaction with it).
        </b-tooltip>
      </div>
    </div>
    <br>
    <div class="footer-basic">
      <footer>
          <p class="copyright">Created by Nir Dzouraev, Tal Frimerman and Dekel Levy. Project is guided by Dr. Nir Grinberg. </p>
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
  mounted(){
    setTimeout(() =>{
      this.$refs.descriptionDiv.classList.add("show")
      this.$refs.cardsContainer.classList.add("show")
    }, 1)
    // Assign load event to the explaination images
    document.querySelectorAll('.home-explaination-img').forEach(item => {
      item.addEventListener('load', imgLoaded)
    })
  },
  beforeDestroy(){
    // Remove load events
    document.querySelectorAll('.home-explaination-img').forEach(item => {
      item.removeEventListener('load', imgLoaded)
    })
  },
  methods:{
    appImgLoaded(){
      this.$nextTick(() => {this.$refs.appImg.classList.add("show")})
    },
    googleLoginSuccess(){
      this.isGuest = false
    },
    getOffset(el) {
      const rect = el.getBoundingClientRect();
      return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
      }
    },
    navigateToCreateExp(){
      this.$router.push("newExperiment")
    }
  },
}

function imgLoaded(){
  setTimeout(() =>{
    this.classList.add("loaded")
  }, 1)
}
</script>

<style lang="scss" scoped>
.page-wrapper{  
  text-align: center;
}
h2{
  font-size: 1.5rem;
  text-align: center;
  color: #ffffff;
}

.cards-container, .warning-container{
  margin: 0 12%;
  @media (max-width: 1300px) {
    margin: 0 6%;
  }
}

.system-description-inner-wrapper{
  position: relative;
  // background: rgb(9,6,68);
  background: linear-gradient(180deg,#071827 3%, #09243c 23%,rgb(6, 47, 82) 43%,rgb(4, 45, 81) 53%,#042541 63%,rgb(4, 33, 58) 73%,#07182782 100%);
  
  // position: absolute;
  // left: 0;
  padding: 2% 6% 2% 14%; //5rem 9rem 3rem 22rem
  margin: 20px 0;
  // width: 100vw;
  color: white;

  // min-height: 370px; 
  // max-height: 55vmin;
  // height: 55vmin;

  display: grid;
  grid-template-columns: 40% 60%;
  // grid-template-rows: 100%;
}

.description{
  transform: translateY(-120px);
  opacity: 0;
  transition-property: transform, opacity;
  transition-duration: 1300ms;
  transition-timing-function: ease;
  font-size: 2.2rem;
  &.show{
    transform: translateY(0);
    opacity: 1;
  }
  h1{
    font-size: 3.7rem;
  }
}

.register-invitation-container{
  display: flex;
  justify-content: left;
  align-items: center;
}
.app-img-container {
  height: 45vmin;
  display: flex;
  justify-content: center;
  img{
    height: 100%;
    transform: translateX(120px);
    opacity: 0;
    transition-property: transform, opacity;
    transition-duration: 1000ms;
    transition-timing-function: ease;
     &.show{
      transform: translateX(0);
      opacity: 1;
    }
  }
}

.create-exp-btn-container{
  margin-top: -10px;
  button{
    font-size: 2rem;
    padding: 0.5rem 1rem;
  }
}

.system-description{
  margin: auto;
  font-size: 1.9rem;
  text-align: left;
}

.card-container, .arrow-container{
  // height: 180px;
  height: 22vmin;
}

.arrow-container {
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    height: 35%;
  }
}

.card-container{
  display: grid;
  grid-template-rows: 78% 22%;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 0.5px 0px 0.5px rgb(11, 30, 76), 4px 2px 13px rgb(27, 42, 92);
  background-color: #051e39;

  .card-img-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5%;
    img{
      height: 85%;
    }
  }
  .card-text-container{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.home-explaination-img{
  visibility: hidden;
  opacity: 0;
  transition: opacity 900ms ease;
  &.loaded{
    visibility: visible;
    opacity: 1;
  }
}

.cards-container{
  display: grid;
  grid-template-columns: repeat(7, 14%);
  justify-content: space-around;
  visibility: hidden;
  opacity: 0;
  transition: opacity 900ms ease;
  &.show{
    visibility: visible;
    opacity: 1;
  }
}

.footer-basic {
  padding-top: 80px;
  // background-color:#ffffff;
  color:#4b4c4d;
}

.copyright{
  font-size: 1.2rem;
  text-align:center;
  color:#aaa;
}

@media (max-width: 880px) {
  .app-img-container{
    display: none;
    visibility: hidden;
  }
  .system-description-inner-wrapper{
    display: block;
  }
}
</style>

<style lang="scss">

</style>