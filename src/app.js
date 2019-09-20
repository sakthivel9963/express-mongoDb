const express = require('express');

const app = express();
const cors = require('cors');
require('dotenv').config();
require('../config/db');
const router = require('./routes');

app.use(cors());
app.use(express.json());

app.use(router);

module.exports = app;
