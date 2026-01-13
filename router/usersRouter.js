// external imports
const express = require("express");
const { getUsers } = require("../controller/usersController");
const decorateHtmlResponce = require("../middlewares/common/decorateHtmlResponce");

const router = express.Router();

//users page
router.get("/", decorateHtmlResponce("Users"), getUsers);

module.exports = router;
