const config = require('../config');

module.exports = {
  client: config.db.type,
  connection: {
    host: config.db.host,
    port: config.db.port,
    database: config.db.name,
    user: config.db.user,
    password: config.db.password
  },
  useNullAsDefault: true,
  migrations: {
    directory: './src/db/migrations'
  }
};
