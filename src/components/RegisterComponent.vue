<template>
    <div class="register-comp-wrapper">
        <div class="google-btn-container">
            <GoogleLogin 
                :params="params" 
                :renderParams="renderParams"  
                :onSuccess="onSuccess" 
                :onFailure="onFailure"
            >
            </GoogleLogin>
        </div>
        <br><br>
        
    </div>
</template>

<script>
import GoogleLogin from '../components/google/GoogleLogin';

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
                width: 240,
                height: 55,
                longtitle: true,
                theme: 'dark',
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

            const userEntity = {
                googleUsername: googleUsername,
                googleImgUrl: googleImgUrl,
                googleEmail: googleEmail
            }

            localStorage.setItem('userEntity',JSON.stringify(userEntity));

            let id_token = googleUser.getAuthResponse().id_token;
            console.log(id_token)

            this.$root.store.setRegisteredState(true)
            this.$root.toast("Signed in", "Signed in with Google successfully", "success");
            if(this.$route.name == "Home"){
                // window.location.reload()
            }
            else{
                this.$router.push("/")
            }
        },
        onFailure(err) {
            console.log(err)
        },
    }
}
</script>

<style lang="scss" scoped>
.register-comp-wrapper{
    display: flex;
    justify-content: center;
}
</style>