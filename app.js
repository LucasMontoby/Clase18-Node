let fs = require('fs')
// console.log(fs)

let moment = require('moment');
// console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
// console.log(moment().date("2000/02/15"));
// console.log(moment)

let datos = fs.readFileSync(__dirname + '/prueba.txt', 'utf-8');
// console.log(datos); 

// -----------------------------------------------------------------

const express = require('express');
const app = express();
// console.log(app)
const path = require('path');

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
});

app.get("/producto", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/producto.html"))
});

app.listen(3010, () =>{
    console.log('Servidor corriendo en el puerto 3000')
});