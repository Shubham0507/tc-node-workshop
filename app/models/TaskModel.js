const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false }
}, {
    timestamps: true,
    toJSON: {
        transform: function (doc, ret) {
            delete ret.__v;
        }
    },
    toObject: {
        transform: function (doc, ret) {
            delete ret.__v;
        }
    }
});

module.exports = mongoose.model("task", TaskSchema, "tasks");