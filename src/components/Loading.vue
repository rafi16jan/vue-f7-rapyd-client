<template>
  <f7-page class="middle-content">
    <f7-preloader />
  </f7-page>
</template>

<style lang="less" scoped>
.middle-content {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>

<script>
import {
  f7Page,
  f7Preloader
} from 'framework7-vue'

export default {
  components: {
    f7Page,
    f7Preloader
  },
  async mounted () {
    try {
      await this.$store.dispatch('SEARCH')
      this.$f7router.navigate({ name: 'home' }, { reloadAll: true })
      // Hide dialog/modal after logout
      this.$f7.dialog.close()
    } catch (error) {
      console.error('error: ', (error))
      this.$f7router.navigate({ name: 'login' }, { reloadAll: true })
    }
  }
}
</script>
