const express = require('express')
const router = express.Router()
// Importing "body" from express-validator to validate incoming request data in Express routes
const { body } = require("express-validator");
const userController = require('../controllers/user.controller')
const authMiddleware = require('../middlewares/auth.middleware')


// register endpoint
router.post('/register', [
    body('email').isEmail().withMessage('Invaild Email'),
    body('fullname.firstname').isLength({ min: 4 }).withMessage('First name must be at least 4 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    userController.registerUser
)
// login endpoint
router.post('/login', [
    body('email').isEmail().withMessage('Invaild Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],

    userController.loginUser)

// get user profile endpoint
router.get('/profile', authMiddleware.authUser, userController.getUserProfile)

// logout endpoint
router.get('/logout', authMiddleware.authUser, userController.logoutUser)


module.exports = router

