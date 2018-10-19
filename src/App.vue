<template>
  <f7-app :params="f7params">
    <f7-statusbar />
    <f7-view
      url='/' main
      :push-state='false'
      push-state-separator=''
    >
      <main-app />
    </f7-view>
  </f7-app>
</template>

<script>
import {
  f7App,
  f7Statusbar,
  f7View
} from 'framework7-vue'
import { mapGetters } from 'vuex'

import MainApp from './components/Loading'

import routes from './routes'
import packageJson from '../package.json'

export default {
  name: 'App',
  components: {
    f7App,
    f7Statusbar,
    f7View,
    MainApp
  },
  data () {
    let { version } = packageJson
    return {
      panelOpened: false,
      f7params: {
        id: 'vue-f7',
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
  }
}
</script>
