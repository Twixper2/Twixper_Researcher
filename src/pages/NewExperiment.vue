<template>
  <div class="page-wrapper">
    <!-- <PageTitle title="Create New Experiment" textAlign="left"/> textAlign="left" -->
    
    <br>
    <h1>Create New Experiment</h1>

    <h2 class="config-title">Fill the form or upload a configuration file: </h2>
    <TooltipIcon 
      iconClass="fas fa-file-upload"
      text="Coming soon"
      :disabled="true"
    />

    <br><br><br>

      <b-form  v-if="showForm"> <!-- @submit="onSubmit" @reset="onReset" -->
        
          <div class="form-content-container">
            <div class="form-inline-groupes-container">

              <b-form-group 
                id="input-group-1" 
                class="inline-input-group"
                label="Title:" 
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.title"
                  placeholder="Enter experiment's title"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group 
                id="input-group-2" 
                class="inline-input-group"
                label="Description:" 
                label-for="input-2"
              >
                <b-form-textarea
                  id="input-2"
                  v-model="form.description"
                  placeholder="Enter experiment's description"
                  required
                ></b-form-textarea>
              </b-form-group>

            </div> <!-- form-inline-groupes-container -->

            <br>
            <div class="invite-colab-container">
              Invite collaborators: 
              <span>Coming soon</span> 
            </div>
            
            <br><br>

            <div class="groups-manager-title">
              Groups managment: 
               <TooltipIcon 
                  iconClass="fas fa-question-circle"
                  :isInfo="true"
                  :textWidth=270
                  iconColor="black"
                  text="TODO Explain here"
                />
              <!-- 1 <u>control group</u>, and 1 <u>manipulated group</u> where all the tweets
              from <span>@realDonaldTrump</span> are <u>muted</u>. -->
            </div>
             <br>
            <GroupsManager 
              ref="groupsManager"
            />


          </div> <!-- form-content-container -->

        <br><br>
        <div class="buttons-container">
          <b-button 
           
            variant="success" 
            class="shadow-none"
            @click="onSubmit"
            :disabled="disableButtons"
          > <!--  type="submit" -->
            Activate Experiment
          </b-button>
            <b-button 
              class="shadow-none"
              style="opacity: 0.4"
              disabled
              title="Coming soon"
            > 
              Save for Later 
            </b-button>
          <b-button 
            variant="danger"
            class="shadow-none"
            @click="onReset"
            :disabled="disableButtons"
          > <!--  type="reset" -->
            Reset Fields
          </b-button>
          
        </div> <!-- buttons-container -->
      </b-form>
      <br><br>
  </div>
</template>


<script>
import {serverPostActivateNewExperiment} from "../assets/communicators/serverCommunicator.js"

import GroupsManager from "../components/new_experiment/GroupsManager"
import TooltipIcon from "../components/TooltipIcon"

export default {
  components:{
    GroupsManager,
    TooltipIcon
  },
  data() {
    return {
      form: {
        title: "",
        description: "",
      },
      showForm: true,
      disableButtons: false,
      isFormSuccessfulySubmitted: false,
    }
  },
  beforeRouteLeave (to, from , next) {
    // Check if the form is dirty. If so, ask the user if he is usre he wants to leave
    if(this.isFormSuccessfulySubmitted || !this.isFormDirty()){ // Not dirty
      next()
    }
    else{
      const answer = window.confirm('Leave this page? you have unsaved changes!')
      if (answer) {
        next()
      } else {
        next(false)
      }
    }
  },
  created() {
    if(localStorage.getItem("userEntity") == null){
      this.$router.push("Register")
    }
  },
  methods: {
    isFormDirty(){
      if(this.form.title.length > 0 || this.form.description.length > 0 || this.$refs.groupsManager.isDirty()){
        return true
      }
      return false
    },
    showMsgBox(title, content, okVarient, okTitle){
      const h = this.$createElement
      const contentVNode = h('div', { domProps: { innerHTML: content } })
      let modalC = ['modal-custom']
      let headerC = ['modal-header-custom']
      let contentC = []
      if(okVarient == "success"){
        modalC.push('modal-success-custom')
        headerC.push('modal-success-header-custom')
        contentC.push('modal-success-content-custom')
      }
      this.$bvModal.msgBoxOk([contentVNode], {
        title: title,
        size: 'md',
        buttonSize: 'lg',
        okVariant: okVarient,
        okTitle: okTitle,
        centered: true,
        modalClass: modalC,
        headerClass: headerC,
        contentClass: contentC,
        footerClass: "msgbox-footer-custom"
      })
      .then(value => {
        if(okVarient == "success"){
          // Reset form
          // this.resetForm() 
          // Redirect to "my experiments"
          this.$router.push("MyExperiments")
        }
      })
      .catch(err => {
        // An error occurred
        console.log(err)
      })
    },
    async onSubmit() {
      /* Validating inputs */
      if(this.form.title.length == 0){
        this.showMsgBox("Activate experiment", "Please fill the experiment title.", "secondary", "Continue editing")
        return;
      }
      if(this.form.description.length == 0){
        this.showMsgBox("Activate experiment", "Please fill the experiment description.", "secondary", "Continue editing")
        return;
      }
      if(!this.$refs.groupsManager.getIsSizesLegal()){
        this.showMsgBox("Activate experiment", "The groups' sizes must add up tp 100%.", "secondary", "Continue editing")
        return;
      }

      this.disableButtons = true;
      /* Creating the experiment object */
      const expGroups = this.$refs.groupsManager.getGroupsJson();
      let expJsonToSend = {
        "title": this.form.title,
        "description": this.form.description,
        "researcher_details": {},
        "exp_groups": expGroups
      } // The rest of the fields will be filled by the server

      /* Sending the experiment object to the server */
      const response = await serverPostActivateNewExperiment(expJsonToSend)
      this.disableButtons = false;
      // console.log(response.status)
      // console.log(response.data)
      if(response.status == 200 || response.status == 201){
        this.isFormSuccessfulySubmitted = true
        this.showMsgBox("Experiment Activated Successfuly", 
        "Your experiment was activated successfuly.<br>Your experiment code is:<br><b>" + response.data.exp_code 
        +"</b><br>People with this code can join your experiment.<br>You can always view your experiment's code in \"My Experiments\" section."
        , "success", "Got it!")
        // Reset form and redirection is handled in "showMsgBox"
      }
      else if(response.status == 401){
        alert("You are not authorized to create experimnets before signing in")
        this.$root.store.setRegisteredState(false)
        this.$router.push("Register")
      }
      else{
        alert("Problem in creating the experiment. Please try again later")
      }
    },
    onReset() {
      // Ask the user if he is sure.
      this.$bvModal.msgBoxConfirm('Are you sure you want to reset all the fields?', {
        title: 'Please Confirm',
        size: 'sm',
        buttonSize: 'lg',
        okVariant: 'danger',
        okTitle: 'Reset',
        cancelTitle: 'Cancel',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true,
        modalClass: 'modal-custom',
        headerClass: 'modal-header-custom'
      })
      .then(value => {
          if(value){ // The user wants to reset the fields
            this.resetForm()
          }
      })
      .catch(err => {
          // An error occurred
          console.log(err)
      })
      
    },
    resetForm(){
      // Reset our form values
      this.form.title = ''
      this.form.description = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$refs.groupsManager.resetFields()
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}

</script>

<style lang="scss">
label{
  text-align: left;
}
</style>

<style lang="scss" src="../assets/css/NewExperimentForm.scss" scoped>
  
</style>