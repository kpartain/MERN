const Jokes = require("../models/joke.model");

module.exports.findAllJokes = (req, res) => {
    Jokes.find()
        .then((allJokes) => res.json({ jokes: allJokes }))
        .catch((err) =>
            res.json({ message: "Something went wrong", error: err })
        );
};

module.exports.findOneSingleJoke = (req, res) => {
    Jokes.findOne({ _id: req.params.id })
        .then((oneJoke) => res.json({ joke: oneJoke }))
        .catch((err) =>
            res.json({ message: "Something went wrong", error: err })
        );
};

module.exports.createNewJoke = (req, res) => {
    console.log(req.body);
    Jokes.create(req.body)
        .then((newJoke) => res.json({ joke: newJoke }))
        .catch((err) =>
            res.json({ message: "Something went wrong", error: err })
        );
};

module.exports.updateExistingJoke = (req, res) => {
    Jokes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((updatedJoke) => res.json({ joke: updatedJoke }))
        .catch((err) =>
            res.json({ message: "Something went wrong", error: err })
        );
};

module.exports.deleteAnExistingJoke = (req, res) => {
    Jokes.deleteOne({ _id: req.params.id })
        .then((result) => res.json({ result: result }))
        .catch((err) =>
            res.json({ message: "Something went wrong", error: err })
        );
};
