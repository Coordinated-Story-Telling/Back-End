const express = require("express");

const db = require("../data/dbConfig.js");
const Stories = require("./stories-model.js");

const router = express.Router();

const authentication = require("../auth/authentication-middleware");

const validation = require("../middleware/middleware");

// GET to api/stories - working
router.get("/", (req, res) => {
  Stories.getStories().then(stories => {
    res.status(200).json(stories);
  });
});

// GET to api/stories/1 - working (gets by user id)
router.get("/:id", authentication, (req, res) => {
  const { id } = req.params;

  Stories.getStoryById(id)
    .then(stories => {
      res.status(200).json(stories);
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to get story by id" });
    });
});

// POST to api/stories/1 

router.post("/", authentication, validation.validatePost, (req, res) => {
  const storiesData = req.body;
  const { id } = req.body;

  Stories.insert(storiesData)
    .then(story => {
      res.status(201).json(story);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to create new story" });
    });
});

// PUT to api/stories/1

router.put(
  "/:id",
  authentication,
  validation.validateEdit,
  (request, response) => {
    const { id } = request.params;
    const story_id = request.body.id;
    const changes = request.body;
    console.log(changes);
    console.log(story_id, "this is the story_id");

    Stories.getStoryById(id)
      .then(stories => {
        console.log(stories);
        if (stories) {
          Stories.update(changes, story_id).then(updatedStory => {
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
  }
);

// DELETE to api/stories/5 - working (deletes by story id)
router.delete("/:id", authentication, (request, response) => {
  const story_id = request.params.id;
  const body = request.params.body;
  console.log(body);
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

module.exports = router;
