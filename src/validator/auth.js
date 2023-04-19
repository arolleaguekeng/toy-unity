const { check, validationResult } = require('express-validator')

exports.validateRequest = [ 
    // check('fullName')
    // .notEmpty()
    // .withMessage('fullName is required'),
    // check('username')
    // .notEmpty()
    // .withMessage('username is required'),
    // check('email')
    // .notEmpty()
    // .withMessage('email is required'),
    // check('phone')
    // .matches(/\+?237?\s*\(?-*\.*(\d{3})\)?\.*-*\s*(\d{3})\.*-*\s*(\d{3})$/)
    // .withMessage('phone is required'),
    // check('email')
    // .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "please fill a valid email adress")
    // .withMessage('email is required'),
    // check('password')
    // .isLength({min: 6})
    // .withMessage('password is required'), 
]

exports.validationLoginRequest = [
    check('email')
    .isEmail()
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "please fill a valid email adress")
    .withMessage('email is required'),
    check('password')
    .isLength({min: 6})
    .withMessage('password is required'), 
 ];

 exports.isRequestValideted = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.array().length > 0){
        return res.status(400).json({error : errors.array()[0].msg})
    }
    next();
 }