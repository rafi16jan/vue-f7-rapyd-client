// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Framework7 from 'framework7/framework7.esm.bundle'
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle'

import App from './App.vue'

import 'framework7/css/framework7.css'
import 'ionicons/dist/css/ionicons.css'
import '@material/grid-list/dist/mdc.grid-list.css'

Vue.config.productionTip = false

Framework7.use(Framework7Vue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
  // framework7: {
  //   routes,
  //   // panel: {
  //   //   swipe: 'left',
  //   //   leftBreakpoint: 768
  //   // },
  //   theme: 'auto'
  // },
  // template: '<App/>'
})
