const passport = require("passport");
const { prisma } = require("../database/prisma");

const register = async (req, res) => {
  try {
    const { firstname, lastname, email } = req.body;
    let { password } = req.body;
    password = bcrypt.hashSync(password, 10);
    const role = "Public";
    const users = await prisma.users.create({
      data: { firstname, lastname, password, email, role },
    });
    res.status(201).json({ users });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = { register };
