const mongoose = require("mongoose");
const AuthorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name attribute is required"],
            minlength: [3, "Name must have at least 3 characters"]
        },
    },
    { timestamps: true }
);
module.exports.Author = mongoose.model("Author", AuthorSchema);