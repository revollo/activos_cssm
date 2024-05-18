const express = require('express');
const userModel = require('../modelo/Activo');
const router = express.Router();
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads/activo'); 
    },
    filename: (req, file, cb) => {
      const fileName = `${file.originalname}`;
      cb(null, fileName);
    },
  });
  
  const upload = multer({ storage });
  
//mostrar
  router.use('/verfoto', express.static(path.join(__dirname, '../uploads/activo')));



 // router.use('/verfotousuario', express.static(path.join(__dirname, '../uploads/usuario')));
// Crear
router.post("/create",upload.single('file'), async (req, res) => {
console.log(req.body);
req.body.nom_activo = req.body.nom_activo.toUpperCase();
req.body.descripcion_activo = req.body.descripcion_activo.toUpperCase();
req.body.observaciones = req.body.observaciones.toUpperCase();
const data = new userModel(req.body);
await data.save();
res.send({ success: true, message: "dato registrado" });
});




// Listar normal
router.get("/", async (req, res) => {
  try {
    const data = await userModel.find({}).populate('iddepartamento', 'nombre_depa descripcion_depa idresponsable');
 


      res.json({ success: true, data: data });
      console.log(data);
  } catch (error) {
      res.status(500).json({ success: false, error: error.message });
  }
});

// Listar para excel
router.get("/lis", async (req, res) => {
  try {
   const data = await userModel.find({}).populate(
{
  path:'iddepartamento',
  select:'nombre_depa descripcion_depa',
  populate: [
      {path: 'idresponsable',select: 'nombre paterno materno'}]
}
);

      res.json({ success: true, data: data });
      console.log(data);
  } catch (error) {
      res.status(500).json({ success: false, error: error.message });
  }
});



// Actualizar
router.put("/update",upload.single('file'),async (req, res) => {   
    console.log(req.body);
//req.body.nom_activo = req.body.nom_activo.toUpperCase();
//req.body.descripcion_activo = req.body.descripcion_activo.toUpperCase();
//req.body.observaciones = req.body.observaciones.toUpperCase();
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
