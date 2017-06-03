import axios from 'axios'
import LocalStorageManager from '../classes/LocalStorageManager.js'

export default {
  checkServer () {
    return axios.get(process.env.API_URL + 'test').then(() => {
      this.syncWithServer()
      return true
    }).catch(() => {
      return false
    })
  },
  cacheCall (callConfig) {
    var cachedCalls = LocalStorageManager.get('cachedCalls') || []
    cachedCalls.push(callConfig)
    LocalStorageManager.save('cachedCalls', cachedCalls)
  },
  syncWithServer () {
    LocalStorageManager.get('cachedCalls').forEach((callConfig) => {
      axios.post(this.buildAPIUrl(callConfig.url), callConfig.payload)
      axios.get(callConfig.url).then((response) => {
        LocalStorageManager.save(callConfig.url, response.data)
      })
    }, this)
  },
  buildAPIUrl (resourcePath) {
    const url = process.env.API_URL
    return url + resourcePath
  },
  getOne (resourcePath, id) {
    return this.checkServer().then((testResponse) => {
      if (testResponse) {
        return axios.get(this.buildAPIUrl(resourcePath))
      }
      return new Promise((resolve, reject) => {
        var resources = resourcePath.split('/')
        var objects = LocalStorageManager.get(resources[0])
        var objectToReturn = null
        objects.forEach((element) => {
          if (element.id === resources[1]) {
            objectToReturn = element
          }
        }, this)
        if (objectToReturn !== null) {
          var response = { data: {}}
          response.data = objectToReturn
          resolve(response)
        } else {
          reject(objectToReturn)
        }
      })
    })
  },

  getAll (resourcePath) {
    return this.checkServer().then((testResponse) => {
      if (testResponse) {
        return axios.get(this.buildAPIUrl(resourcePath))
      }
      return new Promise((resolve, reject) => {
        var response = { data: [] }
        response.data = LocalStorageManager.get(resourcePath) || []
        resolve(response)
      })
    })
  },

  save (resourcePath, payload) {
    return this.checkServer().then((testResponse) => {
      if (testResponse) {
        return axios.post(this.buildAPIUrl(resourcePath), payload)
      }
      this.cacheCall({
        url: resourcePath,
        payload: payload
      })
      return new Promise((resolve, reject) => {
        var objectsToSave = LocalStorageManager.get(resourcePath) || []
        objectsToSave.push(payload)
        LocalStorageManager.save(resourcePath, objectsToSave)
        return resolve(payload)
      })
    })
  }
}
