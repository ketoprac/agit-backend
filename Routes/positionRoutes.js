const express = require("express");
const router = express.Router();
const { findAll, findOne } = require("../Controllers/positionController");

router.get("/", findAll);
router.get("/:id", findOne);

module.exports = router;
