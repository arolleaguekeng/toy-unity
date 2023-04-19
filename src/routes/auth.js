const express = require('express');
const { signup, login } = require('../controllers/auth');
const { validateRequest, isRequestValideted,validationLoginRequest} = require('../validator/auth');
const router = express.Router();



router.post('/login',  validationLoginRequest,isRequestValideted, login);
router.post('/signup', signup);



module.exports = router