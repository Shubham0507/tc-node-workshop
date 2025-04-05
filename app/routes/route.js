const express = require('express');
const TaskController = require('../controllers/TaskController');

const routes = express.Router()


routes.post("/create-task", TaskController.createTask)
routes.get("/get-all-tasks", TaskController.getAllTasks)
routes.put("/update-task/:id", TaskController.updateTask)
routes.delete("/delete-task/:id", TaskController.deleteTasks)
module.exports = routes