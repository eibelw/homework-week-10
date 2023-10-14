const pool = require("../config/config");

class Movies {
  static getMovies = async (nest) => {
    const findQuery = `SELECT * FROM movies`;

    try {
      const data = await pool.query(findQuery);

      return data.rows;
    } catch (err) {
      next(err);
    }
  };
}

module.exports = Movies;
