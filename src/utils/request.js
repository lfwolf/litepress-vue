import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: process.env.API_ROOT,
  timeout: 5000
})

export default service
