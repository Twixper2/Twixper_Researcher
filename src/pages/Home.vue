<template>
  <div class="page-wrapper">
    <h1>Welcome to Twixper!</h1>
    <h2>Put here our moto line</h2>
    <br>
    <br>
    <div class="system-description">
      <b>This is system description</b>
      <br>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus dolorum ipsum suscipit
      atque magni exercitationem sed nulla non cum odit provident earum explicabo blanditiis soluta 
      expedita, pariatur doloribus tempore quas! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus dolorum ipsum suscipit
      atque magni exercitationem sed nulla non cum odit provident earum explicabo blanditiis soluta 
      expedita, pariatur doloribus tempore quas!
    </div>
    <br><br>
    <div 
      class="register-invitation-container"
      v-if="isGuest"
    >
      <b>Join us! Lorem ipsum dolor sit amet.</b>
      <br><br>
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
  
}
</style>