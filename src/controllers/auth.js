
const jwt = require('jsonwebtoken');
const JWT_SECRET = "MERNSECRET"
const shortid = require("shortid")

const User = require('../models/User')

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const bcrypt = require('bcrypt');

exports.signup =
  async (req, res) => {
    try {
      console.log(req.body);
      const { uid, fullName, username, email, password, phone, role, image, emailVerified, city, state, country } = req.body;
      if(req.body.password != undefined){
        const hash_password = await bcrypt.hash(password, 10);
      }
      else{
        hash_password = password;
      }
      const user = new User({
        uid,
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


exports.login =
  async (req, res) => {
    try {
      console.log(req.body.uid)
      const user = await User.find({ uid: req.body.uid });
      console.log(user)
      const token = jwt.sign({ _id: user._id, role: user.role }, 'MERNSECRET', { expiresIn: '1h' });
      res.cookie("token", token, { expiresIn: "1h" });
      res.status(200).json({
        token,
        user: user,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };