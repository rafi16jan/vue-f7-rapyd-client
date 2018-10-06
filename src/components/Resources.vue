<template>
    <f7-page name='resources'>
        <f7-navbar back-link :title='menu.string' />
        <partner-lists
          :v-if="/*menu.model === 'res.partner'*/true"
          :loading="loading"
          :data="resourceValues"
        />
    </f7-page>
</template>

<script>
import {
  f7Page,
  f7Navbar,
  f7Preloader
} from 'framework7-vue'
import PartnerLists from './pages/partner-lists.vue'

import { mapGetters } from 'vuex'

import searchResourceData from '@/api/requests/search'

export default {
  props: [ 'menu' ],
  components: {
    f7Page,
    f7Navbar,
    f7Preloader,
    PartnerLists
  },
  data () {
    return {
      loading: false,
      resourceValues: [],
      error: false
    }
  },
  async mounted () {
    this.loading = true
    try {
      let { models, tools } = await this.$createORM(this.getAppData, this.checkClientJS)
      console.log('models: ', models)
      console.log('model name: ', this.menu.model)
      console.log('tools: ', tools)
      // let response = await models.env[this.menu.model].search
      this.resourceValues = await searchResourceData(this.menu.model, this.getAppData)
      console.log('response: ', this.resourceValues)
      this.loading = false
    } catch (error) {
      console.log(error)
      this.error = error
      this.loading = false
    }
  },
  computed: {
    ...mapGetters([
      'getAppData',
      'checkClientJS'
    ])
  }
}
</script>
