const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;
const Toy = require('../models/ToyModel')

const cartSchema = new mongoose.Schema({
    uid: { type: String, required: true },
    toys: {type: [String], required: false}
}, { timestamps: true });

module.exports = mongoose.model('Cart', cartSchema);
