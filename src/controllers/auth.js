const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const JWT_SECRET = "MERNSECRET"
const shortid = require("shortid")

exports.signup = (req, res)=>{


    User.findOne({email: req.body.emai})
 .exec(async(error, user) =>{
    if(error) return res.status(400).json( {
        message: 'User already registerd'
    });
    const{
        firstName,
        lastName,
        userVille,
        contactNumber, 
        email,
        password

    } = req.body;
    const hash_password = await bcrypt.hash(password, 10)
    const _user = new User({
        firstName,
        lastName,
        userVille,
        contactNumber, 
        email,
        hash_password,
        username: shortid.generate(),
        role: "user"
    });
    _user.save((error, data) =>{
        if(error){
            return res.status(400).json({
                message: error
            });
        }
        if(data){
            return res.status(201).json({
                message: 'user cree avec succes'
            })
        }
    })
}) 
 
}
exports.login = ( req, res)=>{
    User.findOne({ email: req.body.email }).exec(async (error, user) => {
        if (error) return res.status(400).json({ error });
        if (user) {
          const isPassword = await user.authenticate(req.body.password);
          if (isPassword && user.role === "user") {
            const token = jwt.sign({ _id: user._id, role: user.role },'MERNSECRET',{ expiresIn: '1h' });
            const { _id,
                firstName,
                lastName,
                userVille,
                contactNumber, 
                email,
                role,
                password } = user;
            res.cookie("token", token, { expiresIn: "1h" });
            res.status(200).json({
              token,
              user: { _id, 
                firstName,
                lastName,
                userVille,
                contactNumber, 
                email,
                role,
                password
             },
            });
          } else {
            return res.status(400).json({
              message: "Invalid Password",
            });
          }
        } else {
          return res.status(400).json({ message: "Something went wrong" });
        }
      });
}