const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "First name is required"],
        },
        lastName: {
            type: String,
            required: [true, "Last name is required"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            validate: {
                validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                message: "Please enter a valid email",
            },
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [8, "Password must be 8 characters or longer"],
        },
    },
    { timestamps: true }
);
//add this after UserSchema is defined
UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((value) => (this._confirmPassword = value));

// prior to saving, we need to hash the password.
//this is after it has met all other validations, confirm password matches, etc.
UserSchema.pre("save", function (next) {
    bcrypt.hash(this.password, 10).then((hash) => {
        this.password = hash;
        console.log("Before saving, hashed PW", hash)
        next();
    });
});
//we use the pre-hook to do this validation before persisting any informatiion
UserSchema.pre("validate", function (next) {
    if (this.password !== this.confirmPassword) {
        console.log("Inside validation user schema - PW not match")
        this.invalidate(
            "confirmPassword",
            "Password must match confirm password"
        );
    }
    next();
});

module.exports.User = mongoose.model("User", UserSchema);
