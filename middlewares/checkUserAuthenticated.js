const verifyToken = require("../utils/verifyToken");

checkUserAuthenticated = (req, res, next) => {
  const headerAuthorizarion = req.headers["authorization"];
  const token = headerAuthorizarion?.replace("Bearer ", "");
  const user = verifyToken(token);
  if (user) {
    req.user = user;
    return next();
  } else {
    res.status(403).json({ err: "Connectez-vous" });
  }
};

module.exports = checkUserAuthenticated;
