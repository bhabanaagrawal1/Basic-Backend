const express = require('express')
const authController = require("../controllers/auth.controller")

const router = express.Router();

router.post('/registeruser',authController.registerUser)

router.post('/loginuser',authController.loginUser)

router.post('/logoutUser',authController.logoutUser)

module.exports = router;