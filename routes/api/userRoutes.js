const router = require('express').Router();
const {
    getAllUsers,
    createUser,
    getUserByID,
} = require('../../controllers/userController')


router.route('/').get(getAllUsers).post(createUser)

module.exports = router