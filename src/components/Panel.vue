<template>
    <f7-panel url='/panel/' left cover :opened="panelOpened">
      <f7-view>
        <f7-page>
          <f7-navbar title="Left Panel"></f7-navbar>
          <f7-list>
              <f7-list-item
                view='.view-main'
                v-for='(menu, index) in panelMenus'
                :key='`panel-${index}`'
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
        //      title: 'Settings',
        //      link: '/settings/'
      }],
      panelOpened: false
    }
  }
}
</script>
