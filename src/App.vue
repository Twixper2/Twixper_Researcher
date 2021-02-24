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

.router-view-grid{
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-template-areas: 
    ". router-view .";
  @media (max-width: 1300px) {
    grid-template-columns: 5% 90% 5%;
  }
}
.router-view-container{
  grid-area: router-view;
}
</style>