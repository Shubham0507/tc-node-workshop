const TaskService = require("../services/TaskService");
const ValidationService = require("../services/ValidationService");

class TaskController {

    createTask = async (req, res, next) => {
        try {
            const { error } = ValidationService.validateCreateTask(req.body)
            if (error) {
                res.status(400).json({ success: 0, message: error.details[0].message })
            }
            const response = await TaskService.createTask(req.body);
            res.status(200).json({ success: 1, data: response, message: "Task created successfully" })
        } catch (error) {
            console.log("Error: Controller >> CreateTasks", error.message)
            res.status(500).json({ success: 0, message: error.message })
            // next(error)
        }
    }

    getAllTasks = async (req, res, next) => {
        try {
            const response = await TaskService.getAllTasks();
            res.status(200).json({ success: 1, data: response, message: "Tasks fetched successfully" })

        } catch (error) {
            console.log("Error: Controller >> getAllTasks", error.message)
            res.status(500).json({ success: 0, message: error.message })
        }
    }

    updateTask = async (req, res, next) => {
        try {
            const taskId = req.params.id;

            // Check if ID is missing or invalid
            if (!taskId) {
                return res.status(400).json({ success: 0, data: null, message: "Task ID is required in the URL." });
            }

            const { error } = ValidationService.updateTaskSchema(req.body)
            if (error) {
                return res.status(400).json({ success: 0, data: null, message: error.details[0].message });

            }

            const filter = { _id: req.params.id };

            const response = await TaskService.updateTask(filter, req.body);
            res.status(200).json({ success: 1, data: response, message: "Task updated successfully" })

        } catch (error) {
            console.log("Error: Controller >> updateTask", error.message)
            res.status(500).json({ success: 0, data: null, message: error.message })
        }
    }


    deleteTasks = async (req, res, next) => {
        try {
            const taskId = req.params.id;
            // Check if ID is missing or invalid
            if (!taskId) {
                return res.status(400).json({ success: 0, data: null, message: "Task ID is required in the URL." });
            }
            const response = await TaskService.deleteTask(taskId);
            res.status(200).json({ success: 1, data: response, message: "Task deleted successfully" })
        } catch (error) {
            console.log("Error: Controller >> deleteTask >>, error.message");
            res.status(500).json({ success: 0, data: null, message: error.message })
        }
    }



}

module.exports = new TaskController();