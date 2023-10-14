const Users = require("../model/users");

class UsersController {
  static index = async (req, res, next) => {
    try {
      const data = await Users.getUsers(next);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static show = async (req, res, next) => {
    const id = req.params.id;
    try {
      const data = await Users.getUsersById(id, next);

      if (!data) {
        next({ name: "User not found" });
      } else {
        res.status(200).json(data);
      }
    } catch (err) {
      next(err);
    }
  };

  static create = async (req, res, next) => {
    const usersData = req.body;
    console.log(usersData);
    try {
      const data = await Users.createUser(usersData, next);
      res.status(201).json(data);
      console.log("Created user:", usersData);
    } catch (err) {
      next(err);
    }
  };

  static update = async (req, res, next) => {
    const usersData = req.body;
    try {
      const data = await Users.updateUser(usersData, next);
      res.status(200).json(data);
      console.log("User updated");
    } catch (err) {
      next(err);
    }
  };

  static delete = async (req, res, next) => {
    const id = req.params.id;
    try {
      const data = await Users.deleteUser(id, next);
      res.status(200).json({ message: "User deleted" });
      console.log("User deleted");
    } catch (err) {
      next(err);
    }
  };
}

module.exports = UsersController;
