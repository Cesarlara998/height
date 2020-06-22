const Usuarios = require('./users/connection.js')

exports.tester = function() {
Usuarios
.authenticate()
  .then(() => {
    console.log('Conexion con Usuarios Realizada con exito!');
  })
  .catch(err => {
    console.error('No se pudo conectar con la base de datos:', err);
  });
}