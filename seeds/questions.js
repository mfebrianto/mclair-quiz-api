
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {quiz_id: 1, image_url: 'test', question: 'cocokan gambar dengan hp yang mengambilnya', option_1: 'galaxy', option_2: 'fold', option_3: 'iphone', option_4: 'fold 3', answer: '1'},
        {quiz_id: 1, image_url: 'test', question: 'cocokan gambar dengan hp yang mengambilnya', option_1: 'galaxy', option_2: 'fold', option_3: 'iphone', option_4: 'fold 3', answer: '1'},
        {quiz_id: 1, image_url: 'test', question: 'cocokan gambar dengan hp yang mengambilnya', option_1: 'galaxy', option_2: 'fold', option_3: 'iphone', option_4: 'fold 3', answer: '1'},
        {quiz_id: 1, image_url: 'test', question: 'cocokan gambar dengan hp yang mengambilnya', option_1: 'galaxy', option_2: 'fold', option_3: 'iphone', option_4: 'fold 3', answer: '1'},
        {quiz_id: 1, image_url: 'test', question: 'cocokan gambar dengan hp yang mengambilnya', option_1: 'galaxy', option_2: 'fold', option_3: 'iphone', option_4: 'fold 3', answer: '1'},
      ]);
    });
};