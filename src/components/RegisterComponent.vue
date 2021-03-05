<template>
    <div class="register-comp-wrapper">
        <GoogleLogin 
            :params="params" 
            :renderParams="renderParams"  
            :onSuccess="onSuccess" 
            :onFailure="onFailure"
            :onCurrentUser="onCurrentUser"
        >
        </GoogleLogin>
        <br><br>
        
    </div>
</template>

<script>
import GoogleLogin from 'vue-google-login';

export default {
    components:{
        GoogleLogin
    },
    data() {
        return {
            // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
            params: {
                client_id: process.env.VUE_APP_CLIENT_ID
            },
            // only needed if you want to render the button with the google ui
            renderParams: {
                width: 250,
                height: 50,
                longtitle: true
            }
        }
    },
    methods:{
        onSuccess(googleUser) {
            console.log(googleUser);
            // This only gets the user information: id, name, imageUrl and email
            const profile = googleUser.getBasicProfile();
            // const id = profile.getId(); 
            const googleUsername = profile.getName();
            const googleImgUrl = profile.getImageUrl();
            const googleEmail = profile.getEmail();

            let id_token = googleUser.getAuthResponse().id_token;
            console.log(id_token)
        },
        onFailure() {
        
        },
        onCurrentUser(googleUser) {
            console.log(googleUser);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>