const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, "This doesn't seem like it'll be that funny."],
            minlength: [10, "I've always looked down upon short jokes"],
        },
        punchline: {
            type: String,
            required: [true, "I don't get it."],
            minlength: [3, "You're going to have to punch harder than that."],
        },
    },
    {timestamps: true}
);

module.exports.Joke = mongoose.model('Joke', JokeSchema);