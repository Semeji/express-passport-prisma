const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT;
const server = express();

server.get("/", (req, res) => {
  res.send("<h1>Bienvenue au serveur C3</h1>");
});

server.listen(PORT, () => console.log(`Server started on ${PORT}`));
