const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const { response, request } = require("express");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;

//REGISTER/CREATE
module.exports.register = (req, res) => {
    User.create(req.body)
        .then((user) => {
            const userToken = jwt.sign(
                {
                    id: user._id,
                },
                process.env.SECRET_KEY
            );

            res.cookie("usertoken", userToken, secret, {
                httpOnly: true,
            }).json({msg: "success!", userID: user._id });
        })
        .catch((err) => {
            console.log("ERR FROM CONTROLLER", err);
            res.status(400).json(err);
        });
};

//LOG IN
module.exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user === null) {
        return res.sendStatus(400);
    }
    const correctPassword = await bcrypt.compare(
        req.body.password,
        user.password
    );
    if (!correctPassword) {
        return res.sendStatus(400);
    }
    const userToken = jwt.sign(
        {
            id: user._id,
        },
        process.env.SECRET_KEY
    );
    res.cookie("usertoken", userToken, secret, {
        httpOnly: true,
    }).json({ msg: "success!", userID: user._id });
};
//LOG OUT
module.exports.logout = (req, res) => {
    res.clearCookie("usertoken");
    res.sendStatus(200);
};

//get all
module.exports.getAll = (req, res) => {
    User.find({})
        .then((listOfUserObjects) => res.json(listOfUserObjects))
        .catch((errorFound) => res.json(errorFound));
};

//get by ID
module.exports.getByID = (req, res) => {
    User.findOne({_id: req.params.id})
    .then((foundObject) => {
        res.json(foundObject)
        console.log("RES",res)
        console.log("FOUND OBJ", foundObject)
    })
    .catch((errorFound) => res.json(errorFound));
}