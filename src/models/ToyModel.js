const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;


const toySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, unique: true },
    color: { type: String, required: true, unique: true },
    price: { type: String, required: true, unique: true },
    status: { type: String, enum: ['wait','sale', 'progress','end'], default: 'wait' },
    image: { type: String },
    coordinates: {
      type: [Number],
      required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Toy', userSchema);
