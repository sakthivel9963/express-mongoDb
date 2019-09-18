const express = require('express');
const app = express();
require('dotenv').config();
const router = require('./routes');

app.use(router);

module.exports = app;
