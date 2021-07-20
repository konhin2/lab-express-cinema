const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */

router.get("/movies/:movieId", (req, res) => {
    const { movieId } = req.params

    Movie.findById(movieId)
        .then((singleMovie) => {
            console.log("Libro encontrado", singleMovie)
            res.render('singleMovie', {
                movie: singleMovie
            })
        })
        .catch((err) => console.log(err))
})

module.exports = router;