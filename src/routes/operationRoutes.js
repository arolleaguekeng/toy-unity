const express = require('express');
const { getOneOperation, addOperation, editOperation, getUserOperations, deleteOperation } = require('../controllers/operationController');
const router = express.Router();



router.get('/operation/get',  getOneOperation);
router.post('/operation/add', addOperation); 
router.put('/operation/edit/:id', editOperation); 
router.get('/operation/get-all', getUserOperations); 
router.get('/operation/del/:id', deleteOperation); 



module.exports = router 
