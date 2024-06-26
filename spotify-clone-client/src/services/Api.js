import Axios from 'axios'
import { config } from 'dotenv'
import { BASE_URL } from '../global'

// export const BASE_URL = 'http://localhost:4000'

const Client = Axios.create({ baseURL: BASE_URL })

Client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }

    return config
  }, 
  (error) => Promise.reject(error)

)

export default Client
