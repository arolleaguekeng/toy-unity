const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;


const toySchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    toys: { type: [String], unique: true },
}, { timestamps: true });

module.exports = mongoose.model('Panier', userSchema);
