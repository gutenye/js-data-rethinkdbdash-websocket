var JSData = require("js-data")
var RethinkdbAdapter = require("js-data-rethinkdb-websocket")
var pd = console.log.bind(console)

var store = new JSData.DS()
//store.defaults.debug = true
store.registerAdapter("rethinkdb", new RethinkdbAdapter({
  db: "test",
  host: "localhost",
  port: 8015,
  path: "/",
  wsProtocols: ["binary"],
  secure: false
}), {default: true})
var User = store.defineResource({name: "users"})
var cb1 = function(result) {
  pd("result", result)
  //pd(User.filter({where: {tags: {'contains': "a"}}}))
}
var cb2 = function(err) {
  pd("error", err)
}

//User.find(1).then(cb1, cb2)
User.findAll().then(cb1, cb2)
//User.findAll({where: {name: {'notContains': "G"}}}).then(cb1, cb2)
//User.create({a: 1}).then(cb1, cb2) // "users.inject: "attrs" must be an object or an array!"
