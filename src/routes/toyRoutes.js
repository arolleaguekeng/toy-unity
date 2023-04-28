const express = require('express');
const { getOneToy, addToy, getToyByUserId , editToy, deleteToy } = require('../controllers/toyController');
const router = express.Router();



router.get('/toy/get',  getOneToy);
router.get('/toy/get-uid',  getToyByUserId);
router.post('/toy/add', addToy); 
router.put('/toy/edit/:id', editToy); 
router.delete('/toy/del/:id', deleteToy); 


module.exports = router
