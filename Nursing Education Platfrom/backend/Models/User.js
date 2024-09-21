const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ['student', 'tutor', 'admin'], default: 'student' },
    isPremium: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', userSchema);
