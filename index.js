const express = require("express");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const prisma = require("./database/prisma");

dotenv.config();
const PORT = process.env.PORT;
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h1>Bienvenue au serveur C3</h1>");
});

server.get("/users", async (req, res) => {
  try {
    const users = await prisma.users.findMany();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error });
  }
});

server.post("/users", async (req, res) => {
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
});

server.listen(PORT, () => console.log(`Server started on ${PORT}`));
