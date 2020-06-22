const web = require('express').Router()

web.get('/', function (req, res) {
  res.send('Hello World!');
});


module.exports = web