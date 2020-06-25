'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.createTable('perfil', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          nombre: {
            type: Sequelize.STRING
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          }
        }),
        queryInterface.addColumn('usuarios', 'idPerfil', {
          type: Sequelize.INTEGER,
          references: {
            model:{
              tableName: 'perfil'
            },
            key:'id'
          },
          allowNull: false
        })
      ])
     })
    },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('perfil');
  }
}