const express = require('express')
, app = express()
, bodyParser = require('body-parser')
, consign = require('consign')
, port = process.env.PORT || 3000; // process.env.PORT usado para ambiente de deploy em nuvem

// para o express fazer parse para o JSON
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// use consign to load routes and add to app
consign()
  .include('controllers')
  .include('routes')
  .into(app);

app.listen(port, function(){
  console.log('XChat on air ' + port);
});

// exportando para os testes
module.exports = app;