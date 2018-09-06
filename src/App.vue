<template>
  <f7-app :params="f7params">
    <!-- <img src="./assets/logo.png">
    <HelloWorld/> -->
    <f7-statusbar />

    <f7-view url='/' main>
      <!-- Initial Page -->
      <main-app />
    </f7-view>

    <app-panel />

  </f7-app>
</template>

<script>
import {
  f7App,
  f7Statusbar,
  f7View
} from 'framework7-vue'

import HelloWorld from './components/HelloWorld'
import AppPanel from './components/Panel'
import MainApp from './components/Home'

import routes from './routes'
import packageJson from '../package.json'

import API from '@/api'

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
        },
        theme: 'auto'
      }
    }
  },
  methods: {
    onLeftPanelOpen () {
      console.log(this.$f7)
    }
  },
  async mounted () {
    try {
      // console.log(API)
      let response = await API.post('/search')
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }
}
</script>
