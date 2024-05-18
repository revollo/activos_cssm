const express = require('express');
const userModel = require('../modelo/Responsable');




const router = express.Router();
const fs = require('fs');
// Listar
router.get("/", async (req, res) => {
    const data = await userModel.find({});
    res.json({ success: true, data: data });
    console.log(data);
});

// Crear
router.post("/create", async (req, res) => {
    console.log(req.body);
    req.body.nombre = req.body.nombre.toUpperCase();
    req.body.paterno = req.body.paterno.toUpperCase();
    req.body.materno = req.body.materno.toUpperCase();
    req.body.direccion = req.body.direccion.toUpperCase();
    const data = new userModel(req.body);
    await data.save();
    res.send({ success: true, message: "dato registrado" });
});

// Actualizar
router.put("/update", async (req, res) => {   
    console.log(req.body);
    req.body.nombre = req.body.nombre.toUpperCase();
    req.body.paterno = req.body.paterno.toUpperCase();
    req.body.materno = req.body.materno.toUpperCase();
    req.body.direccion = req.body.direccion.toUpperCase();
    const { _id, ...rest } = req.body;
    console.log(rest);
    const data = await userModel.updateOne({ _id: _id }, rest);
    res.send({ success: true, message: "actualizado", data: data });
});

// Eliminar
router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = await userModel.deleteOne({ _id: id });
    res.send({ success: true, message: "eliminado", data: data });
});


module.exports = router;
