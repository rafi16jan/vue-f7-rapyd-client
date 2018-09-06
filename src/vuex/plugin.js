import Vue from 'vue'
import Vuex from 'vuex'

import contacts from './modules/contacts'
import users from './modules/users'


export default function initStore () {
  Vue.use(Vuex)
  
  const store = new Vuex.Store({
    modules: {
      contacts,
      users
    }
  })

  return store
}
