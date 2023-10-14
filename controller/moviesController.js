const Movies = require("../model/movies");

class MoviesController {
  static index = async (req, res, next) => {
    try {
      const data = await Movies.getMovies(next);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = MoviesController;
