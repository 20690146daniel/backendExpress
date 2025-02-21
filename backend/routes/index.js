const express = require('express');
const router = express.Router();
const citaController = require('../controllers/citaController');
const {authenticateToken} = require('../Middleware/authValidation');



router.get('/', (req, res) => {
    res.send('¡Servidor Express  esta funcionando!');
});


router.get('/Citas', authenticateToken, citaController.ConsultarCitas);
module.exports = router;


