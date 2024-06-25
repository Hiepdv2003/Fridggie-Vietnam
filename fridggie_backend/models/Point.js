const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    points_earned: { type: Number, required: true },
    points_redeemed: { type: Number, default: 0 },
    point_source: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Point', pointSchema);
