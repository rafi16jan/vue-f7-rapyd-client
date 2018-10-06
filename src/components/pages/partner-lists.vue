<template>
  <v-fragment>
    <f7-preloader v-if="loading" />
    <user-table
      v-if="!loading && (data.length > 0)"
      :contacts="data"
    />
    <f7-fab position="right-bottom" slot="fixed">
      <f7-icon md="ion-md-add" />
    </f7-fab>
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
  f7Fab,
  f7Icon
} from 'framework7-vue'
import { VFragment } from 'vue-fragments'

import UserTable from '@/components/tables/user.vue'

export default {
  name: 'partner-lists',
  components: {
    f7Preloader,
    f7Fab,
    f7Icon,
    'v-fragment': VFragment,
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
    }
  },
  computed: {
    isLoading: () => {
      console.log(this)
      return this.loading
    },
    dataLists: () => {
      return this.data
    }
  },
  mounted () {
    console.log('loading props: ', this.loading)
  }

}
</script>
