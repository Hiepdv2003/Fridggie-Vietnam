const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    ingredients: [
        {
            name: { type: String, required: true },
            quantity: { type: String, required: true }
        }
    ],
    instructions: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Recipe', recipeSchema);
