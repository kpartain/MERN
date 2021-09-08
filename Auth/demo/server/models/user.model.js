const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// prior to saving, we need to hash the password.
//this is after it has met all other validations, confirm password matches, etc.
UserSchema.pre("save", function (next) {
    bcrypt.hash(this.password, 10).then((hash) => {
        this.password = hash;
        next();
    });
});
copy;

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
//confirm password needs to be compared but not stored so it lives below the schema itself
UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((value) => (this._confirmPassword = value));
//we use the pre-hook to do this validation before persisting any informatiion
UserSchema.pre("validate", function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate(
            "confirmPassword",
            "Password must match confirm password"
        );
    }
    next();
});
module.exports.User = mongoose.model("User", UserSchema);
