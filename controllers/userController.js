const {User} = require('../models');

const userController = {
    getAllUsers(req, res){
        User.find({})
            .then(userData => res.json(userData))
            .catch(err => res.status(500).json(err));
    },


    getUserByID(req, res) {
        User.findById(req.params.userId)
            .then(userData => res.json(userData))
            .catch(err => res.status(500)).json(err)
    },

    createUser(req, res) {
        User.create(req.body)
            .then(userData => res.json(userData))
            .catch(err => res.status(500).json(err));
    },

    deleteUser(req, res) {
        User.findOneAndDelete(req.params.id)
            .then(userData => {
                if (!userData) {
                    return res.status(404).json({message: "No Person Bfound"});
                }
                res.json({message: "Deleted"})
            })
            .catch(err => res.status(500).json(err));
    },
};

module.exports = userController;