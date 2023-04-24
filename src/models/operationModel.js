const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;


const operationSchema = new mongoose.Schema({
    proprietaire: { type: String, required: true },
    acheteur: { type: String, required: true },
    jouetProp: { type: String, required: true },
    jouetacht: { type: String, required: false },
    status: { type: String, enum: ['progres','validate', 'abort'], default: 'wait' },
}, { timestamps: true });

module.exports = mongoose.model('Operation', operationSchema);
