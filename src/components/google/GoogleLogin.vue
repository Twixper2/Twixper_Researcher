<template>
	<div v-if="renderParams && !logoutButton" @click="handleClick" :id="id"></div>
	<span v-else @click="handleClick" :id="id">
		<slot></slot>
	</span>
</template>

<script>
let componentId = 0;
import GoogleAuth from './GoogleAuth';
export default {
	name: 'GoogleLogin',
	props: {
		params: {
			type: Object,
			required: true
		},
		onCurrentUser: {
			type: Function,
			default: () => { }
		},
        onUserNotSignedWithGoogle:{
            type: Function,
			default: () => { }
        },
        onGoogleLoadErr:{
            type: Function,
			default: () => { }
        },
		onSuccess: {
			type: Function,
			default: () => { }
		},
		onFailure: {
			type: Function,
			default: () => { }
		},
		logoutButton: {
			type: Boolean,
			default: false
		},
		renderParams: {
			type: Object,
			required: false
		}
	},
	beforeCreate() {
		this.id = `google-signin-btn-${componentId++}`;
	},
	methods: {
		handleClick() {
			const method = this.logoutButton ? 'signOut' : 'signIn';
            console.log(method)
			GoogleAuth[method]().then(result => {
				return this.onSuccess(result);
			}).catch(err => {
				return this.onFailure(err);
			});
		}
	},
	mounted() {
		GoogleAuth.load(this.params).then(() => {
			if (this.renderParams && this.logoutButton === false) {
				window.gapi.signin2.render(this.id, this.renderParams);
			}
			if (GoogleAuth.isSignedIn()) {
				this.onCurrentUser(GoogleAuth.currentUser());
			}
            else{
                // Not signed in with Google
                this.onUserNotSignedWithGoogle();
            }
		}).catch(err => {
			console.log(err);
            this.onGoogleLoadErr(err)
		});
	}
}
</script>

<style>
</style>