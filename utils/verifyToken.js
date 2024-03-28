const jwt = require("jsonwebtoken");
const verifyToken = (token) => {
  try {
    // Utilisation de la methode verify pour verifier si le token envoyé est crypté avec notre clé secrète
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return null;
  }
};

module.exports = verifyToken;
