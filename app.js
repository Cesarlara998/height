const express = require('express')
const app = express();
const {tester} = require('./src/infraestructura/entities/testerdb');

//TEST DB//
tester()
//TEST DB//

//PLANTILLAS
const exphbs = require('express-handlebars')
app.engine('.hbs', exphbs({
        defaultLayout: 'main', 
        extname: '.hbs',
        layoutsDir:'src/infraestructura/Views/layouts',
        partialsDir:'/src/infraestructura/Views/components'
}))
app.set('views',__dirname + '/src/infraestructura/Views/pages')
app.set('view engine', '.hbs');
//PLANTILLAS
const infraestructura = require('./src/app')
app.use('',infraestructura.rutas)
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});