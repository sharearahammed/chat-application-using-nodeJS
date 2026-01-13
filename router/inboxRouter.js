// external imports
const express = require("express");
const { getInbox } = require("../controller/inboxController");
const decorateHtmlResponce = require("../middlewares/common/decorateHtmlResponce");

const router = express.Router();

//inbox page
router.get("/", decorateHtmlResponce("Inbox"), getInbox);

module.exports = router;
