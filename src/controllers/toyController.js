const Toy = require('../models/ToyModel')

const express = require('express');
const app = express();


exports.addToy =
  async (req, res) => {
    try {
      console.log(req.body);
      const {
        name,
        uid,
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
        uid,
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


exports.getOneToy =
  async (req, res) => {
    try {
      console.log(req.body._id)
      const toy = await Toy.findById({ _id: req.body._id });
      console.log(toy)
      res.status(200).json({
        message: "toy details",
        toy: toy,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };


exports.getToyByUserId =
  async (req, res) => {
    try {
      console.log(req.body.uid)
      const toys = await Toy.find({ uid: req.body.uid });
      console.log(toy)
      res.status(200).json(toys);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  
exports.getAllToys =
  async (req, res) => {
    try {
      console.log(req.body.uid)
      const toys = await Toy.find();
      console.log(toys)
      res.status(200).json(toys);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  exports.getMostPopularToys =
  async (req, res) => {
    try {
      console.log(req.body.uid)
      const toys = await Toy.find().sort({rate: 'asc'});
      console.log(toys)
      res.status(200).json(toys);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };


exports.editToy = async (req, res) => {
  try {
    const toy = await Toy.updateOne({ _id: req.params.id }, req.body)
    const newToy = await Toy.findById({ _id: req.params.id });
    res.json({ message: "Toy Update Successfull", toy: newToy })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}



exports.deleteToy = async (req, res) => {
  try {
    const toy = await Toy.findOneAndDelete({ _id: req.params.id });
    res.json({ message: "Toy Delete Successfull", toy: toy })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}