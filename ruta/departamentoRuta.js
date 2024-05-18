const express = require('express');
const userModel = require('../modelo/Departamento');
const router = express.Router();

// Listar
router.get("/", async (req, res) => {
    try {
        const data = await userModel.find({}).populate('idresponsable', 'ci nombre paterno materno');
        res.json({ success: true, data: data });
        console.log(data);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Crear
router.post("/create", async (req, res) => {
    console.log(req.body);
    req.body.nombre_depa = req.body.nombre_depa.toUpperCase();
    req.body.descripcion_depa = req.body.descripcion_depa.toUpperCase()
    const data = new userModel(req.body);
    await data.save();
    res.send({ success: true, message: "dato registrado" });
});

// Actualizar
router.put("/update", async (req, res) => {
    
    console.log(req.body);
    req.body.nombre_depa = req.body.nombre_depa.toUpperCase();
    req.body.descripcion_depa = req.body.descripcion_depa.toUpperCase()
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
