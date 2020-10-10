<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    
    <nav>
      <input type="checkbox" id="check">
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <img id="logo" src="./assets/twixperLogo.png"/>

      <input id="gstChk" type="checkbox" v-model="resUser" 
          style="position: relative; left: 400px; top: 20px"> 
      <label for="gstChk" style="position: relative; left: 405px; top: 20px">
         Researcher User 
      </label>

      <ul>
        <b-nav-item  :to="{ name: 'Home' }">
          Home
        </b-nav-item>

        <li class="dd" v-if="resUser">
          <label for="btn-1" class="showDd">My Experiments +</label>
          <b-nav-item :to="{ name: 'MyExperiments' }">My Experiments </b-nav-item>
          <input type="checkbox" id="btn-1">
          <ul class="ddUl">
            <b-nav-item :to="{ name: 'MyExperiments' }">Active </b-nav-item>
            <b-nav-item :to="{ name: 'MyExperiments' }">Drafts</b-nav-item>
            <b-nav-item >Third Item</b-nav-item>
          </ul>
        </li>

        <b-nav-item v-if="resUser" :to="{ name: 'NewExperiment' }">
          New Experiment 
        </b-nav-item>
        <b-nav-item v-if="!resUser" :to="{ name: 'Register' }">
          Register
        </b-nav-item>
        <b-nav-item v-if="!resUser" :to="{ name: 'Login' }">
          Login 
        </b-nav-item>
        <b-nav-item v-if="resUser" :to="{ name: 'MyProfile' }">
          My Profile
        </b-nav-item>
        <b-nav-item v-if="resUser">Logout</b-nav-item>
      </ul>
    </nav>
    <br>
   
    <router-view/>
  </div>
</template>


<script>

export default {
  components:{
  },
  data(){
    return{
      resUser: false
    }
  }
}
</script>

<style lang="scss" scoped>
nav{
  background: rgb(237,245,244);
  background: linear-gradient(0deg, rgba(217,252,252,0.4) 0%, rgba(203,255,255,1) 75%, rgba(217,252,252,0.5) 100%);
  height: 80px;
  width: 100%;
}
img{
  position: absolute;
  width: 300px;
  margin: 7px 5px 0 40px;
}
nav ul{
  float: right;
  margin-right: 15px;
}
.nav-item ,.dd{
  display: inline-block;
  line-height: 80px;
  margin: 0 2px;
}
.nav-link{
  display: inline !important;
  color: #0082e6 ;
  font-size: 22px ;
  padding: 7px 12px !important;
  border-radius: 25px !important;
  font-weight: bold;
}
.showDd{
  display: inline ;
  color: #0082e6 ;
  font-size: 22px ;
  padding: 9px 15px ;
  border-radius: 25px ;
  font-weight: bold;
  line-height: 30px;
}

.a.active, a:hover, .router-link-exact-active,
.showDd:active, .showDd:hover{
  background:rgb(255,255,255, 0.7);
  //color: #14ffe9;
  transition: 0.4s;
  
  color:blue;
  box-shadow:  0 0 5px #33ffff,
               0 0 10px #66ffff;
}
.checkbtn{
  font-size: 30px;
  color: black;
  float: right;
  line-height: 80px;
  margin-right: 40px;
  cursor: pointer;
  display: none;
}
#check{
  display: none;
}
.ddUl{
  position: absolute;
  top: 90px;
  margin: 5px 0 0 20px; 
  border-top: 3px solid cyan;
  opacity: 0;
  background: rgb(255,255,255, 0.9);
  visibility: hidden;
  transition: top .3s ease;
  list-style: none;
  //padding-left: 30px;
  //min-height: 150px;
}
.ddUl li{
  position: relative;
  margin: 0px;
  //width: 100px;
  line-height: 40px;
  float: none;
  display: list-item;
  //border-bottom: 1px solid rgba(0,0,0,0.3);
  border-bottom: 2px solid rgba(165, 240, 255, 0.8);
}
.ddUl li a{
  //line-height: 30px;
  font-size: 19px;
  padding: 0;
}
nav ul li:hover > ul{
  top: 70px;
  opacity: 1;
  visibility: visible;
}
.showDd, #btn-1{
  display: none;
}

@media (max-width: 1020px){
  .nav-link, .showDd{
    font-size: 15px;
  }
}

@media (max-width: 878px){
  .nav-link, .showDd{
    font-size: 30px;
  }
  .checkbtn{
    display: block;
  }
  ul{
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #2c3e50;
    top: 80px;
    left: -100%;
    text-align: center;
    transition: all .5s;
    z-index: 10;
  }
  .ddUl{
    margin:0 ;
  }
  nav ul li, .nav-item{
    display: block;
    margin: 20px 0;
    line-height: 40px;
  }
 
  a:hover,a.active,
  .showDd:hover,.showDd.active{
    background:rgb(255,255,255, 0.7);
    transition: 0.4s;
    color: #0082e6;
  }
  #check:checked ~ ul{
    left: 0;
  }
  .ddUl li{
    display: block;
    width: 100%;
  }
  .showDd{
      display: block;
      cursor: pointer;
  }
  /*.show:hover{
    color: cyan;
  }*/
  .ddUl{
    top: 70px;
    border-top: 0px;
    float: none;
    position: static;
    display: none;
    opacity: 1;
    visibility: visible;
    max-height: 90px;
  }
  .ddUl a{
    padding-left: 40px;
  }
  /*.show + a, .ddUl{
    display: none;
  }*/
  .showDd + .nav-item, .ddUl{
    display: none;
  }
  [id^=btn]:checked + ul{
    display: block;
  }
  .ddUl li{
    border-bottom: 0px;
  }
}



/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}*/
</style>
