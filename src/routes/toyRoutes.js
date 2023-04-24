const express = require('express');
const { getToy, addToy } = require('../controllers/toyController');
const router = express.Router();



router.get('/toy/get',  getToy);
router.post('/toy/add', addToy); 



module.exports = router
