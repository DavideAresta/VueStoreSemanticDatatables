import axios from 'axios'

export default {
  urlPrefix: 'http://localhost:8080/persons',
  getOne (id) {
    const url = this.urlPrefix + '/' + id
    return axios.get(url)
  },

  getAll () {
    const url = this.urlPrefix
    return axios.get(url)
  },

  save (person) {
    const url = this.urlPrefix
    return axios.post(url, person)
  }
}
