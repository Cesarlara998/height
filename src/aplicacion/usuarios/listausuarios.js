const User = require( '../../dominio/usuarios/usuarios')

listaUsuarios = new User()
const lista = listaUsuarios.All()
module.exports = { lista }