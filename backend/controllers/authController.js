const User = require ('../models/user_model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const register = async ( req, res)=>{
try{
    const {nombre, correo, contrasena} = req.body;
    if (!nombre ||!correo||!contrasena){
        return res.status(400).json({message: 'Todos los campos son requeridos'});
    }
    const usuarioExiste = await User.findOne({correo: correo});
    if (usuarioExiste){
        return res.status(400).json({message: 'El usuario ya existe'});
    }
    const contrasenaEncriptada = await bcrypt.hash(contrasena, 10);
    const nuevoUsuario = new User({nombre, correo, contrasena: contrasenaEncriptada});
    await nuevoUsuario.save();
    res.status(201).json({token});
     res.status(201).json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  
}
};

const login = async (req, res) => {
  try {
    const { correo, contrasena } = req.body;
    const usuario = await User.findOne({ correo });
    if (!usuario) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }
    const contrasenaValida = await bcrypt.compare(contrasena, usuario.contrasena);
    if (!contrasenaValida) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

  
    return res.status(200).json({ message: 'Login exitoso' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

module.exports = { register, login };