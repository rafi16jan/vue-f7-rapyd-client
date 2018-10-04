import PouchDB from 'pouchdb-browser'

window.PouchDB = PouchDB

export default function createORMFunction (clientJs) {
  (new Function(clientJs))() // eslint-disable-line no-new-func
  let { models, tools, local_db: localDB } = window
  console.log('models: ', models)
  console.log('tools: ', tools)
  console.log('localDB: ', localDB)
  delete window.models
  delete window.tools
  delete window.local_db
  return {
    models,
    tools,
    localDB
  }
}
