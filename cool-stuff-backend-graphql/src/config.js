const dotenv = require('dotenv');
const env = process.env.NODE_ENV || 'development';
const path = `.env.${ env }`;
dotenv.config({ path, silent: env === 'production' });

module.exports = {
  db: {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  }
}
