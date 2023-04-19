const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;
const messageSchema = new mongoose.Schema({
    reviewBy: {
        type: ObjectId,
        ref: "User",
        required: true,
    },
    texte: {
        type: String,
        require: ""
    }
}, {
    timestamps: true,
});



const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    hash_password: { type: String, required: true },
    phone: { type: String },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    image: { type: String },
    emailVerified: { type: Boolean, default: false },
    city: { type: String },
    state: { type: String },
    country: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);