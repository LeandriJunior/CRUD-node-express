const express = require('express');
const { Historico } = require('./models/connection.js');
const router = require('./router.js')

const app = express();

app.use(router)

module.exports = app;