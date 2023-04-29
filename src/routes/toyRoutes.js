const express = require('express');
const { getOneToy, addToy, getToyByUserId, editToy, deleteToy, getAllToys,getMostPopularToys } = require('../controllers/toyController');
const router = express.Router();



router.get('/toy/get', getOneToy);
router.get('/toy/get-all', getAllToys);
router.get('/toy/most-popular', getMostPopularToys);
router.get('/toy/get-uid', getToyByUserId);
router.post('/toy/add', addToy);
router.put('/toy/edit/:id', editToy);
router.delete('/toy/del/:id', deleteToy);


module.exports = router
