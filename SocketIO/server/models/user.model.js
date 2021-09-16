const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    inbox: [],
    outbox: [],
}, { timestamps: true });

module.exports.User = mongoose.model('User', UserSchema);