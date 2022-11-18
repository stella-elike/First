var express = require('express')
 // create express application instance
var app = express()
  // express route
app.get('/', function (req, res) {
   res.send('Welcome to LBRCE')
})

 var server = app.listen(8000) // start server
console.log("Server started on localhost 8000")
