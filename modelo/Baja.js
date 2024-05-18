const mongoose = require('../conexion');

const schemaData = mongoose.Schema({
cantidad_baja: String,
motivo: String,
fecha_baja: Date,
foto_baja: String,
    idactivo: { type: mongoose.Schema.Types.ObjectId, ref: 'activo' }
});

const userModel = mongoose.model("baja", schemaData, "baja");
module.exports = userModel;
