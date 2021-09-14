const mongoose = require("mongoose");
const TeamSchema = new mongoose.Schema(
    {
        //requried, 2 characters
        name: {
            type: String,
            required: [true, "Text attribute is required"],
            minlength: [2, "Name must be more than 2 characters"]
        },
        //not required
        position: { 
            type: String,
            required: [false],
            default: "no preference"
        },
        // 0 is no, 1 is yes, 2 is undecided
        schedule: {
            1: {type: Number, default: 2},
            2: {type: Number, default: 2},
            3: {type: Number, default: 2}
        }
    },
    { timestamps: true }
);
module.exports.Team = mongoose.model("Team", TeamSchema);