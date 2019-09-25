const express = require("express");

const db = require("../data/dbConfig.js");
const Stories = require("./stories-model.js");

const router = express.Router();

// GET to api/stories - working
router.get("/", (req, res) => {
  Stories.getStories().then(stories => {
    res.status(200).json(stories);
  });
});

// router.get("/:id", (req, res) => {
//   const { id } = req.parmas

//   Stories.getUser(id).then(users => {
//     res.status(200).json(users);
//   });
// });

// router.get("/:id/user/stories", (req, res) => {
// const { id } = req.params

//   Stories.getUserStories(id)
//   .then(userStories => {
//     res.status(200).json(userStories);
//   });
// });

// router.get("/:id/entireuser", (req, res) => {
//   const { id } = req.params

//     Stories.getUserAndStory(id)
//     .then(entireUser => {
//       res.status(200).json(entireUser);
//     });
//   });

// router.get("/:id/user/countries", (req, res) => {
//   const { id } = req.params

//     Stories.getCountry(id)
//     .then(country => {
//       res.status(200).json(country);
//     });
//   });

// GET to api/stories/1 - working (gets by user id)
router.get("/:id", (req, res) => {
  const { id } = req.params;

  Stories.getStoryById(id)
    .then(stories => {
      res.status(200).json(stories);
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to get story by id" });
    });
});

// POST to api/stories/1 - working
// router.post("/:id", (req, res) => {
//   const storiesData = req.body;
//   const { id } = req.body

//   Stories.getStoryById(id)
//     .then(story => {
//       if (story) {
//         Stories.insert(storiesData, id).then(story => {
//           res.status(201).json(story);
//         });
//       } else {
//         res
//           .status(404)
//           .json({ message: "Could not find story with given id." });
//       }
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(500).json({ message: "Failed to create new story" });
//     });
// });

router.post("/", (req, res) => {
  const storiesData = req.body;
  const { id } = req.body

  Stories.insert(storiesData)
    .then(story => {
          res.status(201).json(story);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: "Failed to create new story" });
    });
})

// PUT to api/stories/1 - working
// router.put("/:id", (request, response) => {
//   const { id } = request.params;
//   const changes = request.body;

//   Stories.getStoryById(id)
//     .then(story => {
//       console.log(story)
//       if (story) {
//         Stories.update(changes, id).then(updatedStory => {
//           response.json(updatedStory);
//         });
//       } else {
//         response
//           .status(404)
//           .json({ message: "Could not find story with given id" });
//       }
//     })
//     .catch(error => {
//       response.status(500).json({ message: "Failed to update story" });
//     });
// });

router.put("/:id", (request, response) => {
  const { id } = request.params;
  const story_id = request.body.id
  
  const changes = request.body;
  console.log(changes)
  console.log(story_id, 'this is the story_id')

  Stories.getStoryById(id)
    .then(stories => {
      console.log(stories)
      if (stories) {
        Stories.update(changes, story_id)
        .then(updatedStory => {
          response.json(updatedStory);
        });
      } else {
        response
          .status(404)
          .json({ message: "Could not find story with given id" });
      }
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to update story" });
    });
});

// router.put("/", (req, response) => {
//   const { id } = req.params;
//   const body = req.body
//   console.log(body)
//   const story_id = req.body.id
//   const changes = request.body;

//   Stories.update(story_id)
//     .then(story => {
//           response.json(updatedStory);
       
//       })
//     .catch(error => {
//       response.status(500).json({ message: "Failed to update story" });
//   });
// })

// DELETE to api/stories/5 - working (deletes by story id)
router.delete("/:story_id", (request, response) => {
  const story_id = request.params.id;

  Stories.remove(story_id)
    .then(deletedStory => {
      if (deletedStory) {
        response.json({ removed: deletedStory });
      } else {
        response
          .status(404)
          .json({ message: "Could not find story with given id" });
      }
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to delete story" });
    });
});

module.exports = router
