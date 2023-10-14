const MoviesRepository = require("../repositories/moviesRepo");

class MoviesService {
  static getallMovies = async (next) => {
    try {
      const data = MoviesRepository.all(next);
      return data;
    } catch {
      next(err);
    }
  };
}

module.exports = MoviesService;
