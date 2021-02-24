<template>
    <span>
        <i 
            ref="icon"
            :class="iconClass"
            @click="clickedIcon()"
        >
        </i>
        <span class="tooltiptext">{{text}}</span>
    </span>
</template>

<script>
export default {
    props:{
        iconClass:{
            type: String,
            required: true
        },
        text:{
            type: String,
            required: false,
            default: "text"
        },
        disabled:{
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {
            
        }
    },
    mounted(){
        if(this.disabled){
            this.$refs.icon.classList.add("disabled")
        }
    },
    methods:{
        clickedIcon(){
            if(!this.disabled){
                this.$emit("clicked-icon")
            }
        }
    }
}
</script>

<style lang="scss" scoped>
i{
    font-size: 3.5em;
    &.disabled{
        opacity: 0.5;
    }
    &:hover:not(.disabled){
        cursor: pointer;
    }
}
.tooltiptext{
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.5s;
    font-size: 1.4em;
    font-weight: 600;
    width: 120px;
    bottom: 42px;
    left: 50%;
    margin-left: -60px; /* Use half of the width (120/2 = 60), to center the tooltip */
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    
    /* Position the tooltip text*/
    position: absolute;
    z-index: 1;
    &::after {
        content: " ";
        position: absolute;
        top: 100%; /* At the bottom of the tooltip */
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: black transparent transparent transparent;
    }
}
span:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}
</style>