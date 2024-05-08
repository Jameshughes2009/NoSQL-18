const{ Thought, User, Reaction} = require('../models');

const ThoughtController = {
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find({});
            res.json(thoughts)
        } catch (err) {
            res.status(500).json(err);
        }
    },
}




module.exports = ThoughtController;