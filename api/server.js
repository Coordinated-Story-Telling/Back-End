const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
// const authRouter = require("../auth/auth-router.js");
// const usersRouter = require("../users/users-router.js");
const secrets = require('../config/secrets.js');

console.log('environment:', secrets.environment);

const server = express();
server.use(helmet());
server.use(express.json());
server.use(cors());
// server.use("/api/users", usersRouter);
// server.use("/api/register", registerRouter);
// server.use("/api/login", loginRouter);
server.get("/", (request, response) => {
  response.send("It's alive!");
});
module.exports = server;
