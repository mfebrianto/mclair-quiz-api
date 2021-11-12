
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quizzes').del()
    .then(function () {
      // Inserts seed entries
      return knex('quizzes').insert([
        {name: 'galaxy z fold 3 quiz'},
      ]);
    });
};
