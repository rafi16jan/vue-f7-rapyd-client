<template>
  <v-fragment>
    <f7-preloader v-if="loading" />
    <user-table
      v-if="!loading && (data.length > 0)"
      :contacts="data"
      :fields="fields"
      :title="title"
      :model="model"
    />
  </v-fragment>
</template>

<style scoped>
.fab {
  position: fixed;
}
</style>

<script>
import {
  f7Preloader,
  f7Icon
} from 'framework7-vue'
import { Fragment } from 'vue-fragment'

import UserTable from '@/components/tables/user.vue'

export default {
  name: 'partner-lists',
  components: {
    f7Preloader,
    f7Icon,
    'v-fragment': Fragment,
    'user-table': UserTable
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    data: {
      type: [Array, Object],
      default: () => []
    },
    fields: {
      type: [Array, Object],
      default: () => []
    },
    title: {
      type: String,
      default: () => ''
    },
    model: {
      type: String,
      default: () => ''
    }
  },
  computed: {
    isLoading: () => {
      console.log(this)
      return this.loading
    },
    dataLists: () => {
      return this.data
    },
    updateFields: () => {
      return this.fields
    },
    updateTitle: () => {
      return this.title
    }
  },
  mounted () {
    console.log('loading props: ', this.loading)
  }

}
</script>
