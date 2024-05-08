const router = require('express').Router();
const {
    getAllThoughts,
    createThought,
    deleteThought,
} = require('../../controllers/thoughtController');



module.exports = router;