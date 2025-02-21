
const Citas = require('../models/citas_model');
const getCitasByUserId = async (userId) => {
    return await Citas.find({ userId: userId });
};

module.exports = { getCitasByUserId };
