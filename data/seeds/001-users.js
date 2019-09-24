const bcrypt = require('bcryptjs')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'testUser1', password: bcrypt.hashSync('chocolate', 2), lastName: 'McTest', firstName: 'Tester', email: 'email1@email.com', phone: '1-888-888-8888' },
        {username: 'testUser2', password: bcrypt.hashSync('pizza', 2), lastName: 'MacTest', firstName: 'Testy', email: 'email2@email.com', phone: '1-555-555-5555' },
      ]);
    });
};
