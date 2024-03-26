const express = require("express");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const prisma = require("./database/prisma");
const userRouter = require("./routes/users");

dotenv.config();
const PORT = process.env.PORT;
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h1>Bienvenue au serveur C3</h1>");
});

server.use("/users", userRouter);

server.listen(PORT, () => console.log(`Server started on ${PORT}`));
