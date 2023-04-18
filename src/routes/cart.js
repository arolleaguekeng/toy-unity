const express = require ('express');
const { requireLogin,userMiddleware } = require('../middleware/index');
const { addToCart } = require('../controllers/cart');
const router = express.Router();



router.post('/user/cart/addtocart', requireLogin,userMiddleware,addToCart)


module.exports = router;