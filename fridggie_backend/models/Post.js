const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    post_type: { type: String, required: true },
    likes: [
        {
            user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            liked_at: { type: Date, default: Date.now }
        }
    ],
    comments: [
        {
            user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            comment: { type: String, required: true },
            commented_at: { type: Date, default: Date.now }
        }
    ],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);
