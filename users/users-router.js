const express = require("express");

const db = require("../data/dbConfig.js");
const Users = require("./users-model.js");

const jwt = require("jsonwebtoken");


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

// router.get("/:id", (req, res) => {
//   const { id } = req.params
  
//     Users.getUserAndStory(id)
//     .then(entireUser => {
//       res.status(200).json(entireUser);
//     });
//   });

router.get("/:id", (req, res) => {
  const { id } = req.params
  const headers = req.headers.authorization
  console.log(headers)
  if (!req.headers.authorization) {
    return res.status(401).json({
      message:
        "You must provide an 'authorization' header with a valid token in order to access this resource."
    });
  } else {
    jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET,
      (err, decodedToken) => {
        if (err) {
          return res
            .status(401)
            .json({ message: "Unauthorized: Invalid token" });
        } else {
  
    Users.getUserAndStory(id)
      .then(entireUser => {
        res.status(200).json(entireUser);
    })
    .catch(e => {
      res.status(500).json({error: 'error getting user from database'})
    })
  }
})}
})

module.exports = router;
