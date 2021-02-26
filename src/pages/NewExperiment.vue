<template>
  <div class="page-wrapper">
    <!-- <PageTitle title="Create New Experiment" textAlign="left"/> textAlign="left" -->
    
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
              <span>Comming soon</span> 
            </div>
            
            <br><br>

            <div class="groups-manager-title">
              Groups managment: 
               <TooltipIcon 
                  iconClass="fas fa-question-circle"
                  :isInfo="true"
                  :textWidth=270
                  text="TODO Explaination here"
                />
              <!-- 1 <u>control group</u>, and 1 <u>manipulated group</u> where all the tweets
              from <span>@realDonaldTrump</span> are <u>muted</u>. -->
            </div>
             <br>
            <GroupsManager />


          </div> <!-- form-content-container -->

        <br><br>
        <div class="buttons-container">
          <b-button 
           
            variant="success" 
            class="shadow-none"
            @click="onSubmit"
          > <!--  type="submit" -->
            Activate Experiment
          </b-button>
            <b-button 
              class="shadow-none"
              style="opacity: 0.4"
              disabled
            > 
              Save for Later (Coming soon) 
            </b-button>
          <b-button 
            variant="danger"
            class="shadow-none"
            @click="onReset"
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
      showForm: true
    }
  },
  methods: {
    async onSubmit() {
      /* Validating inputs */
      if(this.form.title.length == 0){
        alert("Please fill the experiment title.")
        return;
      }
      if(this.form.description.length == 0){
        alert("Please fill the experiment description.")
        return;
      }
      // TODO: Continue validating


      let expJsonToSend = {
        "title": this.form.title,
        "description": this.form.description,
        "researcher_details": {},
        "exp_groups": [
          {
            "group_name": "My control group",
            "group_size_in_percentage": 50,
            "group_manipulations": []
          },
          {
            "group_name": "Group Trump muted",
            "group_size_in_percentage": 50,
            "group_manipulations": [
              {
                "type": "mute",
                "users": ["realDonaldTrump"]
              },
            ]
          }
        ]
      } // The rest of the fields will be filled by the server
      const response = await serverPostActivateNewExperiment(expJsonToSend)
      console.log(response.status)
      console.log(response.data)
      if(response.status == 200 || response.status == 201){
        alert("Experiment created successfuly!")
        this.resetForm() // And redirect to home
      }
      else{
        alert("Problem in creating the experiment. Please try again later")
      }
    },
    onReset() {
      this.resetForm()
    },
    resetForm(){
      // Reset our form values
      this.form.title = ''
      this.form.description = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
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