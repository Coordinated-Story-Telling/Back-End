const express = require("express");

const db = require("../data/dbConfig.js");
const Users = require("./users-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Users.getUsers().then(users => {
    res.status(200).json(users);
  });
});

// router.get("/user/:id", (req, res) => {
//   const { id } = req.parmas 

//   Users.getUser(id).then(users => {
//     res.status(200).json(users);
//   });
// });

// router.get("/userstories/:id", (req, res) => {
// const { id } = req.params

//   Users.getUserStories(id)
//   .then(userStories => {
//     res.status(200).json(userStories);
//   });
// });

router.get("/:id", (req, res) => {
  const { id } = req.params
  
    Users.getUserAndStory(id)
    .then(entireUser => {
      res.status(200).json(entireUser);
    });
  });

// router.get("/countries/:id", (req, res) => {
//   const { id } = req.params
  
//     Users.getCountry(id)
//     .then(country => {
//       res.status(200).json(country);
//     });
//   });

module.exports = router;
