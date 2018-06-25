<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <HelloWorld/> -->
    <f7-statusbar />

    <f7-view url='/' main>
      <!-- Initial Page -->
      <main-app />
    </f7-view>

    <app-panel />

  </div>
</template>

<script>
import {
  f7Statusbar,
  f7View
} from 'framework7-vue'

import HelloWorld from './components/HelloWorld'
import AppPanel from './components/Panel'
import MainApp from './components/Home'

import API from '@/api'

export default {
  name: 'App',
  components: {
    HelloWorld,
    AppPanel,
    f7Statusbar,
    f7View,
    MainApp
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
