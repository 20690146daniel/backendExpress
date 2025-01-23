const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitasSchema = new Schema({
id: Number,
doctorId: Number,
doctorNombre:String,
fecha: Date,
hora: String,
status: String,

});
module.exports = mongoose.model('Citas', CitasSchema,'citas');