export default class Person {

  constructor (firstName = '', lastName = '', age = '') {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  get description () {
    return this.firstName + ' ' + this.lastName
  }

}
