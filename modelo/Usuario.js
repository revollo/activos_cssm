const mongoose = require('../conexion');

const schemaData = mongoose.Schema({
  
nombre_usuario:String,
password:String,
fecha_creacion:Date,
estado_usuario:String,
tipo_usuario:String,
foto_usuario:String,
    idresponsable: { type: mongoose.Schema.Types.ObjectId, ref: 'responsable' }
});

const userModel = mongoose.model("usuario", schemaData, "usuario");
module.exports = userModel;