import Vue from 'vue'
// import Vuetify from 'vuetify'
import Vuetify from 'vuetify'
// import VCardTitle from 'vuetify/es5/components/VCard/VCardTitle'
import VApp from 'vuetify/es5/components/VApp'
import VAlert from 'vuetify/es5/components/VAlert'
import VBtn from 'vuetify/es5/components/VBtn'
import VCard from 'vuetify/es5/components/VCard'
import VCardTitle from 'vuetify/es5/src/components/VCard/VCardTitle'
import VCheckbox from 'vuetify/es5/components/VCheckbox'
import VDialog from 'vuetify/es5/components/VDialog'
import VDataTable from 'vuetify/es5/components/VDataTable'
import VIcon from 'vuetify/es5/components/VIcon'
import VTextField from 'vuetify/es5/components/VTextField'

Vue.use(Vuetify, {
  components: {
    VApp,
    // VNavigationDrawer,
    // VFooter,
    // VList,
    VBtn,
    VIcon,
    // VGrid,
    // VToolbar,
    // VDivider,
    // VSubheader,
    VDataTable,
    VCheckbox,
    VAlert,

    VCard,
    VCardTitle,

    VDialog,
    VTextField
    // transitions
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})
