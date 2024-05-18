const mongoose = require('../conexion');

const schemaData = mongoose.Schema({
nom_activo: String,
descripcion_activo: String,
foto_activo: String,
cantidad: Number,
valor_unitario: String,
estado_activo: String,
observaciones: String,
fecha_ingreso: Date,
fecha_registro: Date,
fecha_baja:Date,
foto_baja:String,
motivo:String,
condicion:String,
tipo_activo:String,
iddepartamento: { type: mongoose.Schema.Types.ObjectId, ref: 'departamento' }


});

const userModel = mongoose.model("activo", schemaData, "activo");
module.exports = userModel;
