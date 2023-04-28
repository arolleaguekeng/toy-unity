const express = require('express');
const { getToy, addToy, getToyByUserId } = require('../controllers/toyController');
const router = express.Router();



router.get('/toy/get',  getToy);
router.get('/toy/get-uid',  getToyByUserId);
router.post('/toy/add', addToy); 



module.exports = router
