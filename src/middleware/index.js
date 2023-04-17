const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET || 'MERNSECRET'


exports.requireLogin = (req,res, next) =>{
    
    if(req.headers.authorization){
        const token = req.headers.authorization.split(' ')[1];
        const user = jwt.decode(token, JWT_SECRET)
        req.user = user;
        
    }else{
        return res.status(400).json({message:'Authorisation requise'})
    }
    next(); 
    
}
exports.userMiddleware = (req, res, next) =>{
    if(req.user.role !=='user'){
        return res.status(400).json({message: 'Access reffuser'})
    }
    next()
}

exports.adminMiddleware = (req, res, next) =>{
    if(req.user.role !=='admin'){
        return res.status(400).json({message: 'Access reffuser'})
    }
    next()
}