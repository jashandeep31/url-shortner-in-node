const express = require("express");
const router = express.Router();
const { genrateURL } = require("../controllers/url");
router.post("/", genrateURL);
// router.get('/')
module.exports = router;
