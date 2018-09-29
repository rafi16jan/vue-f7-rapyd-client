<template>
    <f7-page name='settings'>
        <f7-navbar back-link title='New Contact' />
    </f7-page>
</template>

<script>
import {
  f7Page,
  f7Navbar
} from 'framework7-vue'

export default {
  components: {
    f7Page,
    f7Navbar
  },
  mounted () {
    console.log(this.$f7)
  }
}
</script>
