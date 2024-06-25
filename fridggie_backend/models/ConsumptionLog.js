const mongoose = require('mongoose');

const consumptionLogSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    consumption_date: { type: Date, required: true },
    quantity_consumed: { type: Number, required: true },
    leftover_reason: String,
    note: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ConsumptionLog', consumptionLogSchema);
