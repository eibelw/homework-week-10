const { query } = require("express");
const pool = require("../config/config");
const { title } = require("process");

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

  static getMoviesbyId = async (id, next) => {
    const querybyId = `SELECT * FROM movies WHERE id = $1`;

    try {
      const data = await pool.query(querybyId, [id]);

      if (data.rows.length === 0) {
        return null;
      }

      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };

  static createMovies = async (moviesData, next) => {
    const { id, title, genres, year } = moviesData;

    if (!id.toString().match(/^[0-9]{3}$/) || !title || !genres || !year.toString().match(/^[0-9]{4}$/)) {
      return next({
        name: "paramsmovieError",
      });
    }

    const query = `INSERT INTO movies (id, title, genres, year) VALUES ($1, $2, $3, $4);`;
    try {
      const data = await pool.query(query, [id, title, genres, year]);
      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };

  static updateMovies = async (moviesData, next) => {
    const { id, title, genres, year } = moviesData;

    if (!id.toString().match(/^[0-9]{3}$/) || !title || !genres || !year.toString().match(/^[0-9]{4}$/)) {
      return next({
        name: "paramsmovieError",
      });
    }

    const query = `
    UPDATE movies
    SET title = $2,
    genres = $3,
    year = $4
    WHERE id = $1 ;`;
    try {
      const data = await pool.query(query, [id, title, genres, year]);
      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };

  static deleteMovies = async (id, next) => {
    const queryDelete = `DELETE FROM movies WHERE id = $1`;

    try {
      const data = await pool.query(queryDelete, [id]);
      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };
}

module.exports = Movies;
