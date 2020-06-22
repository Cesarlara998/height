const api = require('express').Router()

api.get('/', function (req, res) {
  res.send('Hello World!');
});


module.exports = api