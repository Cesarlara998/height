//TEST INICIAL
const perfil = require('../../infraestructura/migrations/usuarios/models').perfil
/*
*
* functions
*
*
*/
 async function mostrar(){
	return await perfil.findAll().length
}

/*
*
* TEST
*
*
*/
describe('listar', () => {
  test('Muestra de perfiles', () => {
    expect(mostrar()).toBe(0)
  })
})