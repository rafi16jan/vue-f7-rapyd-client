import { stringify } from 'querystring'

import createORMFunction from '@/utils/create-orm-function'

import API from '@/api'

const LOGIN = 'LOGIN'
const SEARCH = 'SEARCH'
const LOGOUT = 'LOGOUT'

const app = {
  state: {
    data: {}
  },
  getters: {
    getUser ({ data }) {
      console.log(data)
      let { login, password } = data
      return (data && data.login) ? {
        login,
        password
      } : { }
    },
    checkAvailableUser ({ data }) {
      return (!!data?.login) || false
    },
    checkClientJS ({ data }) {
      return data.client_js
    }
  },
  mutations: {
    [`${LOGIN}_FULFILLED`] (state, { data }) {
      console.log('state: ', state)
      console.log('LOGIN response data: ', data)
      state.data = data
      // createORMFunction(data.client_js)
    },
    [`${LOGIN}_REJECTED`] (state, error) {
      console.log('state: ', state)
      console.log('LOGIN error: ', error)
    },
    [`${SEARCH}_FULFILLED`] (state, { data }) {
      console.log('state: ', state)
      console.log('SEARCH response data: ', data)
      // state.data = data
      // console.log(data.client_js)
    },
    [`${SEARCH}_REJECTED`] (state, error) {
      console.log('state: ', state)
      console.log('SEARCH error: ', error)
      throw new Error(error)
    },
    [LOGOUT] (state) {
      state.data = { }
    }
  },
  actions: {
    async [LOGIN] ({ commit }, payload) {
      try {
        let response = await API.post('/login', stringify(payload), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        if (response.data.status === 'denied') {
          commit(`${LOGIN}_REJECTED`, response)
          throw new Error(response)
        } else {
          commit(`${LOGIN}_FULFILLED`, response)
        }
      } catch (error) {
        commit(`${LOGIN}_REJECTED`, error)
        throw new Error(error)
      }
    },
    async [SEARCH] ({ getters, commit }) {
      let data = {
        ...getters.getUser,
        encrypted: true,
        model: 'res.message'
      }
      try {
        let response = await API.post('/search', stringify(data), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        if (response.data.status === 'denied') {
          commit(`${SEARCH}_REJECTED`, response)
          throw new Error(JSON.stringify(response))
        } else {
          commit(`${SEARCH}_FULFILLED`, response)
        }
      } catch (error) {
        commit(`${SEARCH}_REJECTED`, error)
        // throw new Error(JSON.stringify(error))
      }
    },
    [LOGOUT] ({ commit }) {
      commit(LOGOUT)
    }
  }
}

export default app
