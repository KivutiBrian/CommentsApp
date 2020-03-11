import Vue from 'vue'
// import App from './App.vue'
import Master from './components/layout/Master'
import VueRouter from 'vue-router'
import store from './store/store'

import routes from './router'

Vue.config.productionTip = false
Vue.use(VueRouter)



const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  router,
  store,
  render: h => h(Master),
}).$mount('#app')
