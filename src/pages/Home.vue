<template>
  <div class="page-wrapper">
    <h1>Welcome to Twixper!</h1>
    <h2>Put here our moto line</h2>
    <br>
    <br>
    <div 
      class="register-invitation-container"
      v-if="isGuest"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus dolorum ipsum suscipit
      atque magni exercitationem sed nulla non cum odit provident earum explicabo blanditiis soluta 
      expedita, pariatur doloribus tempore quas! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus dolorum ipsum suscipit
      atque magni exercitationem sed nulla non cum odit provident earum explicabo blanditiis soluta 
      expedita, pariatur doloribus tempore quas!
      <br><br>
    </div>
    <RegisterComponent />
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
  
}
</script>

<style lang="scss" scoped>
.page-wrapper{
  text-align: center;
}
h1{
  font-size: 3.5rem;
}
.register-invitation-container{
  width: 85%;
  margin: auto;
  font-size: 1.9rem;
  
}
</style>