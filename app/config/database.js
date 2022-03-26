module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'app'),
      user: env('DATABASE_USERNAME', 'db_username'),
      password: env('DATABASE_PASSWORD', 'db_password'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
