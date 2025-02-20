const express = require('express'); 
const router = express.Router(); 
const authController = require('../controllers/authController');
const { validateRegister, loginValidation } = require('../middleware/authValidation');

router.post('/register', validateRegister, authController.register);
router.post('/login', loginValidation, authController.login);




module.exports = router;