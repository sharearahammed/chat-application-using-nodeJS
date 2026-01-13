// external imports
const express = require("express");
const { getLogin } = require("../controller/loginController");
const decorateHtmlResponce = require("../middlewares/common/decorateHtmlResponce");

const router = express.Router();

//login page
router.get("/", decorateHtmlResponce("Login"), getLogin);

module.exports = router;
