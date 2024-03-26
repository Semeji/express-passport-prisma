const prisma = require("../database/prisma");

const getUsers = async (req, res) => {
  try {
    const users = await prisma.users.findMany();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createUser = async (req, res) => {
  try {
    const { firstname, lastname, email } = req.body;
    let { password } = req.body;
    password = bcrypt.hashSync(password, 10);
    const role = "Public";
    const users = await prisma.users.create({
      data: { firstname, lastname, password, email, role },
    });
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getUsers,
  createUser,
};
