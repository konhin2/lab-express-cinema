const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */

router.get('/movies', (req, res, next) => {
    Movie.find({})
        .then((movies) => {
            console.log(movies)
            res.render('movies', {movies})
        })
        .catch(err => next(err))
})

module.exports = router;