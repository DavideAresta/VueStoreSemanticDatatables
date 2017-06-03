export default {
  save (key, payload) {
    localStorage.setItem(key, JSON.stringify(payload))
  },
  get (key) {
    var items = localStorage.getItem(key)
    if (items !== null && items.length) {
      return JSON.parse(localStorage.getItem(key))
    } else {
      return undefined
    }
  }
}
