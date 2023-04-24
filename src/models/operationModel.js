const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;


const operationSchema = new mongoose.Schema({
    idProprietaire: { type: String, required: true },
    idAcheteur: { type: String, required: true },
    jouetProp: { type: String, required: true },
    jouetacht: { type: String, required: false },
    status: { type: String, enum: ['progres','validate', 'abort'], default: 'wait' },
}, { timestamps: true });

module.exports = mongoose.model('Operation', operationSchema);
