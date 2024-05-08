const router = require('express').Router();
const {
    getAllThoughts,
    createThought,
    deleteThought,
} = require('../../controllers/thoughtController');

router.route('/:thoughtId').get(getAllThoughts).post(createThought);


module.exports = router;