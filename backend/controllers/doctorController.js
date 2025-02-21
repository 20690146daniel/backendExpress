const Doctor = require('../models/doctor_model');

const ConsultarDoctor = async (req, res) => {
     try {
            const doctors = await Doctor.find();
            const formattedJson = JSON.stringify(doctors, null, 2);
            res.setHeader('Content-Type', 'application/json'); 
            res.send(formattedJson); 
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
};



    module.exports =  ConsultarDoctor ;