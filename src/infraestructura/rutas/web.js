const web = require('express').Router()

web.get('/', function (req, res) {
  (require('../controladores/Usuarios').
  	Usuarios(req,res))
});


module.exports = web