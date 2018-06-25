import { create } from 'axios'

const API = create({
  baseURL: 'http://localhost:8069/api'
})

export default API
