var express = require('express')
var app = express()

app.use(express.static(__dirname + '/Descargas/'))

app.listen(3001, function () {
  console.log('Servidor en http://localhost:3001')
})

// app.get('/', function (req, res) {
  // res.send('Hola mundo!! Express!!')
// })

app.get('/bienvenido/:nombre', function (req, res) { // http://localhost:3001/bienvenido/hola
  res.send('Bienvenido!! ' + req.params.nombre + '!!')
})


// var express = require('express');
// var app = express();
// var router = express.Router();
// router.use('/contenido',express.static('/mi_carpeta_en_servidor'));
// app.use('/',router);
// app.listen(8080);