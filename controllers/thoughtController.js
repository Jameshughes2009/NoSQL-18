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

    async deleteThought(req, res){
        try {
            const thought = await Thought.findByIdAndDelete({_id:req.params.thoughtId});
            res.status(200).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getOneThought(req, res){
        try {
            const thought = await Thought.findOne({_id:req.params.thoughtId});
            if (!thought) {
                res.status(404).json({ message: "Not Found"});
            } else {
                res.json(thought);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // update one testing
    async updateThought(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {
                new: true,
            });
            if(!thought){
                res.status(404).json({message: "notfound"});
            } else {
                res.json(thought);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },
}




module.exports = ThoughtController;