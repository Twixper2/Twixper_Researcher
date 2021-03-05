<template>
  <div class="page-wrapper">
    <!-- <PageTitle title="Registration" /> textAlign="left" -->
    
    <h1>This is registration page</h1>
    <br>
    <RegisterComponent />
  </div>
</template>


<script>
import RegisterComponent from '../components/RegisterComponent';

export default {
  components:{
    RegisterComponent
  },
  data() {
    return {
     
    }
  },
  
}
</script>

<style lang="scss" scoped>
.page-wrapper{
  text-align: center;
}
</style>