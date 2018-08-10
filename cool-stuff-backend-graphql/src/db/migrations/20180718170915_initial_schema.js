
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('users', table => {
      table.charset('utf8')
      table.collate('utf8_unicode_ci')
      table.increments('id').primary()
      table.string('email').notNullable()
      table.string('password').notNullable()
      table.date('createdAt').notNullable()
      table.date('updatedAt').notNullable()
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('users');
};
