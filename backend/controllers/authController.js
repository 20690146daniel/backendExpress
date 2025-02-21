const authService = require('../services/authService');

const jwt = require('jsonwebtoken');


const register = async (req, res) => {
  try {
    const { nombre, correo, contrasena } = req.body;
    await authService.registerUser(nombre, correo, contrasena);
    res.status(201).json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({ message: error.message || 'Error en el servidor' });
  }
};



const login = async (req, res) => {
  try {
    const { correo, contrasena } = req.body;

    const usuario = await authService.findUserByEmail(correo);
    if (!usuario) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    const contrasenaValida = await authService.validatePassword(contrasena, usuario.contrasena);
    if (!contrasenaValida) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Generar un token JWT
    const token = jwt.sign({ userId: usuario._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  register,
  login
};