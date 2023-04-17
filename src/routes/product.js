const express = require ('express');
const { requireLogin,adminMiddleware } = require('../middleware/index');
const { createProduct, getProductBySlug} = require('../controller/product');
const multer = require('multer') 
const router = express.Router();
const shortid = require('shortid')
const path = require('path')
const Product = require("../models/product");

const  storage  =  multer.diskStorage ( { 
    destination : function  ( req ,  file ,  cb )  { 
      cb (null,path.join(path.dirname(__dirname), 'uploads')) 
    } , 
    filename : function  ( req ,  file ,  cb )  {  
      cb ( null ,  shortid.generate() +  '-'  + file.originalname ) 
    } 
} )
  
const upload = multer({storage})



router.post('/product/create', requireLogin,adminMiddleware,upload.array("productPicture"),createProduct)
router.get('/product/:slug', getProductBySlug)
//router.get('/product/', getCategory)

module.exports = router;