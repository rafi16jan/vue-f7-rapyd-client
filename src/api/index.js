import { create } from 'axios'

export const baseURL = 'https://rihla.duckdns.org:8069'

const API = create({
  baseURL: 'https://rihla.duckdns.org:8069/api'
})

export default API
