<template>
  <div class="container">
    <PageTitle title="Create New Experiment" textAlign="left"/> <!--textAlign="left"-->
    
    <h1>Create New Experiment Page</h1>
    
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