<template>
    <b-modal 
        scrollable 
        size="xl"
        button-size="xl"
        ok-variant="success"
        ok-title="Save"
        cancel-title="Cancel"
        modal-class="modal-manip-custom"
        dialog-class="modal-manip-dialog-custom"
        header-class="modal-manip-header-custom"
        footer-class="modal-footer-custom"
        ref="manipModal"
        @ok="handleOk"
        @close="handleCancel"
        @cancel="handleCancel"
        @hide="handleHide"
    >
        <template #modal-header="{ close }">
            <!-- Emulate built in modal header close button action -->
            <h2>Edit Group "{{groupName}}" Feed's Manipulations </h2>
            <b-button variant="danger" @click="close()">
                Close
            </b-button>
        </template>

        <!-- Modal body -->

        <div class="manip-body-wrapper">
            <h3>
                Enter values seperated by a comma or by a line break
            </h3>
            <div class="table-container">
                <div class="coming-soon-banner">
                    Coming Soon
                </div>
                <table class="manip-table">
                    <colgroup>
                        <col class="actions-col">
                        <col class="users-col">
                        <col class="keywords-col">
                    </colgroup>

                    <thead>
                        <tr>
                            <th>
                                <span class="title">Actions</span>
                            </th>
                            <th>
                                <span class="title">Users</span>
                                <TooltipIcon 
                                    iconClass="fas fa-question-circle"
                                    :isInfo="true"
                                    :textWidth=270
                                    iconColor="black"
                                    text="TODO Explain users here"
                                />
                            </th>
                            <th>
                                <span class="title">Keywords</span>
                                <TooltipIcon 
                                    iconClass="fas fa-question-circle"
                                    :isInfo="true"
                                    :textWidth=270
                                    iconColor="black"
                                    text="TODO Explain keywords here"
                                />
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(manipTitle, i) in groupManipTitles"  :key="i"
                            class="group-manip-row"
                            :class="{comingSoon: i > 0}"
                        >
                            <td class="manip-title-td">
                                <span class="manip-title">{{manipTitle}}</span>
                                <TooltipIcon 
                                    iconClass="fas fa-question-circle"
                                    :isInfo="true"
                                    :textWidth=270
                                    iconColor="black"
                                    text="TODO Explain here"
                                />
                            </td>
                            <td class="manip-users-td">
                                <textarea 
                                    spellcheck="false" 
                                    v-model="editedGroupManip[i].usersString"
                                    @keydown="isManipChanged = true"
                                    :placeholder="getPlaceHolder('users', i)"
                                    :disabled="i>0"
                                >
                                </textarea>
                                <div class="footer">
                                    <span class="total-span">Total: {{stringToArr(editedGroupManip[i].usersString).length}}</span>
                                </div>
                            </td>
                            <td class="manip-keywords-td">
                                <textarea 
                                    spellcheck="false" 
                                    v-model="editedGroupManip[i].keywordsString"
                                    @keydown="isManipChanged = true"
                                    :placeholder="getPlaceHolder('keywords', i)"
                                    :disabled="i>0"
                                >
                                </textarea>
                                <div class="footer">
                                    <span class="total-span">Total: {{stringToArr(editedGroupManip[i].keywordsString).length}}</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
        
    </b-modal>
</template>

<script>
import TooltipIcon from "../TooltipIcon"

