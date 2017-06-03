
import SupportService from './SupportService'

export default {

  resourceURL: 'persons',
  getAll () {
    return SupportService.getAll(this.resourceURL)
  },
  save (person) {
    return SupportService.save(this.resourceURL, person)
  }

}
