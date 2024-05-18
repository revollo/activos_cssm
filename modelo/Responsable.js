const mongoose = require('../conexion');

const schemaData = mongoose.Schema({
    ci: Number,
    nombre: String,
    paterno: String,
    materno: String,
    direccion: String,
    celular: Number,
    cargo: String
});

const userModel = mongoose.model("responsable", schemaData, "responsable");
module.exports = userModel;
