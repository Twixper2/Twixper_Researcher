<template>
  <div class="container">
    <PageTitle title="My Experiments" /> <!--textAlign="left"-->
    
    <h1>My Experiments Page</h1>
    
    <Loader />
  </div>
</template>


<script>
import Loader from "../components/Loader";
import PageTitle from "../components/PageTitle";

export default {
  components:{
    Loader,
    PageTitle
  },
  
}
</script>

<style lang="scss" scoped>
.container{
  text-align: center;
}
</style>