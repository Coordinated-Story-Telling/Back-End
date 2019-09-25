const knex = require("knex");
require("dotenv").config();

const environment = process.env.NODE_ENV || "development";

const config = require("../knexfile.js")[environment];

module.exports = knex(config);

// const environmentCheck = process.env.NODE_ENV || "development";


// if (environmentCheck === "test") {
//   console.log("yer in test");
//   let environment = process.env.DB_ENV || "development"

// } else {
//   console.log("nope u suck");
//   let environment = process.env.NODE_ENV || "development"
// }
