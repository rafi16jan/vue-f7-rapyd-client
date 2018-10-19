<template>
    <div class="card data-table data-table-collapsible data-table-init">
      <div class="card-header">
          <div class="data-table-title">
            {{title}}
            <f7-button fill raised text="Create" />
          </div>
      </div>
      <div class="card-body">
        <table>
            <thead>
                <tr>
                  <th class="checkbox-cell">
                    <label class="checkbox">
                      <input type="checkbox"><i class="icon-checkbox" />
                    </label>
                  </th>
                  <th class="label-cell"
                    v-for="field in fields"
                    :key="field.name"
                  >
                    {{field.string}}
                  </th>
                </tr>
            </thead>
            <tbody v-if="getContactSize">
              <tr v-for="contact in contacts" :key="contact.id" @click="onItemClicked">
                <!-- <td class="checkbox-cell">
                  <label class="checkbox">
                    <input type="checkbox" @change="getContactId" :data-id='contact.id' />
                    <i class="icon-checkbox"></i>
                  </label>
                </td> -->
                <td class="checkbox-cell">
                  <label class="checkbox">
                    <input type="checkbox"><i class="icon-checkbox"></i>
                  </label>
                </td>
                <td class="label-cell"
                  v-for="field in fields"
                  :key="field.name"
                  :data-collapsible-title="field.string"
                  v-if="isValidValue(contact[field.name])"
                >
                  {{contact[field.name]}}
                </td>
                <!-- <td class="data-table-actions" data-collapsible-title="Actions">
                  <f7-link icon-only :href="`/contact/${contact.id}`" :data-contact="contact" >
                    <i class="icon ion-ios-create ios-only"></i>
                    <i class="icon ion-md-create md-only"></i>
                  </f7-link>
                  <a class="link icon-only" @click="confirmDeleteContact(contact)" >
                    <i class="icon ion-ios-trash ios-only"></i>
                    <i class="icon ion-md-trash md-only"></i>
                  </a>
                </td> -->
              </tr>
            </tbody>
        </table>
        <!-- <div class="data-table-footer">
          <div class="data-table-rows-select">
            Per page:
            <div class="input input-dropdown">
              <select>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="all">All</option>
              </select>
            </div>
          </div>
          <div class="data-table-pagination">
            <span class="data-table-pagination-label">
              1-5 of 10
            </span>
            <a href="#" class="link disabled">
              <i class="icon icon-prev color-gray"></i>
            </a>
            <a href="#" class="link">
              <i class="icon icon-next color-gray"></i>
            </a>
          </div>
        </div> -->
      </div>
    </div>
</template>

<style scoped>
@media (max-width: 480px) and (orientation: portrait) {
  .data-table.data-table-collapsible td:not(.checkbox-cell):before {
    width: 25%;
  }
}

.card-header {
  min-height: 120px;
}

.data-table tbody tr:hover {
  cursor: pointer;
}

.card-header .data-table-title .button {
  margin-top: 16px;
}
</style>

<script>
import {
  f7Button
} from 'framework7-vue'

export default {
  components: {
    f7Button
  },
  name: 'user-table',
  props: {
    contacts: {
      type: Array,
      default: () => []
    },
    fields: {
      type: [Array, Object],
      default: () => []
    },
    title: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      selectedContacts: []
    }
  },
  mounted () {
    console.log('fields', this.fields)
    console.log('contact', this.contacts)
  },
  methods: {
    getContactId ({ target }) {
      let selectedId = parseInt(target.dataset.id)
      console.log(target.dataset.id, selectedId)
      let selectedContact = this.contacts.find(({ id }) => parseInt(id) === selectedId)
      let isContactInSelectedList = this.selectedContacts.findIndex(({ id }) => id === selectedId) === -1
      console.log(isContactInSelectedList)
      if (isContactInSelectedList) {
        this.selectedContacts.push(selectedContact)
      } else {
        this.selectedContacts = this.selectedContacts.filter(({ id }) => id !== selectedId)
      }
      console.log(this.selectedContacts)
    },
    getAllContacts (event) {
      console.log(event)
    },
    confirmDeleteContact (contact) {
      this.$f7.dialog.confirm(
        'Are you sure to delete this contact?',
        () => { this.deleteContact(contact) }
      )
    },
    deleteContact (contact) {
      const index = this.contacts.indexOf(contact)
      if (index !== -1) this.contacts.splice(index, 1)

      // this.selectedContacts.forEach(r => {
      //   const index = this.contacts.indexOf(r)
      //   if (index !== -1) this.contacts.splice(index, 1)
      // })
    },
    isValidValue (value) {
      console.log('value', value)
      return value && (typeof value !== 'object')
    },
    onItemClicked () {
      console.log('item clicked!!!')
    }
  },
  computed: {
    getContactSize () {
      return this.contacts.length
    },
    updateTitle () {
      return this.title
    }
  }
}
</script>
