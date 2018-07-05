// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Import vue-resource
import VueResource from 'vue-resource'

// Import Keen-ui
import KeenUI from 'keen-ui'
import 'keen-ui/dist/keen-ui.css'
import 'keen-ui/dist/keen-ui.min.css'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(KeenUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
