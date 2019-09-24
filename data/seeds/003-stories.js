
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('stories').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('stories').insert([
        {user_id: '1', country_id: '12', title: 'Tester story 1', description: 'This is a great story about tester ones experience', media: null},
        {user_id: '2', country_id: '3', title: 'Tester story 2', description: 'This is a great story about tester two\'s experience', media: null},
      ]);
    });
};
