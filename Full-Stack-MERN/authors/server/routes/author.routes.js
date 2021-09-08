const AuthorController = require("../controllers/author.controller");
//use the methods written in your controller file "module.exports._method_name_"
module.exports = function (app) {
    //get all (GET)
    app.get("/api/authors", AuthorController.getAll);
    //get one by id(GET)
    app.get("/api/authors/:id", AuthorController.getByID);
    //create one endpoint (POST)
    app.post("/api/new-author", AuthorController.create);
    //edit one by id(PUT)
    app.put("/api/authors/:id", AuthorController.updateByID);
    //delete one by id (DELETE)
    app.delete("/api/authors/:id", AuthorController.deleteByID);
};
