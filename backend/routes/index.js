const express = require('express');
const router = express.Router();
const doctorRuta = require ('../controllers/doctorController');
const { ConsultarUsuario, UsuarioporId,CrearUsuario} = require ('../controllers/userController');
const {ConsultarCitas, CitaporId, CrearCita}= require ('../controllers/citaController');



router.get('/', (req, res) => {
    res.send('¡Servidor Express  esta funcionando!');
});

router.get('/Doctor', doctorRuta.ConsultarDoctor);

router.get('/Usuarios',  ConsultarUsuario);
router.get('/Usuarios/:id',UsuarioporId);
router.post('/Usuarios/crear', CrearUsuario);
   


router.get('/Citas',ConsultarCitas);
router.get('/Citas/:id',  CitaporId);
router.post('/Citas/crear',CrearCita)
module.exports = router;

