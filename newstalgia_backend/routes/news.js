const express = require("express");
const router = express.Router();
const controlerNews = require("../controllers/news");

router.get("/home", controlerNews.getRecentNews);
router.get("/sports", controlerNews.getSportsNews);
router.get("/tech", controlerNews.getTechNews);

module.exports = router;
