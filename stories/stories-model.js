const db = require("../data/dbConfig.js");



function getStories() {

  return db("stories as s")
  .join('countries as c', 's.country_id', 'c.id')
  .select("s.id", "s.title", "s.description", "s.created_at", "s.user_id", "c.country_name");
}

// move to users

function getUserStories(id) {
  return db("users as u")
    .select("s.title", "s.description", "s.created_at", "s.country_id")
    .join("stories as s", "u.id", "s.user_id")
    .where({ user_id: id });
}

function getCountry(id) {
  return db("users as u")
    .select("c.country_name")
    .join("stories as s", "u.id", "s.user_id")
    .join("countries as c", "s.country_id", "c.id")
    .where({ user_id: id });
}

const getStoryById = id => {
  return db("stories")
    .join("countries", "stories.country_id", "=", "countries.id")
    .where({ user_id: id })
    .select(
      "stories.id",
      "countries.country_name",
      "stories.title",
      "stories.description",
      "stories.created_at",
      "stories.media",
      "stories.user_id"
    );
};

function getUserAndStory(id) {
  const userQuery = getUser(id);
  const storiesQuery = getUserStories(id);
  const country = getCountry(id);
  return Promise.all([userQuery, storiesQuery, country]).then(
    ([user, stories, country]) => {
      user.stories = stories;
      user.country = country;
      return user;
    }
  );
}

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
    "country_id",
    "description",
    "user_id"
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
  getStoryById,
  getUserAndStory,
  getCountry,
  getUserStories
};
