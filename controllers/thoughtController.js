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

    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.status(201).json(thought)
        } catch (err) {
            res.status(500).json(err);
        }
    },
}




module.exports = ThoughtController;