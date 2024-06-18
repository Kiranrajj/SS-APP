var express = require("express");
var router = express.Router();
const UserCtrl = require("../controller/user.ctrl");

router.post("/", (req, res) => {
  UserCtrl.createUser(req, res);
}); // Create User

router.get("/", (req, res) => {
  UserCtrl.getAllUsers(req, res);
});

router.put("/:id", (req, res) => {
  UserCtrl.updateUser(req, res);
});

router.get("/:id", (req, res) => {
  UserCtrl.getUserById(req, res);
});

router.delete("/:id", (req, res) => {
  UserCtrl.deleteUser(req, res);
});

router.put("/restore/:id", (req, res) => {
  UserCtrl.restoreUser(req, res);
});

module.exports = router;
