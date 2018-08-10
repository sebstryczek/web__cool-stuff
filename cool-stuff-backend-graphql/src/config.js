const dotenv = require('dotenv');
const env = process.env.NODE_ENV || 'development';

dotenv.config({
  path: `.env.${ env }`,
  silent: env === 'production' 
});

module.exports = {
  db: {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  }
}
