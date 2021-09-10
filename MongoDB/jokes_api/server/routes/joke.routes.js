const JokeController = require("../controllers/joke.controller");
module.exports = function (app) {
    app.get("/api/jokes", JokeController.getAll);
    app.get("/api/jokes/:id", JokeController.getByID);
    app.post("/api/jokes/new", JokeController.create);
    app.put("/api/jokes/:id", JokeController.updateByID);
    app.delete("/api/jokes/:id", JokeController.deleteByID);
};