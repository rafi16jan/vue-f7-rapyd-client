import PouchDB from 'pouchdb-browser'

window.PouchDB = PouchDB

const soluORMPlugin = {
  install (Vue) {
    Vue.prototype.$createORM = clientJS => {
      (new Function(clientJS))() // eslint-disable-line no-new-func
      let {
        models,
        tools,
        local_db: localDB
      } = window
      let result = { models, tools, localDB }
      delete window.models
      delete window.tools
      delete window.local_db
      console.log('it works!!!')
      return result
    }
  }
};

export default soluORMPlugin;