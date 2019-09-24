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

module.exports = router;
