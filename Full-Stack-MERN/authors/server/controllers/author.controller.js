const { Author } = require("../models/Author.model");
//CREATE
module.exports.create = (request, response) => {
    const { name } = request.body;
    Author.create({
        name
    })
        .then((newAuthorObject) => response.json(newAuthorObject))
        .catch((errorFound) => response.status(400).json(errorFound));
    // status codes: https://www.restapitutorial.com/httpstatuscodes.html
};
//READ
module.exports.getAll = (request, response) => {
    Author.find({})
        .then((listOfAuthorObjects) => response.json(listOfAuthorObjects))
        .catch((errorFound) => response.json(errorFound));
};
module.exports.getByID = (request, response) => {
    Author.findOne({ _id: request.params.id })
        .then((foundAuthorObject) => response.json(foundAuthorObject))
        .catch((errorFound) => response.json(errorFound));
};
//UPDATE
module.exports.updateByID = (request, response) => {
    Author.findOneAndUpdate({ _id: request.params.id }, request.body, {
        new: true,
        runValidators: true,
    })
        .then((authorBeingUpdated) => response.json(authorBeingUpdated))
        .catch((errorFound) => response.status(400).json(errorFound));
};
//DELETE
module.exports.deleteByID = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then((deletionSuccessMessage) => response.json(deletionSuccessMessage))
        .catch((errorInDeletion) => response.json(errorInDeletion));
};