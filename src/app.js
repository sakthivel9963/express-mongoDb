const express = require('express');
const cors = require('cors');
const router = require('./routes');
require('dotenv').config();
require('../config/db');

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

module.exports = app;
