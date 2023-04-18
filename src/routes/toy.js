const express = require ('express');
const { requireLogin,adminMiddleware } = require('../middleware/index');
const { createToy, getToyBySlug} = require('../controllers/toy');
const multer = require('multer') 
const router = express.Router();
const shortid = require('shortid')
const path = require('path')
const Toy = require("../models/Toy");

const  storage  =  multer.diskStorage ( { 
    destination : function  ( req ,  file ,  cb )  { 
      cb (null,path.join(path.dirname(__dirname), 'uploads')) 
    } , 
    filename : function  ( req ,  file ,  cb )  {  
      cb ( null ,  shortid.generate() +  '-'  + file.originalname ) 
    } 
} )
  
const upload = multer({storage})



router.post('/toy/create', requireLogin,adminMiddleware,upload.array("toyPicture"),createToy)
router.get('/toy/:slug', getToyBySlug)
//router.get('/toy/', getCategory)

module.exports = router;