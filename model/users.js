const { query } = require("express");
const pool = require("../config/config");

class Users {
  static getUsers = async (next) => {
    const findQuery = `SELECT * FROM users`;

    try {
      const data = await pool.query(findQuery);

      return data.rows;
    } catch (err) {
      next(err);
    }
  };

  static getUsersById = async (id, next) => {
    const queryById = `SELECT * FROM users WHERE id = $1`;

    try {
      const data = await pool.query(queryById, [id]);

      if (data.rows.length === 0) {
        return null;
      }

      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };

  static createUser = async (userData, next) => {
    const { id, email, gender, password, role } = userData;

    if (!id.toString().match(/^[0-9]{3}$/) || !email || !gender || !password || !role) {
      return next({
        name: "paramsuserError",
      });
    }

    const query = `INSERT INTO users (id, email, gender, password, role) VALUES ($1, $2, $3, $4, $5);`;
    try {
      const data = await pool.query(query, [id, email, gender, password, role]);
      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };

  static updateUser = async (userData, next) => {
    const { id, email, gender, password, role } = userData;

    if (!id.toString().match(/^[0-9]{3}$/) || !email || !gender || !password || !role) {
      return next({
        name: "paramsuserError",
      });
    }

    const query = `
    UPDATE users
    SET email = $2,
    gender = $3,
    password = $4,
    role = $5
    WHERE id = $1 ;`;
    try {
      const data = await pool.query(query, [id, email, gender, password, role]);
      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };

  static deleteUser = async (id, next) => {
    const queryDelete = `DELETE FROM users WHERE id = $1`;

    try {
      const data = await pool.query(queryDelete, [id]);
      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };
}

module.exports = Users;
