var express = require("express");
var router = express.Router();
var landing = require("../controllers/index");

/* GET home page. */
router.get("/", landing.index);
router.post("/", landing.submit_lead);
router.get("/leads", landing.show_leads);
router.get("/lead/:leadId", landing.show_lead);
router.get("/lead/:leadId/edit", landing.show_edit_lead);
router.post("/lead/:leadId/edit", landing.edit_lead);
router.post("/lead/:leadId/delete", landing.delete_lead);

module.exports = router;