export default {
    components:{
        TooltipIcon
    },
    props:{
        groupManip:{
            type: Array,
            required: true
        },
        groupManipTitles:{
            type: Array,
            required: true
        },
        groupName:{
            type: String,
            required: true
        }
    },
    data() {
        return {
            isManipChanged: false,
            editedGroupManip:[]
        }
    },
    created(){
        this.resetChanges()
    },
    methods:{
        resetChanges(){
            this.isManipChanged = false
            this.editedGroupManip = [
                {
                    type: "mute",
                    usersString: "",
                    keywordsString: "",
                    users: [],
                    keywords: [],
                },
                {
                    type: "inject",
                    usersString: "",
                    keywordsString: "",
                    users: [],
                    keywords: []
                },
                {
                    type: "pixel_media",
                    usersString: "",
                    keywordsString: "",
                    users: [],
                    keywords: []
                },
                {
                    type: "remove_media",
                    usersString: "",
                    keywordsString: "",
                    users: [],
                    keywords: []
                }
            ]
            // Coping from "groupManip" to strings in "editedGroupManip"
            for (let i = 0; i < this.groupManipTitles.length; i++) {
                const manipObj = this.groupManip[i];
                this.editedGroupManip[i].usersString = this.arrToString(manipObj.users)
                this.editedGroupManip[i].keywordsString = this.arrToString(manipObj.keywords)
            }
        },
        openModal(){
            this.resetChanges()
            this.$refs.manipModal.show()
        },
        handleOk(){
            // console.log("Ok")
        },
        handleCancel(bvModalEvt){
            /* Check if there were changes in the manip data.
            If so, ask the user if he is sure he wants to exit. */
            if(this.isManipChanged){
                bvModalEvt.preventDefault()
                this.confirmExitModal()
            }
        },
        handleHide(bvModalEvt){
            const trigger = bvModalEvt.trigger
            if(trigger == "ok"){
                this.saveChanges()
            }
            else if(trigger == "backdrop"){ // Clicked on the background outside the modal
                /* Check if there were changes in the manip data.
                    If so, ask the user if he is sure he wants to exit. */
                // if(isManipEdited(this.editedGroupManip)){
                //     bvModalEvt.preventDefault()
                //     this.confirmExitModal()
                // }
                bvModalEvt.preventDefault()
            }
        },
        confirmExitModal(){
            this.$bvModal.msgBoxConfirm('Are you sure you want to discard changes?', {
                title: 'Please Confirm',
                size: 'sm',
                buttonSize: 'lg',
                okVariant: 'danger',
                okTitle: 'Discard changes',
                cancelTitle: 'Cancel',
                footerClass: 'p-2',
                hideHeaderClose: false,
                centered: true,
                modalClass: 'modal-custom',
                headerClass: 'modal-header-custom'
            })
            .then(value => {
                if(value){ // The user wants to discard changes
                    this.resetChanges()
                    this.$refs.manipModal.hide()
                }
            })
            .catch(err => {
                // An error occurred
                console.log(err)
            })
        },
        arrToString(arr){
            // Returns the elemnts of arr seperated by commas
            return arr.join(", ")
        },
        stringToArr(str){
            let arr = str.split(/(?:,|\n)+/) 
            // Remove first and last space chars in each element in the array
            for (let i = 0; i < arr.length; i++) {
                const element = arr[i];
                arr[i] = element.trim()
            }
            // Filter out empty strings
            arr = arr.filter(elem => elem.length > 0)
            return arr
        },
        saveChanges(){
            // console.log("Save changes")
            for (let i = 0; i < this.editedGroupManip.length; i++) {
                const editedManipObj = this.editedGroupManip[i];
                editedManipObj.users = this.stringToArr(editedManipObj.usersString)
                editedManipObj.keywords = this.stringToArr(editedManipObj.keywordsString)
            }
            this.isManipChanged = false
            this.$emit('manip-modal-saved', this.editedGroupManip)
            this.resetChanges()
        },
        getPlaceHolder(entity, index){
            if(index > 0){
                return ""
            }
            if(entity == "users"){
                return "For example: elonmask, BillGates,nytimes, CNN. "+
                "You can either keep or omit leading and tailing spaces. User names are case-sensitive."
            }
            else{
                return "For example: technology, united states, #fridayfeeling,london, good news, market. "+
                "You can either keep or omit leading and tailing spaces. Keywords are case-insensitive"
            }
        }
    }
}


</script>

<style lang="scss" src="../../assets/css/GroupManipModal.scss" scoped>

</style>