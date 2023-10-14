const express = require("express");
const router = express.Router();
const UsersController = require("../controller/usersController");

router.get("/", UsersController.index);
router.get("/:id", UsersController.show);
router.post("/", UsersController.create);
router.put('/', UsersController.update)
router.delete('/:id', UsersController.delete)

module.exports = router;
