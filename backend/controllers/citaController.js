const Citas = require('../models/citas_model');

const ConsultarCitas = async (req, res) => {
    try {
      const userId = req.userId; // Obtener el userId del middleware
      const citas = await Citas.find({ userId: userId }); // Filtrar citas por userId
      const formattedJson = JSON.stringify(citas, null, 2);
      res.setHeader('Content-Type', 'application/json');
      res.send(formattedJson);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
module.exports = {
    ConsultarCitas,
   
};