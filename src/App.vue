<template>
  <f7-app :params="f7params">
    <!-- <img src="./assets/logo.png">
    <HelloWorld/> -->
    <f7-statusbar />

    <f7-view url='/' main>
      <!-- Initial Page -->
      <f7-page>
        <!-- Top Navbar-->
        <f7-navbar>
          <f7-nav-left>
            <f7-link panel-open="left" v-on:panel:open="onLeftPanelOpen">
              <f7-icon if-ios="ion:ios-menu" if-md="ion:md-menu"></f7-icon>
            </f7-link>
          </f7-nav-left>
          <f7-nav-title>Home</f7-nav-title>
        </f7-navbar>
        <!-- Page Content -->
        <f7-block>Page content goes here</f7-block>
        <!-- <f7-link href="/about/">About App</f7-link> -->
      </f7-page>
    </f7-view>

    <f7-panel url='/panel/' left cover :opened="panelOpened">
      <f7-view>
        <f7-page>
          <f7-navbar title="Left Panel"></f7-navbar>
          <f7-block>
            <p>Here comes the left panel text</p>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-panel>
  </f7-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

import {
  f7App,
  f7Statusbar,
  f7View,
  f7Page,
  f7Navbar,
  f7NavLeft,
  f7NavTitle,
  f7Toolbar,
  f7Link,
  f7Panel,
  f7Block,
  f7Icon
} from 'framework7-vue'

import routes from './routes'
import packageJson from '../package.json'

export default {
  name: 'App',
  components: {
    f7App,
    HelloWorld,
    f7Statusbar,
    f7View,
    f7Page,
    f7Navbar,
    f7NavLeft,
    f7NavTitle,
    f7Toolbar,
    f7Link,
    f7Panel,
    f7Block,
    f7Icon
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
  }
}
</script>
