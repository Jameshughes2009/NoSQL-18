const {Schema,Types} = require('mongoose');
const { type } = require('os');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        }
    }
)