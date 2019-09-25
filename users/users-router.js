const express = require("express");

const db = require("../data/dbConfig.js");
const Users = require("./users-model.js");

const jwt = require("jsonwebtoken");

const authentication = require("../auth/authentication-middleware");

const router = express.Router();

//this route will return a list of all the users if uncommented

router.get("/", (req, res) => {
  Users.getUsers().then(users => {
    res.status(200).json(users);
  });
});

router.get("/:id", authentication, (req, res) => {
  const { id } = req.params;

  Users.getUserAndStory(id).then(entireUser => {
    res.status(200).json(entireUser);
  });
});

module.exports = router;
