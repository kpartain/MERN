const { Team } = require("../models/team.model");
//CREATE
module.exports.create = (request, response) => {
    const { name, position } = request.body;
    Team.create({
        name,
        position
    })
        .then((newTeamObject) => response.json(newTeamObject))
        .catch((errorFound) => response.status(400).json(errorFound));
    // status codes: https://www.restapitutorial.com/httpstatuscodes.html
};
//READ
module.exports.getAll = (request, response) => {
    Team.find({})
        .then((listOfTeamObjects) => response.json(listOfTeamObjects))
        .catch((errorFound) => response.json(errorFound));
};
module.exports.getByID = (request, response) => {
    Team.findOne({ _id: request.params.id })
        .then((foundTeamObject) => response.json(foundTeamObject))
        .catch((errorFound) => response.json(errorFound));
};
//UPDATE
module.exports.updateByID = (request, response) => {
    Team.findOneAndUpdate({ _id: request.params.id }, request.body, {
        new: true,
        runValidators: true,
    })
        .then((teamBeingUpdated) => response.json(teamBeingUpdated))
        .catch((errorFound) => response.status(400).json(errorFound));
};
//DELETE
module.exports.deleteByID = (request, response) => {
    Team.deleteOne({ _id: request.params.id })
        .then((deletionSuccessMessage) => response.json(deletionSuccessMessage))
        .catch((errorInDeletion) => response.json(errorInDeletion));
};
