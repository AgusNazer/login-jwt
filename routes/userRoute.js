const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const authController = require('../controllers/authController')


router.get('/users', userController.getAllusers )
// router.post('/login', authController.login)
router.post('/register', userController.registerUser )
router.post('/registerJWT', authController.registerJWT )


module.exports = router;