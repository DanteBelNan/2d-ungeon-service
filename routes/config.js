const express = require("express");
const router = express.Router();
const configController = require("../Controllers/configController.js");

// @route   GET /users
// @desc    Find Users
router.get("/tables", 
	configController.getAllTables
);



module.exports = router;
