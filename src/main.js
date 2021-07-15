import Vue from 'vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuesax, {
  // options here
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
