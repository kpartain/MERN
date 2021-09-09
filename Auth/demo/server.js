const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
// const cors = require("cors"); replaced with below
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());

require("./server/config/mongoose.config");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./server/routes/user.routes")(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000");
});
