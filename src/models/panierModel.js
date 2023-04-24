const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;


const panierSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    toys: { type: [String], unique: true },
}, { timestamps: true });

module.exports = mongoose.model('Panier', panierSchema);
