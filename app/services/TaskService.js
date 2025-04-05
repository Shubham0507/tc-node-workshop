const TaskCore = require("../cores/TaskCore");

class TaskService {
    createTask = (params) => {
        try {
            const response = TaskCore.createTask(params)
            return response
        } catch (error) {
            throw new Error(error);
        }
    }

    getAllTasks = async (params) => {
        try {
            const response = await TaskCore.getAllTasks(params)
            return response
        } catch (error) {
            console.log(error)
            throw new Error(error);
        }
    }

    updateTask = async (filter, updateData) => {
        try {
            const response = await TaskCore.updateTask(filter, updateData)
            return response
        } catch (error) {
            throw new Error(error);
        }
    }


    deleteTask = async (taskId) => {
        try {
            const response = await TaskCore.deleteTask(taskId)
            return response
        } catch (error) {
            throw new Error(error);
        }
    }
    
}

module.exports = new TaskService()