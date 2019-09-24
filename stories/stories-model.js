const db = require("../data/dbConfig.js");

// const get = id => {
//     const queries = db('stories');

//     return id ? queries.where({ id }).first() : queries;
//   };

function getStories() {
  return db("stories").select("id", "title", "description", "date");
}

const getStoryById = user_id =>
  db("stories")
    .where({ user_id })
    .select("id", "title", "description", "date");

// const getStoriesByCountry = id =>
//     db('stories')
//       .select(c.country)
//       .where({ user_id })
//       .select('id', 'title', 'description', 'date');

// const getStoriesByCountry(id) {
// return db("stories")
// .join("countries", "stories.country_id", "=", "countries.id" )
// .where ({ country_id: id})
// .select (
//   "stories.id",
//   "countries.country_name",
//   "stories.title",
//   "stories.description",
//   "stories.date",
//   "stories.media",

// )
// }

const insert = story =>
  db("stories").insert(story, [
    "id",
    "title",
    "description",
    "user_id",
    "date"
  ]);

function update(changes, id) {
  return db("stories")
    .where({ id: id })
    .update(changes);
}

const remove = id =>
  db("stories")
    .where({ id })
    .del();

module.exports = {
  getStories,
  insert,
  update,
  remove,
  getStoryById
};
