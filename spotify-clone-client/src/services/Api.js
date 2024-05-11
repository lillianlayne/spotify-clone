import Axios from 'axios'
import { config } from 'dotenv'

export const BASE_URL = 'http://localhost:4000'
// export const BASE_URL = 'https://ltbl-spotify-clone-server-2879f0b3ab97.herokuapp.com/'

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
