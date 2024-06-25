const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    transaction_type: { type: String, required: true },
    amount: { type: Number, required: true },
    transaction_date: { type: Date, required: true },
    status: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', transactionSchema);
