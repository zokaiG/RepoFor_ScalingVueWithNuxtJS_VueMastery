import axios from 'axios'

const apiCliente = axios.create({
  baseURL: `http://my-json-server.typicode.com/Code-Pop/real-world-nuxt/`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiCliente.get('/events')
  },
  getEvent(id) {
    return apiCliente.get('/events/' + id)
  }
}
