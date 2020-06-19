// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter  from 'vue-router'
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.config.productionTip = false
import routers from './assets/router'

 const router = new VueRouter({
   routes:routers,
   mode:'history'
 })

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
