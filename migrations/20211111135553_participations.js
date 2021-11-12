
exports.up = function(knex) {
  return knex.schema.createTable('contestants', function(table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('phone').notNullable();
    table.string('quiz_id').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('contestants')
};