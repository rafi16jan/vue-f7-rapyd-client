export default async function convertXML2JS (data) {
  try {
    console.log('data', data)
    const { Parser } = await import(/* webpackChunkName: "xml2js" */ 'xml2js')
    const { parseString } = new Parser({
      normalize: true,
      async: true,
      explicitArray: false,
      normalizeTags: true,
      trim: true
    })
    return new Promise((resolve, reject) => {
      parseString(data.trim(), (error, result) => {
        if (!error) {
          resolve(result)
        } else reject(error)
      })
    })
  } catch (e) {
    return null
  }
}

export async function getResourcesFields (data, model) {
  try {
    const { tree } = await convertXML2JS(data)
    const result = tree?.field?.reduce((acc, value) => {
      const fieldName = value['$']['name']
      let field = models.env[model]._fields[fieldName]
      field.name = fieldName
      return [ ...acc, field ]
    }, []) || []
    return result
  } catch (error) {
    return []
  }
}

export async function getResourceFormView (data /* model */) {
  try {
    const { form } = await convertXML2JS(data)
    // const result = tree?.field?.reduce((acc, value) => {
    //   const fieldName = value['$']['name']
    //   let field = models.env[model]._fields[fieldName]
    //   field.name = fieldName
    //   return [ ...acc, field ]
    // }, []) || []
    return form
  } catch (error) {
    return []
  }
}
