const Operation = require('../models/OperationModel')
const User = require('../models/User')

const express = require('express');
const app = express();


exports.addOperation =
  async (req, res) => {
    try {
      console.log(req.body);
      try{
        console.log("Check if users exist")
        const userProprietaire = await User.find({ uid: req.body.idProprietaire });
        console.log(userProprietaire)
        const userAcheteur = await User.find({ uid: req.body.idAcheteur });

        if(userProprietaire == []){
          res.status(400).json({ message: 'User do not exist' , error : error});
        }
      }
      catch (error){
        console.log(error);
        res.status(400).json({ message: 'User do not exist' , error : error});
      }
      const {
        idProprietaire,
        idAcheteur,
        jouetProp,
        jouetacht,
        status,
      } = req.body;

      const operation = new Operation({
        idProprietaire,
        idAcheteur,
        jouetProp,
        jouetacht,
        status,
      });

      const savedOperation = await operation.save();

      res.status(201).json({
        message: 'Operation created successfully',
        operation: savedOperation
      });
      print('Operation created successfully');

    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };


exports.getOperation =
  async (req, res) => {
    try {
      console.log(req.body._id)
      const operation = await Operation.findById({ _id: req.body._id });
      console.log(operation)

      res.status(200).json({
        message: "operation details",
        operation: operation,
      });
      print('Operation get by id successfully');
      print(operation)
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };


  exports.editOperation = async (req, res) => {
    try {
        const operation = await Operation.updateOne({_id:req.params.id}, req.body)
        const newOperation = await Operation.findById({ _id: req.params.id });
        res.json({ operation: newOperation})
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.getOperations = async (req, res) => {
  try {
      const operation = await Operation.find()
      res.status(200).json({
        message: "List of Operations", 
        operation: operation,
      });
      print('Operation get all successfully');
  } catch (err) { 
      res.status(500).json({ error: err.message }) 
  }
}
 