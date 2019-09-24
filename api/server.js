const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const secrets = require("../config/secrets.js");

console.log("environment:", secrets.environment);

const server = express();

const authRouter = require("../auth/auth-router.js");
const storiesRouter = require("../stories/stories-router.js");

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use("/api/stories", storiesRouter);
server.use("/api/auth", authRouter);

server.get("/", (request, response) => {
  response.send("It's alive!");
});
module.exports = server;
