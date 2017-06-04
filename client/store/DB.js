import Dexie from 'dexie'

var db = new Dexie('SimpleDatabase')

db.version(1).stores({
  persons: '++id, firstName, lastName, age'
})

db.open().catch( (e) => {
  console.log(e)
})

export default db