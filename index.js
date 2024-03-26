const express = require("express");
const passport = require("passport");
const session = require("express-session");
const dotenv = require("dotenv");
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const localStrategy = require("./utils/passportConfig");
const { findUserById } = require("./database/prisma");

dotenv.config();
const PORT = process.env.PORT;
const server = express();

passport.use(localStrategy);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await findUserById(id);
  if (user) {
    done(null, user);
  }
  done({ massage: "User doesn't exist" }, user);
});

server.use(express.json());
server.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);
server.use(passport.initialize());
server.use(passport.session());

server.get("/", (req, res) => {
  res.send("<h1>Bienvenue au serveur C3</h1>");
});

server.use("/users", userRouter);
server.use("/auth", authRouter);

server.listen(PORT, () => console.log(`Server started on ${PORT}`));
