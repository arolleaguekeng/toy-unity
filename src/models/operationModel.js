const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;


const operationSchema = new mongoose.Schema({
    proprietaire: { type: String, required: true },
    acheteur: { type: String, required: true, unique: true },
    jouet: { type: String, required: true, unique: true },
    price: { type: String, required: true, unique: true },
    status: { type: String, enum: ['progres','validate', 'abort'], default: 'wait' },
}, { timestamps: true });

module.exports = mongoose.model('Operation', userSchema);
