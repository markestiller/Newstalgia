const express = require("express");
const router = express.Router();
const controlerChat = require("../controllers/chat");

/* GET home page. */
router.post("/", controlerChat.sendRequest);

module.exports = router;
