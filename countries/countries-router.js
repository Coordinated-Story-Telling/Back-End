const express = require("express");

const db = require("../data/dbConfig.js");
const Countries = require("./countries-model");

const router = express.Router();

// GET to 4000/api/countries
router.get("/", (req, res) => {
  Countries.getCountries().then(countries => {
    res.status(200).json(countries);
  });
});

// GET to 4000/api/countries/:id/stories
router.get("/:id/stories", (request, response) => {
  const { id } = request.params;

  Countries.getStoryByCountry(id)
    .then(stories => {
      if (stories.length) {
        response.json(stories);
      } else {
        response
          .status(404)
          .json({ message: "Could not find stories for given country" });
      }
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to get stories" });
    });
});

module.exports = router;
