const TeamController = require("../controllers/team.controller");
//use the methods written in your controller file "module.exports._method_name_"
module.exports = function (app) {
    //get all (GET)
    app.get("/api/teams", TeamController.getAll);
    //get one by id(GET)
    app.get("/api/teams/:id", TeamController.getByID);
    //create one endpoint (POST)
    app.post("/api/team", TeamController.create);
    //edit one by id(PUT)
    app.put("/api/teams/:id", TeamController.updateByID);
    //delete one by id (DELETE)
    app.delete("/api/teams/:id", TeamController.deleteByID);
};