const modelos = require('../../infraestructura/migrations/usuarios/models').usuario
const queryInterface = require('../queryInterface')

class User extends queryInterface.Base {
	constructor() { //Modelo de datos
		super(modelos,['nombre'])
	}

	async All() {
		return this.selectAll()
	}
}

module.exports = User