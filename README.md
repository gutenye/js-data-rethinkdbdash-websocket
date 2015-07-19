Forked from [js-data-rethinkdb](https://github.com/js-data/js-data-rethinkdb)

A rethinkdb websocket adapter for js-data by using [rethinkdbdash-websocket-client](https://github.com/gutenye/rethinkdb-websocket-client).

Usage
------

```javascript
var JSData = require("js-data")
var RethinkdbAdapter = require("js-data-rethinkdb-websocket")

var store = new JSData.DS()
store.registerAdapter("rethinkdb", new RethinkdbAdapter({
  db: "test",
  host: "localhost",
  port: 8015,
  path: "/",
  wsProtocols: ["binary"],
  secure: false
}), {default: true})
var User = store.defineResource("users")
```
