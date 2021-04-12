<template>
    <div class="group-wrapper" ref="groupWrapper">
        <!-- Group card header -->
        <div class="group-header">
            <textarea 
                class="name-textarea"
                :class="{disabledTextarea: isControlGroup == true}"
                v-model="groupName"
                :disabled="isControlGroup"
            >
            </textarea>

            <input 
                v-if="isControlGroup"
                type="checkbox"
                class="checkbox"
                v-model="isControlGroupSelected"
                :title="controlGroupSelectCheckboxTitle"
            >

            <div class="percent-choice-container">
                <input type="number" min=1 max=100 ref="percentInput"
                    v-model="groupSize" onKeyDown="return false"
                    @change="$emit('size-changed')"
                    :disabled="isControlGroupSelected === false"
                >
                <span class="suffix">%</span>
            </div>
        </div>
        <!-- Group card body -->
        <div class="group-body">
            <!-- X btn -->
            <b-button 
                v-if="!isControlGroup"
                variant="outline-danger"
                class="close-btn shadow-none"
                title="Delete group"
                @click="$emit('click-remove-group', groupName)"
            > 
                X
            </b-button>
            <!-- Group manipulations -->
            <div class="group-manip-wrapper">
                <div class="title">Group Manipulations:</div>
                <div class="group-manip-container">
                    <div
                        v-if="isControlGroup" 
                        class="control-group-manip"
                    >
                        Control group has no manipulations.
                    </div>

                    <div 
                        v-if="!isControlGroup" 
                        class="gruop-manip-summary-container"
                    >

                        <div
                            v-for="(manipTitle, i) in groupManipTitles"  :key="i"
                            class="group-manip-summary"
                        >
                            <div class="summary-line">
                                <span class="manip-title" :ref="'mt'+i">{{manipTitle}}: </span> 
                                <span class="manip-sub-title">{{groupManip[i].users.length}} Users</span><span v-if="groupManip[i].users.length > 0">:</span><span v-else>.</span>
                                <span
                                    v-for="(user, j) in groupManip[i].users" :key="j"
                                >
                                    {{groupManip[i].users[j]}}<span v-if="j != groupManip[i].users.length - 1">,</span><span v-else>.</span>
                                </span>
                            </div>

                            <div class="summary-line">
                                <span class="manip-sub-title" :ref="'kw'+i">{{groupManip[i].keywords.length}} Keywords</span><span v-if="groupManip[i].keywords.length > 0">:</span><span v-else>.</span>
                                <span
                                    v-for="(keyword, j) in groupManip[i].keywords" :key="j"
                                >
                                    {{groupManip[i].keywords[j]}}<span v-if="j != groupManip[i].keywords.length - 1">,</span><span v-else>.</span>
                                </span>
                            </div>
                            
                        </div>

                    </div>
                    
                    <div 
                        v-if="!isControlGroup" 
                        @click="openManipModal()"
                        class="edit-manip-header"
                    >
                        <span>Edit manipulations</span>
                        <i class="fas fa-edit"></i>
                    </div>

                    <GroupManipModal 
                        ref="manipModal"
                        :groupManip="groupManip"
                        :groupManipTitles="groupManipTitles"
                        :groupName="groupName"
                        @manip-modal-saved="manipGroupEdited"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GroupManipModal from "./GroupManipModal"

export default {
    components:{
        GroupManipModal
    },
    props:{
        isControlGroup:{
            type: Boolean,
            required: false,
            default: false
        },
        groupNamePlaceholder:{
            type: String,
            required: true
        },
        defaultGroupSize:{
            type: Number,
            required: false
        },
        isSizeLegal:{
            type: Boolean,
            required: true,
        }
    },
    data() {
        return {
            groupName: "",
            isControlGroupSelected: true, // Only relevent when this is the control group
            controlGroupSelectCheckboxTitle: "Remove control group", // Only relevent when this is the control group
            groupSize: -1, // In percentages
            showManipModal: false,
            groupManipTitles: ["Mute", "Inject", "Pixelate Media", "Remove Media"],
            groupManip: [
                {
                    type: "mute",
                    users: [],
                    keywords: []
                },
                {
                    type: "inject",
                    users: [],
                    keywords: []
                },
                {
                    type: "pixel_media",
                    users: [],
                    keywords: []
                },
                {
                    type: "remove_media",
                    users: [],
                    keywords: []
                }
            ]
        }
    },
    watch:{
        isControlGroupSelected(newVal){
            if(!newVal){
                this.$nextTick( () => {
                    this.$refs.groupWrapper.classList.add("not-selected")
                    this.$refs.percentInput.classList.add("unselected")
                    this.controlGroupSelectCheckboxTitle = "Add control group"
                })
                this.$emit('control-group-unselected')
            }
            else{
                this.$nextTick( () => {
                    this.$refs.groupWrapper.classList.remove("not-selected")
                    this.$refs.percentInput.classList.remove("unselected")
                    this.controlGroupSelectCheckboxTitle = "Remove control group"
                })
                this.$emit('control-group-selected')
            }
        },
        isSizeLegal(newVal){
            if(newVal){
                this.$refs.percentInput.classList.add("legal")
            }
            else{
                this.$refs.percentInput.classList.remove("legal")
            }
        }
    },
    created(){
        this.groupSize = this.defaultGroupSize
        this.groupName = this.groupNamePlaceholder
    },
    beforeDestroy(){
        // console.log("Group " + this.groupName + " Destroyed")
    },
    mounted(){
        setTimeout( () => {
            this.$nextTick( () => {this.$refs.groupWrapper.classList.add("show")})
        }, 1)
        if(this.isSizeLegal){
            this.$nextTick( () => {this.$refs.percentInput.classList.add("legal")})
        }

        // Do margin-left on the "Keywords" titles.
        if(!this.isControlGroup){
            for (let i = 0; i < this.groupManipTitles.length; i++) {
                const titleWidth = this.$refs['mt'+i][0].offsetWidth
                this.$nextTick( () => {this.$refs['kw'+i][0].style.marginLeft = titleWidth + "px"})
            }
        }
    },
    methods:{
        fadeGroup(){
            this.$nextTick( () => {this.$refs.groupWrapper.classList.add("removed")})
        },
        getSize(){
            return parseInt(this.groupSize)
        },
        getGroupName(){
            return this.groupName
        },
        getManip(){
            return this.groupManip
        },
        getIsControlGroupSelected(){
            return this.isControlGroupSelected
        },
        setSize(size){
            this.groupSize = size
        },
        setIsControlGroupSelected(bool){
         this.isControlGroupSelected = bool
        },
        openManipModal(){
            this.$refs.manipModal.openModal()
        },
        manipGroupEdited(editedGroupManip){
            for (let i = 0; i < editedGroupManip.length; i++) {
                const element = editedGroupManip[i]
                this.$nextTick( () => {this.groupManip[i].users = element.users })
                this.$nextTick( () => {this.groupManip[i].keywords = element.keywords })
            }
        }
    }
    
}
</script>

<style lang="scss" scoped src="../../assets/css/ExpGroup.scss">
</style>