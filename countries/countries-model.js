const db = require("../data/dbConfig");

function getCountries() {
  return db("countries");
}

const getStoryByCountry = id => {
  db("stories")
    .join("countries", "stories.country_id", "=", "countries.id")
    .where({ country_id: id })
    .select(
      "stories.id",
      "countries.country_name",
      "stories.title",
      "stories.description",
      "stories.date",
      "stories.media"
    )
    .then(story => {
      return story;
    });
};

module.exports = {
  getCountries,
  getStoryByCountry
};
