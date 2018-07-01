<template>
    <div class="card data-table data-table-collapsible data-table-init">
      <div class="card-header">
        <div class="data-table-header">
          <div class="data-table-title">Contacts</div>
          <div class="data-table-actions">
            <a href="#" class="link icon-only">
              <i class="icon ion-ios-add-circle-outline ios-only"></i>
              <i class="icon ion-md-add-circle-outline md-only"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="card-body">
        <table>
            <thead>
                <tr>
                  <!-- <th class="checkbox-cell">
                    <label class="checkbox">
                      <input type="checkbox" value="false" @change="getAllContacts" />
                      <i class="icon-checkbox"></i>
                    </label>
                  </th> -->
                  <th class="label-cell">Name</th>
                  <th class="label-cell">Email</th>
                  <th class="label-cell">Phone</th>
                  <th class="label-cell">Actions</th>
                </tr>
            </thead>
            <tbody v-if="getContactSize">
              <tr v-for="contact in contacts" :key='contact.id'>
                <!-- <td class="checkbox-cell">
                  <label class="checkbox">
                    <input type="checkbox" @change="getContactId" :data-id='contact.id' />
                    <i class="icon-checkbox"></i>
                  </label>
                </td> -->
                <td class="label-cell" data-collapsible-title="Name">{{contact.name}}</td>
                <td class="label-cell" data-collapsible-title="Email" >{{contact.email}}</td>
                <td class="label-cell" data-collapsible-title="Phone">{{contact.phone_number}}</td>
                <td class="data-table-actions" data-collapsible-title="Actions">
                  <f7-link icon-only :href="`/contact/${contact.id}`" :data-contact="contact" >
                    <i class="icon ion-ios-create ios-only"></i>
                    <i class="icon ion-md-create md-only"></i>
                  </f7-link>
                  <a class="link icon-only" @click="confirmDeleteContact(contact)" >
                    <i class="icon ion-ios-trash ios-only"></i>
                    <i class="icon ion-md-trash md-only"></i>
                  </a>
                </td>
              </tr>
            </tbody>
        </table>
        <div class="data-table-footer">
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
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      contacts: [],
      selectedContacts: []
    }
  },
  mounted () {
    console.log(this.$f7)
    setTimeout(() => {
      this.contacts = [{
        id: 1,
        name: 'Achmad Kurnianto',
        email: 'achmad.kurnianto@gmail.com',
        phone_number: '085643864357'
      }, {
        id: 2,
        name: 'Syafil M',
        email: 'syafilm@gmail.com',
        phone_number: '085643864357'
      }]
    }, 3000)
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
    }
  },
  computed: {
    getContactSize () {
      return this.contacts.length
    }
  }
}
</script>
