var express = require('express')
var app = express()
var fs = require('fs')

var infile = "index.html";

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.sendf(s.readFiileSync(infile))
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
