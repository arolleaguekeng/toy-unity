const express = require('express');
const { getOperation, addOperation } = require('../controllers/operationController');
const router = express.Router();



router.get('/operation/get',  getOperation);
router.post('/operation/add', addOperation); 



module.exports = router
