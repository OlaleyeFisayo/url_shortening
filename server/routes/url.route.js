const express = require("express");
const router = express.Router();
const { getUrl, postUrl, getAllUrl } = require("../controllers/url.controller");

router.route("/").get(getAllUrl).post(postUrl);
router.route("/:url").get(getUrl);

module.exports = router;
