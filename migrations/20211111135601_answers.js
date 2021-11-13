
exports.up = function(knex) {
  return knex.schema.createTable('answers', function(table) {
    table.increments('id').primary();
    table.integer('participant_id').notNullable();
    table.integer('question_id').notNullable();
    table.integer('answer').notNullable();
    table.integer('answer_time').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('answers')
};