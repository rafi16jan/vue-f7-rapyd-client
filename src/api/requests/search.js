import { stringify } from 'querystring'

import API from '@/api'

export default async function searchResourceData (model, userData) {
  try {
    let { data } = await API.post('/search', stringify({
      ...userData,
      model,
      encrypted: true
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    console.log(data)
    let result = Array.isArray(data.values) ? data.values : (data.values.name ? [data.values] : [])
    return result
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}
