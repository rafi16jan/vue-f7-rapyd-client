// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Framework7 from 'framework7/dist/framework7.esm.bundle'
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle'
import VueSocketIo from 'vue-socket.io'
import './plugins/vuetify'
import App from './App'

import initStore from './vuex/plugin'
import routes from './routes'

import './assets/styles/app.less'
import 'framework7/dist/css/framework7.css'
import 'ionicons/dist/css/ionicons.css'

Vue.config.productionTip = false

Vue.use(Framework7Vue, Framework7)
Vue.use(VueSocketIo, 'http://localhost:8069')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: initStore(),
  components: { App },
  framework7: {
    routes,
    panel: {
      swipe: 'left',
      leftBreakpoint: 768
    },
    theme: 'auto'
  },
  template: '<App/>',
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
