const express = require("express");
const router = express.Router();
const MoviesController = require("../controller/moviesController");

router.get("/", MoviesController.index);
router.get("/:id", MoviesController.show);
router.post("/", MoviesController.create);
router.put('/', MoviesController.update)
router.delete('/:id', MoviesController.delete)

module.exports = router;
