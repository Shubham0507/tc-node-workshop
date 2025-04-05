const Task = require('../models/TaskModel');
class TaskCore {
    createTask = async (params) => {
        try {
            const response = new Task(params);
            await response.save();
            return response
        } catch (error) {
            throw new Error(error);
        }
    }

    getAllTasks = async () => {
        try {
            const response = await Task.find({}).sort({ createdAt: -1 });
            console.log('response :>> ', response);
            return response
        } catch (error) {
            throw new Error(error);
        }
    }

    updateTask = async (filter, updateData) => {
        try {
            const data = { ...updateData, updatedAt: new Date() }
            const response = await Task.updateOne(filter, data)
            if (response.matchedCount === 0) {
                const notFoundError = new Error(`No task found matching the filter: ${JSON.stringify(filter)}`);
                notFoundError.statusCode = 404;
                throw notFoundError;
            }

            if (response.modifiedCount === 0) {
                const noChangeError = new Error("Task found, but no changes were made.");
                noChangeError.statusCode = 200; // Optional: could be 304 Not Modified
                throw noChangeError;
            }


            return {
                message: "Task updated successfully",
                response,
            };
        } catch (error) {
            throw new Error(error);
        }
    }

    deleteTask = async (taskId) => {
        try {
            const response = await Task.deleteOne({ _id: taskId });
            if (response.deletedCount === 0) {
                const notFoundError = new Error(`No task found with ID: ${taskId}`);
                notFoundError.statusCode = 404;
                throw notFoundError;
            }
            return response
        } catch (error) {
            throw new Error(error);
        }
    }

}

module.exports = new TaskCore()