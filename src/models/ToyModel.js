const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;


const toySchema = new mongoose.Schema({
    name: { type: String, required: true },
    uid: { type: String, required: true },
    description: { type: String, required: true, },
    color: { type: String, required: true,  },
    price: { type: Number, required: true, },
    status: { type: String, enum: ['wait','sale', 'progress','end'], default: 'wait' },
    image: { type: [String] , default: ["default.jpg"]},
    coordinates: {
      type: [Number],
      required: true
    },
    rate: { type: Number, default: 0 },  
}, { timestamps: true });

module.exports = mongoose.model('Toy', toySchema);
