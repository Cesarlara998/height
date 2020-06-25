'use strict';
module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define('usuario', {
    nick: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
    idPerfil: DataTypes.INTEGER
  }, {});
  usuario.associate = function(models) {
    usuario.belongsTo(models.perfil,{foreignKey: {name: 'asd' }, as: 'perfil'})
  };
  return usuario;
};