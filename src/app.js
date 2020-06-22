const app = require('express').Router()

app.use('/api',require('./infraestructura/rutas/api'))
app.use('/',require('./infraestructura/rutas/web'))

module.exports = { rutas: app }
