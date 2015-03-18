'use strict';
/**
 * Note model
 * @type {Object}
 */
module.exports = {
    schema: true,
    attributes: {
        title: {
            type: 'string',
            required: true,
            unique: true
        },
        author: {
            type: 'string',
            required: true
        },
        note: {
            type: 'string',
            required: true
        }
    },

    //any validation rule defined on the
    //attributes must have a custom message to get it
    //in the error.Errors
    validationMessages: {
        title: {
            required: 'You have provide note title',
            string: 'Note title must contain only character [a-z or A-Z]',
            unique: 'A note with the provided title already exists'
        },
        author: {
            required: 'Author is required',
            string: 'Note author must contain only character [a-z or A-Z]'
        },
        note: {
            required: 'Note is required',
            string: 'Note is invalid'
        }
    }
};
