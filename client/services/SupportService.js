import axios from 'axios'
import db from '../store/DB'

export default {
   useIndexDB: false,
   checkServer () {
    return axios.get(process.env.API_URL + 'test').catch(() => {
      this.useIndexDB = true
    })
  },
  buildAPIUrl(resourcePath) {
    const url = process.env.API_URL
    return url + resourcePath
  },
  getOne(resourcePath, id) {
    if (this.useIndexDB) {
      return db[resourcePath].get({'id': id})
    }
    return axios.get(this.buildAPIUrl(resourcePath))
  },
  getAll(resourcePath) {
    if (this.useIndexDB) {
      return db[resourcePath].toArray()
    }
    return axios.get(this.buildAPIUrl(resourcePath))
  },
  save(resourcePath, payload) {
    if (this.useIndexDB) {
      return db[resourcePath].add(payload)
    }
    return axios.post(this.buildAPIUrl(resourcePath), payload)
  }
}
