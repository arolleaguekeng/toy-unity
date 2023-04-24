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
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
