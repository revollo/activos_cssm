const mongoose = require('../conexion');
const schemaData = mongoose.Schema({
    nombre_depa: String,
    descripcion_depa: String,
    idresponsable: { type: mongoose.Schema.Types.ObjectId, ref: 'responsable' }
});

const userModel = mongoose.model("departamento", schemaData, "departamento");
module.exports = userModel;
