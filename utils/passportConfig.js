const passport = require("passport");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
const { findUserByEmail } = require("../database/prisma");

const localStrategy = new LocalStrategy(
  { usernameField: "email", passwordField: "password" },
  async (email, password, done) => {
    // Rechercher l'utilisateur dans la base de données

    const user = await findUserByEmail(email);

    if (!user) {
      return done(null, false, { message: "Utilisateur introuvable." });
    }

    // Comparer le mot de passe haché
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return done(err);
      }
      if (!isMatch) {
        return done(null, false, { message: "Mot de passe incorrect." });
      }

      // Authentification réussie
      return done(null, user);
    });
  }
);

module.exports = localStrategy;
