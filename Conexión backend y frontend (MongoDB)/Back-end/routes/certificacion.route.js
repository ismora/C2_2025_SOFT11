const express = require("express"); 
const router = express.Router(); // Crear la señal
const Certificacion = require("../models/certificacion.model"); 

// Rutas
// POST: Crear, enviar datos al servidor. 
router.post("/", async(req, res) => {
    try {
        const nuevaCertificacion = new Certificacion(req.body);
        const certificacionGuardada = await nuevaCertificacion.save();
        res.status(201).json(certificacionGuardada); // 201: El recurso se creó correctamente 
    } catch (error) {
        res.status(400).json({msj: "Error al crear la certificación", error})
    }
});


// GET: Solicitar datos al servidor 
router.get("/", async(req, res) => {
    try {
        const certificaciones = await Certificacion.find();
        res.json(certificaciones);
    } catch (error) {
        res.status(500).json({msj: "Error al obtener las certificaciones", error});
    }
});

module.exports = router;