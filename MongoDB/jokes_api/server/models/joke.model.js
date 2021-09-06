const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, "Can't have a joke without a setup..."],
            minlength: [10, "Joke setup must be at least 10 characters"],
        },
        punchline: {
            type: String,
            required: [true, "A joke isn't funny without a punchline..."],
            minlength: [3, "Joke punchline must be at least 3 charaters"],
        },
    },
    {
        timestamps: true,
    }
);

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;
