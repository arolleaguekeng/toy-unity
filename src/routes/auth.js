const express = require('express');
const { signup, login } = require('../controllers/auth');
const { validateRequest, isRequestValideted,validationLoginRequest} = require('../validator/auth');
const router = express.Router();



router.get('/login',  validationLoginRequest,isRequestValideted, login);
router.post('/signup', validateRequest,isRequestValideted, signup); 



module.exports = router