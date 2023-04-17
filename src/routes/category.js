const express = require ('express');
const { requireLogin,adminMiddleware } = require('../middleware/index');
const { addCategory, getCategory } = require('../controller/category');
const router = express.Router();
const shortid = require('shortid'); 
const path = require('path');
const multer = require('multer');

const  storage  =  multer.diskStorage ( { 
    destination : function  ( req ,  file ,  cb )  { 
      cb (null,path.join(path.dirname(__dirname), 'uploads')) 
    } , 
    filename : function  ( req ,  file ,  cb )  {  
      cb ( null ,  shortid.generate() +  '-'  + file.originalname ) 
    } 
} )
  
const upload = multer({storage})



router.post('/category/create', requireLogin,adminMiddleware,upload.single('categoryImage'),addCategory)
router.get('/category/getcategory', getCategory)

module.exports = router;