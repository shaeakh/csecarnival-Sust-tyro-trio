const express = require('express');
const listToDo = require('../controllers/listTodo');
const updateToDo = require('../controllers/updateTodo');

const todoRouter = express.Router();
todoRouter.post("/",updateToDo);
todoRouter.get("/",listToDo);
module.exports = todoRouter;