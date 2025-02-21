const User = require ('../models/user_model');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');




const registerUser = async (nombre, correo, contrasena) => {
    if (!nombre || !correo || !contrasena) {
        throw { status: 400, message: 'Todos los campos son requeridos' };
    }

    const usuarioExiste = await User.findOne({ correo });
    if (usuarioExiste) {
        throw { status: 400, message: 'El usuario ya existe' };
    }

    const contrasenaEncriptada = await bcrypt.hash(contrasena, 10);
    const nuevoUsuario = new User({ nombre, correo, contrasena: contrasenaEncriptada });
    await nuevoUsuario.save();
};


const findUserByEmail = async (email) => {
  return await User.findOne({ correo: email });
};

const validatePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};


module.exports = {
    registerUser,
    findUserByEmail,
    validatePassword
};
