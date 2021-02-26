<template>
    <div class="groups-manager-wrapper">
        <!-- Control group -->
        <ExpGroup 
            ref="cGroup"
            :isControlGroup="true"
            :isSizeLegal="isSizesLegal"
            :defaultGroupSize="defaultGroupSizes"
            groupNamePlaceholder="Control group"
            @size-changed="checkIfSizesLegal()"
            @control-group-selected="checkIfSizesLegal()"
            @control-group-unselected="checkIfSizesLegal()"
        /> 

        <PlusButton @click-btn="addGroup" />
        <ExpGroup 
            v-for="refName in groupsRefs" :key="refName"
            :ref="refName"
            :defaultGroupSize="defaultGroupSizes"
            :isSizeLegal="isSizesLegal"
            :groupNamePlaceholder="'Group ' + (nextGroupCounter - 1)"
            @click-remove-group="removeGroup(refName, ...arguments)"
            @size-changed="checkIfSizesLegal()"
        />
        
    </div>
</template>

<script>
import ExpGroup from "./ExpGroup"
import PlusButton from "../PlusButton"

export default {
    components:{
        ExpGroup,
        PlusButton
    },
    data() {
        return {
            groupsRefs: [], // "cGroup" is always Control group
            nextGroupCounter: 2,
            defaultGroupSizes: 50,
            isSizesLegal: false // Whether the combind group sizes is 100.
        }
    },
    methods:{
        addGroup(){
            // Calculate the new total groups sizes
            let totalSize = this.defaultGroupSizes // The size of the next-to-add group
            if(this.$refs.cGroup.getIsControlGroupSelected()){
                totalSize += this.$refs.cGroup.getSize()
            }
            for (let i = 0; i < this.groupsRefs.length; i++) {
                const refName = this.groupsRefs[i];
                totalSize += this.$refs[refName][0].getSize()
            }
            if(totalSize == 100){
                this.isSizesLegal = true
            }
            else{
                this.isSizesLegal = false
            }

            this.groupsRefs.push("group" + this.nextGroupCounter)
            this.nextGroupCounter ++
        },
        removeGroup(groupRefName, groupName){
            // Ask the user if he is sure.
            this.$bvModal.msgBoxConfirm('Are you sure you want to delete the group "' + groupName + '"?', {
                title: 'Please Confirm',
                size: 'sm',
                buttonSize: 'lg',
                okVariant: 'danger',
                okTitle: 'Delete',
                cancelTitle: 'Cancel',
                footerClass: 'p-2',
                hideHeaderClose: false,
                centered: true,
                modalClass: 'modal-custom',
                headerClass: 'modal-header-custom'
            })
            .then(value => {
                if(value){ // The user wants to remove the group
                    this.$refs[groupRefName][0].fadeGroup()
                    // Remove the group after .5s to give time for the fade effect.
                    setTimeout( () => {
                        this.$nextTick( () => { 
                            this.groupsRefs = this.groupsRefs.filter(e => e !== groupRefName)
                            this.checkIfSizesLegal()
                        })
                    }, 500)
                }
            })
            .catch(err => {
                // An error occurred
                console.log(err)
            })
        },
        checkIfSizesLegal(){
            let totalSize = 0
            if(this.$refs.cGroup.getIsControlGroupSelected()){
                totalSize += this.$refs.cGroup.getSize()
            }
            for (let i = 0; i < this.groupsRefs.length; i++) {
                const refName = this.groupsRefs[i];
                totalSize += this.$refs[refName][0].getSize()
            }
            if(totalSize == 100){
                this.isSizesLegal = true
            }
            else{
                this.isSizesLegal = false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.groups-manager-wrapper{
    display: grid;
    grid-template-columns: repeat(4, 23%);
    place-items: center;
    justify-content: space-between;
    row-gap: 30px;
}

@media (max-width: 1200px) {
    .groups-manager-wrapper{
       grid-template-columns: repeat(3, 33%);
    }
}
</style>