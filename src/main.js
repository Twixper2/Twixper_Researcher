import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import BootstrapVue from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  router,
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
