const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');

/* Create express app */
const app = express();
/* *** */

/* Middlewares */
app.use( bodyParser.json() );
/* *** */

/* Routes */
/* *** */

module.exports = app;
