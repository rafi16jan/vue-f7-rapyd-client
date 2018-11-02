<template>
  <f7-page name='resource-form'>
    <f7-navbar back-link :title="name" />
    <f7-card>
      <f7-card-header>
        <p>
          {{name}}
          <span v-text="getHeaderTitle()" />
        </p>
        <f7-button
          fill
          raised
          :text="headerButtonTitle"
          @click="loadResourceForm()"
        />
      </f7-card-header>
      <f7-card-content>
        <f7-list :tablet-inset='true'>
          <f7-list-input
            v-for="field in fields"
            :key='`resource-form-${field.id}`'
            :label='field.string'
          />
        </f7-list>
      </f7-card-content>
    </f7-card>
  </f7-page>
</template>

<style scoped>
  .card-header {
    font-size: 20px;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }
  .card-header p span {
    color: #666666;
  }
  .card-header .button {
    margin-bottom: 16px;
  }
</style>
<script>
import {
  f7Page,
  f7Navbar,
  f7Card,
  f7CardHeader,
  f7CardContent,
  f7Button,
  f7Row,
  f7Col,
  f7List,
  f7ListInput
} from 'framework7-vue'

export default {
  components: {
    f7Page,
    f7Navbar,
    f7Card,
    f7CardHeader,
    f7CardContent,
    f7Button,
    f7Row,
    f7Col,
    f7List,
    f7ListInput
  },
  props: [ 'name', 'type', 'item', 'fields' ],
  data () {
    return {
      headerButtonTitle: this.type === 'new' ? 'Save' : 'Edit'
    }
  },
  methods: {
    getResourceName () {
      if (this.type === 'update') return this.item.name
      return 'New'
    },
    getHeaderTitle () {
      return `/ ${this.getResourceName()}`
    }
  }
}
</script>
