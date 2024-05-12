const express = require("express");
const port = 3002

const app = express();

app.get('/backend-conversation', function(req, res) {
    res.send(`${req.url}`);
})

app.get('/', function(req, res) {
		console.log("Request has been reached");
    res.send(`${req.url}`);
})

app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
  })

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})