const express = require("express");
const router = express.Router();
const { getUrl, postUrl } = require("../controllers/url.controller");

router.route("/").get(getUrl).post(postUrl);

module.exports = router