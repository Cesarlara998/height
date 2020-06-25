const usuario = require('../../aplicacion/usuarios/listausuarios')
function Usuarios(req,res) {
 	res.send(usuario)
 	//res.render('home');
}
module.exports = {Usuarios}