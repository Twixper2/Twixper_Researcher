<template>
  <div id="app">
    
    <nav>
      <input type="checkbox" id="check">
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <img 
        @click="clickedLogo()"
        class="logo-img" 
        src="./assets/img/alphaTwixperSideBySide2.png"
      />

      <!-- <input id="gstChk" type="checkbox" v-model="registeredUser" 
          style="position: relative; left: 400px; top: 20px"> 
      <label for="gstChk" style="position: relative; left: 405px; top: 20px">
         Researcher User 
      </label> -->
      
      <ul ref="menuContainer" class="menu-container">

        <b-nav-item  :to="{ name: 'Home' }">
          Home 
        </b-nav-item> 

        <span v-if="$root.store.registeredUser" class="seperator">&#183;</span>
        <li class="dd" v-if="$root.store.registeredUser">
          <label for="btn-1" class="showDd">My Experiments +</label>
          <b-nav-item :to="{ name: 'MyExperiments' }">My Experiments </b-nav-item>
          <input type="checkbox" id="btn-1">
          <ul class="ddUl">
            <b-nav-item :to="{ name: 'MyExperiments' }">Active </b-nav-item>
            <b-nav-item :to="{ name: 'MyExperiments' }">Drafts</b-nav-item>
            <!-- <b-nav-item >Third Item</b-nav-item> -->
          </ul>
        </li>

        <span v-if="$root.store.registeredUser" class="seperator">&#183;</span>
        <b-nav-item v-if="$root.store.registeredUser" :to="{ name: 'NewExperiment' }">
          New Experiment 
        </b-nav-item>

        <span v-if="!$root.store.registeredUser" class="seperator">&#183;</span>
        <b-nav-item v-if="!$root.store.registeredUser" :to="{ name: 'Register' }">
          Sign in
        </b-nav-item>

        <!-- <span v-if="!$root.store.registeredUser" class="seperator">&#183;</span>
        <b-nav-item v-if="!$root.store.registeredUser" :to="{ name: 'Login' }">
          Login 
        </b-nav-item> -->

        <span v-if="$root.store.registeredUser" class="seperator">&#183;</span>
        <!-- <b-nav-item v-if="$root.store.registeredUser" :to="{ name: 'MyProfile' }">
          My Profile
        </b-nav-item> -->
        <b-nav-item v-if="$root.store.registeredUser" class="profile-nav" >
          <i class="fas fa-user-circle"></i>
          <!-- {{googleUsername}} -->
          {{$root.store.userEntity.googleUsername}}
        </b-nav-item>

        <span v-if="$root.store.registeredUser" class="seperator">&#183;</span>
        <!-- <b-nav-item v-if="resUser">Logout</b-nav-item> -->

        <!-- Button to logout -->
        <b-nav-item :hidden="!$root.store.registeredUser">
          <GoogleLogin 
            ref="googleLoginComp"
            :params="params" 
            :logoutButton="true"
            :onCurrentUser="googleOnCurrentUser"
            :onUserNotSignedWithGoogle="userNotSignedWithGoogle"
            :onSuccess="onLogoutSuccess" 
            :onFailure="onLogoutFailure"
            :onGoogleLoadErr="googleLoadErr"
            class="nav-link"
          >
          Logout
          </GoogleLogin>
        </b-nav-item>
      </ul>
    </nav>

    <!-- <br> -->

    <div class="router-view-grid">
      <div class="router-view-container">
        <router-view/>
      </div>
    </div>
  </div>
</template>


<script>
import GoogleLogin from './components/google/GoogleLogin';
import {serverValidateSession} from "./assets/communicators/serverCommunicator"

