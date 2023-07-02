const express = require('express');
const historyControllers = require('./controllers/historyControllers')
const Router = express.Router();

Router.get('/history', historyControllers.getAll);
Router.post('/create', historyControllers.createOne);
Router.delete('/delete', historyControllers.deleteOne);
Router.post('/edit', historyControllers.editOne);


module.exports = Router;