'use strict';

exports.up = function(knex) {
  return knex.schema.createExtension('pgcrypto')
    .then(function() {
      return knex.schema.createTable('users', function(table) {
        table.uuid('id')
             .primary()
             .defaultTo(knex.raw('gen_random_uuid()'));
        table.string('username');
        table.string('password')
             .notNullable();
        table.string('first_name')
              .notNullable();
        table.string('last_name')
              .notNullable();
        table.string('email')
             .unique()
             .notNullable();
        table.timestamp('created_at')
             .defaultTo(knex.fn.now());
      });
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
