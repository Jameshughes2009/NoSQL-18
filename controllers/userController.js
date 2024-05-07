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
    }
};

module.exports = userController;