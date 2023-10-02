const express = require("express");
const { signup } = require("./user.controller");

const router = express.Router();

router.post("/signup", signup);

module.exports = router;