export default {
  components:{
    GoogleLogin
  },
  data(){
    return{
      showNavMenu: false,
      googleUsername: null,
      params: {
        client_id: process.env.VUE_APP_CLIENT_ID
      },
    }
  },
  watch:{
    showNavMenu(newVal){
      if(newVal){
        this.$refs.menuContainer.classList.add("show")
      }
    }
  },
  methods:{
    userNotSignedWithGoogle(){
      console.log("not signed")
      this.showNavMenu = true
      this.$root.store.setRegisteredState(false)
    },
    async googleOnCurrentUser(googleUser){
      console.log("signed")
      if(localStorage.getItem("researcher_id_enc") == null){
        // Not signed
        this.$refs.googleLoginComp.forceLogout()
        this.showNavMenu = true
        return
      }
      // Check if the cookie of our server is valid
      const response = await serverValidateSession()
      if(response.status == 200){
        if(response.data.hasSession == true){ // The cookie is valid
          this.$root.store.setRegisteredState(true)
          if(localStorage.getItem['userEntity'] == null){
            const profile = googleUser.getBasicProfile();

            const googleUsername = profile.getName();
            const googleImgUrl = profile.getImageUrl();
            const googleEmail = profile.getEmail();

            const userEntity = {
                googleUsername: googleUsername,
                googleImgUrl: googleImgUrl,
                googleEmail: googleEmail
            }
            localStorage.setItem('userEntity',JSON.stringify(userEntity));
            this.googleUsername = googleUsername
          }
        }
        else{ // The cookie is invalid. Force logout from google
          console.log("Invalid server cookie, forcing logout from google")
          this.$refs.googleLoginComp.forceLogout()
        }
      }
      else{
        // Server error
        console.log("Server error while checking the cookie")
      }

      this.showNavMenu = true
      
    },
    onLogoutSuccess(){
      // this.registeredUser = false
      localStorage.removeItem('userEntity')
      localStorage.removeItem('researcher_id_enc')
      this.$root.store.setRegisteredState(false)
      this.$root.toast("Logout", "Logged out successfully", "success");
      if(this.$route.name == "Home"){
        window.location.reload()
      }
      else{
        this.$router.push("/")
      }
    },
    onLogoutFailure(err){
      console.log(err)
    },
    googleLoadErr(err){
      this.showNavMenu = true
    },
    clickedLogo(){
      // Redirect to home
      if(this.$route.name != "Home" &&  this.$route.name != "default"){
        this.$router.push("/")
      }
    }
  }
}
</script>

<style lang="scss" src="./assets/css/Menu.scss" scoped>

</style>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  outline: none;
}

body{
  /*background-color: #E8F9FE !important; */
  background-color: white !important;

}

html{
  font-size: 62.5%; // 10px
  @media (max-width: 1400px) {
    font-size: 56.25%; // 9px
  }
  // @media (max-width: 1200px) {
  //   font-size: 8px;
  // }
}

.router-view-grid{
  // display: grid;
  // grid-template-columns: 8% 84% 8%;
  // grid-template-areas: 
  //   ". router-view .";
  // @media (max-width: 1500px) {
  //   grid-template-columns: 5% 90% 5%;
  // }
  
}
.router-view-container{
  grid-area: router-view;
}

$toast-width: 75%;
.b-toast{
  max-width: $toast-width !important;
  width: $toast-width;
  display: flex !important;
  justify-content: center;
}
.toast{
  flex-basis: unset !important;
}
.custom-toast{
  max-width: $toast-width !important;
  width: $toast-width !important;
}
.custom-toast-header{
  font-size: 1.8rem ;
}
.custom-toast-body{
  font-size: 2rem ;
}
.toast-popup-custom{
  font-size: 1.5rem !important;
}

.modal-custom{
  font-size: 2rem;
  & ~ .modal-backdrop{
    opacity: 0.6 !important;
  }
}

.modal-header-custom{
  h5{
    font-size: 1.5rem;
  }
  button{
    font-size: 2.5rem;
  }
}
.modal-success-header-custom{
  background-color: rgba(212, 237, 218, 0.85);
}
.modal-success-content-custom{
  background-color: rgba(230, 245, 233, 0.85) !important;
}

.modal-manip-header-custom{
  display: flex !important;
  justify-content: center !important;
  position: relative;
  h2{
    font-size: 2.2rem;
    padding-right: 7px;
  }
  button{
    position: absolute;
    right: 3rem;
    bottom: 12%;
    font-size: 1.7rem;
    font-weight: 600;
  }
}

.modal-manip-custom{
  font-size: 1.8rem;
  display: flex !important;
  align-items: center;
  & ~ .modal-backdrop{
    opacity: 0.8 !important;
  }
}

$manip-dialog-width: 80%;
$manip-dialog-height: 90%;
.modal-manip-dialog-custom{
  width: $manip-dialog-width !important;
  height: $manip-dialog-height !important;
  @media (min-width: 200px) {
    max-width: $manip-dialog-width !important;
    max-height: $manip-dialog-height !important;
  }
}

.modal-footer-custom{
  font-size: 1.7rem;
  display: flex !important;
  justify-content: center !important;
  gap: 3rem;
  .btn{
    font-size: inherit;
    font-weight: 600;
  }
}

.msgbox-footer-custom{
  font-size: 1.5rem;
  .btn{
    font-size: inherit;
    font-weight: 600;
  }
}

/* Tooltip */
.b-tooltip, .tooltip{
  font-size: 1.5rem !important;
}
.tooltip-inner{
  max-width: 290px !important
}

/* Report processing loader */
#spinnerContainer{
  height: 50%;
  width: 20%;
  background: url("./assets/img/SpinnerGif2.gif");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  // background-image: url("./assets/img/SpinnerGif.gif");
}
</style>