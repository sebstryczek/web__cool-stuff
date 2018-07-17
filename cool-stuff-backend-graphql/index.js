const app = require('./src/app');

/* Start the server */
const port = process.env.port || 3000;
app.listen(port);
console.log(`Server listening at ${port}`);
/* *** */
