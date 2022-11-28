'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3002;

//singleton instance of express
const app = express();

// middleware => functions that interact with request / response objects

app.use(cors());


app.get('/', (req, res, next) => {
res.status(200).send('Hello World');
});

function start() {
app.listen(PORT, () => console.log('Up on PORT', PORT));
}

module.exports = { start, app };