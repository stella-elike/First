var express = require('express')
 // create express application instance
var app = express()
  // express route
app.get('/', function (req, res) {
   res.send('Welcome to LBRCE')
})
app.get('/CSE', function (req, res) {
   res.send('CSE Department<br>Department of Charms')
})
app.get('/ECE', function (req, res) {
   res.send('<p style="color:red;">ECE Department</p>')
})
app.get('/IT', function (req, res) {
   res.send('IT Department')
}).
app.get('/MECH', function (req, res) {
   res.send('Welcome to MECH Department')
})
 var server = app.listen(8000) // start server
console.log("Server started on localhost 8000")
