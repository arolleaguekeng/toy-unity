const express = require('express');
const { getOperation, addOperation, editOperation, getUserOperations } = require('../controllers/operationController');
const router = express.Router();



router.get('/operation/get',  getOperation);
router.post('/operation/add', addOperation); 
router.put('/operation/edit/:id', editOperation); 
router.get('/operation/get-all', getUserOperations); 



module.exports = router 
