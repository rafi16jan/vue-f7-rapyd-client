// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Framework7 from 'framework7/framework7.esm.bundle'
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle'
import VueFragment from 'vue-fragments'

import App from './App.vue'

import VueSocketIo from 'vue-socket.io'
// import './plugins/vuetify'

import initStore from './vuex/plugin'

// import './assets/styles/app.less'
import 'framework7/css/framework7.min.css'
import 'ionicons/dist/css/ionicons.min.css'

// import '@material/grid-list/dist/mdc.grid-list.css'

if (('serviceWorker' in navigator) && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', async () => {
    try {
      let registration = await navigator.serviceWorker.register('/service-worker.js')
      console.log('SW registered: ', registration)
    } catch (registrationError) {
      console.log('SW registration failed: ', registrationError)
    }
  })
}

Vue.config.productionTip = false

Framework7.use(Framework7Vue)
Vue.use(VueSocketIo, 'https://rihla.duckdns.org:8069')
Vue.use(VueFragment)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store: initStore(),
  sockets: {
    connect () {
      console.log(this.$store)
      console.log('connected')
      this.$options.sockets.message = (data) => {
        console.log(data)
      }
    }
  }
})
