const express = require('express');
const bodyParser = require('body-parser');

/* Create express app */
const app = express();
/* *** */

/* Middlewares */
app.use( bodyParser.json() );
/* *** */

/* Routes */
/* *** */

module.exports = app;
