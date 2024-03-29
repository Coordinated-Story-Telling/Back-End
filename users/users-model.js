const db = require("../data/dbConfig.js");

function getUsers() {
  return db("users").select(
    "id",
    "username",
    "lastName",
    "firstName",
    "email",
    "phone"
  );
}

function getUser(id) {
  return db("users")
    .where({ id })
    .select("id", "username", "lastName", "firstName", "email", "phone")
    .first();
}

// function getUserStories(id) {
//   return db("users as u")
//     .select("s.id", "s.title", "s.description", "s.created_at", "s.country_id")
//     .join("stories as s", "u.id", "s.user_id")
//     .where({ user_id: id });
// }

function getUserStories(id) {
  return db("users as u")
    .select("s.id", "s.title", "s.description", "s.created_at", "s.country_id", "c.country_name")
    .join("stories as s", "u.id", "s.user_id")
    .join("countries as c", "s.country_id", "=", "c.id")
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
  db("stories")
    .join("countries", "stories.country_id", "=", "countries.id")
    .where({ user_id: id })
    .select(
      "stories.id",
      "countries.country_name",
      "stories.title",
      "stories.description",
      "stories.date",
      "stories.media"
    );
};

// function getUserAndStory(id) {
//   const userQuery = getUser(id);
//   const storiesQuery = getUserStories(id);
//   const country = getCountry(id);
//   return Promise.all([userQuery, storiesQuery, country]).then(
//     ([user, stories, country]) => {
//       user.stories = stories;
//       user.country = country;
//       return user;
//     }
//   );
// }

function getUserAndStory(id) {
    const userQuery = getUser(id);
    const storiesQuery = getUserStories(id);
    return Promise.all([userQuery, storiesQuery]).then(
      ([user, stories]) => {
        console.log(stories, 'stories')
        user.stories = stories;
        return user;
      }
    );
  }

// const insert = story =>
//   db("stories").insert(story, [
//     "id",
//     "title",
//     "country_id",
//     "description",
//     "user_id"
//   ]);

// function update(changes, id) {
//   return db("stories")
//     .where({ id: id })
//     .update(changes);
// }

// const remove = id =>
//   db("stories")
//     .where({ id })
//     .del();

function find() {
  return db("users").select("id", "username", "password");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  const [id] = await db("users").insert(user).returning('id');

  return findById(id);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

module.exports = {
  find,
  findBy,
  add,
  findById,
  getStoryById,
  getUserAndStory,
  getCountry,
  getUser,
  getUsers,
  getUserStories
};
