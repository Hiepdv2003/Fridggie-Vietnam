const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    bio: String,
    profile_photo: String,
    phone_number: String,
    location: {
        type: { type: String },
        coordinates: [Number],
    },
    role_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
