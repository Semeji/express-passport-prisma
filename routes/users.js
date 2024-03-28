const express = require("express");
const { getUsers } = require("../controllers/users");
const checkUserAuthenticated = require("../middlewares/checkUserAuthenticated");
const { checkUserRoleCoach } = require("../middlewares/checkUserRole");
const router = express.Router();

// Pour accéder à la liste des coachs on vérifie si le user est authentifié et si il a le rôle coach
router.get("/", checkUserAuthenticated, checkUserRoleCoach, getUsers);

module.exports = router;
