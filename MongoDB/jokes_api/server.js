const express = require("express");
const app = express();

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyJokeRoutes = require("./server/routes/joke.routes");
AllMyJokeRoutes(app);

app.listen(8000, () => console.log("Best joke told by developers: 'it worked on my machine.'"));