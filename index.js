const express = require('express');
const cors = require('cors');
const mongoose = require('./conexion');
const responsableRutas = require('./ruta/responsableRuta');
const departamentoRutas = require('./ruta/departamentoRuta');
const activoRutas = require('./ruta/activoRuta');
const bajaRutas = require('./ruta/bajaRuta');
const usuarioRutas = require('./ruta/usuariologinRuta');
const usuariocrudRutas = require('./ruta/usuarioRuta');

const app = express();


app.use(cors())

app.use(express.json());


  

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Servidor en ejecuciÃ³n en el puerto", PORT);
});


app.use('/responsable', responsableRutas);
app.use('/departamento', departamentoRutas);
app.use('/activo', activoRutas);
app.use('/baja', bajaRutas);
app.use('/usuario', usuarioRutas);
app.use('/usuarioc', usuariocrudRutas);
