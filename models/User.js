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
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)

// userSchema.virtual('friendCount').get(function(){
//     return this.len
// })
const User = model('User', userSchema)

module.exports = User