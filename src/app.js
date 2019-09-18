const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

require('../config/db');

const router = require('./routes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(router);

module.exports = app;
