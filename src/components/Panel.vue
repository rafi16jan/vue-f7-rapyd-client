<template>
  <f7-panel
    left
    cover
    :opened="panelOpened"
    @panel:breakpoint="onPanelBreakpoint()"
    @panel:opened="setPanelState(true)"
    @panel:closed="setPanelState(false)"
    @panel:backdrop-click="setPanelState(false)"
    >
    <f7-view>
      <f7-page :page-content="false">
        <f7-navbar :title="title" />
        <f7-page-content>
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
        </f7-page-content>
      </f7-page>
    </f7-view>
  </f7-panel>
</template>

<style scoped>
.panel-left {
  border: none;
  border-radius: 0;
}
.page-content {
  border-right: 1px #d1d1d1 solid !important;
}
</style>

<script>
import {
  f7Panel,
  f7View,
  f7Page,
  f7PageContent,
  f7Navbar,
  f7Block,
  f7List,
  f7ListItem,
  f7AccordionItem,
  f7AccordionToggle,
  f7AccordionContent
} from 'framework7-vue'
import { mapGetters, mapState } from 'vuex'

export default {
  components: {
    f7Panel,
    f7View,
    f7Page,
    f7PageContent,
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
      title: '',
      panelMenus: []
    }
  },
  computed: {
    ...mapGetters([
      'checkAvailableUser',
      'getAppData',
      'checkClientJS'
    ]),
    ...mapState([
      'panelOpened'
    ])
  },
  async mounted () {
    try {
      this.title = this.isTabletOrDesktop() ? 'Home' : 'Menu'
      let menus = tools.keys(tools.menu, 'sequence').as_array()
      this.panelMenus = menus.map(key => tools.menu[key])
      console.log(this.$f7.views)
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    isTabletOrDesktop () {
      return document.querySelector('.framework7-root').offsetWidth >= 768
    },
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
    },
    onPanelBreakpoint () {
      const value = document.querySelector('.framework7-root').offsetWidth >= 768
      console.log(value)
      this.setPanelState(value)
    },
    setPanelState (value) {
      console.log(`panelOpened state is ${value}`)
      this.$store.commit('SET_PANEL_STATE', value)
    }
  }
}
</script>
