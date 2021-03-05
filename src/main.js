import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import BootstrapVue from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

Vue.config.productionTip = false

let shared_data = {
  registeredUser: false,
  userEntity: null,
  setRegisteredState(newState){
    this.registeredUser = newState
    if(newState){
      this.userEntity = JSON.parse(localStorage.getItem('userEntity'))
    }
    else{
      localStorage.removeItem('userEntity')
      this.userEntity = null
    }
  }
};

new Vue({
  router,
  data() {
    return {
      store: shared_data,
    };
  },
  methods: {
    toast(title, content, variant = null, append = false) {
      this.$bvToast.toast(`${content}`, {
        title: `${title}`,
        toaster: "b-toaster-top-center",
        variant: variant,
        solid: true,
        appendToast: append,
        toastClass: "toast-popup-custom",
        autoHideDelay: 2000
      });
    }
  },
  render: h => h(App)
}).$mount('#app')
