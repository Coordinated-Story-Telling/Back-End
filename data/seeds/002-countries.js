exports.seed = function(knex) {
  return knex("countries")
    .del()
    .then(function() {
      return knex("countries").insert([
        {
          country_name: "Bolivia"
        }, // id 1 will be generated
        {
          country_name: "Brazil"
        }, //id  2
        {
          country_name: "Cambodia"
        }, //id  3
        {
          country_name: "Colombia"
        }, //id  4
        {
          country_name: "Edcuador"
        }, //id  5
        {
          country_name: "El Salvador"
        }, // id 6
        {
          country_name: "Ghana"
        }, //id  7
        {
          country_name: "Guatemala"
        }, //id  8
        {
          country_name: "Haiti"
        }, //id  9
        {
          country_name: "Honduras"
        }, //id  10
        {
          country_name: "Kiribati"
        }, // id 11
        {
          country_name: "Madagascar"
        }, //id  12
        {
          country_name: "Mongolia"
        }, //id  13
        {
          country_name: "Nicaragua"
        }, //id  14
        {
          country_name: "Paraguay"
        }, //id  15
        {
          country_name: "Peru"
        }, //id  16
        {
          country_name: "Philippines"
        }, //id  17
        {
          country_name: "Sierra Leone"
        }, //id  18

        {
          country_name: "Zimbabwe"
        } //id  19
      ]);
    });
};
