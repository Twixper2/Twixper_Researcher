<template>
    <div class="epl-wrapper">
        <ExperimentPreview 
            v-for="(exp, i) in experimentsData"
            :key="i"
            :experimentData="exp"
        />
    </div>
</template>

<script>
import ExperimentPreview from "./ExperimentPreview"

export default {
    components:{
        ExperimentPreview
    },
    props:{
        experimentsData:{
            type: Array,
            required: true
        }
    },
    data(){
        return{

        }
    },
}
</script>

<style lang="scss" scoped>
.epl-wrapper{
    display: grid;
    grid-template-columns: repeat(3, 33.3%);
    grid-auto-rows: minmax(200px, auto);
}
@media (max-width: 1200px) {
    .epl-wrapper{
        grid-template-columns: repeat(2, 50%);
    }
}
</style>