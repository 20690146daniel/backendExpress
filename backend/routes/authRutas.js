const express = require('express'); 
const router = express.Router(); 
const authController = require('../controllers/authController');
const { validateRegister, loginValidation } = require('../Middleware/authValidation');

router.post('/register', validateRegister, authController.register);
router.post('/login', loginValidation, authController.login);




module.exports = router;
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2I3ZGMwZTc1MTFkYTkyNGMwODIyZTQiLCJpYXQiOjE3NDAxMTgxMTEsImV4cCI6MTc0MDEyMTcxMX0.ZCc4uzuok94qZze4gkr10b3gdxugJdJ6vY_MvLek4ko