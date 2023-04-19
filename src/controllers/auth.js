
const jwt = require('jsonwebtoken');
const User = require('../models/User')
const bcrypt = require('bcrypt');

exports.signup = 
async (req, res) => {
  try {
    console.log(req.body);
    const { fullName, username, email, password, phone, role, image, emailVerified, city, state, country } = req.body;
    const hash_password = await bcrypt.hash(password, 10);
    const user = new User({
      fullName,
      username,
      email,
      hash_password,
      phone,
      role,
      image,
      emailVerified,
      city,
      state,
      country
    });
    const savedUser = await user.save();
    res.status(201).json({
      message: 'User created successfully',
      user: savedUser
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.login = (req, res) => {
  User.findOne({ email: req.body.email }).exec(async (error, user) => {
    if (error) return res.status(400).json({ error });
    if (user) {
      const isPassword = await user.authenticate(req.body.password);
      if (isPassword && user.role === "user") {
        const token = jwt.sign({ _id: user._id, role: user.role }, 'MERNSECRET', { expiresIn: '1h' });
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
          user: {
            _id,
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