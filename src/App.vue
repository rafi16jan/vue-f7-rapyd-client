<template>
  <f7-app :params="f7params">
    <!-- <img src="./assets/logo.png">
    <HelloWorld/> -->
    <f7-statusbar />

    <f7-view url='/' main>
      <!-- Initial Page -->
      <main-app />
    </f7-view>

    <!-- <app-panel v-show="false" /> -->

  </f7-app>
</template>

<script>
import {
  f7App,
  f7Statusbar,
  f7View
} from 'framework7-vue'
import { mapGetters } from 'vuex'

import HelloWorld from './components/HelloWorld'
import AppPanel from './components/Panel'
import MainApp from './components/Loading'

import routes from './routes'
import packageJson from '../package.json'

export default {
  name: 'App',
  components: {
    f7App,
    HelloWorld,
    AppPanel,
    f7Statusbar,
    f7View,
    MainApp
  },
  data () {
    let { version } = packageJson
    return {
      panelOpened: false,
      f7params: {
        id: '',
        name: 'Vue F7',
        version,
        routes,
        panel: {
          swipe: 'left',
          leftBreakpoint: 768
          // leftBreakpoint: this.checkAvailableUser ? 768 : 0
        },
        theme: 'auto'
      },
      ...mapGetters([
        'checkAvailableUser'
      ])
    }
  },
  methods: {
    onLeftPanelOpen () {
      console.log(this.$f7)
    },
    isAuthorized () {
      return false
    }
  }
}
</script>
