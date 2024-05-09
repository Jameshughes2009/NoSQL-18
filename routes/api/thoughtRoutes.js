const router = require('express').Router();
const {
    getAllThoughts,
    createThought,
    deleteThought,
    updateThought,
    getOneThought,
} = require('../../controllers/thoughtController');

router.route('/').get(getAllThoughts).post(createThought);

router.route('/:thoughtId').get(getOneThought).put(updateThought).delete(deleteThought);


module.exports = router;