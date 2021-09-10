const { Joke } = require("../models/joke.model");
module.exports.create = (request, response) => {
    const { setup, punchline } = request.body;
    Joke.create({
        setup,
        punchline,
    })
        .then((newJokeObject) => response.json(newJokeObject))
        .catch((errorFound) => response.status(400).json(errorFound));
};
module.exports.getAll = (request, response) => {
    Joke.find({})
        .then((listOfJokeObjects) => response.json(listOfJokeObjects))
        .catch((errorFound) => response.json(errorFound));
};
module.exports.getByID = (request, response) => {
    Joke.findOne({ _id: request.params.id })
        .then((foundJokeObject) => response.json(foundJokeObject))
        .catch((errorFound) => response.json(errorFound));
};
module.exports.updateByID = (request, response) => {
    Joke.findOneAndUpdate({ _id: request.params.id }, request.body, {
        new: true,
        runValidators: true,
    })
        .then((jokeBeingUpdated) => response.json(jokeBeingUpdated))
        .catch((errorFound) => response.status(400).json(errorFound));
};
module.exports.deleteByID = (request, response) => {
    Joke.deleteOne({ _id: request.params.id })
        .then((deletionSuccessMessage) => response.json(deletionSuccessMessage))
        .catch((errorInDeletion) => response.json(errorInDeletion));
};