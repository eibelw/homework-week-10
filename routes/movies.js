const express = require('express')
const router = express.Router()
const MoviesController = require('../controller/moviesController')

router.get('/', MoviesController.index)
// router.get('/', MoviesController.index)
// router.get('/', MoviesController.index)
// router.get('/', MoviesController.index)
// router.get('/', MoviesController.index)

module.exports = router