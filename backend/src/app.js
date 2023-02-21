const express = require('express');

const usersRouter = require('./routes');

const app = express();

app.use(usersRouter);

module.exports = () => app;
