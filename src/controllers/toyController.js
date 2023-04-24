const Toy = require('../models/ToyModel')

const express = require('express');
const app = express();


exports.addToy =
  async (req, res) => {
    try {
      console.log(req.body);
      const {
        name,
        description,
        color,
        email,
        price,
        status,
        image,
        coordinates,
      } = req.body;
      const toy = new Toy({
        name,
        description,
        color,
        email,
        price,
        status,
        image,
        coordinates,
      });
      const savedToy = await toy.save();
      res.status(201).json({
        message: 'Toy created successfully',
        toy: savedToy
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };


exports.getToy =
  async (req, res) => {
    try {
      console.log(req.body.uid)
      const toy = await Toy.findById({ _id: req.body._id });
      console.log(toy)
      const token = jwt.sign({ _id: toy._id, role: toy.role }, 'MERNSECRET', { expiresIn: '1h' });
      res.cookie("token", token, { expiresIn: "1h" });
      res.status(200).json({
        token,
        toy: toy,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };