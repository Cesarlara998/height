'use strict';
module.exports = (sequelize, DataTypes) => {
  const perfil = sequelize.define('perfil', {
    nombre: DataTypes.STRING
  }, {});
  perfil.associate = function(models) {
    // associations can be defined here
  };
  return perfil;
};