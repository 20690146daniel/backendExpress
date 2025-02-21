const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

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
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
      return res.status(401).json({ message: 'Token no proporcionado' });
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Token inválido' });
      }
      req.userId = user.userId; // Almacenar el userId en el objeto req
      next();
    });
  };
  
module.exports = {
    validateRegister,
    loginValidation,
    authenticateToken
};
