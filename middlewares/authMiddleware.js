const passport = require("passport");
const generateToken = require("../utils/generateToken");

const authMiddleware = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res
        .status(401)
        .json({ error: "Vous n'avez pas saisi les bons identifiants" });
    }
    const token = generateToken(user);
    res.status(200).json({ token });
  })(req, res, next);
};

module.exports = authMiddleware;
