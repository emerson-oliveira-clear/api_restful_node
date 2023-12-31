const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
//const expressValidator = require('express-validator');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


consign().include('routes').include('utils').into(app);

app.listen(3000, 'localhost', ()=>{

    console.log('servidor rodando!');

});

