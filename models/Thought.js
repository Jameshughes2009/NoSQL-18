const {Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 200
        },
        createdAt:{
            type: Date,
            default: Date.now
        },
        username: {
            type: String,
            required: true,
        },
        reactions:[reactionSchema],
    }
)