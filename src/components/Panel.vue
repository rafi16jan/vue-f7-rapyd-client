<template>
    <!-- <f7-panel url='/panel/' left cover :opened="panelOpened"> -->
    <f7-panel left cover>
      <f7-view>
        <f7-page>
          <f7-navbar title="Menu"></f7-navbar>
          <f7-list>
              <f7-list-item
                view='.view-main'
                v-for='menu in panelMenus'
                :key='`panel-item-${menu.title}`'
                :title='menu.title'
                :link='menu.link'
                panel-close />
            <f7-list-item accordion-item title='Settings'>
                <f7-accordion-content>
                    <f7-list>
                        <f7-list-item
                            title='Users'
                            link='/settings/'
                            view='.view-main'
                            panel-close
                        />
                        <f7-list-item
                            title='Logout'
                            link='/'
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
      panelMenus: [{
        title: 'Contacts',
        link: '/contacts/'
      // }, {
      //   title: 'Login',
      //   link: '/login/'
      }],
      ...mapGetters([
        'checkAvailableUser'
      ])
    }
  },
  methods: {
    async doLogout () {
      this.$f7.dialog.preloader()
      try {
        await this.$store.dispatch('LOGOUT')
        const { default: removePanelElement } = await import('../utils/remove-elements/panel')
        removePanelElement()
        this.$f7router.navigate({ name: 'index' }, { reloadAll: true })
        this.$f7.dialog.alert('You are logged out', () => {
          this.$f7.dialog.close()
        })
      } catch (e) {
        console.log(e)
        this.$f7.dialog.close()
      }
    }
  }
}
</script>
