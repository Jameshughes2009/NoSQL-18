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
    email:{
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(v);
            }
        }
    },
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

userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});
const User = model('User', userSchema)

module.exports = User