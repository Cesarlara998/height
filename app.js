const express = require('express')
const app = express();
const {tester} = require('./src/infraestructura/entities/testerdb');

//TEST DB//
tester()
//TEST DB//
const infraestructura = require('./src/app')
app.use('',infraestructura.rutas)
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});