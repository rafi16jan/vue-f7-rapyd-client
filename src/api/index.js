import { create } from 'axios'

const API = create({
  baseURL: 'https://rihla.duckdns.org:8069/api'
})

export default API
