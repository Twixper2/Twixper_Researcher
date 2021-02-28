<template>
    <div id="container">
            <div id="loader">       
            </div>
            <!-- <img src="../assets/img/logo.png" > -->
    </div>
</template>

<script>
export default {
        
}
</script>

<style lang="scss" scoped>
img{
    width: 35px;
    position: absolute;
    opacity: 0.6;
}
#container
{
 display:flex;
 justify-content:center ;
 align-items:center;
 min-height:100%;
 width: 100%;
 //background:#000;
}
/*#container
{
 display:flex;
 flex-wrap: wrap;
 
 max-width: 12%;
 //min-height:200px;
 //background:#000;
}*/

#loader 
{
 width: 55px;
 height: 55px;
 border-radius: 50%;
 background: #14ffe9;
 //background: linear-gradient(#14ffe9,#e5f403, #ff00e0);
 animation: animate .9s linear infinite;
}

@keyframes animate
{
   0%
   { transform: rotate(0deg);
   //filter:hue-rotate(0deg);
   }
   100%
   {
    transform: rotate(360deg);
     //filter:hue-rotate(360deg);
   }
}

#loader:before
{
 content: '';
 position: absolute;
 top: 0px;
 left: 0px;
 right: 6px;
 bottom: 6px;
 width: 50px;
 height: 50px;
 //background: rgb(56, 123, 140);
 background: #E8F9FE ; 
 border-radius:50%;
 z-index: -20;
}
/*
#loader:after
{
 content: '';
 position:absolute;
 top:0px;
 left:0px;
 right:0px;
 bottom:0px;
 //background:linear-gradient(45deg,transparent,
 //transparent 40%, #e5f403);
 border-radius:50%;
 z-index: 1000;
 filter: blur(30px);
}*/
</style>