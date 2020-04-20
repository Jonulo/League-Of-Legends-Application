import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// CSS global:
import './assets/css/main.styl'

// create an index file in plugins for better code
import './plugins'

import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,

  methods: {
    // LLamar a una funcion en actions en el store
    // init () {
    //   store.dispatch('{nombreDelModulo}/{nombreFuncionenActions}', null, { root: true })
    // }
  },

  created () {
    // this.init()
  },

  vuetify,
  render: h => h(App)
}).$mount('#app')
