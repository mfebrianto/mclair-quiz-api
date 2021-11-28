
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {quiz_id: 1, image_url: 'https://mclair-quiz-images.s3.ap-southeast-2.amazonaws.com/chelsea.jpg', question: '1 cocokan gambar dengan hp yang mengambilnya', option_1: 'galaxy', option_2: 'fold', option_3: 'iphone', option_4: 'fold 3', answer: 1},
        {quiz_id: 1, image_url: 'https://mclair-quiz-images.s3.ap-southeast-2.amazonaws.com/chelsea2.jpg', question: '2 cocokan gambar dengan hp yang mengambilnya', option_1: 'galaxy', option_2: 'fold', option_3: 'iphone', option_4: 'fold 3', answer: 1},
        {quiz_id: 1, image_url: 'https://mclair-quiz-images.s3.ap-southeast-2.amazonaws.com/chelsea3.jpg', question: '3 cocokan gambar dengan hp yang mengambilnya', option_1: 'galaxy', option_2: 'fold', option_3: 'iphone', option_4: 'fold 3', answer: 1},
        {quiz_id: 1, image_url: 'https://mclair-quiz-images.s3.ap-southeast-2.amazonaws.com/chelsea4.jpg', question: '4 cocokan gambar dengan hp yang mengambilnya', option_1: 'galaxy', option_2: 'fold', option_3: 'iphone', option_4: 'fold 3', answer: 1},
        {quiz_id: 1, image_url: 'https://mclair-quiz-images.s3.ap-southeast-2.amazonaws.com/chelsea4.jpg', question: '5 cocokan gambar dengan hp yang mengambilnya', option_1: 'galaxy', option_2: 'fold', option_3: 'iphone', option_4: 'fold 3', answer: 1},
      ]);
    });
};
