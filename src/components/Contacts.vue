<template>
  <f7-page name='contacts'>
    <f7-navbar back-link title='Contacts' />
    <data-table />
    <f7-fab color="pink">
      <f7-icon if-ios="ion:ios-add" if-md="ion:md-add" />
    </f7-fab>
  </f7-page>
</template>

<script>
import {
  f7Page,
  f7Navbar,
  f7Fab,
  f7Icon
} from 'framework7-vue'
import DataTable from './DataTable.vue'

export default {
  components: {
    f7Page,
    f7Navbar,
    f7Fab,
    f7Icon,
    DataTable
  }
  // data: () => ({
  //   dialog: false,
  //   deleteDialog: false,
  //   editedIndex: -1,
  //   editedItem: {
  //     name: '',
  //     calories: 0,
  //     fat: 0,
  //     carbs: 0,
  //     protein: 0
  //   },
  //   defaultItem: {
  //     name: '',
  //     calories: 0,
  //     fat: 0,
  //     carbs: 0,
  //     protein: 0
  //   },
  //   pagination: {
  //     sortBy: 'name'
  //   },
  //   selected: [],
  //   headers: [
  //     {
  //       text: 'Dessert (100g serving)',
  //       align: 'left',
  //       value: 'name'
  //     },
  //     { text: 'Calories', value: 'calories' },
  //     { text: 'Fat (g)', value: 'fat' },
  //     { text: 'Carbs (g)', value: 'carbs' },
  //     { text: 'Protein (g)', value: 'protein' },
  //     //   { text: 'Iron (%)', value: 'iron' }
  //     { text: 'Actions', value: 'name', sortable: false }
  //   ],
  //   desserts: [
  //     {
  //       value: false,
  //       name: 'Frozen Yogurt',
  //       calories: 159,
  //       fat: 6.0,
  //       carbs: 24,
  //       protein: 4.0,
  //       iron: '1%'
  //     },
  //     {
  //       value: false,
  //       name: 'Ice cream sandwich',
  //       calories: 237,
  //       fat: 9.0,
  //       carbs: 37,
  //       protein: 4.3,
  //       iron: '1%'
  //     },
  //     {
  //       value: false,
  //       name: 'Eclair',
  //       calories: 262,
  //       fat: 16.0,
  //       carbs: 23,
  //       protein: 6.0,
  //       iron: '7%'
  //     },
  //     {
  //       value: false,
  //       name: 'Cupcake',
  //       calories: 305,
  //       fat: 3.7,
  //       carbs: 67,
  //       protein: 4.3,
  //       iron: '8%'
  //     },
  //     {
  //       value: false,
  //       name: 'Gingerbread',
  //       calories: 356,
  //       fat: 16.0,
  //       carbs: 49,
  //       protein: 3.9,
  //       iron: '16%'
  //     },
  //     {
  //       value: false,
  //       name: 'Jelly bean',
  //       calories: 375,
  //       fat: 0.0,
  //       carbs: 94,
  //       protein: 0.0,
  //       iron: '0%'
  //     },
  //     {
  //       value: false,
  //       name: 'Lollipop',
  //       calories: 392,
  //       fat: 0.2,
  //       carbs: 98,
  //       protein: 0,
  //       iron: '2%'
  //     },
  //     {
  //       value: false,
  //       name: 'Honeycomb',
  //       calories: 408,
  //       fat: 3.2,
  //       carbs: 87,
  //       protein: 6.5,
  //       iron: '45%'
  //     },
  //     {
  //       value: false,
  //       name: 'Donut',
  //       calories: 452,
  //       fat: 25.0,
  //       carbs: 51,
  //       protein: 4.9,
  //       iron: '22%'
  //     },
  //     {
  //       value: false,
  //       name: 'KitKat',
  //       calories: 518,
  //       fat: 26.0,
  //       carbs: 65,
  //       protein: 7,
  //       iron: '6%'
  //     }
  //   ]
  // }),

  // methods: {
  //   toggleAll () {
  //     if (this.selected.length) this.selected = []
  //     else this.selected = this.desserts.slice()
  //   },
  //   changeSort (column) {
  //     if (this.pagination.sortBy === column) {
  //       this.pagination.descending = !this.pagination.descending
  //     } else {
  //       this.pagination.sortBy = column
  //       this.pagination.descending = false
  //     }
  //   },
  //   editItem (item) {
  //     this.editedIndex = this.desserts.indexOf(item)
  //     this.editedItem = { ...item }
  //     this.dialog = true
  //   },

  //   deleteItem () {
  //     this.selected.forEach(r => {
  //       const index = this.desserts.indexOf(r)
  //       if (index !== -1) this.desserts.splice(index, 1)
  //     })
  //     this.deleteDialog = false
  //   },
  //   close () {
  //     this.dialog = false
  //     setTimeout(() => {
  //       this.editedItem = { ...this.defaultItem }
  //       this.editedIndex = -1
  //     }, 300)
  //   },

  //   save () {
  //     if (this.editedIndex > -1) {
  //       Object.assign(this.desserts[this.editedIndex], this.editedItem)
  //     } else {
  //       this.desserts.push(this.editedItem)
  //     }
  //     this.close()
  //   }
  // },

  // computed: {
  //   formTitle () {
  //     return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
  //   }
  // }
}
</script>
