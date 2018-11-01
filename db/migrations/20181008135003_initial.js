
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', table => {
      table.increments('id').primary();
      table.string('firstName');
      table.string('lastName');
      table.string('s3Photo');
      table.string('brideBridesmaid');
      table.timestamps(true, true);
    }),
    knex.schema.createTable('weddings', table => {
      table.increments('id').primary();
      table.string('weddingName');
      table.string('location');
      table.string('theme');
      table.string('dateTime');
      table.timestamps(true, true);
  }),
    knex.schema.createTable('tasks', table => {
      table.increments('id').primary();
      table.string('taskName');
      table.string('taskDesc');
      table.timestamps(true, true);
  }),
  knex.schema.createTable('users_weddings', table => {
    table.increments('id').primary();
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('users.id');
    table.integer('wedding_id').unsigned();
    table.foreign('wedding_id').references('weddings.id');
    table.integer('task_id').unsigned();
    table.foreign('task_id').references('tasks.id')
}),
])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('tasks'),
    knex.schema.dropTable('users_weddings'),
    knex.schema.dropTable('weddings'),
    knex.schema.dropTable('users')
  ])
};
