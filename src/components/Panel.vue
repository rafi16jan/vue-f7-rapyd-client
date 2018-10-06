<template>
  <!-- <f7-panel url='/panel/' left cover :opened="panelOpened"> -->
  <f7-panel left cover>
    <f7-view>
      <f7-page>
        <f7-navbar title="Menu" />
        <f7-list>
          <f7-list-item
            view='.view-main'
            v-for='menu in panelMenus'
            :key='`panel-item-${menu.id}`'
            :title='menu.string'
            :link='true'
            @click="routeToPage(menu)"
            :accordion-item='getMenuChild(menu)'
            :panel-close='!getMenuChild(menu)'
          >
            <f7-accordion-content
              :v-if="getMenuChild(menu)"
            >
              <f7-list>
                <f7-list-item
                  view='.view-main'
                  v-for='childMenu in menu.childs'
                  :key='`panel-child-item-${childMenu.id}`'
                  :title='childMenu.string'
                  :link='true'
                  @click="routeToPage(childMenu)"
                  panel-close
                />
                <f7-list-item
                  v-if="menu.id == 'settings'"
                  :link='true'
                  :href='false'
                  title='Logout'
                  view='.view-main'
                  @click="doLogout"
                  panel-close
                />
              </f7-list>
            </f7-accordion-content>
          </f7-list-item>
        </f7-list>
        <!-- <f7-list accordion>
        </f7-list> -->
        <!-- <f7-block>
          <p>Here comes the left panel text</p>
        </f7-block> -->
      </f7-page>
    </f7-view>
  </f7-panel>
</template>

<script>
import {
  f7Panel,
  f7View,
  f7Page,
  f7Navbar,
  f7Block,
  f7List,
  f7ListItem,
  f7AccordionItem,
  f7AccordionToggle,
  f7AccordionContent
} from 'framework7-vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    f7Panel,
    f7View,
    f7Page,
    f7Navbar,
    f7Block,
    f7List,
    f7ListItem,
    f7AccordionItem,
    f7AccordionToggle,
    f7AccordionContent
  },
  data () {
    return {
      // panelMenus: [{
      //   title: 'Contacts',
      //   link: '/contacts/'
      // }],
      panelMenus: []
    }
  },
  computed: {
    ...mapGetters([
      'checkAvailableUser',
      'getAppData',
      'checkClientJS'
    ])
  },
  async mounted () {
    try {
      let { tools } = await this.$createORM(this.getAppData, this.checkClientJS)
      // sort panel menu sequence using rapydscript syntax
      let menus = tools.keys(tools.menu, 'sequence').as_array()
      this.panelMenus = menus.map(key => tools.menu[key])
      console.log(this.$f7.views)
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    getMenuChild (menu) {
      return menu.childs.length > 0
    },
    routeToPage (menu) {
      // jika suatu menu item tidak memiliki turunannya
      // menu item tersebut tidak memuat halaman
      if (!this.getMenuChild(menu)) {
        this.$f7router.navigate({ name: 'resources', params: { name: menu.id } }, { props: { menu } })
      }
    },
    async doLogout () {
      this.$f7.dialog.preloader()
      try {
        await this.$store.dispatch('LOGOUT')
        const { default: removePanelElement } = await import(
          /* webpackChunkName: "remove-panel" */
          '../utils/remove-elements/panel')
        removePanelElement()
        this.$f7.dialog.close()
        this.$f7router.navigate({ name: 'index' }, { reloadAll: true })
        // this.$f7.panel.left.destroy()
        console.log('toast: ', this.$f7.toast)
        console.log('loggedOut panel: ', this.$f7.panel)
        // this.logoutToast.open()
        this.$f7.dialog.alert('You are logged out', () => {
          this.$f7.dialog.close()
          this.$f7.panel.disableSwipe('left')
        })
      } catch (e) {
        console.log(e)
        this.$f7.dialog.close()
      }
    }
  }
}
</script>
