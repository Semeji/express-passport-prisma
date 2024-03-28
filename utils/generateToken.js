const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const payload = {
    username: user.firstname,
    id: user.id,
    role: user.role,
  };
  // Utilisation de la methode sign pour générer un token avec notre clé secrète et la date d'expiration
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: Date.now() + 48 * 60 * 60 * 1000,
  }); // Expiration du token après 48h
};

module.exports = generateToken;
