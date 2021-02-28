<template>
  <div id="app">
    
    <nav>
      <input type="checkbox" id="check">
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <img id="logo" src="./assets/img/twixperLogo.png"/>

      <input id="gstChk" type="checkbox" v-model="resUser" 
          style="position: relative; left: 400px; top: 20px"> 
      <label for="gstChk" style="position: relative; left: 405px; top: 20px">
         Researcher User 
      </label>
      
      <ul class="menu-container">

        <b-nav-item  :to="{ name: 'Home' }">
          Home 
        </b-nav-item> 

        <span v-if="resUser" class="seperator">&#183;</span>
        <li class="dd" v-if="resUser">
          <label for="btn-1" class="showDd">My Experiments +</label>
          <b-nav-item :to="{ name: 'MyExperiments' }">My Experiments </b-nav-item>
          <input type="checkbox" id="btn-1">
          <ul class="ddUl">
            <b-nav-item :to="{ name: 'MyExperiments' }">Active </b-nav-item>
            <b-nav-item :to="{ name: 'MyExperiments' }">Drafts</b-nav-item>
            <!-- <b-nav-item >Third Item</b-nav-item> -->
          </ul>
        </li>

        <span v-if="resUser" class="seperator">&#183;</span>
        <b-nav-item v-if="resUser" :to="{ name: 'NewExperiment' }">
          New Experiment 
        </b-nav-item>

        <span v-if="!resUser" class="seperator">&#183;</span>
        <b-nav-item v-if="!resUser" :to="{ name: 'Register' }">
          Register
        </b-nav-item>

        <span v-if="!resUser" class="seperator">&#183;</span>
        <b-nav-item v-if="!resUser" :to="{ name: 'Login' }">
          Login 
        </b-nav-item>

        <span v-if="resUser" class="seperator">&#183;</span>
        <b-nav-item v-if="resUser" :to="{ name: 'MyProfile' }">
          My Profile
        </b-nav-item>

        <span v-if="resUser" class="seperator">&#183;</span>
        <b-nav-item v-if="resUser">Logout</b-nav-item>
      </ul>
    </nav>
    <br>

    <div class="router-view-grid">
      <div class="router-view-container">
        <router-view/>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  components:{
  },
  data(){
    return{
      resUser: true
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
  background-color: #E8F9FE !important;
}

html{
  font-size: 10px;
  @media (max-width: 1400px) {
    font-size: 9px;
  }
  // @media (max-width: 1200px) {
  //   font-size: 8px;
  // }
}

.router-view-grid{
  display: grid;
  grid-template-columns: 8% 84% 8%;
  grid-template-areas: 
    ". router-view .";
  @media (max-width: 1500px) {
    grid-template-columns: 5% 90% 5%;
  }
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
    font-size: 2rem;
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
</style>