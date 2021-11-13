
exports.up = function(knex) {
  return knex.schema.createTable('questions', function(table) {
    table.increments('id').primary();
    table.integer('quiz_id').notNullable();
    table.string('question').notNullable();
    table.string('image_url').notNullable();
    table.string('option_1').notNullable();
    table.string('option_2').notNullable();
    table.string('option_3').notNullable();
    table.string('option_4').notNullable();
    table.integer('answer').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('questions')
};