<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <HelloWorld/> -->
    <f7-statusbar />

    <f7-view url='/' main>
      <!-- Initial Page -->
      <f7-page>
        <!-- Top Navbar-->
        <f7-navbar>
          <f7-nav-left>
            <f7-link panel-open="left">
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
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

import {
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

export default {
  name: 'App',
  components: {
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
    return {
      panelOpened: false
    }
  }
}
</script>
