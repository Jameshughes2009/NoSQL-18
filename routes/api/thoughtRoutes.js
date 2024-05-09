const router = require('express').Router();
const {
    getAllThoughts,
    createThought,
    deleteThought,
    updateThought,
    getThoughtsById,
} = require('../../controllers/thoughtController');

router.route('/').get(getAllThoughts).post(createThought);

router.route('/:thoughtId').get(getThoughtsById).put(updateThought).delete(deleteThought);


module.exports = router;