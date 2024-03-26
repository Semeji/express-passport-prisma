const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const findUserByEmail = async (email) => {
  try {
    const user = await prisma.users.findFirst({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    return null;
  }
};

const findUserById = async (id) => {
  try {
    const user = await prisma.users.findFirst({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    return null;
  }
};

module.exports = {
  prisma,
  findUserByEmail,
  findUserById,
};
