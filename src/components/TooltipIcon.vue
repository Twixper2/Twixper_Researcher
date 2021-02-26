<template>
    <span>
        <i 
            ref="icon"
            :class="iconClass"
            @click="clickedIcon()"
        >
        </i>
        <span ref="tooltipText" class="tooltiptext">{{text}}</span>
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
        },
        isInfo:{
            type: Boolean,
            required: false,
            default: false
        },
        textWidth:{
            type: Number,
            required: false,
            default: 120
        }
        /*size:{
            type: String,
            required: false,
            default: "default"
        }*/
    },
    data() {
        return {
            
        }
    },
    mounted(){
        if(this.disabled){
            this.$refs.icon.classList.add("disabled")
        }
        if(this.isInfo){
            this.$refs.icon.classList.add("isInfo")
            this.$refs.icon.style.fontSize = "2em"
            this.$refs.tooltipText.style.bottom = "28px"
        }
        this.$refs.tooltipText.style.width = this.textWidth + "px"
        this.$refs.tooltipText.style.marginLeft = (-1 * (this.textWidth / 2)) + "px"
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
span{
    position: relative;
    font-size: 10px;
}
i{
    font-size: 3.5em;
    color: black;
    &.disabled{
        opacity: 0.4;
    }
    &:hover:not(.disabled, .isInfo){
        cursor: pointer;
    }
}
.tooltiptext{
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.5s;
    font-size: 1.4em;
    font-weight: 600;
    // width: 120px; // Defined at "mounted"
    bottom: 42px;
    left: 50%;
    // margin-left: -60px; /* (Defined at "mounted") Use half of the width (120/2 = 60), to center the tooltip */
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