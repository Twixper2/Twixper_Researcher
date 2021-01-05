<template>
  <div class="page-wrapper">
    <h1>This is Home page</h1>
    <h3>Check out our awsome loader:</h3>
    <br>
    <Loader />
    <br>
    <h5>(We'll replace the logo inside with our logo)</h5>
  </div>
</template>


<script>
import Loader from "../components/Loader";

export default {
  components:{
    Loader
  },
  
}
</script>

<style lang="scss" scoped>
.page-wrapper{
  text-align: center;
}
</style>