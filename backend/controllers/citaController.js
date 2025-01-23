const Citas = require('../models/citas_model');


const ConsultarCitas = async (req, res)=> {
    try {
        const citas = await Citas.find();
        const formattedJson = JSON.stringify(citas, null, 2);
        res.setHeader('Content-Type', 'application/json'); 
        res.send(formattedJson); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



const CitaporId = async (req, res)=>{
    try {
        const citas = await Citas.findById(req.params.id);

        if (!citas) {
            return res.status(404).json({ message: 'Cita no encontrada' });
        }
        
        res.status(200).json(citas); 
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving cita: ' + error.message });
    }
}


const CrearCita = async (req, res)=>{
    try {
       
        const citas = new Citas(req.body);
        
       
        const guardarCita = await citas.save();
        
        
        res.status(201).json(guardarCita);
    } catch (error) {
       
        res.status(400).json({ message: error.message });
    }

}
module.exports = {
    ConsultarCitas,
    CitaporId,
    CrearCita
};