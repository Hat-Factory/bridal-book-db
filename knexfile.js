// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'bridalbook.c42nro32nklp.us-west-2.rds.amazonaws.com',
      user:'bridalbook',
      password: 'W3lc0m31!',
      database: 'hatFactory',
      port: '5432'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      host: 'bridalbookv1.cluster-c42nro32nklp.us-west-2.rds.amazonaws.com',
      user:'bridalbookdb',
      password: 'W3lc0m31!',
      database: 'bridalbookdb'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  }
};
