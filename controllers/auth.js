const { prisma } = require("../database/prisma");
const generateToken = require("../utils/generateToken");

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

const login = async (req, res) => {
  try {
    //   const { firstname, lastname, email } = req.body;
    //   let { password } = req.body;
    //   password = bcrypt.hashSync(password, 10);
    const role = "Public";
    console.log(role);
    //   const users = await prisma.users.create({
    //     data: { firstname, lastname, password, email, role },
    //   });
    res.send({ user: req.user });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = { login, register };
