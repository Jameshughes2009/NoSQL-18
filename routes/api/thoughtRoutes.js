const router = require('express').Router();
const {
    getAllThoughts,
    createThought,
    deleteThought,
    updateThought,
    getOneThought,
} = require('../../controllers/thoughtController');

router.route('/').get(getAllThoughts).post(createThought);

router.route


module.exports = router;