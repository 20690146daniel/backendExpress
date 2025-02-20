const { body, validationResult } = require('express-validator');

const validateRegister = [
    body('nombre').notEmpty().withMessage('El nombre es requerido'),
    body('correo').isEmail().withMessage('El correo debe ser una dirección de correo válida').notEmpty().withMessage('El correo es requerido'),
    body('contrasena').notEmpty().withMessage('La contraseña es requerida'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: errors.array()[0].msg });
        }
        next();
    }
];

const loginValidation = (req, res, next) => {
    const { correo, contrasena } = req.body;
    if (!correo || !contrasena) {
      return res.status(400).json({ message: 'Correo y contraseña son requeridos' });
    }
    next();
  };
module.exports = {
    validateRegister,
    loginValidation
};
