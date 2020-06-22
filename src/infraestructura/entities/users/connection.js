const Sequelize = require('sequelize');

const Usuarios = new Sequelize('usuarios', 'root', '', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});
module.exports = Usuarios
