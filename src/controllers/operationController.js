const Operation = require('../models/OperationModel')

const express = require('express');
const app = express();


exports.addOperation =
  async (req, res) => {
    try {
      console.log(req.body);
      const {
        proprietaire,
        acheteur,
        jouetProp,
        jouetacht,
        status,
      } = req.body;
      const operation = new Operation({
        proprietaire,
        acheteur,
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
      console.log(req.body.uid)
      const operation = await Operation.findById({ _id: req.body._id });
      console.log(operation)
      const token = jwt.sign({ _id: operation._id, role: operation.role }, 'MERNSECRET', { expiresIn: '1h' });
      res.cookie("token", token, { expiresIn: "1h" });
      res.status(200).json({
        token,
        operation: operation,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  