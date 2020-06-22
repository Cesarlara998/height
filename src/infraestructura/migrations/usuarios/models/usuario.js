'use strict';
module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define('usuario', {
    nick: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {});
  usuario.associate = function(models) {
    // associations can be defined here
  };
  return usuario;
};