const express = require("express");
const router = express.Router();
const usersController = require("../Controllers/usersController.js");

// @route   GET /users
// @desc    Find Users
router.get("/", 
	usersController.getAllUsers
);

// @route   GET /users/me
// @desc    Retreives a User by access token
router.get("/me",
	usersController.getUserByToken
);

// @route   POST /users
// @desc    Adds a new User
router.post("/", 
	usersController.addUser
);

// @route   GET /users/:id
// @desc    Retreives a specific User with its attributes
router.get("/:id", 
	usersController.getUser
);

// @route   PATCH /users/:id
// @desc    Updates a specific User
router.patch("/:id", 
	//usersController.updateUser
);

// @route   DELETE /sites/:id
// @desc    Deletes a specific User
router.delete("/:id", 
	//usersController.deleteUser
);

module.exports = router;
