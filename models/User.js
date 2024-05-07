const {Schema, model, Types } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
        }
    ],
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ]
    }
)