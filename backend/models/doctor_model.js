const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
    nombre: { type: String, required: true },
    especialidad: { type: String, required: true },
    informacion: { type: String, required: true },
    horaCierre: { type: String, required: true },
    horaInicio: { type: String, required: true },
});

module.exports = mongoose.model('Doctor', DoctorSchema, 'medicos');