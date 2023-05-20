// imports
const app = require('./app');
const express = require('express');
require('dotenv').config();
require('./helpers/mongodb.helper');

// constants
const PORT = process.env.PORT || 5000;
const app = express();
// start the server
app.listen(PORT, () => {
    console.log(`server running at port ${PORT}...`);
});