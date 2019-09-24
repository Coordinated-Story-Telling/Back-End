const knex = require("knex");
const environment = process.env.NODE_ENV || "development";
console.log(process.env.DATABASE_URL)
console.log(environment);
const config = require("../knexfile.js")[environment];

module.exports = knex(config);
