<template>
  <div class="container">
    <PageTitle title="Login" /> <!--textAlign="left"-->
    <h1>This is login page</h1>
  </div>
</template>


<script>
import PageTitle from "../components/PageTitle";

export default {
  components:{
    PageTitle
  },
  
}
</script>

<style lang="scss" scoped>
.container{
  text-align: center;
}
</style>