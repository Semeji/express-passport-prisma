const passport = require("passport");
const express = require("express");
const { register, login } = require("../controllers/auth");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();
// Avant de log in on utilise le middleware auth qui permet d'authentifier ou pas l'utilisateur
router.post("/register", register).post("/login", authMiddleware);

module.exports = router;
