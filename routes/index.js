var express = require("express");
var router = express.Router();
var landing = require("../controllers/index");

/* GET home page. */
router.get("/", landing.index);
router.post("/", landing.submit_lead);
router.get("/leads", landing.show_leads);

module.exports = router;
