const generateToken = (user) => {
  const payload = {
    username: user.username,
    role: user.role,
  };
  return jwt.sign(payload, secret, { expiresIn: "30m" }); // Expiration du token après 30 minutes
};

module.exports = generateToken;
