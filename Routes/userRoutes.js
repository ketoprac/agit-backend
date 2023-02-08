const express = require("express");
const router = express.Router();
const { saveUser: saveUserMiddleware } = require("../Middlewares/userAuth");
const { signup, login } = require("../Controllers/userController");

router.post("/signup", saveUserMiddleware, signup);
router.post("/login", login);

module.exports = router;
