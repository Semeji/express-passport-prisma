const { prisma } = require("../database/prisma");

const getUsers = async (req, res) => {
  try {
    const users = await prisma.users.findMany();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getUsers,
};
