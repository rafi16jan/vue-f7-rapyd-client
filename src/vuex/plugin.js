import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import app from './modules/app'
import contacts from './modules/contacts'
import users from './modules/users'

import packageJson from '../../package.json'

let vuexLocal = new VuexPersist({
  key: `app-v${packageJson.version}`
})

export default function initStore () {
  Vue.use(Vuex)

  const store = new Vuex.Store({
    modules: {
      app,
      contacts,
      users
    },
    plugins: [
      vuexLocal.plugin
    ]
  })

  return store
}
