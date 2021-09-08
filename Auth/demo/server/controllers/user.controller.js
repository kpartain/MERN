const { User } = require("../models/user.model");

//JSON WEB TOKEN
// const jwt = require("jsonwebtoken");
// const payload = {
//     id: user._id
//   };
// const userToken = jwt.sign(payload, process.env.SECRET_KEY);

//COOKIES AS RES
// res.cookie("mycookie", "mydata", { httpOnly: true }).json({
//     message: "This response has a cookie",
// });

//REGISTER/CREATE
module.exports.register = (req, res) => {
    User.create(req.body)
      .then(user => {
          const userToken = jwt.sign({
              id: user._id
          }, process.env.SECRET_KEY);
   
          res
              .cookie("usertoken", userToken, secret, {
                  httpOnly: true
              })
              .json({ msg: "success!", user: user });
      })
      .catch(err => res.json(err));
  }

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
    }).json({ msg: "success!" });
};

//LOG OUT
module.exports.logout = (req, res) => {
    res.clearCookie('usertoken');
    res.sendStatus(200);
}