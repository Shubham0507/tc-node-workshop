const joi = require('joi');

class ValidationService {
    validateCreateTask = (input) => {
        const schema = joi.object({
            title: joi.string().required()
        })
        return schema.validate(input)
    }



    updateTaskSchema = (input) => {
        const schema = joi.object({
            title: joi.string().messages({
                'string.base': '`title` must be a string'
            }),
            completed: joi.boolean().messages({
                'boolean.base': '`completed` must be a boolean'
            })
        }).or('title', 'completed').messages({ // At least one of the two is required
            'object.missing': 'At least one of `title` or `completed` must be provided.'
        });
        return schema.validate(input)
    }
}

module.exports = new ValidationService()