<template>
  <div class="page-wrapper">
    <!-- <PageTitle title="Registration" /> textAlign="left" -->
    
    <h1>This is registration page</h1>
    
    <Loader />
  </div>
</template>


<script>
import Loader from "../components/Loader";

export default {
  components:{
    Loader,
    
  },
  
}
</script>

<style lang="scss" scoped>
.page-wrapper{
  text-align: center;
}
</style>