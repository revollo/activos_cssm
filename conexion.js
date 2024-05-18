const mongoose = require('mongoose');

//mongoose.connect("mongodb://127.0.0.1:27017/cssm_activos").then(() => {

mongoose.connect("mongodb+srv://fijos:VOxHQhWJRtzAMuO3@cluster0.xsmzyab.mongodb.net/fijos").then(() => {

    console.log("Conectado a la base de datos");
}).catch((error) => {
    console.error("Error de conexion a la base de datos:", error);
});

module.exports = mongoose;
