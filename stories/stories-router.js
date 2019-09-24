const express = require("express");

const db = require("../data/dbConfig.js");
const Stories = require("./stories-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Stories.getStories().then(stories => {
    res.status(200).json(stories);
  });
});

router.get("/users", (req, res) => {
  Stories.getUsers().then(users => {
    res.status(200).json(users);
  });
});

router.get("/:id/user/stories", (req, res) => {
const { id } = req.params

  Stories.getUserStories(id)
  .then(userStories => {
    res.status(200).json(userStories);
  });
});

router.get("/:id/entireuser", (req, res) => {
  const { id } = req.params
  
    Stories.getUserAndStory(id)
    .then(entireUser => {
      res.status(200).json(entireUser);
    });
  });

router.get("/:id/user/countries", (req, res) => {
  const { id } = req.params
  
    Stories.getCountry(id)
    .then(country => {
      res.status(200).json(country);
    });
  });

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Stories.getStoryById(id).then(stories => {
    res.status(200).json(stories);
  });
});

router.post("/:id", (req, res) => {
  const storiesData = req.body;
  const { id } = req.params;

  Stories.getStoryById(id)
    .then(story => {
      if (story) {
        Stories.insert(storiesData, id).then(story => {
          res.status(201).json(story);
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find story with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new story" });
    });
});

router.put("/:id", (request, response) => {
  const { id } = request.params;
  const changes = request.body;

  Stories.getStoryById(id)
    .then(story => {
      if (story) {
        Stories.update(changes, id).then(updatedStory => {
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

router.delete("/:id", (request, response) => {
  const { id } = request.params;

  Stories.remove(id)
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
