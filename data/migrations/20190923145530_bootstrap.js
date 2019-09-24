exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();

      tbl
        .string("username", 128)
        .notNullable()
        .unique();
      tbl.string("password", 255).notNullable();
      tbl.string("lastName", 255).notNullable();
      tbl.string("firstName", 255).notNullable();
      tbl.string("email", 255).notNullable();
      tbl.string("phone", 50).nullable();
    })

    .createTable("countries", tbl => {
      tbl.increments();

      // tbl
      //   .integer("user_id")
      //   .unsigned()
      //   .references("id")
      //   .inTable("users")
      //   .onDelete("RESTRICT")
      //   .onUpdate("CASCADE");

      // tbl
      //   .integer("story_id")
      //   .unsigned()
      //   .references("id")
      //   .inTable("stories")
      //   .onDelete("RESTRICT")
      //   .onUpdate("CASCADE");
      tbl.string("country_name", 255).notNullable;
    })

    .createTable("stories", tbl => {
      tbl.increments();
      // foreign key to user id
      tbl
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      // foreign key to country id
      tbl
        .integer("country_id")
        .unsigned()
        .references("id")
        .inTable("countries")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl.string("title", 255).notNullable();
      tbl.text("description").notNullable();
      tbl.timestamp("created_at").defaultTo(knex.fn.now());
      // tbl.binary("media"); 

      tbl.dropPrimary(["user_id", "country_id"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("stories")
    .dropTableIfExists("countries")
    .dropTableIfExists("users");
};
