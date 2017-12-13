const express = require('express')
, app = express()
, bodyParser = require('body-parser')
, usersRoute = require('./routes/users')
, port = process.env.PORT || 3000; // process.env.PORT usado para ambiente de deploy em nuvem

// para o express fazer parse para o JSON
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// injecao das rotas
app.use('/users', usersRoute);

app.listen(port, function(){
  console.log('XChat on air ' + port);
});

// exportando para os testes
module.exports = app;