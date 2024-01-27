const express = require("express");
const router = express.Router();
const controlerIndex = require("../controllers/index");

/* GET home page. */
router.get("/", controlerIndex.index);

module.exports = router;
