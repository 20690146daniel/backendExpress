const User = require('../models/user_model');

const ConsultarUsuario = async (req, res)=>{
    try{
        const users = await User.find();
        const formattedJson = JSON.stringify(users, null, 2);
        res.setHeader('Content-Type', 'application/json'); 
        res.send(formattedJson); 
    }catch(error){
        res.status(500).json({ message: error.message });
    }

}
const UsuarioporId = async (req ,res)=>{
    try {
       
        const user = await User.findById(req.params.id);
        
       
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        const formattedJson = JSON.stringify(user, null, 2);
        res.setHeader('Content-Type', 'application/json'); 
        res.send(formattedJson); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

const CrearUsuario =  async(req, res)=>{
     try {
           
            const user = new User(req.body);
            
           
            const savedUser = await user.save();
            
            
            res.status(201).json(savedUser);
        } catch (error) {
           
            res.status(400).json({ message: error.message });
        }
    
}


module.exports = {
    ConsultarUsuario,
    UsuarioporId,
    CrearUsuario
};