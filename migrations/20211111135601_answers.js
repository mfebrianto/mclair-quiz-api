
exports.up = function(knex) {
  return knex.schema.createTable('answers', function(table) {
    table.increments('id').primary();
    table.string('participant_id').notNullable();
    table.string('question_id').notNullable();
    table.string('answer').notNullable();
    table.integer('answer_time').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('answers')
};