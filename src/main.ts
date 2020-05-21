import Vue from 'vue'
import App from './App.vue'
import store from './store'
import AppToast from './components/AppToast.vue'

Vue.config.productionTip = false

Vue.component('app-toast', AppToast)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
