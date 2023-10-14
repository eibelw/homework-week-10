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

  static show = async (req, res, next) => {
    const id = req.params.id;
    try {
      const data = await Movies.getMoviesbyId(id, next);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static create = async (req, res, next) => {
    const moviesData = req.body;
    console.log(moviesData);
    try {
      const data = await Movies.createMovies(moviesData, next);
      res.status(201).json({message: 'Movie created'} ,data);
      console.log("Created movie:", moviesData);
    } catch (err) {
      next(err);
    }
  };

  static update = async (req, res, next) => {
    const moviesData = req.body;
    try {
      const data = await Movies.updateMovies(moviesData, next);
      res.status(200).json({message: 'Movie updated'}, data);
      console.log("Movie updated")
    } catch (err) {
      next(err);
    }
  };

    static delete = async (req, res, next) => {
      const id = req.params.id
        try {
            const data = await Movies.deleteMovies(id, next)
            res.status(200).json({message: 'Movie deleted'})
            console.log('Movies deleted')
      } catch (err) {
        next(err)
      }
    }
}

module.exports = MoviesController;
