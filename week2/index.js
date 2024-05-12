const express = require("express");
const port = 3002

const app = express();
var  bodyParer = require('body-parser');
var jsonParser = bodyParer.json();
var urlencodedParser = bodyParer.urlencoded({extended: false});

app.use(jsonParser);
app.use(urlencodedParser);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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