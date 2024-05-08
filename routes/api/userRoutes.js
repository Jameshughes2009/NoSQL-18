const router = require('express').Router();
const {
    getAllUsers,
    createUser,
    getUserByID,
    deleteUser,
    updateUser,
} = require('../../controllers/userController')


router.route('/').get(getAllUsers).post(createUser)


router.route('/:userId').get(getUserByID).put(updateUser).delete(deleteUser);

module.exports = router