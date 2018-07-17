const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');

console.log(process.env.NODE_ENV)
console.log(process.env.DB_NAME)
console.log(config)

/* Create express app */
const app = express();
/* *** */

/* Middlewares */
app.use( bodyParser.json() );
/* *** */

/* Routes */
/* *** */

module.exports = app;
