const express = require("express");
const {handleGenerateNewShortUrl, handleGenerateNewShortURl} = require("../controllers/url")
const router = express.Router();

router.post("/", handleGenerateNewShortURl);

module.exports = router;