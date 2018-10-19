<template>
    <f7-page name='resources'>
        <f7-navbar back-link :title='menu.string' />
        <partner-lists
          :v-if="/*menu.model === 'res.partner'*/true"
          :loading="loading"
          :data="resourceValues"
          :fields="fields"
          :title="title"
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

import { generateValues } from '@/utils/create-orm-function'

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
      error: false,
      fields: [],
      title: 'List'
    }
  },
  async mounted () {
    this.loading = true
    try {
      this.title = tools.view[this.menu.model].string
      const tree = new DOMParser().parseFromString(window.tools.view[this.menu.model].tree, 'text/xml').children[0]
      console.log('tree', tree)
      for (let child of tree.children) {
        let fieldName = child.attributes.name.value
        console.log('fieldName', fieldName)
        let field = models.env[this.menu.model]._fields[fieldName]
        field.name = fieldName
        console.log('field', field)
        this.fields.push(field)
      }
      let response = await models.env[this.menu.model].search()
      this.resourceValues = generateValues(response)
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
