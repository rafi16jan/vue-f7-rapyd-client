import PouchDB from 'pouchdb-browser'

import { baseURL as url } from '@/api'

window.PouchDB = PouchDB

const soluORMPlugin = {
  install (Vue) {
    Vue.prototype.$createORM = (appData, client_js) => { // eslint-disable-line camelcase
      console.log('appData: ', appData)
      return new Promise((resolve, reject) => {
        try {
          (new Function(client_js))() // eslint-disable-line no-new-func
          let {
            models,
            tools,
            local_db // eslint-disable-line camelcase
          } = window
          let result = {
            models: {
              ...models,
              env: {
                ...models.env,
                user: {
                  ...models.env['res.users'].browse(),
                  ...appData
                },
                context: {
                  ...models.env.context,
                  active_id: null,
                  active_ids: [],
                  active_index: 0,
                  active_limit: 80,
                  active_model: false,
                  force_upload: false
                }
              },
              _context: {}
            },
            tools: {
              ...tools,
              configuration: {
                ...tools.configuration,
                url
              }
            },
            local_db
          }
          delete window.models
          delete window.tools
          delete window.local_db
          console.log('it works!!!')
          console.log('tools: ', result.tools.configuration)
          resolve(result)
        } catch (error) {
          reject(error)
        }
      })
    }
  }
}

export default soluORMPlugin
